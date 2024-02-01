"use client"
import {FaEye, FaPlus, FaUser} from "react-icons/fa";
import {FaCircleDot, FaRightFromBracket} from "react-icons/fa6";
import logout from "../server/admin/logout"
import {pages} from "./dashboard"

export default function Sidebar({ username, setPage }){
  return(
  <div className="h-full w-[320px] bg-smoky-black-900 flex flex-col items-center justify-start relative">
  <span className="pt-8 pb-8 w-full text-2xl font-mono font-semibold flex justify-center items-center space-x-4 border-b-2 border-liberty-800/20 text-liberty-200">
    <FaCircleDot className="text-5xl"/>
    <span className="flex flex-col">
      <span>DASHBOARD</span>
      <span className="text-xs font-thin flex items-center space-x-2">
	<FaUser/>
	  <span className="mt-1">
	      {username}
	</span>
      </span>
    </span>
  </span>
  <button className="text-xl w-full flex justify-between pt-5 pl-10 space-x-2 items-center border-b-2 border-liberty-800/20 pb-5 text-steel-blue-200" onClick={() => {setPage(pages[0])}}>
    <span>Add BLog</span>
    <span className="pr-14">
      <FaPlus/>
    </span>
  </button>
  <button className="text-xl w-full flex justify-between pt-5 pl-10 space-x-2 items-center border-b-2 border-liberty-800/20 pb-5 text-steel-blue-200"  onClick={() => {setPage(pages[1])}}>
    <span>Add Topic</span>
    <span className="pr-14">
      <FaPlus/>
    </span>
  </button>
  <button className="text-xl w-full flex justify-between pt-5 pl-10 space-x-2 items-center border-b-2 border-liberty-800/20 pb-5 text-steel-blue-200"   onClick={() => {setPage(pages[2])}}>
    <span>View Blogs</span>
    <span className="pr-14">
      <FaEye/>
    </span>
  </button>
  <button className="text-xl w-full flex justify-between pt-5 pl-10 space-x-2 items-center border-b-2 border-liberty-800/20 pb-5 text-steel-blue-200"  onClick={() => {setPage(pages[3])}}>
    <span>View Topics</span>
    <span className="pr-14">
	<FaEye/>
    </span>
    </button>
    <form action={logout}>
    <button type="submit" 
     className={`text-xl w-full flex justify-between mt-5 pl-10 
      space-x-2 items-center pb-5 absolute bottom-0 left-0
      border-t-2 border-liberty-800/20 
      pt-5 text-liberty-300 `}>
      <span>Logout</span>
      <span className="pr-14">
      <FaRightFromBracket/>
      </span>
    </button>
    </form>
  </div>
  )
}
