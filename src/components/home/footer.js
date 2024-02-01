import TextTypeAnimation from "../utils/typing_text"
import SlideAnimation from "../utils/slide_animation"
import {FaOm} from "react-icons/fa"

export default function Footer(){
  return(
  <footer
  className="w-screen h-[300px] flex flex-col justify-center
  items-center bg-smoky-black-900/30 bg-material">
  <div className="p-0 md:w-auto flex space-x-5 font-space items-center">
    <TextTypeAnimation classes="text-2xl md:text-7xl delay-800 flex pl-0"
     text="Thank You"
    />
    <SlideAnimation direction={"left"} classes="text-3xl md:text-6xl delay-1000">
    	<FaOm/>
    </SlideAnimation>
  </div>
  </footer>
  )
}
