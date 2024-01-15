const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  blog_id: { type: String, required: true },
  comment_id: { type: String, unique: true, required: true },
  comment: { type: String, required: true },
  comment_creation: { type: Date ,default: new Date()}
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;

