import {useEffect, useState} from "react";
import {FaTrash} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import "highlight.js/styles/atom-one-dark.min.css"
import hljs from "highlight.js";
import delete_comment from "../server/admin/delete_comment";
import {useFormState} from "react-dom"

export default function BlogPreview({setPreview,data,setMessage}){
  const [state,delete_comment_action] = useFormState(delete_comment,{})
  const [isComment,setComment] = useState([])
  useEffect(() => {
    console.log(JSON.parse(JSON.parse(data).comments))
    const comments = []
    if(JSON.parse(JSON.parse(data).comments).length > 0){
      Array.from(JSON.parse(JSON.parse(data).comments)).forEach((comment) => {
      if(comment.blog_id == JSON.parse(data).blog_id){
	if(comment.comment_creation !== undefined){
	  comments.push(comment)
	}
      }
    })
  }
    setComment(comments)
  },[])
const comment_date = (date) => {
   return date.toString().split("T")[0]
}
  useEffect(() => {
    if(state.message && state.message.length > 5){
	setMessage({
	    show:true,
	    message: state.message
	})
	setPreview({preview:false,data:null})
    }
    setTimeout(() => {
    	hljs.highlightAll()
    },100);
  },[state])
  return (
	<div className="w-screen h-screen bg-smoky-black-800 overflow-x-hidden overflow-y-auto
	  absolute top-0 left-0 flex items-center flex-col space-y-5"
	  >
	  <div className="flex pt-3 justify-end w-full">
	    <button className="text-3xl text-liberty-200 hover:text-rose-500 mr-5"
	    onClick={() => {setPreview({preview:false,data:null})}}>
		  <FaXmark/>
		</button>
	  </div>
	  <div className="text-start w-[300px] md:w-[600px] lg:[800px] xl:w-[80%] flex flex-col">
	    <span className="font-semibold text-4xl mb-5">
		    { JSON.parse(data).blog_title }
	    </span>
	    <div>
    		<div className="revert-tailwind blog-container"
    		dangerouslySetInnerHTML={{__html:JSON.parse(data).blog_content}}>
    		</div>
	      <div
		style={{
		  backgroundColor:"#40403f90",
		  borderRadius:"0.375rem",padding: "0.75rem",
		  marginTop:"4.5rem", marginBottom: "1rem"
		}}
		>
		<span className="font-semibold text-xl">Comments:</span>
	      {
		isComment.length > 0 ? 
		isComment.map((comment) => {
		  return (
		    <div className="p-2 flex justify-between text-liberty-300
		      bg-smoky-black-800/50 rounded-md mt-3 mb-3 items-center"
		      key={comment.comment_creation}
		     >
		      <span>
			{comment.comment} - {comment_date(comment.comment_creation)}
		      </span>
		      <form action={delete_comment_action}>
		      <input type="hidden" name="comment_id" value={comment.comment_id}/>
		      <button className="mr-3 hover:text-rose-500" type="submit">
			<FaTrash/>
		      </button>
		      </form>
		    </div>
		  )
		})
		:
		  <span className="text-french-raspberry-600 text-xl font-semibold mt-5 p-2">
		    No Comments Yet!
		  </span>
	      }
	      </div>
	    </div>
	  </div>
	</div>
  )
}
