"use server"
import connect from "@/config/connect"
import Comments from "@/models/comment"
import {revalidatePath} from "next/cache"

export default async function delete_comment(state,data){
    const comment_id = data.get("comment_id");
    await connect()
    const existingComment = await Comments.findOne({ comment_id });
    if (!existingComment) {
      return { message: 'Comment Not Found'};
    }
    await Comments.deleteOne({ comment_id });
    revalidatePath("/admin/dashboard")
    return { message: 'Comment Deleted!'};
}

