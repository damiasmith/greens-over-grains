const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let FoodItems = new Schema({
  itemName: {
    type: String
  },
  restaurantId: {
    type: String
  },
  filters: {
    type: Array
  },
  rating: {
    type: String
  }
 
},{
    collection: 'food_items'
});

module.exports = mongoose.model('fooditems', FoodItems);