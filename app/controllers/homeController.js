
const express = require("express");
const router = express.Router();

const homeModel = require("../models/homeModel.js");
router.get("/", (req, res) => {
  res.render("home");
});


module.exports = router;