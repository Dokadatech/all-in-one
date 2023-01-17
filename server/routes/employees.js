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
router.get("/", (req, res) => {
  try {
    Employee.find((err, doc) => {
      if (err) {
        res.send("error getting users from database");
        console.log("error getting users from database");
      } else {
        console.log("users found in database database");
        res.send("All employees");
      }
    });
  } catch (error) {
    res.send("error getting users from database");
    console.log("error getting users from database");
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
      return res.status(400).json({ message: "Employee already exists" });
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
        res.json({ token });
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
router.put("/:id", (req, res) => {
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
            res.send("error updating user in database");
            console.log("error updating user in database");
          } else {
            res.send(doc);
            console.log("user info updated in database database");
          }
        }
      );
    } else {
      return res
        .status(400)
        .send(`No records found with ID number '${req.params.id}'`);
    }
  } catch (error) {
    return res
      .status(400)
      .send(`No records found with ID number '${req.params.id}'`);
  }
});

/**
 * This routes get a single employee by id and deletes the employee
 *Todo add only admin protection here
 * */
router.delete("/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        res.send("error removing users from database");
        console.log("error removing user from database");
      } else {
        res.send(doc);
        console.log("user removed from database database");
      }
    });
  } else {
    return res
      .status(400)
      .send(`No records found with ID number '${req.params.id}'`);
  }
});
module.exports = router;
