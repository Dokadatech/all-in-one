const mongoose = require("mongoose");

const Employee = mongoose.model("Employees", {
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  position: { type: String },
  department: { type: String },
  cellPhone: { type: String },
  payrate: { type: String },
  password: { type: String },
  sickDays: { type: String },
  vacationDays: { type: String },
  grievenceDays: { type: String },
  paystub: { type: String },
  hoursworked: { type: String },
  address: { type: String },
  dateEmployed: { type: Date.now },
  profileImage: {
    type: String,
    required: false,
    max: 255,
  },
});

module.exports = Employee;
