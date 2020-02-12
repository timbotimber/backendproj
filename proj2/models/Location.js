const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  owner: String, //User id
  image: String,
  placeName: String,
  located: String,
  builtData: Number,
  description: String,
  coordinates: [Number],
  wesAndersonMovie: {
    type: String,
    enum: [
      "Rushmore",
      "The Royal Tenenbaums",
      "The Life Aquatic with Steve Zisso",
      "The Darjeeling Limited",
      "Fantastic Mr. Fox",
      "Moonrise Kingdom",
      "The Grand Budapest Hotel",
      "Isle of Dogs"
    ]
  }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
