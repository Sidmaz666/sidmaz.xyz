import connect from '@/config/connect';
import Topics from '@/models/topics'
import BlogNav from "@/components/blogs/nav"
import BlogList from '@/components/blogs/blog_list';

export const metadata = {
  title: 'SIDMAZ ~ BLOGS',
  description: 'TECHNICAL BLOGS FROM SIDHARTHA MAZUMDER',
}

export default async function Blogs(){
"use server"
await connect()
const topics = JSON.stringify(await Topics.find().sort({topic_creation:-1}))
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto
      bg-smoky-black-800 text-liberty-300 relative
     ">
	<BlogNav topics={topics}/>
    	<BlogList/>
    </div>
  )
}
