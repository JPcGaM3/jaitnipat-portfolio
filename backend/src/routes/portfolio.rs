use axum::{extract::Extension, http::StatusCode, response::IntoResponse, routing::get, Json, Router};
use serde::Serialize;
use utoipa::{OpenApi, ToSchema};
use utoipa_swagger_ui::SwaggerUi;

use crate::{
    models::portfolio::PortfolioDocument,
    services::{self, AppState},
};

#[derive(OpenApi)]
#[openapi(
    paths(get_portfolio_handler),
    components(schemas(PortfolioDocument)),
    tags((name = "portfolio", description = "Portfolio API"))
)]
pub struct ApiDoc;

#[utoipa::path(
    get,
    path = "/api/portfolio",
    responses(
        (status = 200, description = "Portfolio content", body = PortfolioDocument),
        (status = 404, description = "Portfolio not found")
    )
)]
async fn get_portfolio_handler(Extension(state): Extension<AppState>) -> impl IntoResponse {
    match services::portfolio_service::get_portfolio(&state).await {
        Ok(portfolio) => (StatusCode::OK, Json(portfolio)).into_response(),
        Err(services::portfolio_service::PortfolioError::NotFound) => {
            (StatusCode::NOT_FOUND, Json(ErrorResponse::new("Portfolio not found"))).into_response()
        }
        Err(err) => {
            tracing::error!(?err, "failed to get portfolio");
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse::new("Failed to load portfolio")),
            )
                .into_response()
        }
    }
}

#[derive(Debug, Serialize, ToSchema)]
struct ErrorResponse {
    message: String,
}

impl ErrorResponse {
    fn new(message: impl Into<String>) -> Self {
        Self {
            message: message.into(),
        }
    }
}

pub fn portfolio_router() -> Router {
    Router::new().route("/portfolio", get(get_portfolio_handler))
}

pub fn docs_router() -> Router {
    SwaggerUi::new("/docs").url("/api-docs/openapi.json", ApiDoc::openapi())
}
