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
      console.log(locationDocuments[0])
      res.render("locations/list.hbs", { locationList: locationDocuments });
      // res.send(require("../data.js"))
    })
    .catch(err => {
      next(err);
    });
});

// const loginCheck = (req, res, next) => {
//   if (req.session.user) {
//     next();
//   } else {
//     res.redirect("/");
//   }
// };

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

module.exports = router;
