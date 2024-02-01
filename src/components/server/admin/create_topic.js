"use server"
import connect from "@/config/connect"
import Blogs from "@/models/blogs"
import Topics from "@/models/topics"
import {revalidatePath} from "next/cache"

export default async function create_topic(state,data){
    const topic_title = data.get("topic_title")
    const topic_description = data.get("topic_description")
    const topic_id = topic_title.toLowerCase().replace(/\s/g, '_');
    await connect()
    const existingTopic = await Topics.findOne({ topic_id });
    if (existingTopic) {
      return { message: 'Topic Already Exist' };
    }
    const newTopic = new Topics({ topic_id, topic_title, topic_description });
    await newTopic.save();
    revalidatePath("/admin/dashboard")
    return { message: 'Topic saved successfully'};
}
