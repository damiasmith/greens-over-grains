const express = require('express');
const app = express();
const foodItemRoutes = express.Router();

let FoodItem = require('../models/food-items');

// Defined store route
foodItemRoutes.route('/').post(function (req, res) {
  let foodItem = new FoodItem(req.body);
  foodItem.save()
    .then(foodItem => {
      res.status(200).json({'foodItem': 'fooditem in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
foodItemRoutes.route('/').get(function (req, res) {
    let query = req.query.restaurantId? {restaurantId: req.query.restaurantId}: {}
    FoodItem.find(query, function (err, foodItems){
    if(err){
      console.log(err);
    }
    else {
      res.json(foodItems);
    }
  });
});

module.exports = foodItemRoutes;