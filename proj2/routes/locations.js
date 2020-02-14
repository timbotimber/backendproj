const express = require("express");
const router = express.Router();
const Location = require("../models/Location");
const uploadCloud = require("../config/cloudinary.js");
// const locationsJS = require("../bin/data");

router.get("/about", (req, res) => {
  res.render("../views/about.hbs");
});
router.get("/locations", (req, res) => {
  Location.find()
    .then(locationDocuments => {
      let user = req.session.user;
      res.render("locations/list.hbs", {
        locationList: locationDocuments,
        user: user
      });
      // res.send(require("../data.js"))
    })
    .catch(err => {
      next(err);
    });
});

router.get("/locations/add", (req, res) => {
  res.render("../views/locations/add.hbs");
});

// hello
router.post("/locations/add", uploadCloud.single("image"), (req, res) => {
  let placeName = req.body.placeName;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  let image = req.body.image;
  let builtData = req.body.builtData;
  let description = req.body.description;
  let quote = req.body.quote;
  let owner = req.session.user;

  console.log("owner", req.session.user);
  let coordinates = req.body.coordinates.split(",");
  console.log("co-ords: ", coordinates);
  Location.create({
    placeName,
    imgPath, //M, before: image
    builtData,
    description,
    quote,
    coordinates,
    owner
  })
    .then(created => {
      console.log("CREATED", created);
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
  Location.findByIdAndUpdate(
    req.params.id,
    { placeName, builtData, description },
    { new: true }
  )
    .then(response => {
      // console.log("HALLO", { response });
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

router.get("/locations/:locationId/delete", (req, res, next) => {
  const locationsId = req.params.locationId;
  Location.deleteOne({ _id: locationsId })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/locations/:locationId", (req, res, next) => {
  const locationsId = req.params.locationId;
  const user = req.session.user;
  Location.findById(locationsId)
    .then(location => {
      if (req.session.user._id === location.owner) {
        location.canEdit = true;
      }
      console.log("true?", location.canEdit);
      let object = { location: location, user: user };
      res.render("locations/location.hbs", { object: object });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
