import { Editor } from "@tinymce/tinymce-react"
import {FaTriangleExclamation, FaXmark} from "react-icons/fa6";
import {useFormState} from "react-dom"
import {useEffect,useRef,useState} from "react";
import SaveButton from "./save_button";
import {EditorConfig} from "./create_blog";
import update_blog from "../server/admin/update_blog";

export default function EditBlog({topics,data,setMessage,setEdit}){
  const [state,update_blog_action] = useFormState(update_blog,{})
  const editorRef = useRef(null);
  const [blogContent,setContent] = useState("")
  const setContentValue = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
  };
  useEffect(() => {
    if(state.message && state.message.length > 5){
	setMessage({
	    show:true,
	    message: state.message
	  })
	setEdit({show:false,data:null})
    }
  },[state])
  return(
	<div className="w-screen h-screen bg-smoky-black-800 overflow-x-hidden overflow-y-auto
	  absolute top-0 left-0 flex items-center flex-col space-y-5"
	  >
	  <div className="flex pt-3 justify-end w-full">
	    <button className="text-3xl text-liberty-200 hover:text-rose-500 mr-5"
	    onClick={() => {setEdit({show:false,data:null})}}>
		  <FaXmark/>
		</button>
	  </div>
      	<div className="p-5 pt-3 text-3xl w-full mt-3 invisible-textarea">
	  <form action={update_blog_action}>
    		<input type="hidden" value={JSON.parse(data).blog_id} name="blog_id"/>
	  	<input type="text"
    		className="p-2 text-md w-full bg-smoky-black-700
    		mb-8 mt-3 text-liberty-400 rounded-md" 
    		autoComplete="off"
    		placeholder="Title ~ Untitled" 
    		name="blog_title"
    		defaultValue={JSON.parse(data).blog_title}
    		/>
		<Editor
		apiKey='n8wmf3ledez9f6i7w9nu9nxg9fji45l8wo332vo9tjgp40iz'
		initialValue={JSON.parse(data).blog_content}
		onInit={(evt, editor) => (editorRef.current = editor)}
    		value={blogContent}
    		onEditorChange={setContentValue}
    		id="blog_editor"
		textareaName="blog_editor"
		init={
		  EditorConfig
		}
    		/>
		<textarea type="text" name="blog_description"
    		className="p-2 text-md w-full bg-smoky-black-700
    		mb-5 mt-8 text-liberty-400 rounded-md"
    		placeholder="Description ~" defaultValue={JSON.parse(data).blog_description}></textarea>
    		{ topics && JSON.parse(topics).length > 0 ? (
		<>
		<select name="blog_topic"
		  defaultValue={JSON.parse(data).blog_topic}
		  className="text-md p-1 w-full bg-smoky-black-700 mb-5
		  text-liberty-400 rounded-md capitalize">
		  { JSON.parse(topics).map((topic) => {
		    return (
		      <option value={topic.topic_id} key={`${topic.topic_id}`}>
		       { topic.topic_title }
		      </option>
		    )
		   })
		  }
		</select>
		  <SaveButton text={"Update"} preText={"Updating..."}/>
		</>
		) : 
			<span className="text-french-raspberry-600 text-xl font-semibold mt-5 p-2">
			  <FaTriangleExclamation/>
			  Create a Topic First!!
			</span>
		}
	    </form>
	</div>
    </div>
  )
}
