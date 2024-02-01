"use client"
import {useEffect, useState} from "react";
import "highlight.js/styles/atom-one-dark.min.css"
import hljs from "highlight.js";
import {FaArrowLeft} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import SaveButton from "../admin/save_button";
import post_comment from "../server/blog/comment";
import {useFormState} from "react-dom"


export default function BlogView({comments,blog}){
  const [state,post_comment_action] = useFormState(post_comment,{})
  const [isMessage,setMessage] = useState({show:false,message:""})
  useEffect(() => {
    if(state.message && state.message.length > 5){
	setMessage({
	    show:true,
	    message: state.message
	  })
    }
    setTimeout(() => {
    	hljs.highlightAll()
    },100);
  },[state])
  const comment_date = (date) => {
       return date.toString().split("T")[0]
  }
  return (
	<div className="w-screen h-screen bg-smoky-black-800 overflow-x-hidden overflow-y-auto
	  absolute top-0 left-0 flex items-center flex-col space-y-5"
	  >
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
	  <div className="flex pt-5 pl-5 md:justify-start justify-end w-full">
	    <Link className="text-2xl text-liberty-200 hover:text-rose-500 mr-5"
    		href="/blog"	
    		>
		  <FaArrowLeft/>
		</Link>
	  </div>
	  <div className="text-start w-[300px] md:w-[600px] lg:[800px] xl:w-[80%] flex flex-col text-liberty-200">
	    <span className="font-semibold text-4xl mb-5">
		    { JSON.parse(blog).blog_title }
	    </span>
	        <span className="font-space italic md:text-md text-sm pt-2 pb-2">
			By Sidhartha Mazumder
    		</span>
	    <div>
    		<div className="revert-tailwind blog-container"
    		dangerouslySetInnerHTML={{__html:JSON.parse(blog).blog_content}}>
    		</div>
    		<form action={post_comment_action}>
    		<input type="hidden" value={JSON.parse(blog).blog_id} name="blog_id"/>
    		<textarea type="text" name="blog_comment"
    		className="p-2 h-[100px] text-md w-full bg-smoky-black-700
    		mb-5 mt-8 text-liberty-400 rounded-md placeholder:italic resize-none"
    		placeholder="Add Your Comment here ~"></textarea>
		<SaveButton text={"Comment"} preText={"Posting..."}/>
    		</form>
	      <div
		style={{
		  backgroundColor:"#40403f90",
		  borderRadius:"0.375rem",padding: "0.75rem",
		  marginTop:"2.5rem", marginBottom: "1rem"
		}}
		>
		<span className="font-semibold text-xl text-liberty-200">Comments:</span>
	      {
		JSON.parse(comments).length > 0 ? 
		JSON.parse(comments).map((comment) => {
		  return (
		    <div className="p-2 flex justify-between text-liberty-300
		      bg-smoky-black-800/50 rounded-md mt-3 mb-3 items-center"
		      key={comment.comment_creation}
		     >
		    <span>
		      {comment.comment} - ({comment_date(comment.comment_creation)})
		    </span>
		    </div>
		  )
		})
		:
		  <span className="text-french-raspberry-600 text-xl font-semibold mt-5 p-2">
		    Be the first to comment!
		  </span>
	      }
	      </div>
	    </div>
	  </div>
	</div>
  )
}
