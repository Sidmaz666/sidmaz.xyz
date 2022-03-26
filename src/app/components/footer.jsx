import React from 'react'

import { FaGithub, FaNodeJs, FaReact  } from 'react-icons/fa'

function Footer(){
  return (
    <>
      <div
	className="
	bg-[#08091c]
	w-screen
	translate-x-[-0.60rem]
	pl-4
	"
      >

	<div
	  className="
	  p-5
	  text-sm
	  flex
	  justify-center
	  "
	>


	  <div
	    className="
	    flex
	    flex-col
	    lg:flex-row
	    lg:space-x-3
	    "
	  >

	<span
	  className="
	  flex
	  flex-row
	  items-center
	  text-gray-300
	  text-opacity-70
	  "
	>
	  Coded By ~ 
	  <a href="https://github.com/sidmaz666"
	  rel="noreferrer"
	  target="_blank"
	    className="
	    flex
	    items-center
	    text-cyan-400
	    ml-2
	    "
	  >
	  Sidmaz666
	  <FaGithub
	    className="
	    ml-2
	    "
	    />
	</a>
	</span>





	<span
	  className="
	  mt-3
	  lg:mt-0
	  flex
	  flex-row
	  items-center
	  text-gray-300
	  text-opacity-70
	  "
	>
	  Powered By  
	  <span
	    className="
	    flex
	    items-center
	    text-green-400
	    ml-2
	    "
	  >
	  <FaNodeJs
	    className="
	    ml-7
	    lg:ml-2
	    "
	    />
	  <FaReact
	    className="
	    ml-2
	    "
	    />
	</span>
	</span>



	<span
	  className="
	  lg:mt-0
	  mt-2
	  text-white
	  text-opacity-90
	  "
	>
	© Copyright ~ 2022-03-25
	</span>


	  </div>


	</div>



      </div>
    </>
  )
}

export default Footer
