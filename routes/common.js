const express = require("express")
const crypto = require("crypto")
const app = express.Router()

const db_connect = require("../functions/db_connect")
db_connect()

const Blogs = require("../schema/blogs")
const Topics = require("../schema/topics")
const Comment = require("../schema/comment")


app.get("/", async (req,res) => {
    let blogs = await Blogs.find();
    let topics = await Topics.find();
  try {
    let query = { blog_publish: true };
    const topicParam = req.query.topic_id;
    if (topicParam) {
      const topicExists = await Topics.findOne({ topic_id: topicParam });
      if (topicExists) {
        query.blog_topic = topicParam;
      } else {
        return res.render("blogs/blogs", { message: 'Topic not found' });
      }
    }
    blogs = await Blogs.find(query).sort({ created_at: -1 });
    topics = await Topics.find();
    res.render("blogs/blogs" ,{blogs,topics});
  } catch (error) {
    res.render("blogs/blogs" ,{message: error.message,blogs,topics});
  }
})

app.get("/view/:blog_id", async (req,res) => {
    let blogs = await Blogs.find();
    let topics = await Topics.find();
  try {
    const blogParam = req.params.blog_id;
    const blog = await Blogs.findOne({ blog_id: blogParam, blog_publish: true });
    if(!blog){
        return res.render("blogs/blog", { message: 'Blog not found' });
    }
    const related_blogs = await Blogs.find({ 
      blog_topic: blog.blog_topic,
      blog_publish: true,
      blog_id: { $ne:blogParam }
      }).sort({ created_at: -1 })
    const comments = await Comment.find({ blog_id: blogParam }).sort({created_at: -1});
    res.render("blogs/blog" ,{blog,related_blogs,comments});
  } catch (error) {
    res.render("blogs/blogs" ,{message: error.message,blogs,topics});
  }
})

app.post('/post_comment/:blog_id', async (req, res) => {
    let blogs = await Blogs.find();
    let topics = await Topics.find();
  try {
    const blogId = req.params.blog_id;
    const comment  = req.body.comment_content;
    if(comment == undefined || comment.length < 3){ return res.redirect(`/blogs/view/${blogId}`) }
    const newComment = new Comment({
      blog_id: blogId,
      comment_id: crypto.randomUUID().replaceAll("-",""),
      comment: comment,
    });
    await newComment.save();
    res.redirect(`/blogs/view/${blogId}`);
  } catch (error) {
    res.render("blogs/blogs" ,{message: error.message,blogs,topics});
  }
});


module.exports = app
