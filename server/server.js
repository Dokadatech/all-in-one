require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");
const app = express();
const routes = require("./routes/employees");
const { PORT } = process.env;

app.use(express.json({ extended: false }));
app.use(cors({ origin: "http://localhost:4200" }));

//route connections
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/employees", require("./routes/employees"));
app.use("/api/notifications", require("./routes/notifications"));

app.listen(PORT || 3000, () => {
  console.log(`server is running at http://localhost:${PORT || 3000}`);
});

app.use("/employees", routes);
