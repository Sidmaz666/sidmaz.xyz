import React from 'react'

import Me from './assets/me.jpg'

function About(){
  return (
    <>
      <b id="about"></b>
		<div
		  className="
		  translate-y-32
		  bg-black
		  bg-opacity-50
		  border-t-2
		  rounded-t-lg
		  flex
		  flex-col
		  z-30
		  "
		>

		  <div
		    className="
			flex
			justify-center
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
	  translate-y-[-5.5rem]
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
	  bg-[#000020]
	  "
	>

	  <span
	    className="
	    text-[#00E676]
	    z-50
	    font-semibold
	    italic
	    pt-8
	    pb-8
	    font-serif
	    text-4xl
	    "
	  >

		About Me

	  </span>
	</span>
		  </div>




		  <div
		    className="
		    mr-14 ml-14
		    lg:mr-20 lg:ml-20
		    translate-y-[-5rem]
		    "
		  >
		    



			<div
			  className="
			  p-5
			  lg:pr-16 lg:pl-16
			  w-full
			  flex
			  flex-col
			  lg:flex-row
			  justify-center
			  items-center
			  rounded-xl
			  font-mono
			  lg:space-x-5
			  "
			>

	<img src={ Me }
	  className="
	  lg:w-52
	  lg:h-52
	  w-[20rem]
	  h-[20rem]
	  w-32
	  h-32
	  mb-5
	  lg:mb-0
	  p-1
	  "
			  alt="" />


			  <span
			    className="
			    lg:pl-5
			    lg:border-l-2
			    border-yellow-200
			    "
			  >


			    Im a Computer Science student who enjoy the process of web devlopment and writing shell scripts. Beside that I play guitar and music is the energy for my soul.

			  </span>


			</div>

		  </div>
		</div>

    </>
  )
}

export default About
