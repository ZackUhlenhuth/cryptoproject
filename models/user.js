//User schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
	name: String,
	password: String
});

User = mongoose.model('User', userSchema);
module.exports = User;