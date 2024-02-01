"use client"
import Login from "@/components/admin/login"
import Loader from "../loading"
import {useEffect, useState} from "react"

export default function Admin(){
  const [isLoader,setLoader] = useState(true)
  useEffect(() => {
	setTimeout(() => {
	  setLoader(false)
	},500)
  },[])
  return (
    <>
    {isLoader ? <Loader/> : <Login/>}
    </>
  )
}
