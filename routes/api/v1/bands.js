var express = require("express");
var router = express.Router();

/* Current route: /api/v1/bands */
router
  .route("/:band_id?")
  .get((req, res) => {
    res.send(`Getting`);
  })
  .put((req, res) => {
    res.send(`Putting ${req.params.band_id}`);
  })
  .post((req, res) => {
    res.send(`Posting`);
  })
  .delete((req, res) => {
    res.send(`Deleting ${req.params.band_id}`);
  });

module.exports = router;
