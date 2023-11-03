const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  link: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Link", linkSchema);
