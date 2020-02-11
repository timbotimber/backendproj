const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.get("/locations", (req, res) => {
  Location.find()
    .then(locations => {
      res.send(require("../data.js"));
      // res.render("../views/locations/list.hbs", { locations, user: req.user });
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

// router.get(
//   "/locations/add",
//   // loginCheck,
//   (req, res) => {
//     res.render("../views/locations/add.hbs");
//   }
// );

router.get("/locations/:id", (req, res, next) => {
  Location.findById(req.params.id);
});

router.patch("/locations/:id", (req, res, next) => {
  const changes = req.body; // in our axios call on the front-end, we'll make sure to pass the fields that need to be updated
  Location.updateOne({ _id: req.params.id }, changes)
    .then(() => {
      // successful update, we can send a response
      res.json();
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
