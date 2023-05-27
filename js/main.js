function loading_screen() {
  const loading_screenTimeout = setTimeout(() => {
    document.querySelector(".loading-page").classList.toggle("hidden");
    clearTimeout(loading_screenTimeout);
    document.querySelector(`.main-page`).classList.toggle('hidden')
    document.querySelector(`.home-page`).classList.toggle('hidden')
    const screenHeight = window.innerHeight + 50;
    document.body.insertAdjacentHTML("beforeend",
    `
      <section id="bg-animation" class="absolute flex-col top-0 left-0 w-full z-[-1] opacity-[50%]">
      <div class="h-[${screenHeight/6}px] flex w-full">
      </div>
      <div class="h-[${screenHeight/6}px] flex w-full">
      </div>
      <div class="h-[${screenHeight/6}px] flex w-full">
      </div>
      <div class="h-[${screenHeight/6}px] flex w-full">
      </div>
      <div class="h-[${screenHeight/6}px] flex w-full">
      </div>
      <div class="h-[${screenHeight/6}px] flex w-full">
      </div>
      </section>

    `)
    bg_animation()
  }, 3000);
}

function removeClassByRegex(element, classNameRegex) {
    element.className = element.className.replace(classNameRegex, '');
  
}

function generateRandomHexColor() {
  
  const colors = [
    	 "#FFB84C",
    	 "#F266AB",
    	 "#A459D1",
    	 "#2CD3E1",
    	 "#865DFF",
    	 "#E384FF",
    	 "#FFA3FD",
    	 "#E76161",
    	 "#B04759"
  ]	
  	const randomNumber = Math.floor(Math.random() * colors.length)
  	return colors[randomNumber]


}


function bg_animation() {
  let selected_div = 0
  setInterval(() => {
   document
      .querySelectorAll('#bg-animation > div')[selected_div]
      .classList.add(`bg-[${generateRandomHexColor()}]`)
   document
      .querySelectorAll('#bg-animation > div')[selected_div]
      .classList.add(`${Math.random() > 0.5 ? '-' : ''}translate-x-[${Math.floor(Math.random() * ((window.innerWidth / 2) - 100 + 1) + 50)}px]`)
    document.querySelectorAll('#bg-animation > div')
      .forEach((d,i) => {
	if(i !== selected_div){
	  removeClassByRegex(d,/bg-\[[^\]]+\]/ )
	  removeClassByRegex(d,/translate-x-\[[^\]]+\]/ )
	  removeClassByRegex(d,/-translate-x-\[[^\]]+\]/ )
	}
      })
    if(selected_div == 5){
      selected_div = 0
    } else{
      selected_div++
    }
  },300)
}

function handlePage(activePageClass){
  const allPages = [
    "project-page",
    "home-page",
    "know-more-page",
    "contact-page",
    "error-page",
    "loading-page"
  ]

  allPages.forEach((elm) => {
    if(elm !== activePageClass){
	document.querySelector(`.${elm}`).classList.add('hidden')
    } else {
	document.querySelector(`.${elm}`).classList.remove('hidden')
    }
  })
}

const validateName = (name) => {
  if(name.trim().replaceAll(' ','').length >= 3){
	return true
  } else {
    return false
  }
}

const validateEmail = (email) => {
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true
  } else {
    return false	
  }
}


const validateMessage = (message) => {
  if(message.trim().replaceAll(' ','').length < 5){
    return false
  } else {
    return true
  }
}

const showError = (errors,addElement = '') => {
  document.querySelector('#contact-error').innerHTML = ''
  errors.forEach((e) => {
    document.querySelector('#contact-error').insertAdjacentHTML("beforeend", `
      <span 
      class="flex w-full
      bg-[#D5000070] 
      justify-center
      text-xs
      font-semibold
      text-gray-800
      p-1
      ">
      ${addElement}${e}
      </span>
      `)
  })
}

const showSuccess = (success_message) => {
  document.querySelector('#contact-error').innerHTML = ''
    document.querySelector('#contact-error').insertAdjacentHTML("beforeend", `
      <span 
      class="flex w-full
      bg-[#00C85370] 
      justify-center
      text-xs
      font-semibold
      text-gray-800
      p-1
      ">
      <i class="fa-solid fa-circle-check"></i>&nbsp;${success_message}
      </span>
      `)
}

document.forms['contact-form'].addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.forms['contact-form']["contact-name"].value
    const email =  document.forms['contact-form']["contact-email"].value
    const message =  document.forms['contact-form']["contact-message"].value

  const errors = []

  if(!validateName(name)){
	errors.push("Enter Valid Name")
  }

  if(!validateEmail(email)){
	errors.push("Enter Valid Email")
  }

  if(!validateMessage(message)){
	errors.push("Enter Valid Message")
  }

  showError(errors)

  if(errors.length == 0){
   
    const message_data = {
	    from_name : name,
	    from_email : email,
	    message : message
	  }

    const public_key = decodeURIComponent('%' + String('4c536a4232494b5a424630304969457370').match(/.{1,2}/g).join('%'))

    emailjs.send(
	'service_kpht79h',
      	'template_i4yfv0a',
      	 message_data,
      	 public_key
    ).then(function(response){
      if(response.status == 200){
     	document.forms['contact-form']["contact-name"].value = ''
     	document.forms['contact-form']["contact-email"].value = ''
     	document.forms['contact-form']["contact-message"].value = ''
	showSuccess("Thanks For Reaching Out!")	
      }	else {
	showError(["Unable To Send Email"])
      }
    }, function(email_error){
	showError(["Unable To Send Email"],'<i class="fa-solid fa-circle-xmark"></i>&nbsp;')
    })
  }
})

async function setAnimeGIF(){
  const req = await fetch('https://api.waifu.pics/sfw/cry')
  const data = await req.json()
  const url = data.url
  const target = document.querySelector('#show-anime-container')
  target.insertAdjacentHTML("beforeend",`
    	<img 
	class="mb-5"
	src="${url}" 
	alt="Anime Crying GIF!">
    `)
}

window.onload = async function () {
  const validPath = '/'
  const currentPath = window.location.pathname
  if(currentPath !== validPath){
	document.querySelector(`.main-page`)
        .classList.toggle('hidden')
	handlePage('error-page')
    	document.title = 'ERROR 404 | PAGE NOT FOUND!'
    	setAnimeGIF()
  } else {
    loading_screen();
  }
};


