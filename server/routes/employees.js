const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const Employee = require("../models/Employee");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const { JWT_SECRET } = process.env;
const auth = require("../middlewares/authenticate");
const { isAdmin } = require("../middlewares/authAdmin");

/**
 * This routes gets all employees
 *private routes
 * */
router.get("/", auth, async (req, res) => {
  try {
    const employees = await Employee.find({ employee: req.employee.id }).sort({
      date: -1,
    });

    console.log("users found in database database");
    res.json({ status: "SUCCESS", employees });
  } catch (error) {
    res.status(500).send("error getting users from database");
    console.error(error.message);
  }
});

/**
 * This routes get a single employee by id
 *
 * */
router.get("/:id", (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      Employee.findById(req.params.id, (err, doc) => {
        if (err) {
          res.send("error getting users from database");
          console.log("error getting users from database");
        } else {
          res.send(doc);
          console.log("user found in database database");
        }
      });
    } else {
      return res
        .status(400)
        .send(`No records found with ID number '${req.params.id}'`);
    }
  } catch (error) {
    res.send("error getting users from database");
    console.log("error getting users from database");
  }
});

/**
 * This routes creats a new employee
 *Todo add only admin protection here
 *
 */
router.post("/create", isAdmin, async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    contactNumber,
    position,
    department,
    payrate,
    sickDays,
    vacationDays,
    grievenceDays,
    hoursWorks,
    gender,
    isAdmin,
  } = req.body;
  try {
    let newEmployee = await Employee.findOne({ email });

    if (newEmployee) {
      return res
        .status(400)
        .json({ status: "FAILED", message: "Employee already exists" });
    }
    newEmployee = Employee({
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      position,
      department,
      payrate,
      sickDays,
      vacationDays,
      grievenceDays,
      hoursWorks,
      gender,
      isAdmin,
    });

    const salt = await bcrypt.genSalt(12);
    newEmployee.password = await bcrypt.hash(password, salt);

    await newEmployee.save();

    const payload = {
      newEmployee: {
        id: newEmployee.id,
        isAdmin: newEmployee.isAdmin,
      },
    };

    jwt.sign(
      payload,
      JWT_SECRET,
      // isAdmin,

      {
        //TODO change this time to 3600 in production
        expiresIn: 360000,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ status: "SUCCESS", token });
      }
    );
  } catch (error) {
    res.send("error saving user to database");
    console.error(error.message);
    console.log("error saving user to database");
  }
});

/**
 * This route gets a single employee by id and updates the employee
 *Todo add only admin protection here
 * */
router.put("/:id", auth, (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      let updateEmployee = {
        firstName,
        lastName,
        email,
        password,
        contactNumber,
        position,
        department,
        payrate,
        sickDays,
        vacationDays,
        grievenceDays,
        hoursWorks,
      };
      Employee.findByIdAndUpdate(
        req.params.id,
        { $set: updateEmployee },
        { new: true },
        (err, doc) => {
          if (err) {
            res
              .send("error updating user in database")
              .json({
                status: "FAILED",
                message: "There was an error updating the user",
              });
            console.log("error updating user in database");
          } else {
            res
              .send(doc)
              .json({
                status: "SUCCESS",
                message: "User information has been updated",
              });
            console.log("user info updated in database database");
          }
        }
      );
    } else {
      return res
        .status(400)
        .send(`No records found with ID number '${req.params.id}'`)
        .json({ status: "FAILED", message: "No records found" });
    }
  } catch (error) {
    return res
      .status(400)
      .send(`No records found with ID number '${req.params.id}'`)
      .json({ status: "FAILED", message: "No records found" });
  }
});

/**
 * This routes get a single employee by id and deletes the employee
 *Todo add only admin protection here
 * */
router.delete("/:id", auth, (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        res
          .send("error removing users from database")
          .json({ status: "FAILED", message: "Error removing user" });
        console.log("error removing user from database");
      } else {
        res
          .send(doc)
          .json({ status: "SUCCESS", message: "User has been removed" });
        console.log("user removed from database database");
      }
    });
  } else {
    return res
      .status(400)
      .send(`No records found with ID number '${req.params.id}'`)
      .json({ status: "FAILED", messgae: "User not found" });
  }
});
module.exports = router;
