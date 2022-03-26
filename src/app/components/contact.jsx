import React, { useState } from 'react'

import emailjs from 'emailjs-com'

function Contact(){

  const [isName,setName] = useState("")
  const [isEmail,setEmail] = useState("")
  const [isMessage,setMessage] = useState("")
  const [isSub,setSub] = useState("")


  const SubmitFunc = (e) => {
    e.preventDefault()
 
    if(isName !== '' && isEmail !== '' && isMessage !== ''){

      if(isMessage.length > 16) {


	if(isEmail.length > 5 && isEmail.indexOf('@') > 0) {

	  const Message = {
	    from_name : isName,
	    from_email : isEmail,
	    message : isMessage
	  }

	
	emailjs.send(
	  'service_kpht79h',
	  'template_i4yfv0a',
	  Message,
	  'rVYEWw8ZZhVzBMlio')
	    .then(function(res){

	      if(res.status === 200){

		document.getElementById("name").value = ""
		document.getElementById("email").value = ""
		document.getElementById("message").value = ""

		setSub("Thank You For Reaching Out!")

	      } else {
		setSub("Unable to Send Mail!")
	      }

	    },
	      function(error){
		console.log(error)
		setSub("Unable to Send Mail!")
	      }
	    )
	


	} else {
	  setSub("Enter Verified Email Address")
	} 


      } else {
	setSub("The Mesage Should Contain Atleast 16 Characters")
      }


    } else {
      setSub("Type Something!")
    }



  }

  return (
    <>
	<div
	  className="
	  mt-52
	  z-50
	  bg-black
	  w-screen
	  translate-x-[-0.60rem]
	  p-4
	  "
	>
	<i id="contact"></i> 	

		  <div
		    className="
			flex
			justify-center
		    "
		  >
	
		    
	<span
	  className="
	  flex
	  items-center
	  justify-center
	  antialiased
	  pt-16 pb-16 p-5
	  w-60
	  rounded-full
	  text-center	
	  text-3xl
	  translate-y-[-4rem]
	  border-t-4	
	  border-t-green-500
	  border-b-4
	  border-r-4 border-l-4
	  border-r-lime-500 
	  border-l-cyan-500
	  border-b-pink-500
	  rounded-full
	  shadow-2xl
	  relative
	  z-30
	  bg-black
	  "
	>
	  <img src=""
		className="
		absolute
		h-60
		z-0
		rounded-full
	    	opacity-80
	    	blur-[0.10rem]
	    "
	  alt="" />

	  <span
	    className="
	    text-[#00E676]
	    z-50
	    font-semibold
	    italic
	    pt-8
	    pb-8
	    font-serif
	    text-4xl
	    "
	  >

		Let's Talk

	  </span>
	</span>
	</div>
       </div>
	
      <div
	className="
	z-[60]
	translate-y-[-3rem]
	bg-[#000000]
	rounded-lg
	p-5
	pr-16 pl-16
	shadow-xl
	"
      >

	<span
	  className={`
	  text-lg
	  w-full
	  flex
	  justify-center
	  space-y-5
	  pb-5
	  text-white
	  ${isSub ? '' && 'hidden' : '' }
	  `}
	>

	{isSub !== "" && isSub}

	</span>


	<form onSubmit={SubmitFunc}>

		<label
		  className="
		  flex
		  flex-col
		  text-xl
		  font-semibold
		  mb-2
		  "
		  htmlFor="Name">
		  Name
		<input
		  id="name"
		  type="text"
		  placeholder="Jhon Dee"
		  className="
		  bg-transparent
		  border
		  p-2
		  text-green-500
		  focus:outline-none
		  border-green-600
		  rounded-lg
		  mt-2
		  focus:bg-[#26323850]
		  transition duration-200 ease-in-out
		  "
		  onChange={
		    (e) => {
		  setName(e.target.value)
		  }
		  }
		  />
		</label>

		<label
		  className="
		  flex
		  flex-col
		  text-xl
		  font-semibold
		  mb-2
		  "
		  htmlFor="Email">
		  Email
		<input
		  id="email"
		  type="email"
		  placeholder="qwerty01@abc.xyz"
		  className="
		  bg-transparent
		  border
		  p-2
		  text-green-500
		  focus:outline-none
		  border-green-600
		  rounded-lg
		  mt-2
		  focus:bg-[#26323850]
		  transition duration-200 ease-in-out
		  "
		  onChange={
		    (e) => {
		  setEmail(e.target.value)
		  }
		  }
		  required
		  />
		</label>


		<label
		  className="
		  flex
		  flex-col
		  text-xl
		  font-semibold
		  mb-2
		  "
		  htmlFor="Message">
		  Message
		<textarea
		  id="message"
		  type="text"
		  placeholder="Message . . ."
		  className="
		  bg-transparent
		  border
		  p-2
		  text-green-500
		  focus:outline-none
		  border-green-600
		  rounded-lg
		  mt-2
		  h-36
		  resize-none
		  focus:bg-[#26323850]
		  transition duration-200 ease-in-out
		  "
		  onChange={
		    (e) => {
		  setMessage(e.target.value)
		  }
		  }
		  >
		</textarea>
		</label>


	  	<button
		  className="
		  mt-5
		  bg-[#00C85395]
		  transition duration-200 ease-in-out
		  hover:text-black
		  hover:bg-[#00C853]
		  p-2
		  text-white
		  rounded-md
		  font-semibold
		  mb-2
		  focus:outline-none
		  "
		  type="submit"
		>
		  Submit
		</button>

	
	</form>



      </div>

    </>
  )
}

export default Contact
