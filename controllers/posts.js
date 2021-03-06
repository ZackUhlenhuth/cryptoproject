var Users = require('../models/user');
var Post = require('../models/post');
var SharedPost = require('../models/sharedPost');
var moment = require('moment');

var posts = {};

posts.show = function(req, res) {
    Post.find({
        author: req.user._id,
        _id: req.params.id
    }).populate('author', 'username')
    .exec(function(err, posts) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(posts[0]);
    });
}

posts.showShared = function(req, res) {
    SharedPost.find({
        sharedWith: req.user._id,
        _id: req.params.id
    }).populate('author', 'username')
    .populate('sharedWith', 'username')
    .exec(function(err, posts) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(posts[0]);
    });
}


posts.showAll = function(req, res) {
    Post.find({author: req.user._id}, null, {sort: {date: -1}})
    .populate('author', 'username')
    .exec(function(err, posts) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(posts);
    });
}

posts.showAllShared = function(req, res) {
    SharedPost.find({sharedWith: req.user._id}, null, {sort: {date: -1}})
    .populate('author', 'username')
    .populate('sharedWith', 'username')
    .exec(function(err, posts) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(posts);
    });
}


posts.create = function(req, res) {
    console.log(req)
    var postObj = {
        author: req.user._id,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        date: moment(),
        mac_hex: req.body.mac_hex,
        hint: req.body.hint,
    };
    console.log("=======================================================")
    console.log(postObj)
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

posts.createShared = function(req, res) {

    Users.findOne({username : req.body.sharedWith}, function(err, user) {

        var sharedPostObj = {
            author: req.user._id,
            sharedWith: user,
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags,
            date: moment(),
        };

        SharedPost.create(sharedPostObj, function(err, post) {
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
    });
}

posts.edit = function(res, res) {
    Post.edit(req.params.id, req.user._id, req.body, function(err, post) {
        if (err) {
            return res.status(err.statusCode || 500).send(err);
        }
        return res.status(200).send(post);
    });
}

posts.delete = function(req, res) {
    Post.delete(req.params.id, req.user._id, function(err, response) {
        if (err) {
            res.status(err.statusCode || 500).send(err);
            return;
        }
        res.status(200).send(response);
    });
}

module.exports = posts;