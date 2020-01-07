var express = require("express");
var router = express.Router();

var bandsRoute = require("./bands");

/* Current route: /api/v1 */
router.use("/bands", bandsRoute);

module.exports = router;
