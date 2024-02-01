import {FaAt, FaEnvelope, FaPaperPlane, FaRocket, FaUser} from "react-icons/fa"
import SlideAnimation from "../utils/slide_animation"
import TextTypeAnimation from "../utils/typing_text"
import {FaPenToSquare, FaTriangleExclamation} from "react-icons/fa6"
import {useState} from "react"
import emailjs from "@emailjs/browser"


function ShowMessage({message,classes,icon}) {
  return (
    <SlideAnimation direction={"right"} classes="fixed md:top-4 top-16 w-full justify-center flex"
    id="message-box">
    <span className={`bg-smoky-black-700 text-sm md:text-xl
	rounded-md p-2 font-space font-semibold ${classes} flex space-x-2 items-center`}>
	      {icon}
	      <span>
	      {message}
	      </span>
      </span>
  </SlideAnimation>
  )
}



export default function Contact(){
  const [isName,setName] = useState("")
  const [isEmail,setEmail] = useState("")
  const [isMessage,setMessage] = useState("")
  const Error= { name: false, email:false, message:false}
  const [isError,setError] = useState(Error)
  const [isSuccess,setSuccess] = useState(false)
  const [isEmailError,setEmailError] = useState(false)
  
  const resetMessage = (timer) => {
    setTimeout(() => {
      setSuccess(false)
      setEmailError(false)
    },timer)
  }

  const disableBtn = () => {
    document.getElementById("form-btn").classList.add("cursor-not-allowed")
    document.getElementById("form-btn").setAttribute("disabled","")
  }

  const enableBtn = () => {
    document.getElementById("form-btn").classList.remove("cursor-not-allowed")
    document.getElementById("form-btn").removeAttribute("disabled","")
  }

  const clearInput = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  const validateName = (name) => {
  if(name && name.trim().replaceAll(' ','').length >= 3){
	Error.name = false
    } else {
	Error.name = true
    }
      	setError(Error)
  }

  const validateEmail = (email) => {
  if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
	Error.email = false
    } else {
	Error.email = true
    }
      	setError(Error)
  }


  const validateMessage = (message) => {
    if(message && message.trim().replaceAll(' ','').length > 5){
	Error.message = false
    } else {
	Error.message = true
    }
      	setError(Error)
  }


  const submitForm = (e) => {
    e.preventDefault()
    validateName(isName)
    validateEmail(isEmail)
    validateMessage(isMessage)
    if(!Error.name && !Error.email && !Error.message){
    disableBtn()
    const message_data = {
	    from_name : isName,
	    from_email : isEmail,
	    message : isMessage
    }
    const public_key = decodeURIComponent(
      '%' + String('4c536a4232494b5a424630304969457370').match(/.{1,2}/g).join('%')
    )
    emailjs.send(
	'service_kpht79h',
      	'template_i4yfv0a', 
      	 message_data,
      	 public_key
    ).then(function(response){
      if(response.status == 200){
	setEmailError(false)
	setSuccess(true)
	clearInput()
	enableBtn()
	resetMessage(10000)
      }	else {
	setEmailError(true)
	setSuccess(false)
	enableBtn()
	resetMessage(10000)
      }
    }, function(email_error){
	setEmailError(true)
	setSuccess(false)
	enableBtn()
	resetMessage(10000)
    })

    }
  }

  return(
  <>
  <section id="contact"
    className="w-screen h-screen flex flex-col justify-center items-center bg-material">
  <div className="p-14 md:p-0 w-full md:w-auto flex flex-col flex-wrap space-y-3 md:space-y-5 font-space">
    <TextTypeAnimation
    classes="text-xs md:text-sm text-start pl-4 md:pl-0" 
    data-speed="80" text="Help me gain more Experience.."/>  
    <SlideAnimation direction={"left"} classes="text-2xl md:text-7xl delay-800 flex pl-4 md:pl-0">
      <span>Shoot an Email..</span><FaRocket className="fa-solid fa-rocket"/> 
    </SlideAnimation>  
    <form action="#" id="contact-form" method="post" onSubmit={submitForm} className="flex flex-col mt-7 font-space">
      	<SlideAnimation direction={"right"}
    	  classes="mt-3 flex items-center md:text-xl text-sm bg-smoky-black-700 rounded-md delay-1000">
	  <span className="flex items-center mx-2">
	    <FaUser className="mr-2"/>
	    <span className="align-baseline capitalize">
		Name
	    </span>
	  </span>
	  <input type="text"
	  className={`p-2 bg-smoky-black-700 w-full ${isError.name ? "border-rose-500" : "border-liberty-600/50"}
	  border-l-2 rounded-r-md outline-none`}
	  onChange={(e) => {setName(e.target.value)}}
          value={isName}
	  autoComplete="off"
	  name="contact-name" 
	  id="contact-name" 
	  placeholder="Jhon Dee"/>
	</SlideAnimation>
      	<SlideAnimation
    	  direction={"left"}
          classes="flex items-center md:text-xl text-sm bg-smoky-black-700 rounded-md mt-4 delay-1000">
	  <span className="flex items-center mx-2">
	    <FaAt className="mr-2"/>
	    <span className="align-baseline capitalize">
		Email&nbsp; 
	    </span>
	  </span>
	  <input type="email"
	  className={`p-2 bg-smoky-black-700 w-full
	  border-l-2 rounded-r-md outline-none ${isError.email ? "border-rose-600" : "border-liberty-600/50" } `}
	  onChange={(e) => {setEmail(e.target.value)}}
	  autoComplete="off"
	  name="contact-email" 
	  id="contact-email" 
          value={isEmail}
	  placeholder="email@domain.top"/>
	</SlideAnimation>
      	<SlideAnimation direction={"right"}
    		classes="flex flex-col md:text-xl text-sm mt-4 slide-r delay-1000">
		<span className="p-2 bg-smoky-black-700 rounded-t-md flex space-x-2 items-center">
		  <FaPenToSquare/>
		  <span>Message</span>
		</span>
		<textarea
    		  value={isMessage}
		  className={`bg-smoky-black-700 p-2 resize-none outline-none border-t-2 
		  ${isError.message ? "border-rose-600" : "border-liberty-600/50"}`}
		  placeholder="Your Message Goes Here..."
		  name="contact-message"
		  id="contact-message"
    		  onChange={(e) => {setMessage(e.target.value)}}
		  ></textarea> 
		<button type="submit" id="form-btn"
    		  className="p-2 w-full bg-liberty-600 flex justify-center items-center space-x-2 
		  hover:bg-liberty-700 rounded-b-md font-semibold outline-none">
		 <FaPaperPlane/><span>Send</span> 
		</button>
	  </SlideAnimation>
	</form>
      </div>
    </section>
    {isSuccess ? 
      <ShowMessage message="Thanks For Reaching Out!"
      classes={"text-amazon-500"} icon={<FaEnvelope/>}/> : ""}
    {isEmailError ? 
	<ShowMessage message="Unable To Send Email"
      	classes={"text-rose-500"} icon={<FaTriangleExclamation/>}/> : "" }
    </>
  )
}
