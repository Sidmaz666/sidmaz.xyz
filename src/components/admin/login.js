import {FaLock} from "react-icons/fa";
import {useFormState , useFormStatus} from "react-dom"
import log_user from "../server/admin/login"
import {FaXmark} from "react-icons/fa6";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className={`font-semibold bg-primary-600 p-2
	rounded-md hover:bg-primary-800 ${pending ? 'cursor-not-allowed' : 'cursor-pointer'}
	`}
	type="submit"
        disabled={pending}
      >
	{pending ? "Processing..." : "Submit"}
      </button>
  );
}

export default function Login(){
  const [formState,log_user_action] = useFormState(log_user,{})
  return(
    <main
    className="bg-smoky-black-900/90 text-liberty-100 w-screen h-screen flex justify-center items-center font-space relative"
    >
    {
      formState && formState.message ? (
	<div id="message-container" 
	className="flex w-full justify-center items-start
	absolute top-0 left-0 p-2 bg-liberty-700 font-semibold text-liberty-100">
    	<span>{formState.message}</span>
	 <button
	  onClick={() => {document.getElementById('message-container').remove()}}
	  className="absolute top-0 right-0 p-2 pt-3 pr-5">
	<FaXmark/>
    	</button>
     </div>
      ) : null
    }
  <form
    className="w-[300px] flex bg-smoky-black-800 rounded-md p-5 pb-10 flex-col space-y-4"
    action={log_user_action}
  >
    <span
      className="flex justify-center items-center mb-3 text-liberty-400 relative"
    >
      <span className="text-6xl">ADMIN LOGIN</span>
      <FaLock
        className="text-8xl -translate-x-5 translate-y-4 -rotate-12"
      />
      <div
        className="h-[3px] bg-liberty-400 w-full absolute -translate-y-1/2"
      ></div>
    </span>
    <input
      className="p-2 text-xl text-liberty-300 bg-smoky-black-700 font-semibold rounded-md"
      placeholder="Username"
      type="text"
      name="username"
      autoComplete="off"
      required
    />
    <input
      className="p-2 text-xl text-liberty-300 bg-smoky-black-700 font-semibold rounded-md"
      placeholder="Password"
      type="password"
      name="password"
      autoComplete="off"
      required
    />
      <SubmitBtn/>
    </form>
  </main>
  )
}
