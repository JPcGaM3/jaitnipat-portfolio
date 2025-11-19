use chrono::NaiveDate;
use mongodb::bson::{oid::ObjectId, DateTime};
use serde::{Deserialize, Serialize};
use serde_with::{serde_as, DisplayFromStr};
use utoipa::ToSchema;
use uuid::Uuid;

#[serde_as]
#[derive(Debug, Serialize, Deserialize, Clone, ToSchema)]
pub struct PortfolioDocument {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub person: Person,
    pub summary: String,
    pub skills: Vec<Skill>,
    pub projects: Vec<Project>,
    pub experience: Vec<Experience>,
    pub achievements: Vec<Achievement>,
    #[serde(default)]
    pub primary: bool,
    pub updated_at: DateTime,
}

#[derive(Debug, Serialize, Deserialize, Clone, ToSchema)]
pub struct Person {
    pub name: String,
    pub title: String,
    pub location: String,
    pub email: String,
    pub website: String,
}

#[serde_as]
#[derive(Debug, Serialize, Deserialize, Clone, ToSchema)]
pub struct Skill {
    pub category: String,
    pub items: Vec<String>,
}

#[serde_as]
#[derive(Debug, Serialize, Deserialize, Clone, ToSchema)]
pub struct Project {
    #[serde_as(as = "DisplayFromStr")]
    pub id: Uuid,
    pub name: String,
    pub description: String,
    pub vertical: String,
    pub year: i32,
    pub tags: Vec<String>,
    pub case_study_url: Option<String>,
}

#[serde_as]
#[derive(Debug, Serialize, Deserialize, Clone, ToSchema)]
pub struct Experience {
    pub role: String,
    pub organization: String,
    pub location: String,
    #[serde_as(as = "DisplayFromStr")]
    pub start_date: NaiveDate,
    #[serde_as(as = "Option<DisplayFromStr>")]
    pub end_date: Option<NaiveDate>,
    pub accomplishments: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone, ToSchema)]
pub struct Achievement {
    pub title: String,
    pub issuer: String,
    pub issued_on: NaiveDate,
}

impl PortfolioDocument {
    pub fn collection_name() -> &'static str {
        "portfolio"
    }

    pub fn example() -> Self {
        Self {
            id: None,
            person: Person {
                name: "Casey Parker".into(),
                title: "Product Designer & Frontend Engineer".into(),
                location: "Remote".into(),
                email: "hello@example.com".into(),
                website: "https://example.com".into(),
            },
            summary: "Crafting inclusive experiences across the product lifecycle.".into(),
            skills: vec![Skill {
                category: "Design Strategy".into(),
                items: vec!["Research synthesis".into(), "Opportunity mapping".into()],
            }],
            projects: vec![Project {
                id: Uuid::new_v4(),
                name: "Atlas Analytics".into(),
                description: "Redesigned analytics platform driving adoption.".into(),
                vertical: "saas".into(),
                year: 2024,
                tags: vec!["Design systems".into(), "Onboarding".into()],
                case_study_url: None,
            }],
            experience: vec![Experience {
                role: "Principal Product Designer".into(),
                organization: "Alloy".into(),
                location: "Remote".into(),
                start_date: NaiveDate::from_ymd_opt(2022, 3, 1).unwrap(),
                end_date: None,
                accomplishments: vec!["Led design system adoption".into()],
            }],
            achievements: vec![Achievement {
                title: "Webby Awards".into(),
                issuer: "Webby".into(),
                issued_on: NaiveDate::from_ymd_opt(2024, 5, 1).unwrap(),
            }],
            primary: true,
            updated_at: DateTime::now(),
        }
    }
}
