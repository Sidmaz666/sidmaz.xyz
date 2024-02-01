import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import sessionOptions from "@/config/session"
import connect from '@/config/connect';
import Blogs from '@/models/blogs';
import Topics from '@/models/topics'
import Comments from '@/models/comment'
import Dashboard from '@/components/admin/dashboard';

export const metadata = {
  title: "SIDMAZ ~ ADMIN",
  description: "SIDMAZ ADMIN PANEL"
}

export default async function AdminPanel(){
"use server"
await connect()
const session = await getIronSession(cookies(), sessionOptions);
const blogs = JSON.stringify(await Blogs.find().sort({blog_creation:-1}))
const topics = JSON.stringify(await Topics.find().sort({topic_creation:-1}))
const comments = JSON.stringify(await Comments.find().sort({comment_creation:-1}))
  return (
    <Dashboard username={session?.user?.username} blogs={blogs} topics={topics} comments={comments} />
  )
}
