var mongoose = require('mongoose');
var objectId = mongoose.Schema.Types.ObjectId;
var moment = require('moment');
var _ = require('lodash');

var sharedPostSchema = mongoose.Schema({
    author: {type: objectId, ref: 'User'},
    sharedWith: {type: objectId, ref: 'User'},
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
    tags: [{type: String}],
});

Post = mongoose.model('SharedPost', sharedPostSchema);
module.exports = Post;