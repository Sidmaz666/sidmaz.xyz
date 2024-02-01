"use server"
import connect from "@/config/connect"
import Topics from "@/models/topics"
import {revalidatePath} from "next/cache"

export default async function delete_topic(state,data){
    await connect()
    const topicId = data.get("topic_id");
    const existingTopic = await Topics.findOne({ topic_id: topicId });
    if (!existingTopic) {
      return { message: 'Topic Not Found'};
    }
    await Topics.deleteOne({ topic_id: topicId });
    revalidatePath("/admin/dashboard")
    return { message: 'Topic deleted successfully'};
}
