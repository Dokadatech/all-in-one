// @route POST api/auth/login
// @desc Login employee and return JWT token

const Employee = require("../models/employee");

// @access Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email });

    if (!employee)
      return res.status(401).json({
        msg:
          "The email address " +
          email +
          " is not associated with any account. Please verify your email address and try again.",
      });

    //validate password
    if (!employee.comparePassword(password))
      return res.status(401).json({ message: "Invalid email or password" });

    // Login successful, write token, and send back employee
    res.status(200).json({ token: employee.generateJWT(), employee: employee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
