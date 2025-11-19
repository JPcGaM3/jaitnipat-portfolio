use mongodb::{options::ClientOptions, Client, Database};
use thiserror::Error;

#[derive(Debug, Error)]
pub enum DatabaseError {
    #[error("failed to parse MongoDB connection string: {0}")]
    InvalidConfig(#[from] mongodb::error::Error),
}

#[derive(Clone)]
pub struct MongoRepo {
    db: Database,
}

impl MongoRepo {
    pub async fn connect(uri: &str, database: &str) -> Result<Self, DatabaseError> {
        let mut client_options = ClientOptions::parse(uri).await?;
        client_options.app_name = Some("portfolio-backend".to_string());
        let client = Client::with_options(client_options)?;
        Ok(Self {
            db: client.database(database),
        })
    }

    pub fn database(&self) -> Database {
        self.db.clone()
    }
}
