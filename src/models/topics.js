import mongoose from "mongoose"

const topicsSchema = new mongoose.Schema({
  topic_id: { type: String, unique: true, required: true },
  topic_title: { type: String, unique: true, required: true },
  topic_description: { type: String, required: true },
  topic_creation: {type: Date, default: new Date()}
});

const Topics = mongoose.models.topics || mongoose.model('topics', topicsSchema);
export default Topics;

