"use server"
import connect from "@/config/connect"
import Blogs from "@/models/blogs"
import {revalidatePath} from "next/cache"

export async function unpublish(state,data){
    await connect()
    const blogId = data.get("blog_id");
    const existingBlog = await Blogs.findOne({ blog_id: blogId });
    if (!existingBlog) {
      return { message: 'Blog Not Found'};
    }
    existingBlog.blog_publish = false;
    await existingBlog.save();
    revalidatePath("/admin/dashboard")
    return { message: 'Blog Unpublished successfully'};
}

export async function publish(state,data){
    await connect()
    const blogId = data.get("blog_id");
    const existingBlog = await Blogs.findOne({ blog_id: blogId });
    if (!existingBlog) {
      return { message: 'Blog Not Found'};
    }
    existingBlog.blog_publish = true;
    await existingBlog.save();
    revalidatePath("/admin/dashboard")
    return { message: 'Blog published successfully'};
}
