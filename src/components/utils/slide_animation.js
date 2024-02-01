"use client"
import {useInView} from "react-intersection-observer"
import {useEffect, useState} from "react"

function slide(target){
  target.classList.add("animate")
}

function reset_(target){
  target.classList.remove("animate")
}

export default function SlideAnimation({children, element, classes, direction, ...attr}){
  const [ref,inView,entry] = useInView()
  const [lastElm,setElm] = useState()
  useEffect(() => {
	if(inView){
	    slide(entry.target)
	    setElm(entry.target)
	} else {
	  if(lastElm){
	    reset_(lastElm)
	  }
	}
  },[inView])
  const Element = element || "div"
  return(
    <Element className={`slide-${direction == "left" ? 'l' : 'r' } ${classes}`} ref={ref} {...attr}>
    	{children}
    </Element>
  )
}
