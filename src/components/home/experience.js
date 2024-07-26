import {FaCircleDot} from "react-icons/fa6"
import SlideAnimation from "../utils/slide_animation"
import TextTypeAnimation from "../utils/typing_text"
import Link from "next/link"

export default function Experience(){
  return (
<section id="exp"
  className="w-screen h-screen flex flex-col justify-center items-center">
  <div className="p-14 md:p-0 w-full md:w-auto flex flex-col flex-wrap space-y-3 md:space-y-5 font-space">
    <TextTypeAnimation classes="text-xs md:text-sm text-start typing-text pl-4 md:pl-0"
    text="Do you have any Experience?"/>  
    <SlideAnimation direction={"left"} classes="text-4xl md:text-7xl delay-800 md:flex pl-4 md:pl-0">
      Isn't this the Evidence?
    </SlideAnimation>
    <SlideAnimation direction={"left"}
    classes="text-xs md:text-sm text-start delay-1000 pl-4 md:pl-0">Anyway...</SlideAnimation>  
    	<div className="flex flex-col justify-between items-start space-y-2 md:text-lg text-sm pl-5">
		<SlideAnimation direction={"left"} classes="flex space-x-2 items-center delay-1000">
		  <FaCircleDot className="text-french-raspberry-500"/>
		  <span className="">
		    UI Developer (<a href="https://aeroaegis.com/" target="_blank" className="text-blue-500">@AeroAegis</a>)
		  </span>
		</SlideAnimation>
		<SlideAnimation direction={"right"} classes="flex space-x-2 items-center delay-1000">
		  <FaCircleDot className="text-liberty-500"/>
		  <span className="">
		    HTML,CSS,JS Developer (5Yr)
		  </span>
		</SlideAnimation>
		<SlideAnimation direction={"left"} classes="flex space-x-2 items-center delay-1000">
		  <FaCircleDot className="text-liberty-500"/>
		  <span className="">
		    WordPress Developer (3Yr)
		  </span>
		</SlideAnimation>
		<SlideAnimation element={Link} direction={"right"}
    		   href="/blog" classes="flex space-x-2 items-center delay-1000">
		  <FaCircleDot className="text-amazon-500"/>
		  <span className="">
		    Content Writer (2Yr)
		  </span>
		</SlideAnimation>
	  </div>
      </div>
   </section>
  )
}
