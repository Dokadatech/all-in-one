const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

/**
 * Register a user
 * this route won't be used now but in the future
 * public route
 *
 * TODO will have to remove the instances of employee here to users when the time comes for other organizations ton join
 */

router.post(
  "/",
  body("email", "Please include a valid email address")
    .isEmail()
    .normalizeEmail(),
  body("password", "Please enter a with 8 or more characters ")
    .isLength({
      min: 8,
    })
    .not()
    .isEmpty(),
  body("firstName", "First name is required").not().isEmpty().trim().escape(),
  body("lastName", "Last name is required").not().isEmpty().trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, email, password, confirmPassword, lastName } = req.body;

    try {
      let user = await Employee.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
      user = new Employee({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        JWT_SECRET,
        {
          expiresIn: 360000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error saving user to the database");
    }
  }
);

module.exports = router;
