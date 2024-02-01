import {useState} from "react";
import Link from "next/link";
import { FaBarsStaggered,FaXmark,FaHouse } from "react-icons/fa6";
import SlideAnimation from "../utils/slide_animation"

export default function Nav() {
  const [isNav,setNav] = useState(false)
  return (
    <>
    <SlideAnimation
        element={"button"}
        classes="fixed top-3 left-3 text-3xl hover:text-liberty-400 p-2 z-50"
        onClick={() => { setNav(true) }}
      >
    		<FaBarsStaggered/>
      </SlideAnimation>

      <SlideAnimation
        classes={`flex-col text-2xl ${isNav ? "flex" : "hidden"}
	fixed top-0 left-0 z-50 md:w-[30%]
	w-full h-full overflow-x-hidden overflow-y-auto bg-smoky-black-900`}
       direction="right"
      >
        <button
          className="flex p-3 justify-end text-3xl bg-smoky-black-700/10 pr-4 items-center"
	  onClick={() => { setNav(false) }}
        >

          <FaXmark/>
        </button>
        <Link href="/" className="p-3 pl-5 text-3xl hover:bg-smoky-black-700/20 flex space-x-2 font-space"
	  onClick={() => { setNav(false) }}
         >
          <FaHouse/>
	  <span>
	    Home
	  </span>
        </Link>
        <span className="p-2 pl-5 text-3xl text-liberty-400 bg-smoky-black-700/10 italic font-mono capitalize">
          Contents
        </span>
        <a
          href="#about"
	  onClick={() => { setNav(false) }}
          className="pl-7 p-3 hover:bg-smoky-black-700/20 font-space"
        >
          <span>About</span>
        </a>
        <Link href="blog" className="pl-7 p-3 hover:bg-smoky-black-700/20">
          <span>Blogs</span>
        </Link>
        <a
          href="#work"
	  onClick={() => { setNav(false) }}
          className="pl-7 p-3 hover:bg-smoky-black-700/20 font-space"
        >
          <span>Work</span>
        </a>
        <a
          href="#skills"
	  onClick={() => { setNav(false) }}
          className="pl-7 p-3 hover:bg-smoky-black-700/20 font-space"
        >
          <span>Skills</span>
        </a>
        <a
          href="#exp"
	  onClick={() => { setNav(false) }}
          className="pl-7 p-3 hover:bg-smoky-black-700/20 font-space"
        >
          <span>Experience</span>
        </a>
        <a
          href="#contact"
	  onClick={() => { setNav(false) }}
          className="pl-7 p-3 hover:bg-smoky-black-700/20 font-space"
        >
          <span>Contact</span>
        </a>
      </SlideAnimation>
    </>
  );
}
