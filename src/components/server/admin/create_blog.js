"use server"
import connect from "@/config/connect"
import Blogs from "@/models/blogs"
import Topics from "@/models/topics"
import {revalidatePath} from "next/cache"

export default async function create_blog(state,data){
  const blog_title = data.get("blog_title")
  const blog_content = data.get("blog_editor")
  const blog_description = data.get("blog_description")
  let blog_topic = data.get("blog_topic")
  if(blog_topic == null || blog_topic.length <= 0){
    blog_topic = "default"
  }
  if(blog_title.length <= 2){
    return {message: "Add Blog Title!"}
  }
  if(blog_content.length <= 0){
    return {message: "Add Blog Content!"}
  }
  if(blog_description.length <= 0){
    return {message: "Add Blog Description!"}
  }
  await connect()
  const existingTopic = await Topics.findOne({ topic_id: blog_topic });
  if (!existingTopic) {
    return { message: 'Invalid blog topic'};
  }
  const existingBlog = await Blogs.findOne({ blog_title });
  if (existingBlog) {
    return { message: 'Blog Already Exist'};
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
  revalidatePath("/admin/dashboard")
  return {message: "Blog Saved Successfully!"}
}
