import {useEffect} from 'react'
import ToggleBtn from './auth/toggle'
import LoginDiv from './auth/log'
import RegDiv from './auth/reg'
import bg_gif from './assets/ezgif-1-900aec0a72.gif'

export default function LoginPage(){

  
  useEffect(() => {
    document.title = "Creator Access ~ Login"
    const sel_logCDBtn = document.querySelector('#loginDiv_btn') 
    const sel_regCDBtn = document.querySelector('#registerDiv_btn')

    const sel_logD = document.querySelector('#login_div') 
    const sel_regD = document.querySelector('#register_div')

    sel_regCDBtn.addEventListener('click', () => {
	sel_logD.style.display = "none"
        sel_regD.style.display = "flex"
      	sel_regCDBtn.style.background = "#455A6490"
      	sel_logCDBtn.style.background = "#26323890"
    })

    sel_logCDBtn.addEventListener('click', () => {
	sel_regD.style.display = "none"
        sel_logD.style.display = "flex"
      	sel_logCDBtn.style.background = "#455A6490"
      	sel_regCDBtn.style.background = "#26323890"
    })

  },[])
  return(
    <>
      
      <div
	className="
	flex
	w-screen
	inset-0
	h-screen
	justify-center
	items-center
	flex-col
	"
      >
	<img
	  className="
	  absolute	
	  h-screen
	  w-screen
	  z-[-1]
	  "
	  src={bg_gif}
	  alt="Background"
	 /> 	

	<span class="p-2 text-white text-lg bg-black mb-2 border-b border-red-500">Currently Under Devlopment!</span>
	<ToggleBtn/>
	<LoginDiv/>
	<RegDiv/>

      </div>

    </>
  )
}
