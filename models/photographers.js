const mongoose = require('mongoose');
const Photo = require('./photos'); //is requiring photos.js file so you can use the schema in this document.


const photographerSchema = mongoose.Schema({
  photographer: {type: String, required: true},
  // photos: [Photo.schema], //variable. Photo is from the Photo model. schema is its schema.
});

module.exports = mongoose.model('Photographer', photographerSchema);

//Mongo takes the 1st arg, lowercases it and pluralizes it.
