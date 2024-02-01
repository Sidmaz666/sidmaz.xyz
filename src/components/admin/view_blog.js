import {FaPenToSquare, FaTriangleExclamation, FaXmark} from "react-icons/fa6";
import {useFormState} from "react-dom"
import {useEffect,useState} from "react";
import {FaCheck, FaEye, FaTrash} from "react-icons/fa";
import BlogPreview from "./preview_blog";
import EditBlog from "./update_blog";
import { publish, unpublish } from "../server/admin/publish";
import delete_blog from "../server/admin/delete_blog";

export default function ViewBlog({blogs,comments,topics,setMessage}) {
  const [isPreview,setPreview] = useState({preview:false,data:null})
  const [isEdit,setEdit] = useState({show:false,data:null})
  const [pub_state,pub_action] = useFormState(publish,{})
  const [unpub_state,unpub_action] = useFormState(unpublish,{})
  const [delete_state,delete_action] = useFormState(delete_blog,{})
  useEffect(() => {
    if(pub_state.message && pub_state.message.length > 5){
	setMessage({
	    show:true,
	    message: pub_state.message
	  })
    }
  },[pub_state])
  useEffect(() => {
    if(unpub_state.message && unpub_state.message.length > 5){
	setMessage({
	    show:true,
	    message: unpub_state.message
	  })
    }
  },[unpub_state])
  useEffect(() => {
    if(delete_state.message && delete_state.message.length > 5){
	setMessage({
	    show:true,
	    message: delete_state.message
	  })
    }
  },[delete_state])
  return(
    <div className="p-5 pt-3 text-3xl w-full">
      {
	blogs && JSON.parse(blogs).length > 0 ?
	 JSON.parse(blogs).map((blog) => {
	  return (
	  <div key={blog.blog_id} className="p-1 mt-5 mb-5 w-full
	    flex justify-between bg-smoky-black-700 text-liberty-300 rounded-md items-center">
			<div className="flex flex-col capitalize p-1">
			    <span className="text-2xl">
	    			{ blog.blog_title } ({ blog.blog_topic })
			    </span>
			    <span className="text-sm ">
	    			{ blog.blog_description }
			    </span>
			  </div>
			<div className="flex space-x-3">
			  <button
	    			onClick={() => {
				setPreview({preview:true,
				data:{ 
				  blog_title:blog.blog_title,
				  blog_description:blog.blog_description,
				  blog_topic:blog.blog_topic,
				  blog_content:blog.blog_content,
				  blog_id:blog.blog_id,
				  comments:comments
				    }
				   }
				  )}
				}
	    			className="mr-5 hover:text-liberty-500" type="submit">
			      <FaEye/>
			  </button>
	    		<div>
			  <button className="mr-5 hover:text-sky-300" type="submit"
	    			onClick={() => {
				setEdit({show:true,
				data:{ 
				  blog_title:blog.blog_title,
				  blog_description:blog.blog_description,
				  blog_topic:blog.blog_topic,
				  blog_content:blog.blog_content,
				  blog_id:blog.blog_id,
				    }
				   }
				  )}
				}
	    		       >
			    <FaPenToSquare/>
			  </button>
	    		</div>
	    		{ blog.blog_publish == true ?
			  <form action={unpub_action}>
			  <input type="hidden" value={blog.blog_id} name="blog_id"/>
			  <button className="mr-5 hover:text-rose-500" type="submit">
			    <FaXmark/>
			  </button>
			  </form>
			  :
			  <form action={pub_action}>
			  <input type="hidden" value={blog.blog_id} name="blog_id"/>
			  <button className="mr-5 hover:text-green-500" type="submit">
			    <FaCheck/>
			  </button>
			  </form>
			 }
			  <form action={delete_action}>
			  <input type="hidden" value={blog.blog_id} name="blog_id"/>
			  <button className="mr-5 hover:text-rose-500" type="submit">
			      <FaTrash/>
			  </button>
			  </form>
		      </div>
	    	   </div>
		)
	     }) : 
	      <span className="text-french-raspberry-600 text-xl font-semibold mt-5 p-2 flex space-x-">
		<FaTriangleExclamation/>
		<span>
		  No Blog Created!
		</span>
	      </span>
	}
    { isPreview && isPreview.preview == true && isPreview.data !== null ?
	<BlogPreview data={JSON.stringify(isPreview.data)} setPreview={setPreview} setMessage={setMessage} />
	: null
    }
    { isEdit && isEdit.show == true && isEdit.data !== null ?
	<EditBlog data={JSON.stringify(isEdit.data)} setEdit={setEdit} topics={topics} setMessage={setMessage} />
	: null
    }
  </div>
  )
}
