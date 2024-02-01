"use client"
import {useEffect, useState} from "react"

export default function Analytics({blogs,topics,comments}){
  const [isPublished,setPublished] = useState(0)
  useEffect(() => {
     JSON.parse(blogs).forEach((b) => { if(b.blog_publish == true){ setPublished(isPublished+1) } })
  },[])
  return(
      <div className="flex w-full justify-start items-center font-semibold">
	<div className="bg-amazon-800 p-1 w-full">
	     Blogs:  { JSON.parse(blogs).length }
	</div>
	<div className="bg-teal-800 p-1 w-full">
	    Topics:  { JSON.parse(topics).length }
	</div>
	<div className="bg-cyan-800 p-1 w-full">
	    Comments: { JSON.parse(comments).length }
	</div>
	<div className="bg-pink-800 p-1 w-full">
	    Published: { isPublished }
	</div>
    </div>
  )
}
