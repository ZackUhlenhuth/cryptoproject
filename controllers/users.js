var User = require('../models/user');

var users = {};

users.showAllPublickKeys = function(req, res) {
    User.find({}, null, {sort: {username: 1}})
    .select({ "username": 1, "publicKey":1, "_id": 0})
    .exec(function(err, users) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(users);
    });
}

module.exports = users;