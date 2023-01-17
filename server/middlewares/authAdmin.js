const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "Auth Denied" });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.employee = decode.employee;
    console.log(req.employee);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const isAdmin = (req, res, next) => {
  auth(req, res, () => {
    if (req.employee.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: "Access Denied" });
    }
  });
};

module.exports = { auth, isAdmin };
