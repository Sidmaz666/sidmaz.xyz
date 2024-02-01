import {FaChevronUp} from "react-icons/fa";
import SlideAnimation from "../utils/slide_animation";

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export default function TopButton(){
  return(
    <SlideAnimation direction={"left"} element={"button"} 
    classes="fixed bottom-5 right-5 bg-smoky-black-700 rounded-full px-2 py-2 z-40"
      onClick={scrollToTop}>
      <FaChevronUp/>
   </SlideAnimation>
  )
}
