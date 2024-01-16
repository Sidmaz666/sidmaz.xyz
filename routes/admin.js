const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express.Router()
require("dotenv").config()

const authenticateToken = require("../functions/admin_auth")
const User = require("../schema/user");
const Blogs = require("../schema/blogs");
const Topics = require("../schema/topics");
const Comment = require("../schema/comment")


app.get('/', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
  try {
    const blogs = await Blogs.find();
    const topics = await Topics.find();
    const comments = await Comment.find();
    res.render('admin', { username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to log out' });
    }
    res.redirect('/admin');
  });
});


app.post("/login",async (req,res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.redirect("/admin");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SIGN, { expiresIn: '24h' });
    req.session.token = token;
    res.redirect("/admin");
  } catch (error) {
    res.render("admin",{ message: error.message });
  }
})

app.post("/save_blog", authenticateToken, async (req,res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
   try {
    const { blog_title, blog_topic, blog_description, blog_content } = req.body;
    const existingTopic = await Topics.findOne({ topic_id: blog_topic });
    if (!existingTopic) {
      return res.render("admin",{ message: 'Invalid blog topic', username: user.username, blogs, topics, comments });
    }
    const existingBlog = await Blogs.findOne({ blog_title });
    if (existingBlog) {
      return res.render("admin",{ message: 'Blog Already Exist', username: user.username, blogs, topics, comments });
    }
    const blog_id = blog_title.toLowerCase().replace(/\s+/g, '_').replace(/[^\w\s]/g, '_');
    const newBlog = new Blogs({
      blog_id,
      blog_title,
      blog_topic,
      blog_description,
      blog_content,
    });
    await newBlog.save();
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Blog saved successfully', username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render("admin",{ message: error.message, username: user.username, blogs, topics, comments });
  }
})

app.post('/save_topic', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const { topic_title, topic_description } = req.body;
    const topic_id = topic_title.toLowerCase().replace(/\s/g, '_');
    const existingTopic = await Topics.findOne({ topic_id });
    if (existingTopic) {
      res.render("admin",{ message: 'Topic Already Exist', username: user.username, blogs, topics, comments });
    }
    const newTopic = new Topics({ topic_id, topic_title, topic_description });
    await newTopic.save();
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Topic saved successfully', username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render("admin",{ message: error.message, username: user.username, blogs, topics, comments });
  }
});

app.post('/delete_blog', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const blogId = req.query.blog_id;
    const existingBlog = await Blogs.findOne({ blog_id: blogId });
    if (!existingBlog) {
      res.render("admin",{ message: 'Blog Not Found' , username: user.username, blogs, topics, comments });
    }
    await Blogs.deleteOne({ blog_id: blogId });
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Blog deleted successfully' , username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message, blogs, topics, comments });
  }
});

app.post('/delete_topic', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const topicId = req.query.topic_id;
    const existingTopic = await Topics.findOne({ topic_id: topicId });
    if (!existingTopic) {
      res.render("admin",{ message: 'Topic Not Found' , username: user.username, blogs, topics, comments });
    }
    await Topics.deleteOne({ topic_id: topicId });
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Topic deleted successfully' , username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message, blogs, topics, comments });
  }
});

app.post('/edit_blog/:blog_id', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const blog_id = req.params.blog_id;
    const blog = await Blogs.findOne({ blog_id });
    if (!blog) {
      res.render("admin",{ message: 'Blog Not Found' , username: user.username, blogs, topics, comments });
    }
    const blog_comments = await Comment.find({ blog_id }).sort({created_at: -1});
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin", { edit_blog: true, blog , username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message, blogs, topics, comments });
  }
});

app.post('/delete_comment', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const commentId = req.query.comment_id;
    const existingComment = await Comment.findOne({ comment_id: commentId });
    if (!existingComment) {
      res.render("admin",{ message: 'Comment Not Found' , username: user.username, blogs, topics, comments });
    }
    await Comment.deleteOne({ comment_id: commentId });
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Comment deleted successfully' , username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message, blogs, topics, comments });
  }
});

app.post('/update_blog/:blog_id', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const blogId = req.params.blog_id;
    const { blog_title, blog_content, blog_topic, blog_description } = req.body;
    const existingBlog = await Blogs.findOne({ blog_id: blogId });
    if (!existingBlog) {
      res.render("admin",{ message: 'Blog Not Found' , username: user.username, blogs, topics, comments });
    }
    existingBlog.blog_title = blog_title || existingBlog.blog_title;
    existingBlog.blog_content = blog_content || existingBlog.blog_content;
    existingBlog.blog_topic = blog_topic || existingBlog.blog_topic;
    existingBlog.blog_description = blog_description || existingBlog.blog_description;
    await existingBlog.save();
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Blog updated successfully' , username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message, blogs, topics, comments });
  }
});

app.post('/publish/:blog_id', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const blogId = req.params.blog_id;
    const existingBlog = await Blogs.findOne({ blog_id: blogId });
    if (!existingBlog) {
      res.render("admin",{ message: 'Blog Not Found' , username: user.username, blogs, topics, comments });
    }
    existingBlog.blog_publish = true ;
    await existingBlog.save();
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Blog Published successfully' , username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message, blogs, topics, comments });
  }
});

app.post('/unpublish/:blog_id', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findById(userId);
    let blogs = await Blogs.find();
    let topics = await Topics.find();
    let comments = await Comment.find();
  try {
    const blogId = req.params.blog_id;
    const existingBlog = await Blogs.findOne({ blog_id: blogId });
    if (!existingBlog) {
      res.render("admin",{ message: 'Blog Not Found' , username: user.username, blogs, topics, comments });
    }
    existingBlog.blog_publish = false;
    await existingBlog.save();
    blogs = await Blogs.find();
    topics = await Topics.find();
    comments = await Comment.find();
    res.render("admin",{ message: 'Blog Unpublished successfully' , username: user.username, blogs, topics, comments });
  } catch (error) {
    res.render('admin', { username: user.username, message: error.message, blogs, topics, comments });
  }
});

module.exports = app
