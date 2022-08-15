extern crate destitute_depictions;
extern crate diesel;

use self::destitute_depictions::*;
use self::diesel::prelude::*;
use self::models::*;

fn main() {
    use destitute_depictions::schema::images::dsl::*;

    let connection = establish_connection();
    let results = images
        .filter(published.eq(true))
        .limit(5)
        .load::<Post>(&connection)
        .expect("Error loading images");

    println!("Displaying {} images", results.len());
    for image in results {
        println!("{}", image.name);
        println!("----------\n");
        println!("{}", image.url);
    }
}
