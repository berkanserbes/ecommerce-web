require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  if (!authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Bearer is missing" });
  }

  const token = authHeader.split(" ")[1]; // Remove 'Bearer' from string

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authenticateMiddleware;
