import mongoose from "mongoose"

const blogsSchema = new mongoose.Schema({
  blog_id: { type: String, unique: true, required: true },
  blog_title: { type: String, unique: true, required: true },
  blog_topic: { type: String, required: true },
  blog_description: { type: String, required: true },
  blog_content: { type: String, required: true },
  blog_publish: { type: Boolean, default: false},
  blog_creation: {type: Date, default: new Date()}
});

const Blogs = mongoose.models.blogs || mongoose.model('blogs', blogsSchema);
export default Blogs
