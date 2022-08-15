// #[macro_use]
// extern crate diesel;
// extern crate dotenv;

// use diesel::pg::PgConnection;
// use diesel::prelude::*;
// use dotenv::dotenv;
// use std::env;

// pub mod models;
// pub mod schema;

// pub fn establish_connection() -> PgConnection {
//     dotenv().ok();

//     let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
//     PgConnection::establish(&database_url).expect(&format!("Error connecting to {}", database_url))
// }
#[macro_use]
extern crate diesel;

extern crate dotenv;

pub mod models;
pub mod schema;
// use crate::schema::*;
use diesel::prelude::*;
use dotenv::dotenv;
use std::env;

use models::NewImage;

pub fn establish_connection() -> SqliteConnection {
    // creates a new connection to the DB and returns reference
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    SqliteConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn create_image(
    conn: &SqliteConnection,
    name: &str,
    url: &str,
    size: &str,
    alt: &str,
) -> usize {
    use schema::images;

    let new_image = NewImage {
        name,
        url,
        size,
        alt,
    };

    diesel::insert_into(images::table)
        .values(&new_image)
        .execute(conn)
        .expect("Error saving new image")
}
