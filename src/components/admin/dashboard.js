"use client"
import Sidebar from "./sidebar";
import Analytics from "./analytics";
import {useState} from "react";
import CreateBlog from "./create_blog";
import CreateTopic from "./create_topic";
import ViewTopic from "./view_topic";
import ViewBlog from "./view_blog";
import {FaXmark} from "react-icons/fa6";

export const pages = [
  "add_blog",
  "add_topic",
  "view_blog",
  "view_topic"
]

export default function Dashboard({username, blogs, topics, comments}) {
  const [isPage,setPage] = useState(pages[0])
  const [isMessage,setMessage] = useState({
    show: false,
    message: ""
  })
  return(
    <main
	className="bg-smoky-black-900/90 w-screen h-screen 
	overflow-hidden text-smoky-black-200 flex justify-center items-start">
	<Sidebar username={username} setPage={setPage}/>
	<div className="flex flex-col w-full h-full">
    	  {
	    isMessage.show == true ? ( 
	      <div className="flex w-full justify-center
	    	items-start relative p-2 bg-liberty-700
	    	font-semibold text-liberty-100">
	      <span>{ isMessage.message }</span>
	      <button
		onClick={() => {setMessage({show:false,message:""}) }}
		className="absolute top-0 right-0 p-2 pt-3 pr-5">
		<FaXmark/>
	      </button>
	    </div> )
	     : null
	  }
	  <Analytics blogs={blogs} topics={topics} comments={comments}/>
    	  <div className="w-full h-full overflow-x-hidden overflow-y-auto">
    		{isPage == pages[0] ? <CreateBlog topics={topics} setMessage={setMessage}/> : null }
    		{isPage == pages[1] ? <CreateTopic setMessage={setMessage}/> : null }
    		{isPage == pages[2] ? <ViewBlog blogs={blogs} comments={comments}
		  setMessage={setMessage} topics={topics}/> : null }
    		{isPage == pages[3] ? <ViewTopic topics={topics} setMessage={setMessage}/> : null }
    	</div>
      </div>
    </main>
  )
}
