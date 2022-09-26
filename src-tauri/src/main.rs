#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
// use diesel_migrations::{embed_migrations, EmbedMigrations};

use std::error::Error;
use std::{error, string, sync::Mutex};

// #[macro_use]
// extern crate diesel;
// use diesel::table;
// #[macro_use]
// extern crate diesel_migrations;
// use diesel_migrations;
// embed_migrations!("./migrations/");

// use diesel::prelude::*;
pub mod db;
// pub mod schema;

struct AppState {
  count: Mutex<i64>,
  // conn: Mutex<SqliteConnection>,
}

// DB COMMANDS

#[tauri::command]
fn get_images(state: tauri::State<AppState>) {}

// DB COMMANDS
fn main() {
  // use diesel_migrations::diesel_migrations;

  // let conn = db::establish_connection();
  let state = AppState {
    count: Default::default(),
    // conn: Mutex::new(db::establish_connection()),
  };

  // embedded_migrations::run(&conn);
  // diesel_migrations::run_pending_migrations(&conn).expect("Error migrating");

  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
