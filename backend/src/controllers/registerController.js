const { checkUserExists } = require("../utils/index");
const User = require("../models/User");

const register = async (req, res) => {
  const { email, password } = req.body;

  if (checkUserExists(email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = await User.save({ email, password });
  console.log(newUser);

  return res.status(201).json({ message: "User registered successfully" });
};

module.exports = register;
