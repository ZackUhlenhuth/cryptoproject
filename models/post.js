var mongoose = require('mongoose');
var objectId = mongoose.Schema.Types.ObjectId;
var moment = require('moment');
var _ = require('lodash');

var postSchema = mongoose.Schema({
    author: {type: objectId, ref: 'User'},
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
    tags: [{type: String}],
    hint: {type: String},
    shared: [{type: objectId, ref: 'SharedPost'}]
});

postSchema.method('edit', function(editObj, callback) {
    this.set('title', editObj.title || this.title);
    this.set('content', editObj.content || this.content);
    this.set('hint', editObj.hint || this.hint);
    this.set('date', moment());
    // merge tags    
    this.save(function(err, post) {
        return callback(err, post);
    });
});

postSchema.statics.edit = function(postId, userId, editObj, callback) {
    this.find({
        _id: postId,
        author: userId
    }, function(err, post) {
        if (err) {
            return callback(err);
        }
        post.edit(editObj, function(err, post) {
            return callback(err, post);
        });
    });
}


postSchema.statics.delete = function(postId, userId, callback) {
    this.find({
        _id: postId,
        author: userId
    }, function(err, post) {
        if (err) {
            callback(err);
            return;
        }
        post.remove(function(err) {
            callback(null, {message: "Successful deletion!"});
        });
    });
}

Post = mongoose.model('Post', postSchema);
module.exports = Post;