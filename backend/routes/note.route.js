const express = require('express');
const noteRoute = express.Router();

// Note model
let Note = require('../models/Note');

// Add Note
noteRoute.route('/create').post((req, res, next) => {
  console.log('create', req)
  Note.create(req.body.data, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Note
noteRoute.route('/get').get((req, res) => {
  Note.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      // console.log('data', res)
      // res(data)
      res.json(data)
    }
  })
})

// Get single Note
noteRoute.route('/read/:id').get((req, res) => {
  Note.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Note
noteRoute.route('/update/:id').put((req, res, next) => {
  Note.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Note
noteRoute.route('/delete/:id').delete((req, res, next) => {
  Note.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = noteRoute;
