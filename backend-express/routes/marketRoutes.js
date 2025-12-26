const express = require("express");
const { getCoins } = require("../controllers/marketController");

const router = express.Router();

router.route("/").get(getCoins);

module.exports = router;
