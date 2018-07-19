const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const session = require('express-session');
require('./db/db')


app.use(session({
  secret: 'this is a random secret string that you make up',
  resave: false, //only save when the session object has been modified.
  saveUninitialized: false //useful for login sessins. we only want to save when we modify the session. Always use this. It reduces server storage and complies with laws.
}))


//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(express.static('public'));

//1st: require your controller.
//2nd: use /photographer as the first part of your url address. Then include your photographersController. this will be implied into your controller routes so in your controller if it's '/' your ejs needs to be /photographer   to match.
const photographersController = require('./controllers/photographers.js');
app.use('/photographer', photographersController);

const photosController = require('./controllers/photos.js');
app.use('/photo', photosController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);


//Your port
app.listen(port, () => {
  console.log('App is listening on ', port);
})
