var express = require("express");
var router = express.Router();

var db = require("../../../models");

/* Current route: /api/v1/bands */
router
  .route("/:band_id?")
  .get((req, res) => {
    const queryConditional =
      typeof req.params.band_id !== "undefined"
        ? { where: { id: req.params.band_id } }
        : {};
    db.Band.findAll(queryConditional).then(bandList => {
      res.json(bandList);
    });
  })
  .put((req, res) => {
    res.send(`Putting ${req.params.band_id}`);
  })
  .post((req, res) => {
    db.Band.create({
      name: req.body.name,
      town: req.body.town
    }).then(newBand => {
      res.send(`Posted ${newBand.id}`);
    });
  })
  .delete((req, res) => {
    res.send(`Deleting ${req.params.band_id}`);
  });

module.exports = router;
