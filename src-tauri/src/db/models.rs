use crate::schema::images;
use serde::{Deserialize, Serialize};

#[derive(Queryable, Serialize)]
pub struct Image {
    pub id: i32,
    pub name: String,
    pub url: String,
    pub size: String,
    pub alt: String,
    // pub image_bin: Binary,
    pub image_bin: u64,
}

#[derive(Insertable, Serialize)]
#[table_name = "images"]
pub struct NewImage<'a> {
    pub name: &'a str,
    pub url: &'a str,
    pub size: &'a str,
    pub alt: &'a str,
    // pub image_bin: Binary,
}
