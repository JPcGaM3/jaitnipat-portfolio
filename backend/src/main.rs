use std::net::SocketAddr;

use axum::Router;
use tower::ServiceBuilder;
use tower_http::{cors::CorsLayer, trace::TraceLayer};
use tracing::info;

use backend::{
    config::AppConfig,
    db::MongoRepo,
    routes::{self, portfolio::portfolio_router},
    services,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenvy::dotenv().ok();
    config::init_tracing();

    let config = AppConfig::from_env()?;
    let repo = MongoRepo::connect(&config.database_uri, &config.database_name).await?;
    let app_state = services::AppState::new(repo);

    let cors = CorsLayer::very_permissive();

    let app = Router::new()
        .merge(routes::health::router())
        .merge(routes::portfolio::docs_router())
        .nest("/api", portfolio_router())
        .layer(
            ServiceBuilder::new()
                .layer(cors)
                .layer(TraceLayer::new_for_http())
                .layer(axum::Extension(app_state)),
        );

    let addr: SocketAddr = format!("{}:{}", config.host, config.port).parse()?;
    info!("listening", %addr);

    axum::serve(tokio::net::TcpListener::bind(addr).await?, app).await?;

    Ok(())
}
