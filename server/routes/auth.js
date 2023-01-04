const express = require("express");
const authRouter = express.Router();

authRouter.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
});

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("password").not().isEmpty(),
  ],
  validate,
  Auth.login
);

module.exports = authRouter;
