const User = require("../models/User");

const checkUserExists = async (email) => {
  const user = await User.findOne({ email: email });

  return user ? true : false;
};

module.exports = { checkUserExists };
