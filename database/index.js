const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/monsters');

let reportSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  city: String,
  country: String,
  description: String,
  location: String,
  state: String,
  state_abbrev: String,
  longitude: Number,
  latitude: Number,
  city_longitude: Number,
  city_latitude: Number
});

let Report = mongoose.model('Report', reportSchema);

module.exports.Report = Report;