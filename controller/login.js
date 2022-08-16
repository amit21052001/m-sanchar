const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const JWT_SECRET = "sfhskhfksdhkvcbvjhf$@##$@#$@#fsdkfhsdkhfksh";

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid Usernam/Password" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        username: username,
      },
      process.env.JWT_SECRET
    );

    return res.json({ status: "ok", data: token });
  }

  res.json({ status: "error", error: "Invalid Usernam/Password" });
};

module.exports = { loginUser };
