const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = Schema({
  title: String,
  price: String,
  description: String,
  images: [ String ],
  location: String,
  lat: String,
  lng: String,
  reviews: [
  	{
  		type: Schema.Types.ObjectId,
  		ref: 'Review'
  	}
  ],
  author: {
  	type: Schema.Types.ObjectId,
  	ref: 'User'
  }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
