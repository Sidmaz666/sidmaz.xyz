"use client"
import FloatingContact from "@/components/home/floating_contact"
import Nav from "@/components/home/nav"
import Intro from "@/components/home/intro"
import About from "@/components/home/about"
import Loader from "./loading"
import Cursor from "@/components/utils/cursor"
import Work from "@/components/home/work"
import Skills from "@/components/home/skills"
import Experience from "@/components/home/experience"
import Contact from "@/components/home/contact"
import Footer from "@/components/home/footer"
import TopButton from "@/components/home/top_button"
import {useEffect, useState} from "react"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [ref,inView] = useInView()
  const [isTopButton,setTopButton] = useState(false)
  const [isLoader,setLoader] = useState(true)
  useEffect(() => {
	setTimeout(() => {
		setLoader(false)
	  	Cursor()
	},500)
 },[])
  useEffect(() => {
	if(inView){
	  setTopButton(false)
	} else {
	  setTopButton(true)
	}
  },[inView])
  return (
    <>
	{isLoader ?
	  <Loader/>
	  :
	  <main 
	  className="bg-smoky-black-800 overflow-x-hidden overflow-y-auto
	  flex items-center flex-col mt-0 text-liberty-300"
	  >
	      <Nav/>
	      <FloatingContact/>
	      <section ref={ref}>
	      <Intro/>
	      </section>
	      <About/>
	      <Work/>
	      <Skills/>
	      <Experience/>
	      <Contact/>
	      <Footer/>
	      {isTopButton && <TopButton/>}
	  </main>
	}
    </>
  )
}
