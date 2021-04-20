const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const foodItemRoute = require('./routes/food-items.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Cannot connect to the database'+ err)}
);

const restaurantRoute = require('./routes/restaurants.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Cannot connect to the database'+ err)}
);

const app = express();
const port = process.env.PORT || 8080;
const host = '0.0.0.0';
app.use(bodyParser.json());
app.use(cors());
app.use('/food-items', foodItemRoute);
app.use('/restaurants', restaurantRoute);

app.listen(port, host);
console.log('Listening on port ' + port + host);
