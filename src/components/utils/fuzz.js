"use client"
import {useInView} from "react-intersection-observer"
import {useEffect, useState} from "react"


function fuzz_text(elm) {
      if (elm.dataset.value == undefined) {
	elm.dataset.value = elm.textContent;
      }
      let SPEED;
      const original_text = elm.dataset.value;
      const original_text_clean = elm.dataset.value.replaceAll(" ","");
      SPEED = setInterval(() => {
		elm.textContent = ""
		elm.textContent = jibrish_text(original_text_clean)
      },50)
      setTimeout(() => {
	clearInterval(SPEED)
	elm.textContent = original_text
      },500)
}

function jibrish_text(text){
  let jibrish = ""
  const all_characters = "qazwsxedcrfvtgbyhnujmikolp0123456789"
  for (let index = 0; index < text.length; index++) {
  	const character = all_characters[Math.floor(Math.random()*((all_characters.length - 1) - 0 + 1)) + 0];
        jibrish = jibrish + character
  }
  return jibrish
}

export default function Fuzz({text, element, classes, ...attr}){
  const [ref,inView,entry] = useInView()
  const [lastElm,setElm] = useState()
  const [lastContent,setContent] = useState()
  useEffect(() => {
	if(inView){
	    setContent(entry.target.textContent)
	    fuzz_text(entry.target)
	    setElm(entry.target)
	} else {
	  if(lastElm){
		lastElm.textContent = lastContent
	  }
	}
  },[inView])
  const Element = element || "div"
  return(
    <Element className={`${classes || ""}`} ref={ref} {...attr}>
    	{text}
    </Element>
  )
}

