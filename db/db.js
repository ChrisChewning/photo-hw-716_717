const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/photographer');

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
})

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose error');
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
})
