var express = require("express");
var router = express.Router();

var v1Route = require("./v1");

/* Current route: /api */
router.use("/v1", v1Route);

module.exports = router;
