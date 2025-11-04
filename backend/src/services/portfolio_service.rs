use mongodb::{bson::doc, options::FindOneOptions, Collection};
use tracing::instrument;

use crate::{
    models::portfolio::PortfolioDocument,
    services::AppState,
};

#[derive(Debug, thiserror::Error)]
pub enum PortfolioError {
    #[error("database error: {0}")]
    Database(#[from] mongodb::error::Error),
    #[error("portfolio not found")]
    NotFound,
}

fn collection(state: &AppState) -> Collection<PortfolioDocument> {
    state
        .repo()
        .database()
        .collection(PortfolioDocument::collection_name())
}

#[instrument(skip(state))]
pub async fn get_portfolio(state: &AppState) -> Result<PortfolioDocument, PortfolioError> {
    let options = FindOneOptions::builder().build();
    let document = collection(state)
        .find_one(doc! { "primary": true }, options)
        .await?;

    document.ok_or(PortfolioError::NotFound)
}

#[instrument(skip(state))]
pub async fn seed_default_portfolio(state: &AppState) -> Result<(), PortfolioError> {
    let doc = PortfolioDocument::example();
    collection(state).insert_one(doc, None).await?;
    Ok(())
}
