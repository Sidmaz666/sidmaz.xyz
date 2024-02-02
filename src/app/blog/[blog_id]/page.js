"use server"
import connect from '@/config/connect';
import Blogs from '@/models/blogs';
import Comments from '@/models/comment';
import BlogView from '@/components/blogs/view_blog';
import { notFound } from 'next/navigation'

await connect()

export async function generateMetadata({ params }){
  const blog = await Blogs.findOne({ blog_id: params.blog_id })
  if(!blog){
    return notFound()
  }
  return {
    title: blog.blog_title,
    description: blog.blog_description
  }
}

export default async function ViewBlog({ params }){
  const blog = await Blogs.findOne({ blog_id: params.blog_id })
  if(!blog){
    return notFound()
  }
  const comments = await Comments.find({ blog_id: params.blog_id }).sort({blog_creation:-1})
  const related_blogs = await Blogs.find({
  blog_topic: blog.blog_topic,
  blog_publish: true,
  blog_id: { $ne:params.blog_id }
  }).sort({ blog_creation: -1 }).limit(5)
  return (
    <>
      <BlogView blog={JSON.stringify(blog)} comments={JSON.stringify(comments)} related_blogs={JSON.stringify(related_blogs)} />
   </>
  )
}

