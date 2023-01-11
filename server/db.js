require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const URI = process.env.MONGO_LOCAL_CONN_URL;

mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("Error connecting to database", e);
  });

module.exports = mongoose;
