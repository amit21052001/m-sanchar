const mongoose = require("mongoose");

const financeMinistry = new mongoose.Schema({
  header: {
    type: String,
    required: [true, "Must Provide Header"],
    trim: true,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("Finance", financeMinistry);
