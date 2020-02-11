const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

// uncomment to see the data (obj) in browser
// router.get("/locations", (req, res) => {
//   Location.find()
//     .then(locations => {
//       res.send(require("../data.js"))
//     })
//     .catch(err => {
//       next(err);
//     });
// });

router.get("/locations", (req, res) => {
  Location.find()
    .then(locationDocuments => {
      console.log(locationDocuments[0]);
      res.render("locations/list.hbs", { locationList: locationDocuments });
      // res.send(require("../data.js"))
    })
    .catch(err => {
      next(err);
    });
});

router.get(
  "/locations/add",
  // loginCheck,
  (req, res) => {
    res.render("../views/locations/add.hbs");
  }
);

// router.get("/rawdata/:id", (req, res, next) => {
//   Location.findById(req.params.id);
// });

router.patch("/rawdata/:id", (req, res, next) => {
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

router.get("/rawdata", (req, res, next) => {
  Location.find()
    .then(locationDocument => {
      console.log("check this");
      res.json(locationDocument);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
