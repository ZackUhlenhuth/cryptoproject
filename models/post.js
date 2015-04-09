var mongoose = require('mongoose');
var objectId = mongoose.Schema.Types.ObjectId;
var moment = require('moment');

var postSchema = mongoose.Schema({
    author: {type: objectId, ref: 'User'},
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: [{type: String, required: true}],
    hint: {type: String, required: true}
});

Post = mongoose.model('Post', postSchema);

module.exports = Post;