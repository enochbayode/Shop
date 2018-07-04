const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = Schema({
  email: String,
  password: String,
  username: String,
  image: String,
  posts: [
  	{
  		type: Schema.Types.ObjectId,
  		ref: 'Post'
  	}
  ]
  // - reviews - array of objects ref Review
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
