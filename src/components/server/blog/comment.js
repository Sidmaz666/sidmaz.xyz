"use server"
import connect from "@/config/connect"
import Comments from "@/models/comment"
import crypto from "crypto"
import {revalidatePath} from "next/cache"

export default async function post_comment(state,data){
    const blog_id = data.get("blog_id")
    const comment = data.get("blog_comment")
    const comment_id = crypto.randomUUID().replace("-", "");
    const path = `/blog/${blog_id}`
    if(comment.length < 1){
      return {message: "Invalid Comment!"}
    }
    await connect()
    const newComment = new Comments({ comment_id, blog_id, comment });
    await newComment.save();
    revalidatePath(path)
    return { message: 'Comment Posted!'};
}

