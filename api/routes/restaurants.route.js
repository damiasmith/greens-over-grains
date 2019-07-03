const express = require('express');
const app = express();
const restaurantRoutes = express.Router();

let Restaurant = require('../models/restaurants');

// Defined store route
restaurantRoutes.route('/').post(function (req, res) {
  let restaurant = new Restaurant(req.body);
  restaurant.save()
    .then(restaurant => {
      res.status(200).json({'restaurant': 'restaurant in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
restaurantRoutes.route('/').get(function (req, res) {
    Restaurant.find(function (err, restaurants){
    if(err){
      console.log(err);
    }
    else {
      res.json(restaurants);
      console.log(restaurants);
    }
  });
});

restaurantRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Restaurant.findById(id, function (err, restaurant){
      res.json(restaurant);
  });
});

module.exports = restaurantRoutes;