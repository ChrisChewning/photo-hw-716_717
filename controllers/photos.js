const express = require('express');
const router = express.Router();
const Photo = require('../models/photos');
const Photographer = require('../models/photographers')
//^ the error was saying Photographer wasn't defined b.c it wasn't in this doc here.


//Breakdown. controller.route('/where to go on browser', request argument, ) arrow function {
//find all the collections(?) in the model Photographer, we are storing in a database.
//Then render 'index.ejs' with that information.



//POST ROUTE: Creating something new should go at the top.
// your form action is matching this .post route here...  this will be user here.
//the .ejs file needs to match this. However since controller has 'photographer assinged to it, this is /photographer so the ejs file needs to say /photographer in its route to match'



//HOME PAGE
router.get('/home', (req, res) => {
  Photo.find({}, (err, foundPhoto) => {
    res.render('photos/index.ejs', {
      photo: foundPhoto
    });
  });
});


//can't read push of undefined.   Look up foundUser and/or createdPhoto.

//POST ROUTE: you are posting to the show page. This creates something.
router.post('/show', (req, res) => {
  console.log(req.body);
  //findOne helps us only find one photographer.
  //find({}) brings back all the photographers.
  //foundUser could be anything.
  Photographer.findOne({'photographer': req.body.photographer}, (err, foundUser) => {
    //createdPhoto in the photo database what we get back.
  Photo.create(req.body, (err, createdPhoto) => {
    foundUser.photos.push(createdPhoto); //pushes the photo to the user.
    //this saves in the database. ex: findByIdAndUpdate is a method that talks to the database. foundUser.photos.push doesn't so you need to .save();
    foundUser.save((err, savedFoundUser) => {
      console.log(createdPhoto, ' this is the created photo');
      res.redirect('/photo/show')
    }); //saves it to the user.
})
  });
});



//NEW PAGE
router.get('/new', (req, res) => {
  res.render('photos/new.ejs')
})




//SHOW ROUTE (after new page so you can see it)
router.get('/show', (req, res) => {
Photo.findById(req.params.id, (err, showPhoto) => {
  res.render('photos/show.ejs', {
    photo: showPhoto
  });
});
});




//EDIT PAGE
//#1: The get route allows us to get to the edit.ejs page per id.
router.get('/:id/edit', (req, res) => {
  Photo.findById(req.params.id, (err, editPhoto) => {
    res.render('photos/edit.ejs', {
      photo: editPhoto
    })
  })
})




//PUT ROUTE updates the id
router.put('/:id', (req, res) => {
  Photo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPhoto) => {
    res.redirect('/photo/home');
  });
});


//DELETE ROUTE
router.delete('/:id/', (req, res) => {
  Photo.findByIdAndDelete(req.params.id, (err, deletedPhoto) => {
    res.redirect('/photo/home')
  })
});





module.exports = router;
