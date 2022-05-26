import React from 'react'

import { FaReact, FaNodeJs, FaHtml5, FaJs, FaCss3, FaPhp } from 'react-icons/fa'

import Gif from './assets/e426702edf874b181aced1e2fa5c6cde.gif'

import Projects from './projects'

function Contain(){
  return (
    <>

      <div
	className="
	flex
	flex-col
	justify-center
	items-center
	bg-green-500
	bg-opacity-50
	backdrop-blur-sm
	relative
	z-10
	"
      >


	<span
	  className="
	  flex
	  items-center
	  justify-center
	  antialiased
	  pt-16 pb-16 p-5
	  w-60
	  rounded-full
	  text-center	
	  text-3xl
	  translate-y-[-4.5rem]
	  border-t-4	
	  border-t-green-500
	  border-b-4
	  border-r-4 border-l-4
	  border-r-lime-500 
	  border-l-cyan-500
	  border-b-pink-500
	  rounded-full
	  shadow-2xl
	  relative
	  z-30
	  "
	>
	  <img src={Gif}
		className="
		absolute
		h-60
		z-0
		rounded-full
	    	opacity-80
	    	blur-[0.10rem]
	    "
	  alt="" />

	  <span
	    className="
	    text-[#00E676]
	    z-50
	    font-semibold
	    italic
	    "
	  >

		I Enjoy Developing the Web
	  </span>
	</span>



	<div
	  className="
	  pt-[6rem]
	  bg-black
	  bg-opacity-80
	  backdrop-blur-sm
	  w-full
	  pb-5
	  translate-y-[-10rem]
	  flex
	  flex-wrap	
	  justify-center
	  items-center 
	  md:flex-row
	  md:space-x-10
	  space-x-3
	  md:text-xl
	  "
	>


		<span
		  className="
			flex
		  	justify-center
			items-center
		  	space-x-1
		  	p-2
		  	bg-black
			rounded-md
		  	mt-2
		  "
		>
		<FaHtml5
		  className="
		  text-orange-500
		  "
		  />
		  <b>
		      HTML
		  </b>
		</span>

		
		<span
		  className="
			flex
		  	justify-center
			items-center
		  	space-x-1
		  	p-2
		  	bg-black
			rounded-md
		  	mt-2
		  "
		>
		    <FaCss3
		      className="
		      text-cyan-500
		      "
		  />
		  <b>
		      CSS
		  </b>
		</span>

		<span
		  className="
			flex
		  	justify-center
			items-center
		  	space-x-1
		  	p-2
		  	bg-black
			rounded-md
		  	mt-2
		  "
		>
		    <FaJs 
		      className="
		  	text-yellow-300
		  "/>
		  <b>
		      JavaScript
		  </b>
		</span>


		<span
		  className="
			flex
		  	justify-center
			items-center
		  	space-x-1
		  	p-2
		  	bg-black
			  rounded-md
			  mt-2
		  "
		>
		    <FaNodeJs
		      className="
		      text-[#64DD17]
		      "
		  />
		  <b>
		      NodeJS
		  </b>
		</span>



		<span
		  className="
			flex
		  	justify-center
			items-center
		  	space-x-1
		  	p-2
		  	bg-black
			rounded-md
		  	mt-2
		  "
		>
		    <FaReact
		      className="
		      text-blue-400
		      "
		  />
		  <b>
		      React
		  </b>
		</span>



		<span
		  className="
			flex
		  	justify-center
			items-center
		  	space-x-1
		  	p-2
		  	bg-black
			rounded-md
		  	mt-2
		  "
		>
		    <FaPhp
		      className="
		      text-purple-600
		      text-2xl
		      "
		  />
		  <b>
		      Php
		  </b>
		</span>


	</div>

	<Projects/>

      </div>

    </>
  )
}

export default Contain
