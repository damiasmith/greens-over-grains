const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restaurants = new Schema({

  restaurantName: {
    type: String
  },
  address: {
    type: Array
  },
  hours: {
    type: Array
  },
  phoneNumber: {
    type: String
  },
  website: {
    type: String
  },
  foodItems: {
    type: Array
  }
},{
    collection: 'restaurants'
});

module.exports = mongoose.model('restaurants', Restaurants);