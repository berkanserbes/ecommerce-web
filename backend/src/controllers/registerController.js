const bcrypt = require("bcrypt");
const { checkUserExists } = require("../utils/index");
const User = require("../models/User");

const register = async (req, res) => {
  const { email, password, surname, name, role } = req.body;

  if (await checkUserExists(email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = await new User({
    email,
    name,
    surname,
    password: hashedPassword,
    role,
  }).save(); // or User.create({ email, password })
  console.log(newUser);

  return res.status(201).json({ message: "User registered successfully" });
};

module.exports = register;
