const express = require('express');
const router = express.Router();
const User = require('../models/users');


  //this route goes to localhost:3000/users
router.get('/', (req, res) => {
  //render the login.ejs file
  res.render('auth/login.ejs', {
//this has to match up with the article.js / get route.
    // message: req.session.message
  })
})

// Users is the name of your collection(?)

// router.post('/login', (req, res) => {
//   //req.session is available on every single request from the client.
//   //our session is available in the following
//   console.log(req.session);
//
// //you can add any propery you want to the session.
// //and as soon as you do that it's saved.
//   req.session.loggedIn = true;
//   req.session.username = req.body.username;
//   res.redirect('/articles');
// });




// //logging out or destroying the session.
//
// router.get('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if(err){
//       res.send('error destroying sessino');
//     } else {
//       res.redirect('/auth');
//     }
//   })
// })



module.exports = router;
