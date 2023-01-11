const auth = require("./auth");
const user = require("./user");

const authenticate = require("../middlewares/auth");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send({
      message: "TrainME. Register or Login to test Authentication.",
    });
  });

  app.use("/api/auth", auth);
  app.use("/api/user", authenticate, user);
};
