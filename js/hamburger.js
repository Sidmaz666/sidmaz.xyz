function toggleMenu(btn){
   if (detectDeviceType() == "Mobile" || detectDeviceType() == "Tablet") {
	if(
     	document.querySelector('nav > ul').classList.contains('show-ham')	
	){
	  btn.innerHTML = `<i class="fa-solid fa-bars"></i>`
	} else {
	  btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
	}	
     	document.querySelector('nav > ul').classList.toggle('show-ham')	
  }
}
