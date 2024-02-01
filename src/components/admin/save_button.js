import {useFormStatus} from "react-dom"

export default function SaveButton({text,preText}){
  const {pending} = useFormStatus()
  return(
    <button
      type="submit"
      disabled={pending}
      className={`bg-liberty-600 text-smoky-black-200
	p-2 w-full rounded-md hover:bg-liberty-700
	${pending ? "cursor-not-allowed" : "cursor-pointer"}
     `}>
	{pending ? preText ? preText : "Saving..." : text ? text : "Save"}
    </button>
  )
}
