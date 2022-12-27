const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: "Your username is required",
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return value.match(re);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    max: 20,
  },
  confirmPassword: {
    type: String,
    required: true,
    max: 20,
  },
  address: {
    type: String,
    default: "Nassau, Bahamas",
  },
  jobDescription: {
    type: String,
    required: false,
    max: 255,
  },

  profileImage: {
    type: String,
    required: false,
    max: 255,
  },
  type: {
    type: String,
    default: "admin",
  },
  isAdmin: { type: Boolean, default: true },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
