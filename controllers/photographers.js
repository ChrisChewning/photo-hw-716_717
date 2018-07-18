const express = require('express');
const router = express.Router();
const Photographer = require('../models/photographers');


//Breakdown. controller.route('/where to go on browser', request argument, ) arrow function {
//find all the collections(?) in the model Photographer, we are storing in a database.
//Then render 'index.ejs' with that information.



//POST ROUTE: Creating something new should go at the top.
// your form action is matching this .post route here...  this will be user here.
//the .ejs file needs to match this. However since controller has 'photographer assinged to it, this is /photographer so the ejs file needs to say /photographer in its route to match'







//HOME PAGE
router.get('/home', (req, res) => {
  Photographer.find({}, (err, foundPhotographer) => {
    res.render('index.ejs', {
      photographer: foundPhotographer
    });
  });
});


//NEW PAGE
router.get('/new', (req, res) => {
  res.render('new.ejs')
})




//SHOW ROUTE (after new page so you can see it)
router.get('/:id', (req, res) => {
Photographer.findById(req.params.id, (err, showPhotographer) => {
  res.render('show.ejs', {
    photographer: showPhotographer
  });
});
});



//you are posting to the show page. This creates something.
router.post('/home/', (req, res) => {
  console.log(req.body);
  Photographer.create(req.body, (err, createdPhotographer) => {
    console.log(createdPhotographer, ' this is the created photographer');
    res.redirect('/photographer/home')
  });
});



//EDIT PAGE
//#1: The get route allows us to get to the edit.ejs page per id.
router.get('/:id/edit', (req, res) => {
  Photographer.findById(req.params.id, (err, editPhotographer) => {
    res.render('edit.ejs', {
      photographer: editPhotographer
    })
  })
})




//PUT ROUTE updates the id
router.put('/update', (req, res) => {
  Photographer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPhotographer) => {
    res.redirect('/photographer');
  });
});


//DELETE ROUTE
router.delete('/:id/', (req, res) => {
  Photographer.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
    res.redirect('/photographer/home')
  })
});





module.exports = router;
