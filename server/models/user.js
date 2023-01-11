const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
    required: "Your username is required",
  },
  lastName: {
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
    default: "New Providence, Nassau, Bahamas",
  },
  jobDescription: {
    type: String,

    max: 255,
  },
  type: {
    type: String,
    default: "RegularUser",
  },
  isAdmin: { type: Boolean, default: false },
  date: {
    type: Date,
    default: Date.now,
  },
  contactNumber: { type: String },
  department: { type: String },
  position: { type: String },
  department: { type: String },
  payrate: { type: Number },
  sickDays: { type: String },
  vacationDays: { type: String },
  grievenceDays: { type: String },
  dateAdded: { type: Date },
  gender: { type: String },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(
      user.password,

      salt,
      function (err, hash) {
        if (err) return next(err);

        user.password = hash;
        user.confirmPassword = hash;
        next();
      }
    );
  });
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: this._id,
    email: this.email.toLowerCase(),
    username: this.username.toLowerCase(),

    // firstName: this.firstName,
    // lastName: this.lastName,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 10000, 10),
  });
};

UserSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

UserSchema.methods.generateVerificationToken = function () {
  let payload = {
    userId: this._id,
    token: crypto.randomBytes(20).toString("hex"),
  };

  return new Token(payload);
};

const User = mongoose.model("User", UserSchema);

exports.User = User;
