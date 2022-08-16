const mongoose = require("mongoose");

const defenceMinistry = new mongoose.Schema({
  header: {
    type: String,
    required: [true, "Must Provide Header"],
    trie: true,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("Defence", defenceMinistry);
