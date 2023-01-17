const express = require("express");
const authRouter = express.Router();
const Employee = require("../models/Employee");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const { JWT_SECRET } = process.env;
const auth = require("../middlewares/authenticate");

/**
 * login a user
 * private route
 */

authRouter.get("/", auth, async (req, res) => {
  try {
    const employee = await Employee.findById(req.employee.id).select(
      "-password"
    );
    res.json(employee);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * login a user
 * private route
 */
authRouter.post(
  "/",
  body("email", "Please include a valid email address").isEmail(),
  body("password", "Password is required").exists(),
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(email, password);

    try {
      let employee = await Employee.findOne({ email });
      if (!employee) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      const isMatch = await bcrypt.compare(password, employee.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const payload = {
        employee: {
          id: employee.id,
        },
      };

      jwt.sign(
        payload,
        JWT_SECRET,
        {
          //Todo change to 3600 in production
          expiresIn: 360000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("An occured on server");
    }
  }
);

// authRouter.post("/login", [
//   check("email").isEmail().withMessage("Enter a valid email address"),
//   check("password").not().isEmpty(),
// ]);

//EMAIL Verification
// authRouter.get("/verify/:token", Auth.verify);
// authRouter.post("/resend", Auth.resendToken);

//Password RESET
// authRouter.post(
//   "/recover",
//   [check("email").isEmail().withMessage("Enter a valid email address")]
//   // validate,
//   // Password.recover
// );

// authRouter.get("/reset/:token", Password.reset);

// authRouter.post(
//   "/reset/:token",
//   [
//     check("password")
//       .not()
//       .isEmpty()
//       .isLength({ min: 6 })
//       .withMessage("Must be at least 6 chars long"),
//     check("confirmPassword", "Passwords do not match").custom(
//       (value, { req }) => value === req.body.password
//     ),
//   ]
//   // validate,
//   // Password.resetPassword
// );

module.exports = authRouter;
