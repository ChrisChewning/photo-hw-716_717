const mongoose = require('mongoose');

const photographerSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('Photographer', photographerSchema);

//Mongo takes the 1st arg, lowercases it and pluralizes it.
