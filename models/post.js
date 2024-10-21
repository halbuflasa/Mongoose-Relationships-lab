// models/todo.js
const mongoose = require('mongoose');


const commentsSchema = new mongoose.Schema({
    comment:String, 
  });

const PostSchema = new mongoose.Schema({
    caption: String,
    likes: Number, 
    comments: [commentsSchema],
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;