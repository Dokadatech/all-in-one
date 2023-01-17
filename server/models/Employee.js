const mongoose = require("mongoose");

const Employee = mongoose.Schema({
  firstName: {
    type: String,
    required: "First name is required",
  },
  lastName: {
    type: String,
    required: "Last name is required",
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    // validate: {
    //   validator: (value) => {
    //     const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     return value.match(re);
    //   },
    //   message: "Please enter a valid email address",
    // },
  },
  password: {
    type: String,
    required: true,
    max: 20,
  },
  address: {
    type: String,
    default: "New Providence, Nassau, Bahamas",
  },
  jobDescription: {
    type: String,
    max: 255,
    // required: true,
  },
  type: {
    type: String,
    default: "Empolyee",
  },
  isAdmin: { type: Boolean, default: false },
  isSuperAdmin: { type: Boolean, default: false },
  date: {
    type: Date,
    default: Date.now,
  },
  contactNumber: {
    type: Number,
    // required: true,
  },
  department: {
    type: String,
    // required: true,
  },
  position: {
    type: String,
  },
  payrate: {
    type: Number,
    // required: true,
  },
  sickDays: {
    type: Number,
  },
  vacationDays: {
    type: Number,
  },
  grievenceDays: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    // required: true,
  },
  cellPhone: {
    type: Number,
    // required: true,
  },
  hoursWorked: {
    type: Number,
  },
});

module.exports = mongoose.model("employee", Employee);
