import {FaCss3, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaServer} from "react-icons/fa"
import SlideAnimation from "../utils/slide_animation"
import TextTypeAnimation from "../utils/typing_text"

export default function Skills(){
  return(
    <section id="skills"
  className="w-screen h-screen flex flex-col justify-center items-center relative">
  <div className="p-14 md:p-0 w-full md:w-auto flex flex-col flex-wrap space-y-3 md:space-y-5 font-space">
    <TextTypeAnimation classes="text-xs md:text-sm text-start pl-4 md:pl-0" 
      text={"So what do I know??"}/>
    <SlideAnimation direction={"left"} classes="text-4xl md:text-7xl delay-500 md:flex pl-4 md:pl-0">
      Only Thing I Know is Nothing...
    </SlideAnimation>
    <SlideAnimation direction={"right"}
    classes="flex justify-start md:justify-center items-center flex-wrap delay-500">
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaHtml5/>
    	  <span>
	    HTML
   	 </span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaCss3/>
	  <span>
	  CSS
	  </span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaJs/>
    	 <span>
	  Javascript
	</span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaPhp/>
          <span>
	  PHP
    	</span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaNodeJs/>
          <span>
	  NodeJS
    	</span>  
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaPython/>
	  <span>
	  Python
    	</span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaServer/>
	  <span>
		SQL
	  </span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaDatabase/>
    	  <span>
	  MongoDB
    	</span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 px-2 py-1 bg-smoky-black-700
      rounded-full text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1 flex space-x-1 items-center">
	  <FaReact/>
	  <span>
	   React
    	</span>
	</span>
      </span>
    <span className="inline-flex items-center
      m-2 py-1 underline
      text-xs md:text-sm font-semibold text-gray-50">
	<span className="ml-1">
	   & More..
	</span>
      </span>
    </SlideAnimation>
  </div>
  <div className="p-2 w-full absolute bottom-0 left-0">
    <SlideAnimation
      direction={"left"}
      classes="md:text-2xl text-lg font-space font-semibold italic flex justify-evenly md:px-10">
	<FaHtml5 className="m-2 l-to-r "/>
	<FaCss3 className="m-2 l-to-r "/>
	<FaJs className="m-2 l-to-r "/>
	<FaNodeJs className="m-2 l-to-r "/>
	<FaPhp className="m-2 l-to-r "/>
	<FaReact className="m-2 l-to-r "/>
	<FaPython className="m-2 l-to-r "/>
	<FaServer className="m-2 l-to-r "/>
	<FaDatabase className="m-2 l-to-r "/>
     </SlideAnimation>
    </div>
  </section>
  )
}
