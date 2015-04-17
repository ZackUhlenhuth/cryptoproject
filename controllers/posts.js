var Post = require('../models/post');
var moment = require('moment');

var posts = {};

posts.show = function(req, res) {
    Post.find({
        author: req.session.user._id,
        _id: req.params.postId
    }, function(err, post) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(post);
    });
}

posts.showAll = function(req, res) {
    console.log(req.session.user);
    Post.find({author: req.session.user._id}, function(err, posts) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(posts);
    });
}

posts.create = function(req, res) {
    var postObj = {
        author: req.session.user._id,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        date: moment(),
        hint: req.body.hint,
    };
    Post.create(postObj, function(err, post) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        } else{
            post.populate('author', 'username', function(err, populatedPost) {
                if (err) {
                    res.status(err.statusCode || 500).send(err);
                } else{
                    res.status(201).send(populatedPost);
                }
            });
        }
    });
}

posts.edit = function(res, res) {
    Post.edit(req.params.postId, req.session.user._id, req.body, function(err, post) {
        if (err) {
            return res.status(err.statusCode || 500).send(err);
        }
        return res.status(200).send(post);
    });
}

posts.delete = function(req, res) {
    Post.delete(req.params.postId, req.session.user._id, function(err, response) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(response);
    });
}

module.exports = posts;