import {useFormState} from "react-dom"
import {useEffect} from "react";
import create_topic from "../server/admin/create_topic";
import SaveButton from "./save_button";

export default function CreateTopic({setMessage}) {
  const [state,create_topic_action] = useFormState(create_topic,{})
  useEffect(() => {
    if(state.message && state.message.length > 5){
	setMessage({
	    show:true,
	    message: state.message
	})
    }
  },[state])
 return(
	<div className="p-5 pt-3 text-3xl w-full">
	  <form action={create_topic_action}>
	  <input type="text" autoComplete="off"
   	   className="p-2 text-md w-full bg-smoky-black-700 mt-8 text-liberty-400 rounded-md mb-3"
	   placeholder="Topics ~ Untitled" name="topic_title" />
	    <textarea type="text" 
   	     name="topic_description" 
             className="p-2 text-md w-full bg-smoky-black-700
     	     mb-5 mt-5 text-liberty-400 rounded-md"
   	     placeholder="Topic Description ~"></textarea>
	      <SaveButton/>
	  </form>
	</div>
 )
}
