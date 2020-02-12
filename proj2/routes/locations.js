const express = require("express");
const router = express.Router();
const Location = require("../models/Location");
const uploadCloud = require("../config/cloudinary.js");
// const locationsJS = require("../bin/data");

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

router.post("/locations/add", (req, res) => {
  let name = req.body.placeName;
  let date = req.body.date;
  let description = req.body.description;
  let quote = req.body.quote;
  let coordinates = req.body.coordinates.split(",");
  console.log(coordinates);
  const newLocation = new Location({
    name,
    date,
    description,
    quote,
    coordinates
  });

  // foto upload
  // router.post("/locations/add", uploadCloud.single("image"), (req, res) => {
  //   let name = req.body.placeName;
  //   let date = req.body.date;
  //   let description = req.body.description;
  //   let quote = req.body.quote;
  //   let coordinates = req.body.coordinates.split(",");
  //   console.log(coordinates);
  //   const newLocation = new Location({
  //     name,
  //     date,
  //     description,
  //     quote,
  //     coordinates
  //   });


  newLocation
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
    });
});

// router.get("/locations/edit", (req, res, next) => {
//   res.render("locations/edit");
// });

// router.get("/locations/edit", (req, res, next) => {
//   Location.findOne({ _id: req.query.location_id })
//     .then(location => {
//       res.render("location/edit", { location });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

router.post("/locations/edit/:id", (req, res, next) => {
  const { placeName, builtData, description } = req.body;
  console.log("HELLO");
  // Location.update(
  //   { _id: req.query.location_id },
  //   { $set: { placeName, builtData, description } }
  // )
  //   .then(() => {
  //     res.redirect("/");
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  Location.findByIdAndUpdate(
    req.params.id,
    { placeName, builtData, description },
    { new: true }
  )
    .then(response => {
      console.log("HALLO", { response });
      res.redirect("/");
    })
    .catch(err => console.log(err));
});

router.get("/locations/edit/:locationId", (req, res, next) => {
  const locationsId = req.params.locationId;
  Location.findById(locationsId)
    .then(location => {
      console.log(location);
      res.render("locations/edit", { location });
    })
    .catch(err => {
      next(err);
    });
});

router.patch("/rawdata/:id", (req, res, next) => {
  const changes = req.body; // in our axios call on the front-end, we'll make sure to pass the fields that need to be updated
  Location.updateOne({ id: req.params.id }, changes)
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
      res.json(locationDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/locations/:locationId", (req, res, next) => {
  const locationsId = req.params.locationId;
  Location.findById(locationsId)
    .then(location => {
      console.log(location);
      res.render("locations/location.hbs", location);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
