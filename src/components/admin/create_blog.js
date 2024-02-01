import { Editor } from "@tinymce/tinymce-react"
import {FaTriangleExclamation} from "react-icons/fa6";
import {useFormState} from "react-dom"
import create_blog from "../server/admin/create_blog";
import {useEffect,useRef,useState} from "react";
import SaveButton from "./save_button";

export const EditorConfig = {
      menubar: "edit view insert format",
      file_picker_types: 'image',
      file_picker_callback: function (cb, value, meta) {
	let input = document.createElement('input');
	input.setAttribute('type', 'file');
	input.setAttribute('accept', 'image/*');
	input.onchange = function () {
	  let file = this.files[0];
	  let reader = new FileReader();
	  reader.onload = function () {
	  let id = 'blobid' + (new Date()).getTime();
	  let blobCache =  tinymce.activeEditor.editorUpload.blobCache;
	  let base64 = reader.result.split(',')[1];
	  let blobInfo = blobCache.create(id, file, base64);
	  blobCache.add(blobInfo);
	  cb(blobInfo.blobUri(), { title: file.name });
	  };
	  reader.readAsDataURL(file);
	};
	input.click();
      },
      plugins:
        "fullscreen searchreplace autolink directionality visualblocks visualchars image link media codesample charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount charmap emoticons autosave",
      toolbar:
        "undo redo | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify lineheight | fullscreen | bullist numlist indent | removeformat ",
      height: "500px",
      skin_url: "/js/tinymce_skin_black",
      content_css: "tinymce-5-dark",
      skin:"bootstrap"
}

export default function CreateBlog({topics,setMessage}){
  const [state,create_blog_action] = useFormState(create_blog,{})
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
    }
  },[state])
  return(
      	<div className="p-5 pt-3 text-3xl w-full mt-3 invisible-textarea">
	  <form action={create_blog_action}>
	  	<input type="text"
    		className="p-2 text-md w-full bg-smoky-black-700
    		mb-8 mt-3 text-liberty-400 rounded-md" 
    		autoComplete="off"
    		placeholder="Title ~ Untitled" 
    		name="blog_title"
    		/>
		<Editor
		onInit={(evt, editor) => (editorRef.current = editor)}
    		value={blogContent}
    		onEditorChange={setContentValue}
    		id="blog_editor"
		textareaName="blog_editor"
    		apiKey='n8wmf3ledez9f6i7w9nu9nxg9fji45l8wo332vo9tjgp40iz'
		init={
		  EditorConfig
		}
    		/>
		<textarea type="text" name="blog_description"
    		className="p-2 text-md w-full bg-smoky-black-700
    		mb-5 mt-8 text-liberty-400 rounded-md"
    		placeholder="Description ~"></textarea>
    		{ topics && JSON.parse(topics).length > 0 ? (
		<>
		<select name="blog_topic"
		  defaultValue={"DEFAULT"}
		  className="text-md p-1 w-full bg-smoky-black-700 mb-5
		  text-liberty-400 rounded-md capitalize">
		  <option
		  value={"DEFAULT"} disabled hidden>Select Topic</option>
		  { JSON.parse(topics).map((topic) => {
		    return (
		      <option value={topic.topic_id} key={`${topic.topic_id}`}>
		       { topic.topic_title }
		      </option>
		    )
		   })
		  }
		</select>
		  <SaveButton/>
		</>
		) : 
			<span className="text-french-raspberry-600 text-xl font-semibold mt-5 p-2">
			  <FaTriangleExclamation/>
			  Create a Topic First!!
			</span>
		}
	    </form>
	</div>
  )
}
