const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  domain: {
    type: String,
  },
  subdomain: {
    type: String,
  },
  sitetitle: {
    type: String,
  },
  sitelink: {
    type: String,
  },
});

module.exports = mongoose.model("links", linkSchema);
