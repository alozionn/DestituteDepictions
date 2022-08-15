-- Your SQL goes here
CREATE TABLE images (
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL DEFAULT '',
    url VARCHAR NOT NULL DEFAULT '',
    size VARCHAR,
    alt VARCHAR,
    image_bin BLOB
)