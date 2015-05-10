var _       = require('underscore');
var User    = require('../models/user');

var users = {};

users.showAllUsers = function(req, res) {
    User.find({}, null, {sort: {username: 1}})
    .select({ "username": 1, "_id": 0})
    .exec(function(err, users) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(_.map(users, function(u) {
            return u.username
        }));
    });
}

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