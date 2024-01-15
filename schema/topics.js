const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema({
  topic_id: { type: String, unique: true, required: true },
  topic_title: { type: String, unique: true, required: true },
  topic_description: { type: String, required: true },
});

const Topics = mongoose.model('topics', topicsSchema);

module.exports = Topics;

