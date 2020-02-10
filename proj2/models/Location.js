const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  owner: String, //User id
  image: String,
  placeName: String,
  builtDate: Number,
  located: String,
  description: String,
  WesAnQuote: String
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;