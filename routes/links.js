const express = require("express");
const router = express.Router();

//import controller
const { getLink } = require("../controllers/linkController");

router.post("/getLink", getLink);

module.exports = router;
