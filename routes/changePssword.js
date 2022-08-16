const express = require("express");
const router = express.Router();
const { changePassword } = require("../controller/changePassword");

router.route("/").post(changePassword);

module.exports = router;
