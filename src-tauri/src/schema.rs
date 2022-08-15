table! {
    images (id) {
        id -> Integer,
        name -> Text,
        url -> Text,
        size -> Nullable<Text>,
        alt -> Nullable<Text>,
        image_bin -> Nullable<Binary>,
    }
}
