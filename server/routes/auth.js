const express = require("express");
const authRouter = express.Router();
const { check } = require("express-validator");

const Auth = require("../controllers/auth");
const Password = require("../controllers/password");
const validate = require("../middlewares/validation");

authRouter.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
});

authRouter.post(
  "/login",
  [
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("password").not().isEmpty(),
  ],
  validate,
  Auth.login
);

//EMAIL Verification
authRouter.get("/verify/:token", Auth.verify);
authRouter.post("/resend", Auth.resendToken);

//Password RESET
authRouter.post(
  "/recover",
  [check("email").isEmail().withMessage("Enter a valid email address")],
  validate,
  Password.recover
);

authRouter.get("/reset/:token", Password.reset);

authRouter.post(
  "/reset/:token",
  [
    check("password")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 chars long"),
    check("confirmPassword", "Passwords do not match").custom(
      (value, { req }) => value === req.body.password
    ),
  ],
  validate,
  Password.resetPassword
);

module.exports = authRouter;
