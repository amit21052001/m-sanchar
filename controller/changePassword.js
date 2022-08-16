const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const changePassword = async (req, res) => {
  console.log(req.body);
  const { token, newPassword } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const _id = user.id;
    const hashedPassword = await bcrypt.hash(newPassword);

    await User.updateOne(
      { _id },
      {
        $set: { password: hashedPassword },
      }
    );
    console.log("JWT decoded : ", user);
  } catch (error) {
    return res.json({ status: "error", data: "somehing error" });
  }

  res.json({ status: "ok", data: "changed Password" });
};

module.exports = { changePassword };
