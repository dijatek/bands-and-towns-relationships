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
    if (req.params.band_id !== "undefined") {
      db.Band.update(
        { name: req.body.name, town: req.body.town },
        { where: { id: req.params.band_id } }
      ).then(newBand => {
        // Show new bands list --  move to controllers then just call full bands response or one band by id
        res.redirect("/api/v1/bands");
      });
    } else {
      res.send("Band id not provided.");
    }
  })
  .post((req, res) => {
    db.Band.create({
      name: req.body.name,
      town: req.body.town
    }).then(newBand => {
      res.send(newBand);
    });
  })
  .delete((req, res) => {
    if (req.params.band_id !== "undefined") {
      db.Band.destroy({ where: { id: req.params.band_id } }).then(newBand => {
        // Show new bands list --  move to controllers then just call full bands response or one band by id
        res.redirect("/api/v1/bands");
      });
    } else {
      res.send("Band id not provided.");
    }
  });

module.exports = router;
