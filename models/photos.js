const mongoose = require('mongoose');

//don't need this since you're not using it but if you need to take from photographerSchema you'd do this...
// const Photographer = require('./photographers'); //is photographers.js

const photoSchema = mongoose.Schema({
  // user: {type: String, required: true},
  url: {type: String, required: true},
  about: String,
});



module.exports = mongoose.model('Photo', photoSchema);

//Mongo takes the 1st arg, lowercases it and pluralizes it.
