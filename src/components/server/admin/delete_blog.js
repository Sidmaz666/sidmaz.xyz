"use server"
import connect from "@/config/connect"
import Blogs from "@/models/blogs"
import Comments from "@/models/comment"
import {revalidatePath} from "next/cache"

export default async function delete_blog(state,data){
    await connect()
    const blogId = data.get("blog_id");
    const existingBlog = await Blogs.findOne({ blog_id: blogId });
    if (!existingBlog) {
      return { message: 'Blog Not Found'};
    }
    await Blogs.deleteOne({ blog_id: blogId });
    const existComments = await Comments.find({blog_id:blogId})
    if(existComments){
      await Comments.deleteMany({ blog_id: blogId })
    }
    revalidatePath("/admin/dashboard")
    return { message: 'Blog deleted successfully'};
}
