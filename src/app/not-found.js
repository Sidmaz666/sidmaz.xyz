import {FaHouse} from "react-icons/fa6"
import Link from "next/link"
import axios from "axios"

export const metadata = {
  title: "Page Not Found!",
  description: "Error Code 404; Page Not Found! Invalid Route"
}

export default async function NotFound(){
  const req = await axios('https://api.waifu.pics/sfw/cry')
  const data = await req.data
  const url = data.url
  return(
      <div className="flex flex-col text-2xl
  absolute top-0 left-0 z-50 justify-center items-center
  w-screen h-screen overflow-x-hidden overflow-y-hidden bg-smoky-black-800 text-liberty-300">
	<div className="flex w-full h-full justify-center
	  text-white md:items-center p-5 md:p-0
	  relative overflow-hidden flex-col">

	   <div 
    		className="flex justify-center"
	   >
	    <img 
	    class="mb-5"
	    src={url} 
	    alt="Anime Crying GIF!"/>
    	</div>

	<span
	    className="p-2 text-3xl font-bold font-mono flex flex-col w-full items-center"
	>
		<span>ERROR 404</span>
		<span>PAGE NOT FOUND</span>
	</span>

	  	<Link
		 href={"/"}
		 className="mt-3 bg-liberty-600 hover:bg-liberty-700 text-white p-1
		 pl-4 pr-4 rounded-[8px] font-bold
		 outline-none w-full md:w-auto flex space-x-2 items-center justify-center"
		  >
		  <span>
			Go Back
    		   </span>
		  <FaHouse/>
		</Link>

	  </div>
  </div>
  )
}
