const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const tokenVerification = (req, res, next) => {
  const token = req.body.token || req.query.token || req.header("x-auth-token");

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

module.exports = tokenVerification;
