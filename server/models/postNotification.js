const mongoose = require("mongoose");

const Post = mongoose.model("Post", {
  title: String,
  body: String,
});

module.exports = Post;
