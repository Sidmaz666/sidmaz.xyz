export default function ToggleBtn(){
  return (
	<div 
	  className="
	  flex
	  p-2
	  mb-2
	  bg-black
	  ">
	<button
	  className="
	  bg-[#455A6490]
	  text-white
	  text-xl
	  rounded-l-full
	  outline-focus-none
	  pl-2
	  p-1
	  "
	  id="loginDiv_btn">
	  Login
	</button>

	<button 
	  className="
	  bg-[#26323890]
	  outline-focus-none
	  pr-2
	  p-1
	  pl-2
	  rounded-r-full
	  text-xl
	  text-white
	  "
	  id="registerDiv_btn">
	  Sign-Up
	</button>
	
	</div>
  )
}
