pub mod portfolio_service;

use std::sync::Arc;

use crate::db::MongoRepo;

#[derive(Clone)]
pub struct AppState {
    repo: Arc<MongoRepo>,
}

impl AppState {
    pub fn new(repo: MongoRepo) -> Self {
        Self {
            repo: Arc::new(repo),
        }
    }

    pub fn repo(&self) -> Arc<MongoRepo> {
        Arc::clone(&self.repo)
    }
}
