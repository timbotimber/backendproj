
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    username: String,
    emailaddress: String
    password: String,
    favouriteWeAnFilm: String,
    profession: String
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;