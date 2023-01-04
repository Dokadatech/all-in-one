require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("Error connecting to database", e);
  });

module.exports = mongoose;
