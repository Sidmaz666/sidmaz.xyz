"use client";
import {useInView} from "react-intersection-observer"
import {useEffect} from "react"

let TYPING_TIMEOUT;

function typingText(target) {
  if (target.dataset.value == undefined) {
    target.dataset.value = target.textContent;
  }
  typing_effect(
    target,
    target.dataset.value,
    0,
    target.dataset.speed !== undefined ? parseInt(target.dataset.speed) : 50
  );
}

function typing_effect(elm, text, i = 0, speed = 50) {
  if (i == 0) {
    elm.textContent = "";
    clearTimeout(TYPING_TIMEOUT);
    elm.style.opacity = 100;
  }
  if (i == text.length) {
    clearTimeout(TYPING_TIMEOUT);
    return;
  }
  elm.textContent += text[i];
  TYPING_TIMEOUT = setTimeout(() => {
    typing_effect(elm, text, i + 1, speed);
  }, speed);
}

export default function TextTypeAnimation({text, element, classes, ...attr}){
  const [ref,inView,entry] = useInView()
  useEffect(() => {
	if(inView){
	    typingText(entry.target)
	}
  },[inView])
  const Element = element || "span"
  return(
    <Element className={`typing-text ${classes}`} ref={ref} {...attr}>
    	{text}
    </Element>
  )
}


