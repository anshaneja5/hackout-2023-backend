const Links = require("../models/link");
const { success } = require("../utils/responseWrapper");

const getLink = async (req, res) => {
  try {
    const domain = req.body.domain;
    console.log(domain);
    const link = await Links.find({domain});
    return res.send(success(200, link));
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

module.exports = {
  getLink,
};
