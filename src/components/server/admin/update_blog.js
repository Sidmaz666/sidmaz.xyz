"use server"
import connect from "@/config/connect"
import Blogs from "@/models/blogs"
import Topics from "@/models/topics"
import {revalidatePath} from "next/cache"

export default async function update_blog(state,data){
  const blog_id = data.get("blog_id")
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
    const existingBlog = await Blogs.findOne({ blog_id });
    if (!existingBlog) {
      return { message: 'Blog Does Not Exist'};
    }
    existingBlog.blog_title = blog_title || existingBlog.blog_title;
    existingBlog.blog_content = blog_content || existingBlog.blog_content;
    existingBlog.blog_topic = blog_topic || existingBlog.blog_topic;
    existingBlog.blog_description = blog_description || existingBlog.blog_description;
    await existingBlog.save();
    revalidatePath("/admin/dashboard")
    return {message: "Blog Updated Successfully!"}
}
