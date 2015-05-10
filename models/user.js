//User schema

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema   = mongoose.Schema;

var userSchema = Schema({
	username: String,
	password: String,
    privateKey: String,
    publicKey: String
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.getPublicKey = function() {
    return {
        username: this.username,
        publicKey: this.publicKey
    }
}



User = mongoose.model('User', userSchema);
module.exports = User;