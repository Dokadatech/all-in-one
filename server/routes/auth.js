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
    res.json({ status: "SUCCESS", employee });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "FAILED", message: "Server error" });
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

    if (email == "" || password == "") {
      res.json({
        status: "FAILED",
        message: "Empty Credentials supplied",
      });
    }
    try {
      let employee = await Employee.findOne({ email });
      let data;
      if (!employee) {
        return res
          .status(400)
          .json({ status: "FAILED", message: "Invalid Credentials" });
      }
      const isMatch = await bcrypt.compare(password, employee.password);
      if (!isMatch) {
        console.log("this is false here ");
        return res
          .status(400)
          .json({ status: "FAILED", message: "Invalid Credentials" });
      }

      const payload = {
        employee: {
          id: employee.id,
          data: employee.data,
        },
      };

      jwt.sign(
        payload,
        JWT_SECRET,
        {
          //Todo change to 3600 in production
          expiresIn: 360000,
        },
        (error, token, data) => {
          if (error) {
            res.json({ status: "FAILED", message: "Token Error" });
          }
          res.json({
            status: "SUCCESS",
            token,
            message: "Login Successful",
            data,
          });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("An occured on server");
    }
  }
);

module.exports = authRouter;
