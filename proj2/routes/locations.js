const express = require("express");
const router = express.Router();
const Location = require("../models/Location");
const uploadCloud = require("../config/cloudinary.js");
// const locationsJS = require("../bin/data");

router.get("/about", (req, res) => {
  let user = req.session.user;
  res.render("../views/about.hbs", { user: user });
});

router.get("/locations", async(req, res) => {
  
  try {
    let locationDocuments = await Location.find()
    let user = req.session.user;
    
    await res.render("locations/list.hbs", {
          locationList: locationDocuments,
          user: user
      }); 
  }
  
  catch(err) {
    console.log(err)
  }
  
  finally {
    console.log("success")
  }
  
});

router.get("/locations/add", (req, res) => {
  res.render("../views/locations/add.hbs");
});

// hello
router.post("/locations/add", uploadCloud.single("image"), async(req, res) => {
  
  let placeName = req.body.placeName;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  let image = req.body.image;
  let builtData = req.body.builtData;
  let description = req.body.description;
  let quote = req.body.quote;
  let owner = req.session.user;
  let coordinates = req.body.coordinates.split(",");

  // console.log("owner", req.session.user);
  // console.log("co-ords: ", coordinates);
  try {
    
    let created = await Location.create({
      placeName,
      imgPath, //M, before: image
      builtData,
      description,
      quote,
      coordinates,
      owner
    })
    
    await res.redirect("/")
    
  }
  
  catch(error) {
    console.log(error)
  }

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

router.post("/locations/edit/:id", async(req, res, next) => {
  
  const { placeName, builtData, description } = req.body;
  
  try {
    
  await Location.findByIdAndUpdate(
    req.params.id,
    { placeName, builtData, description },
    { new: true} 
  )
  
  await res.redirect("/");
    
}
  
  catch(error) {
  console.log(error)  
  } 
      
   
});

router.get("/locations/edit/:locationId", async(req, res, next) => {
  const locationsId = req.params.locationId;
  
  try {
    let location = await Location.findById(locationsId)
    res.render("locations/edit", { location });
  }
  
  catch(err) {
    console.log(err)
  }
  
});

router.patch("/rawdata/:id", async(req, res, next) => {
  const changes = req.body; 
  
  
  try {
    await Location.updateOne({ id: req.params.id }, changes)
    res.json();
  }
  
  catch(error) {
    console.log(error)
  }
});

router.get("/rawdata", async(req, res, next) => {
  
  try {
    
    let locationDocument = await Location.find()
    res.json(locationDocument);
  }
  
  
  catch(error) {
    console.log(error)
  }
});

router.get("/locations/:locationId/delete", async(req, res) => {
  const locationsId = req.params.locationId;
  
  try {   
    await  Location.deleteOne({ _id: locationsId })
    res.redirect("/")
  }
 
 catch(error) {
   Console.log(error)
 }

});

router.get("/locations/:locationId", async(req, res, next) => {
  

  
  const locationsId = req.params.locationId;
  const user = req.session.user;
  
  try {
    let location = await Location.findById(locationsId)
    if (req.session.user._id === location.owner) {
      location.canEdit = true; 
    }
    
    let newDate = formatDate(location.builtData);
    let object = { location: location, user: user, newDate };
        
    res.render("locations/location.hbs", { object: object });
  }
  
  catch(error) {
    next(error);
  }
  
  const formatDate = (date) => {
    console.log("DATE", date);
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return day + " " + monthNames[monthIndex] + " " + year;
  }
  
  
});

module.exports = router;
