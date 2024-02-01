import TextTypeAnimation from "../utils/typing_text"
import SlideAnimation from "../utils/slide_animation"
import BorderGlow from "../utils/border_glow"
import { FaAngleDown } from "react-icons/fa"

export default function Intro(){
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center relative">
    <SlideAnimation
      direction="right"
    >
      <BorderGlow speed="275" radius={[45,55]} 
       colors={[
      "#ff6f6f", 
      "#ffb766", 
      "#fff376", 
      "#8bff8b", 
      "#8b8bff", 
      "#ad82ff", 
      "#d896ff", 
      ]}>
	  <img src="./img/sidhartha_mazumder.jpg"
	  className="w-40 h-40 rounded-full"
	  alt="Sidhartha Mazumder"
	  />
      </BorderGlow>
    </SlideAnimation>
    <div className="flex items-baseline">
      <TextTypeAnimation
	  classes={"md:text-2xl font-semibold mt-14 font-space text-center"}
	  text={`Hello there! How are you doin?`}
      />
      <span className="w-[2px] bg-liberty-300/50 h-[20px] animate-pulse"></span>
    </div>
    <SlideAnimation direction="right" 
      classes="absolute bottom-3 flex justify-center items-center delay-500">
	<FaAngleDown className="text-3xl animate-bounce"/>
    </SlideAnimation>
  </div>
  )
}
