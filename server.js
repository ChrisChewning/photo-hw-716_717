const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
require('./db/db')

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));



//1st: require your controller.
//2nd: use /photographer as the first part of your url address. Then include your photographersController. this will be implied into your controller routes so in your controller if it's '/' your ejs needs to be /photographer   to match.
const photographersController =
require('./controllers/photographers.js');
app.use('/photographer', photographersController);


//Your port
app.listen(port, () => {
  console.log('App is listening on ', port);
})
