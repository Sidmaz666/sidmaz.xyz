import React, { useEffect, useState } from 'react'
import { FaBars , FaCode, FaTerminal, FaLeaf, FaUserAlt , FaEnvelope, FaInstagram, FaGithub, FaCaretUp, FaArrowUp, FaCodepen, FaDiscord, FaLinkedinIn } from 'react-icons/fa'


function Nav(){
  const [isDown,setScroll] = useState(false)
  const [isMenu,setMenu] = useState(false)
  const ToggleMenu = () => {
	setMenu(!isMenu)
  }

  useEffect(() => {
    window.addEventListener('scroll', function(){
      if(window.pageYOffset > 300){
	setScroll(true)
      } else {
	setScroll(false)
      }
    })
  })

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    })
  }

  const MobileMenu = () => {
    return (
      <>
	<div
	  className="
	  bg-gray-800
	  bg-opacity-80
	  backdrop-blur
	  absolute
	  bottom-9
	  right-3
	  pr-2 pl-2 p-2
	  rounded-xl
	  w-40
	  space-y-1
	   z-50	  
	  ">

	<a
	  href="#webdev"
	  rel="noreferrer"
	  className="
	  hover:bg-[#263238]
	  rounded-xl
	  w-full
	  flex
	  items-center
	  justify-center
	  space-x-3
	  text-blue-400
	  whitespace-nowrap
	  hover:text-white"
	>
	<FaCode/> 
		<span>
		    Web Dev 
		</span>
	</a>


	<a
	  rel="noreferrer"
	  href="#bash"
	  className="
	  hover:bg-[#263238]
	  rounded-xl
	  w-full
	  flex
	  items-center
	  justify-center
	  space-x-3
	  text-yellow-300
	  hover:text-white"
	>
	<FaTerminal/> 
		<span>
		    Shell
		</span>
	</a>




	<a
	  rel="noreferrer"
	  href="#about"
	  className="
	  hover:bg-[#263238]
	  rounded-xl
	  w-full
	  flex
	  items-center
	  justify-center
	  space-x-3
	  text-cyan-300
	  hover:text-white"
	>
	<FaUserAlt/> 
		<span>
		    About
		</span>
	</a>


	<a
	  href="#contact"
	  rel="noreferrer"
	  className="
	  hover:bg-[#263238]
	  rounded-xl
	  w-full
	  flex
	  items-center
	  justify-center
	  space-x-3
	  text-orange-200
	  hover:text-white"
	>
	<FaEnvelope/> 
		<span>
		    Contact
		</span>
	</a>

	</div>
      </>
    )
  }

  return (
    <>
      <header>
		<nav>
		  <button
		    className={`
		    fixed
		    bottom-5
		    right-5
		    p-1
		    rounded-3xl
		    text-xl
		    flex
		    items-center
		    bg-gray-900
		    hover:bg-gray-800
		    transition ease-in-out duration-150
		    z-50
		    md:hidden
		    focus:outline-none
		    `}
		    onClick={ToggleMenu}
		  >
		    {	isMenu ? <> <FaCaretUp/> <MobileMenu/> </> : <FaBars/>	}	  	
		  </button>


		  <button
		    className={`
		    fixed
		    bottom-5
		    right-16
		    md:right-5
		    p-1
		    rounded-3xl
		    text-xl
		    flex
		    items-center
		    bg-gray-900
		    hover:bg-gray-800
		    transition ease-in-out duration-150
		    z-50
		    focus:outline-none
		    ${ isDown ? '' :  'hidden' }
		    `}
		    onClick={ScrollTop}
		  >
		  <FaArrowUp/>
		  </button>

		  <div className="
		    md:flex
		    w-full
		    justify-end
		    items-end
		    space-x-3
		    p-2
		    hidden
		    border-b-2
		    border-green-500/50
		    fixed
		    bg-black
		    bg-opacity-50
		    backdrop-blur-sm
		    z-[999]
		    ">


		<span>
		<img src="https://avatars.githubusercontent.com/u/81381178?v=4"
		  alt="Profile"
		  className="
		  w-8
		  h-8
		  border-2
		  border-green-500
		  rounded-3xl
		  fixed
		  left-5
		  top-2
		  "
		  />
		</span>


		    <a
		      href="#webdev"
		      rel="noreferrer"
		      className="
		      bg-gray-900
		      hover:bg-gray-800
		      flex
		      items-center
		      justify-center
		      p-1
		      text-2xl
		      rounded-3xl
		      group
		      "
		    >
			<button>
			<FaCode/>
			</button>

			  <span
			    className="
			    hidden
			    absolute
			    whitespace-nowrap
			    top-14
			    group-hover:flex
			    pl-1 pr-1
			    font-semibold
			    rounded-xl
			    text-sky-400
			    italic
			    bg-[#37474F90]
			    "
			  >
				Web Devlopment
			  </span>
		    
		    </a>


		    <span
		      className="
		      bg-gray-900
		      hover:bg-gray-800
		      flex
		      items-center
		      justify-center
		      p-1
		      text-2xl
		      rounded-3xl
		      group
		      "
		    >
			<a href="#bash" rel="noreferrer" >
			<FaTerminal/>
			</a>

			  <span
			    className="
			    hidden
			    absolute
			    whitespace-nowrap
			    top-14
			    group-hover:flex
			    pl-1 pr-1
			    font-semibold
			    rounded-xl
			    text-orange-400
			    italic
			    bg-[#37474F90]
			    "
			  >
				Shell
			  </span>
		    
		    </span>


		    <span
		      className="
		      bg-gray-900
		      hover:bg-gray-800
		      flex
		      items-center
		      justify-center
		      p-1
		      text-2xl
		      rounded-3xl
		      group
		      "
		    >
			<a rel="noreferrer" href="#about">
			<FaUserAlt/>
			</a>

			  <span
			    className="
			    hidden
			    absolute
			    whitespace-nowrap
			    top-14
			    group-hover:flex
			    pl-1 pr-1
			    font-semibold
			    rounded-xl
			    text-[#00C853]
			    italic
			    bg-[#37474F90]
			    "
			  >
				About
			  </span>
		    
		    </span>


		    <span
		      className="
		      bg-gray-900
		      hover:bg-gray-800
		      flex
		      items-center
		      justify-center
		      p-1
		      text-2xl
		      rounded-3xl
		      group
		      "
		    >
			<a href="#contact" rel="noreferrer">
			<FaEnvelope/>
			</a>

			  <span
			    className="
			    hidden
			    absolute
			    whitespace-nowrap
			    top-14
			    translate-x-[-1.5rem]
			    group-hover:flex
			    pl-1 pr-1
			    font-semibold
			    rounded-xl
			    text-purple-400
			    italic
			    bg-[#37474F90]
			    "
			  >
				Contact
			  </span>
		    
		    </span>

		 </div>

		</nav>

		<div 
		  className="
		  text-xl
		  fixed
		  left-2
		  flex
		  justify-center
		  items-center
		  h-full
		  flex-col
		  space-y-2
		  text-xl
		  md:text-3xl
		  z-50
		  ">

		  <span
		    className="
		    hover:text-green-300
		    cursor-pointer
		    group
		    "
		  >
		    <a
		      href="https://github.com/sidmaz666" 
		      rel="noreferrer"
		      target="_blank">
			<FaGithub/>
		    </a>
		      <span
			className="
			absolute
			group-hover:flex
			translate-y-[-2rem]
			left-10
			hidden
			pl-1 pr-1
			rounded-xl
			text-[#00E676]
			font-semibold
			italic
			bg-black
			bg-opacity-50
			backdrop-blur-sm
			">
				Github
		      </span>
		  </span>

		  <span
		    className="
		    hover:text-pink-300
		    cursor-pointer
		    group
		    "
		  >
		    <a
		      href="https://instagram.com/shastra.sh" 
		      rel="noreferrer"
		      target="_blank">
			<FaInstagram/>
		    </a>
		      <span
			className="
			absolute
			group-hover:flex
			translate-y-[-2.5rem]
			left-10
			hidden
			pl-1 pr-1
			rounded-xl
			text-[#F06292]
			font-semibold
			italic
			bg-black
			bg-opacity-50
			backdrop-blur-sm
			">
			Instagram	
		      </span>
		  </span>


		  <span
		    className="
		    hover:text-white
		    cursor-pointer
		    group
		    "
		  >
		    <a
		      href="https://codepen.io/sidmaz666" 
		      rel="noreferrer"
		      target="_blank">
			<FaCodepen/>
		    </a>
		      <span
			className="
			absolute
			group-hover:flex
			translate-y-[-2.5rem]
			left-10
			hidden
			pl-1 pr-1
			rounded-xl
			text-white
			font-semibold
			italic
			bg-black
			bg-opacity-50
			backdrop-blur-sm
			">
			CodePen	
		      </span>
		  </span>

		  <span
		    className="
		    hover:text-white
		    cursor-pointer
		    group
		    "
		  >
		    <a
		      href="https://linkedin.com/in/sidhartha-mazumder" 
		      rel="noreferrer"
		      target="_blank">
			<FaLinkedinIn/>
		    </a>
		      <span
			className="
			absolute
			group-hover:flex
			translate-y-[-2.5rem]
			left-10
			hidden
			pl-1 pr-1
			rounded-xl
			text-blue-500
			font-semibold
			italic
			bg-black
			bg-opacity-50
			backdrop-blur-sm
			">
			LinkedIn	
		      </span>
		  </span>

		  <span
		    className="
		    hover:text-white
		    cursor-pointer
		    group
		    "
		  >
		    <a
		      href="https://discord.gg/si_d_maz#6086" 
		      rel="noreferrer"
		      target="_blank">
			<FaDiscord/>
		    </a>
		      <span
			className="
			absolute
			group-hover:flex
			translate-y-[-2.5rem]
			left-10
			hidden
			pl-1 pr-1
			rounded-xl
			text-purple-500
			font-semibold
			italic
			bg-black
			bg-opacity-50
			backdrop-blur-sm
			">
			Discord
		      </span>
		  </span>
		</div>


      </header>
      </>
      )
}


export default Nav
