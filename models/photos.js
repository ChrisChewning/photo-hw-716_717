const mongoose = require('mongoose');



const photographerSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

const photoSchema = mongoose.Schema({
  user: [photographerSchema.username],
  user: {type: String, required: true},
  url: {type: String, required: true},
  about: String,
});



module.exports = mongoose.model('Photo', photoSchema);

//Mongo takes the 1st arg, lowercases it and pluralizes it.


//this is where you mold the two together. the username part.
