require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const { MONGO_LOCAL_CONN_URL } = process.env;

mongoose
  .connect(MONGO_LOCAL_CONN_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("Error connecting to database", e);
    process.exit(1);
  });

module.exports = mongoose;
