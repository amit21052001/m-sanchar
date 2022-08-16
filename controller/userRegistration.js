const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const registerUser = async (req, res) => {
  const { username, password: plainTextPassword } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid Username" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid Password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({ status: "error", error: "password is too small" });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);
  try {
    const user = await User.create({ username, password });
    console.log("user created successfully...", user);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(404)
        .json({ status: "error", error: "username is already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
};

module.exports = { registerUser };
