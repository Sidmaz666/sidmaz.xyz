"use client";
import {useInView} from "react-intersection-observer"
import {useEffect, useState} from "react"

let BORDER_GLOW_INTERVAL
let COLORS = ["#0097A7", "#FF80AB", "#FFEB3B", "#EA80FC", "#00C853"]


function getRandomPercentage(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomColor(givenColors) {
  if(!givenColors){
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }
  return givenColors[Math.floor(Math.random() * givenColors.length)];
}

function border_glow(elm,speed,radius=[0,0],colors=COLORS) {
  clearInterval(BORDER_GLOW_INTERVAL);
  BORDER_GLOW_INTERVAL = setInterval(() => {
    elm.style.cssText = `
  border-radius: ${getRandomPercentage(radius[0], radius[1])}%  ${getRandomPercentage(
      radius[0],
      radius[1]
    )}% ${getRandomPercentage(radius[0], radius[1])}% ${getRandomPercentage(
      radius[0],
      radius[1]
    )}% / ${getRandomPercentage(radius[0], radius[1])}%  ${getRandomPercentage(
      radius[0],
      radius[1]
    )}% ${getRandomPercentage(radius[0], radius[1])}% ${getRandomPercentage(radius[0], radius[1])}%;
 box-shadow:  -0px 5px 10px 2px ${getRandomColor(colors)},
 	      -5px 0px 10px 2px ${getRandomColor(colors)},
              -0px 5px 10px 2px ${getRandomColor(colors)},
              -5px 0px 10px 2px ${getRandomColor(colors)};
    `;
  }, speed);
}


export default function BorderGlow({children, element, classes, speed , radius, colors, ...attr}){
  const [ref,inView,entry] = useInView()
  const [lastElm,setElm] = useState()
  useEffect(() => {
	if(inView){
	    border_glow(
	      entry.target.childNodes[0],
	      speed ? speed : 300,
	      radius ? radius : [0,0],
	      colors ? colors : COLORS
	    )
	    setElm(entry.target.childNodes[0])
	} else {
	  if(lastElm){
	    clearInterval(BORDER_GLOW_INTERVAL)
	  }
	}
  },[inView])
  const Element = element || "div"
  return(
    <Element className={`${classes}`} ref={ref} {...attr}>
    	{children}
    </Element>
  )
}
