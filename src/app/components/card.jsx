import React from 'react'
import { FaGithub, FaShareSquare, FaHtml5 } from 'react-icons/fa'

import DefImg from './assets/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'

function Card(props){
  return (
    <>

		<div
		  className="
		  bg-black	
		  bg-opacity-60
		  w-full
		  flex
		  flex-col
		  rounded-xl
		  "
		>




		<div
		  className="
		  flex
		  border-b	
		  border-[#00E676]	
		  w-full
		  bg-[#00000080]
		  rounded-t-xl
		  p-2
		  h-10
		  flex
		  justify-between
		  items-center
		  "
		>

		  <span
		    className="
				
		    "
		  >
		    { props.icon || <FaHtml5/> }
		  </span>

		  <span
		    className="
		    text-xs
		    lg:text-lg
		    italic
		    "
		  >
		    { props.title || "Untitled" }
		  </span>



		  <span
		    className="
		    flex
		    items-center
		    space-x-3
		    "
		  >


			<a
			  rel="noreferrer"
			  target="_black"
			  href={ props.gitLink || "https://github.com/sidmaz666" }
			>
			<FaGithub/>
			</a>


			<a
			  rel="noreferrer"
			  target="_blank"
			  href={ props.liveLink || "https://github.com/sidmaz666"  }
			  className={ props.addClass || '' }
			>
			<FaShareSquare/>
			</a>
		      
		  </span>

		</div>


		  <div
		    className="
		    w-full
		    p-5
		    flex
		    flex-col
		    lg:flex-row
		    lg:items-center
		    lg:space-x-8
		    group
		    "
		  >

		<img 
		  className="
		  skew-x-[-2deg]
		  group-hover:skew-x-0
		  transition duration-200
		  ease-in-out
		  mb-2
		  lg:mb-0
		  lg:w-[40rem]
		  rounded-md
		  "
		  src={ props.img || DefImg }
		  alt={ props.title || "Image" } />


			<div
			  className="
			  flex
			  flex-col
			  "
			>
		<span
		  className="
		  pl-3
		  text-xl
		  text-gray-400
		  "
		>
		Name: 
		  <span className="
		  pl-2
		  text-lg
		  text-green-200
		    ">
		    { props.name || "Untitled" }
		  </span>
		</span>

		<span
		  className="
		  pl-3
		  text-xl
		  text-gray-400
		  "
		>
		  Type: <span className="text-lg text-green-200">{ props.type || "Program" }</span>
		</span>


		<span
		  className="
		  pl-3
		  text-xl
		  text-gray-400
		  "
		>
		  Category: <span className="text-lg text-green-200">{ props.category || "Unknown" }</span>
		</span>



		<span
		  className="
		  pl-3
		  text-xl
		  text-gray-400
		  "
		>
		  Description: <span className="text-lg text-green-200">
		    { props.desc || "Not Available" }
		  </span>
		</span>

		
			  <div
			    className="
			    md:flex
			    lg:block
			    xl:flex
			    mb-2
			    "
			  >

			  <a
			    target="_blank"
			    rel="noreferrer"
			    href={ props.liveLink || "https://github.com/sidmaz666" }
			    className={`
			    pl-3
			    text-xl
			    bg-black
			    w-40
			    flex
			    items-center
			    rounded-2xl
			    p-1
			    mt-3
			    ml-3
			    space-x-3
				${ props.addClass || '' }
			    `}
			  >

			   <span>
			    Live Demo
			   </span>
			    <FaShareSquare/>

			  </a>

			  <a
			    rel="noreferrer"
			    target="_blank"
			    href={ props.gitLink || "https://github.com/sidmaz666" }
			    className="
			    pl-3
			    text-xl
			    bg-black
			    w-44
			    whitespace-nowrap
			    flex
			    items-center
			    rounded-2xl
			    p-1
			    mt-3
			    ml-3
			    space-x-3
			    "
			  >

			   <span>
			   	 Review Code	
			   </span>
			    <FaShareSquare/>

			  </a>

			  </div>

			</div>



		  </div>




		</div>



    </>
  )
}

export default Card
