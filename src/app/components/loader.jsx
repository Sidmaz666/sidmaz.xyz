import React, { useState, useEffect } from 'react'
import { FaMugHot } from 'react-icons/fa'

function Loader(props){
  const state = props.state || false
  const [loading,setLoading] = useState(state)
  const [isCol,setCol] = useState(RandomCol())
  const timeout = props.timeout || 3000
  const [isBorder,setBorder] = useState("border-black")
  function RandomCol () {
     return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
}


  useEffect(() => {
    document.body.style.overflow = "hidden"
    setTimeout(() => {
	document.body.style.overflow = "auto"
	setLoading(false)
    },timeout)

    setInterval(() => {
	setCol(RandomCol())
    },500)

  const borders = ["border-t-4","border-l-4","border-b-4","border-r-4"]
  let x = 0
  setInterval(() => {
       const sel_border = borders[x] 
	setBorder(sel_border)
    	x++
    if(x > borders.length -1 ){
      x = 0
    }
  },200)


  }, [])

  return (
    <>
      <div
	className={`
	${loading ? '' : 'hidden'}
	flex
	justify-center
	items-center
	text-2xl
	h-screen
	w-screen
	fixed
	bg-black
	text-green-500
	z-[9999]
	`}>


	<div
	  className={`
	  flex
	  justify-center
	  items-center
	  space-x-3
	  p-5
	  transition-all
	  duration-150
	  ease-in-out
	  ${ isBorder }
	  `}

	  style={{ borderColor : isCol + "70" }}
	  
	>

	<FaMugHot
	className="animate-pulse translate-y-[-0.20rem]"
	style={{ color : isCol }}/>
	<h1
	className="animate-pulse">
	  <i>Loading . . .</i> 
	</h1>

	</div>

      </div>
    </>
  )
}

export default Loader
