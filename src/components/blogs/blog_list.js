"use client"
import { useState , useEffect} from "react"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import SlideAnimation from "../utils/slide_animation"
import { ThreeDots } from "react-loader-spinner"
import Link from "next/link"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"

export default function BlogList(){
  const query = useSearchParams()
  const topic = query.get("topic")
  const page = query.get("page")
  const [blogs,setBlogs] = useState([])
  const [isLastPage,setLastPage] = useState(false)
  const [isLoader,setLoader] = useState(true)
  useEffect(() => {
    const fetch_blogs = async (topic,page) => {
	    setLoader(true)
	    const req = await axios.get(`/blog/api/blogs?topic=${topic ? topic : ""}&page=${page}`)
	    const data = await req.data
	    setBlogs(data.blogs)
      	    setLastPage(data.lastPage)
	    setLoader(false)
    }
    fetch_blogs(topic,page)
  },[topic,page])
  const setDate = (data) => {
     const date = new Date(data)
     return date.getDate() + '/' +(date.getUTCMonth() + 1) + '/'+ date.getUTCFullYear()
  }
  return(
    <div 
    className="w-full flex justify-center items-center
    pl-5 pr-5 md:pl-20 md:pr-20 pt-16 pb-10 flex-col space-y-5">
    <SlideAnimation direction={"left"}
    classes="capitalize text-sm font-space italic absolute top-5 right-3">
	    <span className="p-2">
	      {topic ? topic.replaceAll("_"," ") : "All"}, {page ? page : 1}
	    </span>
    </SlideAnimation>
    { 
      isLoader ? 
      <ThreeDots
	visible={isLoader}
	height="80"
	width="80"
        radius={6}
        color="#9ea7c0"
	ariaLabel="triangle-loading"
	wrapperStyle={{
	 position:"absolute",
	 top:"40%",
	 margin:"0px",
	 padding:"0px",
	 width:"100%",
	 display:"flex",
	 justifyContent:"center",
	 alignItems:"center",
	}}
	/>
      : blogs.length > 0 ? (
	blogs.map((blog) => {
	return(
	  <SlideAnimation direction={"right"}
	    key={blog.blog_id}
	    classes="p-2 w-full
	    flex-col md:flex-row relative
	    flex justify-between bg-smoky-black-700 text-liberty-300 rounded-md md:items-end items-start">
	  	<div className="flex flex-col capitalize p-1">
		<span className="flex space-x-2 items-baseline">
		  <Link href={`blog/${blog.blog_id}`} className="text-2xl underline">
	  		{ blog.blog_title }
		  </Link>
		  <Link href={`blog?topic=${blog.blog_topic}`} className="text-md underline">
		    ({ blog.blog_topic })
		  </Link>
		  </span>
		    <span className="text-sm mt-1">
	  		{ blog.blog_description }
		    </span>
		  </div>
		  <span className="text-sm text-start w-full md:w-auto font-mono md:text-end md:p-2">
		  {setDate(blog.blog_creation)}
		</span>
	  </SlideAnimation>
		)
	})
      ) : 
	    <span className="text-french-raspberry-600 text-3xl font-semibold p-2">
	      No Blogs !
	    </span>
	}
    {
      isLoader == false ?
	<div className="w-full flex justify-evenly pt-5 p-2">
	{ page && page > 1  ? <SlideAnimation direction={"right"} element={Link} href={`${ topic ? "?topic=" + topic + "&" : "?" }page=${Number((page == 1 ? 2 : page) - 1)}`} classes={`text-xl delay-1000 hover:text-liberty-500`} > <FaArrowLeft/> </SlideAnimation> :  null}
        {isLastPage ? null : <SlideAnimation direction={"left"} element={Link} href={`${ topic ? "?topic=" + topic + "&" : "?" }page=${Number(page ? Number(parseInt(page) + 1) : 2 )}`} classes={`text-xl delay-1000 hover:text-liberty-500`} ><FaArrowRight/></SlideAnimation>}
	</div>
	: null
    }
   </div>
  )
}
