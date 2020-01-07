var express = require("express");
var router = express.Router();

var apiRoute = require("./api");

/* Starting from current root route: / */
router.use("/api", apiRoute);

module.exports = router;
