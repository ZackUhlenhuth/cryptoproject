var Post = require('../models/post');

var posts = {};

posts.show = function(req, res) {
    var postId = req.params.id;
    Post.findById(postId, function(err, post) {

    });
}

posts.showAll = function(req, res) {

}

posts.create = function(req, res) {

}

posts.edit = function(res, res) {

}

posts.delete = function(req, res) {

}

module.exports = posts;