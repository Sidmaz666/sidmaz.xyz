import React from 'react'

import Gif from './assets/ezgif-1-900aec0a72.gif'

function Intro(){
  return (
    <>
      <div
	className="
	z-0
	"
      >
	<img src={Gif}
	  className="
	  w-full
	  h-screen
	  "
	alt="" /> 	
	<div
	  className="
	  absolute
	  top-0
	  h-full
	  flex
	  items-center
	  z-0
	  "
	  >

	  <span
	className="
	    ml-16
	    md:ml-24
	    text-xl
	    font-bold
	    font-serif
	    bg-[#61616135]
	    bg-opacity-50
	    backdrop-blur-sm
	    p-2
	    w-24
	    md:w-60
	    xl:ml-[45rem]
	    rounded-md
	    "
	  >
	
	    <span
	      className="
	     p-1 
	      "
	    >

	    Hi, Im

	    </span>

	<h1
	  className="
	  text-4xl
	  md:text-8xl
	  font-bold
	  font-mono
	  opacity-80
	  text-green-600
	  animate-pulse	

	  "
	>
	
	  Sidhartha Mazumder
	
	</h1>
</span>


	</div>


		<span
		  className="
		  absolute
		  bottom-20
		  md:bottom-32
		  flex
		  justify-end
		  right-0
		  rotate-90
		  font-serif
		  font-semibold
		  text-lg
		  opacity-40
		  animate-pulse
		  "
		  id="webdev"
		>
		  -- Scroll-Down ---
		</span>

      </div>
    </>
  )
}

export default Intro
