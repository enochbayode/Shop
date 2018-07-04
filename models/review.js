const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ReviewSchema = Schema({
  body: String,
  author: {
  	type: Schema.Types.ObjectId,
  	ref: 'User'
  }
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
