const Link = require("../models/link");

exports.getLink = async (req, res) => {
  try {
    const link = await Link.find({});
    res.status(200).json({
      success: true,
      data: link,
      message: "Entire Link Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
