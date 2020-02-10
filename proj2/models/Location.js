const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  owner: String, //User id
  placeName: String,
  builtDate: Date,
  description: String,
  image: String,
  WesAnQuote: String
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
