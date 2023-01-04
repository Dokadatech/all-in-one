require("dotenv").config();
const express = require("express");
const multer = require("multer");
// const bodyParser = require("body-parser");
const mongoose = require("./db");
// mongoose.set("strictQuery", false);
// const DB = process.env.MONGO_URI;
const cors = require("cors");
const app = express();
const routes = require("./routes/employees");

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

//connections

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

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `server is running at http://localhost:${process.env.PORT || 3000}`
  );
});

app.use("/employees", routes);
