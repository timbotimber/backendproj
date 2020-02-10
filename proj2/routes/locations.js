const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.get("/locations", (req, res) => {
  Location.find()
    .then(locations => {
      res.render("../views/locations/list.hbs", { locations, user: req.user });
    })
    .catch(err => {
      next(err);
    });
});

const loginCheck = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/");
  }
};

router.get(
  "/locations/add",
  // loginCheck,
  (req, res) => {
    res.render("../views/locations/add.hbs");
  }
);

router.get("/locations/:id", (req, res, next) => {
  Location.findById(req.params.id);
});

module.exports = router;
