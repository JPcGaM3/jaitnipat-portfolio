use std::net::TcpListener;

use axum::{extract::Extension, Router};
use backend::{config::AppConfig, routes, services::AppState};
use reqwest::StatusCode;
use serial_test::serial;

struct TestApp {
    address: String,
}

async fn spawn_app() -> anyhow::Result<TestApp> {
    dotenvy::dotenv().ok();
    backend::config::init_tracing();

    let listener = TcpListener::bind("127.0.0.1:0").unwrap();
    let address = listener.local_addr().unwrap();

    let config = AppConfig {
        host: address.ip().to_string(),
        port: address.port(),
        database_uri: std::env::var("MONGODB_URI").unwrap_or_else(|_| "mongodb://localhost:27017".into()),
        database_name: std::env::var("MONGODB_DATABASE").unwrap_or_else(|_| "portfolio_test".into()),
    };

    let repo = backend::db::MongoRepo::connect(&config.database_uri, &config.database_name)
        .await?;

    let app_state = AppState::new(repo);

    let app = Router::new()
        .merge(routes::health::router())
        .nest("/api", routes::portfolio::portfolio_router())
        .layer(Extension(app_state));

    tokio::spawn(async move {
        axum::serve(listener, app).await.unwrap();
    });

    Ok(TestApp {
        address: format!("http://{}:{}", config.host, config.port),
    })
}

#[tokio::test]
#[serial]
async fn health_endpoint_returns_ok() {
    let app = match spawn_app().await {
        Ok(app) => app,
        Err(_) => {
            eprintln!("Skipping health endpoint test: MongoDB unavailable");
            return;
        }
    };
    let client = reqwest::Client::new();

    let response = client
        .get(format!("{}/health", app.address))
        .send()
        .await
        .expect("failed to execute request");

    assert_eq!(response.status(), StatusCode::OK);
}
