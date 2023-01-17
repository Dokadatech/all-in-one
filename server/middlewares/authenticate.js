const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "Auth Denied" });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.employee = decode.employee;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
