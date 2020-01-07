var express = require("express");
var router = express.Router();

/* Current route: /api/v1/bands */
router.get("/", (req, res) => {
  res.send("All the bands");
});

module.exports = router;
