const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const Employee = require("../models/employee");

/**
 * This routes gets all employees
 *
 * */

router.get("/", (req, res) => {
  try {
    Employee.find((err, doc) => {
      if (err) {
        res.send("error getting users from database");
        console.log("error getting users from database");
      } else {
        res.send(doc);
        console.log("users found in database database");
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
 *
 * */
router.post("/create", (req, res) => {
  try {
    let newEmployee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      cellPhone: req.body.cellPhone,
      position: req.body.position,
      department: req.body.department,
      payrate: req.body.payrate,
      sickDays: req.body.sickDays,
      vacationDays: req.body.vacationDays,
      grievenceDays: req.body.grievenceDays,
      hoursWorks: req.body.hoursWorks,
    });

    newEmployee.save((err, doc) => {
      if (err) {
        res.send("error saving user to database");
        console.log("error saving user to database");
      } else {
        res.send(doc);
        console.log("user saved to database");
      }
    });
  } catch (error) {
    res.send("error saving user to database");
    console.log("error saving user to database");
  }
});

/**
 * This routes get a single employee by id and updates the employee
 *
 * */
router.put("/:id", (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      let updateEmployee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        cellPhone: req.body.cellPhone,
        position: req.body.position,
        department: req.body.department,
        payrate: req.body.payrate,
        sickDays: req.body.sickDays,
        vacationDays: req.body.vacationDays,
        grievenceDays: req.body.grievenceDays,
        hoursWorks: req.body.hoursWorks,
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
 * This routes get a single employee by id amnd deletes the employee
 *
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
