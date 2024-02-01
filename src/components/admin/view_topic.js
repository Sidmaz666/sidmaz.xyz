import {FaTrash} from "react-icons/fa"
import {useFormState} from "react-dom"
import {useEffect} from "react";
import delete_topic from "../server/admin/delete_topic";
import {FaTriangleExclamation} from "react-icons/fa6";

export default function ViewTopic({topics,setMessage}) {
  const [state,delete_topic_action] = useFormState(delete_topic,{})
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
    	{ topics && JSON.parse(topics).length > 0 ?
		    JSON.parse(topics).map((topic) => {
			return (
			<div
			  key={topic.topic_id}
			  className="p-1 mt-5 mb-5 w-full flex justify-between bg-smoky-black-700 text-liberty-300 rounded-md items-center">
			  <div className="flex flex-col capitalize p-1">
			    <span className="text-2xl">
			  	{ topic.topic_title }
			    </span>
			    <span className="text-sm ">
			  	{ topic.topic_description }
			    </span>
			  </div>
			  <form action={delete_topic_action}>
			  <input type="hidden" value={topic.topic_id} name="topic_id"/>
			  <button className="mr-5 hover:text-rose-500" type="submit">
			      <FaTrash/>
			  </button>
			  </form>
			</div>

			)
		    }) :
			<span className="text-french-raspberry-600 text-xl font-semibold mt-5 p-2">
			  <FaTriangleExclamation/>
			  No Saved Topics!
			</span>
	    }
	</div>
  )
}
