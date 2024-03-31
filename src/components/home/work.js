import {FaJs} from "react-icons/fa6"
import SlideAnimation from "../utils/slide_animation"
import { FaNodeJs, FaHtml5, FaCss3, FaPython } from "react-icons/fa"

export default function Work(){
  return(
    <section id="work" className="w-screen h-screen flex flex-col justify-center items-center bg-material">
  	<SlideAnimation classes="md:text-sm text-xs w-auto md:mb-5 mb-3 font-space delay-1000" direction={"right"} element={"span"}>So what I've build? </SlideAnimation>
  	<div className="flex flex-col space-y-3 w-full md:w-auto p-5 md:p-0">
		<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 w-full md:w-auto">
		<SlideAnimation direction={"right"} element={"div"}
    		  classes="md:w-80 md:h-60 h-[70px] w-full bg-smoky-black-800
		  delay-1000 relative
		  rounded-md cursor-pointer
		  group
		  md:block flex justify-between flex-row-reverse md:flex-row
		  ">
		  <img src="./img/work1.png"
		  className="w-[50%] md:w-full h-full md:object-none
		  md:object-left-top object-cover object-top "
		  alt=""/>
		  <div className="md:absolute w-full md:top-0 md:left-0 md:w-0 md:invisible
		    md:flex h-full md:flex-col md:space-y-2 md:justify-center md:items-center
		    transition-all delay-100 ease-in
		    md:group-hover:w-full
		    md:group-hover:visible md:z-50
		    bg-smoky-black-800 relative">
		    	<span className="md:text-xl font-semibold absolute
			      md:relative top-2 md:top-0 left-16 md:left-0 text-nowrap text-sm"
			  >Aniswim Website</span>
			<div className="font-semibold text-amazon-500
			  absolute md:relative md:top-0 top-2  md:left-0 left-2">
    			 <div className="flex space-x-2 md:mb-2">
			  <FaNodeJs/>
			  <FaCss3/>
    			</div>
			</div>
			<a target="_blank"
			   href="https://aniswim.netlify.app/"
			  className="md:p-2 rounded-md bg-liberty-600
				 absolute md:relative md:bottom-0
				 bottom-2 md:left-0 left-0 w-[80%] md:w-auto mr-5 md:mr-0 ml-5 md:ml-0 text-center
			  hover:bg-liberty-700 text-white font-semibold">Visit</a>
		  </div>
		</SlideAnimation>

		<SlideAnimation direction={"left"} element={"div"}
    		  classes="md:w-80 md:h-60 h-[70px] w-full bg-smoky-black-800
		  delay-1000 relative
		  rounded-md cursor-pointer
		  group
		  md:block flex justify-between flex-row-reverse md:flex-row
		  ">
		  <img src="./img/work6.png"
		  className="w-[50%] md:w-full h-full md:object-none
		  object-cover object-top "
		  alt=""/>
		  <div className="md:absolute w-full md:top-0 md:left-0 md:w-0 md:invisible
		    md:flex h-full md:flex-col md:space-y-2 md:justify-center md:items-center
		    transition-all delay-100 ease-in
		    md:group-hover:w-full
		    md:group-hover:visible md:z-50
		    bg-smoky-black-800 relative">
		    	<span className="md:text-xl font-semibold absolute
			      md:relative top-2 md:top-0 left-16 md:left-0 text-nowrap text-sm"
			  >Multiplayer Game</span>
			<div className="font-semibold text-amazon-500
			  absolute md:relative md:top-0 top-2  md:left-0 left-2">
    			 <div className="flex space-x-2 md:mb-2">
			  <FaNodeJs/>
			  <FaCss3/>
    			</div>
			</div>
			<a target="_blank"
			   href="https://tactic.onrender.com/"
			  className="md:p-2 rounded-md bg-liberty-600
				 absolute md:relative md:bottom-0
				 bottom-2 md:left-0 left-0 w-[80%] md:w-auto mr-5 md:mr-0 ml-5 md:ml-0 text-center
			  hover:bg-liberty-700 text-white font-semibold">Visit</a>
		  </div>
		</SlideAnimation>

		<SlideAnimation direction={"right"} element={"div"}
    		  classes="md:w-60 md:h-60 h-[70px] w-full bg-smoky-black-800
		  delay-1000 relative
		  rounded-md cursor-pointer
		  group
		  md:block flex justify-between flex-row-reverse md:flex-row
		  ">
		  <img src="./img/work3.png"
		  className="w-[50%] md:w-full h-full md:object-none object-fill
		  object-left-top"
		  alt=""/>
		  <div className="md:absolute w-full md:top-0 md:left-0 md:w-0 md:invisible
		    md:flex h-full md:flex-col md:space-y-2 md:justify-center md:items-center
		    transition-all delay-100 ease-in
		    md:group-hover:w-full
		    md:group-hover:visible md:z-50
		    bg-smoky-black-800 relative">
		    	<span className="md:text-xl font-semibold absolute
			      md:relative top-2 md:top-0 left-16 md:left-0 text-nowrap text-sm"
			  >Code Editor</span>
			<div className="font-semibold text-amazon-500
			  absolute md:relative md:top-0 top-2  md:left-0 left-2">
    			 <div className="flex space-x-2 md:mb-2">
			  <FaJs/>
			  <FaCss3/>
    			</div>
			</div>
			<a target="_blank"
			   href="https://github.com/Sidmaz666/tux"
			  className="md:p-2 rounded-md bg-liberty-600
				 absolute md:relative md:bottom-0
				 bottom-2 md:left-0 left-0 w-[80%] md:w-auto mr-5 md:mr-0 ml-5 md:ml-0 text-center
			  hover:bg-liberty-700 text-white font-semibold">Visit</a>
		  </div>
		</SlideAnimation>

		</div>

		<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 w-full md:w-auto">
		<SlideAnimation direction={"left"} element={"div"}
    		  classes="md:w-60 md:h-60 h-[70px] w-full bg-smoky-black-800
		  delay-1000 relative
		  rounded-md cursor-pointer
		  group
		  md:block flex justify-between flex-row-reverse md:flex-row
		  ">
		  <img src="./img/work5.png"
		  className="w-[50%] md:w-full h-full md:object-none
		  md:object-right-top object-cover object-top "
		  alt=""/>
		  <div className="md:absolute w-full md:top-0 md:left-0 md:w-0 md:invisible
		    md:flex h-full md:flex-col md:space-y-2 md:justify-center md:items-center
		    transition-all delay-100 ease-in
		    md:group-hover:w-full
		    md:group-hover:visible md:z-50
		    bg-smoky-black-800 relative">
		    	<span className="md:text-xl font-semibold absolute
			      md:relative top-2 md:top-0 left-16 md:left-0 text-nowrap text-sm"
			  >AI Story Maker</span>
			<div className="font-semibold text-amazon-500
			  absolute md:relative md:top-0 top-2  md:left-0 left-2">
    			 <div className="flex space-x-2 md:mb-2">
			  <FaPython/>
			  <FaCss3/>
    			</div>
			</div>
			<a target="_blank"
			   href="https://story-maker.onrender.com/"
			  className="md:p-2 rounded-md bg-liberty-600
				 absolute md:relative md:bottom-0
				 bottom-2 md:left-0 left-0 w-[80%] md:w-auto mr-5 md:mr-0 ml-5 md:ml-0 text-center
			  hover:bg-liberty-700 text-white font-semibold">Visit</a>
		  </div>
		</SlideAnimation>

		<SlideAnimation direction={"right"} element={"div"}
    		  classes="md:w-80 md:h-60 h-[70px] w-full bg-smoky-black-800
		  delay-1000 relative
		  rounded-md cursor-pointer
		  group
		  md:block flex justify-between flex-row-reverse md:flex-row
		  ">
		  <img src="./img/work4.png"
		  className="w-[50%] md:w-full h-full md:object-none
		  md:object-bottom object-cover object-top "
		  alt=""/>
		  <div className="md:absolute w-full md:top-0 md:left-0 md:w-0 md:invisible
		    md:flex h-full md:flex-col md:space-y-2 md:justify-center md:items-center
		    transition-all delay-100 ease-in
		    md:group-hover:w-full
		    md:group-hover:visible md:z-50
		    bg-smoky-black-800 relative">
		    	<span className="md:text-xl font-semibold absolute
			      md:relative top-2 md:top-0 left-16 md:left-0 text-nowrap text-sm"
			  >Typing Test</span>
			<div className="font-semibold text-amazon-500
			  absolute md:relative md:top-0 top-2  md:left-0 left-2">
    			 <div className="flex space-x-2 md:mb-2">
			  <FaHtml5/>
			  <FaCss3/>
    			</div>
			</div>
			<a target="_blank"
			   href="https://funkytype.netlify.app/"
			  className="md:p-2 rounded-md bg-liberty-600
				 absolute md:relative md:bottom-0
				 bottom-2 md:left-0 left-0 w-[80%] md:w-auto mr-5 md:mr-0 ml-5 md:ml-0 text-center
			  hover:bg-liberty-700 text-white font-semibold">Visit</a>
		  </div>
		</SlideAnimation>

		<SlideAnimation direction={"left"} element={"div"}
    		  classes="md:w-80 md:h-60 h-[70px] w-full bg-smoky-black-800
		  delay-1000 relative
		  rounded-md cursor-pointer
		  group
		  md:block flex justify-between flex-row-reverse md:flex-row
		  ">
		  <img src="./img/work2.png"
		  className="w-[50%] md:w-full h-full md:object-none
		  md:object-left-top object-cover object-top "
		  alt=""/>
		  <div className="md:absolute w-full md:top-0 md:left-0 md:w-0 md:invisible
		    md:flex h-full md:flex-col md:space-y-2 md:justify-center md:items-center
		    transition-all delay-100 ease-in
		    md:group-hover:w-full
		    md:group-hover:visible md:z-50
		    bg-smoky-black-800 relative">
		    	<span className="md:text-xl font-semibold absolute
			      md:relative top-2 md:top-0 left-16 md:left-0 text-nowrap text-sm"
			  >Space Shooter</span>
			<div className="font-semibold text-amazon-500
			  absolute md:relative md:top-0 top-2  md:left-0 left-2">
    			 <div className="flex space-x-2 md:mb-2">
			  <FaHtml5/>
			  <FaCss3/>
    			</div>
			</div>
			<a target="_blank"
			   href="https://space-impacted.netlify.app/"
			  className="md:p-2 rounded-md bg-liberty-600
				 absolute md:relative md:bottom-0
				 bottom-2 md:left-0 left-0 w-[80%] md:w-auto mr-5 md:mr-0 ml-5 md:ml-0 text-center
			  hover:bg-liberty-700 text-white font-semibold">Visit</a>
		  </div>
		</SlideAnimation>
		</div>
		<a href="https://github.com/Sidmaz666?tab=repositories" target="_blank"
		  className="underline cursor-pointer mt-2 font-space text-baseline text-center md:text-start">
		  View More <i className="fa-solid fa-arrow-right-long"></i>
		</a>
	</div>
    </section>
  )
}
