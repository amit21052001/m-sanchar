const express = require("express");
const router = express.Router();
const { getAllRecords, createRecord } = require("../controller/finance");

router.route("/").get(getAllRecords).post(createRecord);
// router.route("/:id").get().patch().delete();

module.exports = router;
