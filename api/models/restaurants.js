const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restaurants = new Schema({
  _id: {
      type: String
  },
  restaurantName: {
    type: String
  },
  address: {
    type: String
  },
  hours: {
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