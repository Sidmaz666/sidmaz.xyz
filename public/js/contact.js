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

function show_message(message, classes, icon){
  document.querySelector('#message-box').style.display = "flex"
  document.querySelector('#message-box').insertAdjacentHTML(`beforeend`,`
  	<span class="bg-smoky-black-700 text-sm md:text-xl
	  rounded-md p-2 font-space font-semibold ${classes} flex space-x-2 items-center">
	    ${icon}
		<span>
		  ${message}
		</span>
	</span>
    `)
  setTimeout(() => {
    document.querySelector('#message-box').style.display = "none"
  },10000)
}

document.forms['contact-form'].addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.forms['contact-form']["contact-name"].value
    const email =  document.forms['contact-form']["contact-email"].value
    const message =  document.forms['contact-form']["contact-message"].value

  let errors = false

  if(!validateName(name)){
	document.forms['contact-form']['contact-name'].classList.add('border-rose-500')
        errors = true
  } else {
    if(document.forms['contact-form']['contact-name'].classList.contains('border-rose-500')){
	    document.forms['contact-form']['contact-name'].classList.remove('border-rose-500')
	    errors = false
    }
  }

  if(!validateEmail(email)){
	document.forms['contact-form']['contact-email'].classList.add('border-rose-500')
        errors = true
  } else {
    if(document.forms['contact-form']['contact-email'].classList.contains('border-rose-500')){
	    document.forms['contact-form']['contact-email'].classList.remove('border-rose-500')
	    errors = false
    }
  }

  if(!validateMessage(message)){
	document.forms['contact-form']['contact-message'].classList.add('border-rose-500')
        errors = true
  } else {
    if(document.forms['contact-form']['contact-message'].classList.contains('border-rose-500')){
	    document.forms['contact-form']['contact-message'].classList.remove('border-rose-500')
	    errors = false
    }
  }



  if(!errors){
    const message_data = {
	    from_name : name,
	    from_email : email,
	    message : message
      }

    document.forms['contact-form']["contact-name"].value = ''
    document.forms['contact-form']["contact-email"].value = ''
    document.forms['contact-form']["contact-message"].value = ''

    const public_key = decodeURIComponent('%' + String('4c536a4232494b5a424630304969457370').match(/.{1,2}/g).join('%'))

    emailjs.send(
	'service_kpht79h',
      	'template_i4yfv0a',
      	 message_data,
      	 public_key
    ).then(function(response){
      if(response.status == 200){
	show_message("Thanks For Reaching Out!","text-amazon-500",` <i class="fa-solid fa-envelope"></i> `)	
      }	else {
	show_message("Unable To Send Email","text-rose-500",` <i class="fa-solid fa-triangle-exclamation"></i> `)
      }
    }, function(email_error){
	show_message("Unable To Send Email","text-rose-500",` <i class="fa-solid fa-triangle-exclamation"></i> `)
    })
  }
})
