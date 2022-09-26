extern crate dotenv;

pub mod models;
// pub mod schema;
use crate::schema::*;
use diesel::prelude::*;
use dotenv::dotenv;
use std::env;

use models::{Image, NewImage};

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
    // use schema::images;

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

pub fn get_images(conn: &SqliteConnection) {
    // let images = images::dsl::images
    //     .load::<Image>(conn)
    //     .expect("Loading images");
    // let other_images = images.select("")
    // images
    println!("let's GOOOOO");
}

// pub fn todos_list(conn: &SqliteConnection) -> String {
//     let all_todos = todos::dsl::todos
//         .load::<Todo>(conn)
//         .expect("Expect loading posts");
//     let serialized = serde_json::to_string(&all_todos).unwrap();
//     serialized
// }
