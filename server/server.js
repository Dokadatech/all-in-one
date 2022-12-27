require("dotenv").config();
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const DB = process.env.MONGO_URI;
const app = express();
app.use(bodyParser.json());

//connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("Error", e);
  });

// const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, "./images");
//   },
//   filename(req, file, callback) {
//     callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// app.get("/", (req, res) => {
//   res.status(200).send("You can post to /api/upload.");
// });

// app.post("/api/upload", upload.array("photo", 3), (req, res) => {
//   console.log("file", req.files);
//   console.log("body", req.body);
//   res.status(200).json({
//     message: "success!",
//   });
// });

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `server is running at http://localhost:${process.env.PORT || 8080}`
  );
});
