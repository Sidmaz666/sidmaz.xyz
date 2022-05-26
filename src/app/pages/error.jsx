import { useState, useEffect } from 'react'
import def_img from '../components/assets/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'

export default function ErrorPage(){
  const [isImg,setImg] = useState(def_img);
  
  useEffect(() => {
    const setImage = async () => {
	const send_req = await fetch('https://dog.ceo/api/breeds/image/random')
        const res = await send_req.json()
      	setImg(res.message)
    }	

    setImage()
    
    setTimeout(() => {
	window.location = "/"
    },8000)

  },[])

  return (
    <>
	<div
	className="
	  flex
	  justify-center
	  items-center
	  w-screen
	  h-screen"
	>
	
	<div className="max-w-md p-2 text-center">
	  <span className="text-white text-2xl font-semibold">
		Error Page Not Found!
	  </span>
	<img src={isImg}
	  className="mt-2 w-30 rounded-t-sm border-b-4 border-green-500"
	  id="err_img" 
	  alt="Page Not Found!" />
	</div>
	</div>
    </>
  )
}
