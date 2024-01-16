let TYPING_TIMEOUT
let BORDER_GLOW_INTERVAL
const fuzz = document.querySelectorAll(".fuzz");
const slide_right = document.querySelectorAll(".slide-r");
const slide_left = document.querySelectorAll(".slide-l");
const border_glow_ = document.querySelectorAll(".border-glow");
const typing_text_ = document.querySelectorAll(".typing-text");
const intro = document.querySelectorAll("#intro");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if( entry.target.classList.contains('fuzz')){
	fuzz_text(entry.target);
      }
      if(entry.target.classList.contains('border-glow')){
	border_glow(entry.target)
      }
      if(entry.target.classList.contains('typing-text')){
	if(entry.target.dataset.value == undefined){
	  entry.target.dataset.value = entry.target.textContent
	}
	typing_effect(entry.target, 
	  entry.target.dataset.value,
	  0,
	  entry.target.dataset.speed !== undefined ? parseInt(entry.target.dataset.speed) : 50)
      }
      checkLoader(
	function(){
	    if(entry.target.id == "intro") { document.getElementById("top-btn").remove() }
	    entry.target.classList.add('animate')
	}
      )
    } else {
	  if(entry.target.id == "intro") { insertTopButton() }
	  entry.target.classList.remove('animate')
      	  if(entry.target.classList.contains("typing-text") &&
	    TYPING_TIMEOUT == undefined && entry.target.dataset.value !== undefined ){
		clearTimeout(TYPING_TIMEOUT)
	    	entry.target.textContent = entry.target.dataset.value
	}
    }
  });
});

intro.forEach((el) => {
  observer.observe(el);
});

fuzz.forEach((el) => {
  observer.observe(el);
});

slide_right.forEach((el) => {
  observer.observe(el)
})

slide_left.forEach((el) => {
  observer.observe(el)
})

border_glow_.forEach((el) => {
  observer.observe(el)
})

typing_text_.forEach((el) => {
  observer.observe(el)
})

function checkLoader(func){
const x = setInterval(() => {
	  if(!document.querySelector('#loader')){
	    func()
	    clearInterval(x)
	  }
  },1)
}

function fuzz_text(elm) {
  checkLoader(
    function(){
      let SPEED;
      const original_text = elm.textContent;
      const original_text_clean = elm.textContent.replaceAll(" ","");
      SPEED = setInterval(() => {
		elm.textContent = ""
		elm.textContent = jibrish_text(original_text_clean)
      },50)
      setTimeout(() => {
	clearInterval(SPEED)
	elm.textContent = original_text
      },500)
  })
}

function typing_effect(elm,text,i=0,speed=50){
  	if(i == 0) {
	  elm.textContent = ''
	  clearTimeout(TYPING_TIMEOUT)
	  elm.style.opacity =  100
	}
	if(i == text.length - 1){
	  clearTimeout(TYPING_TIMEOUT)
	  return 
	}
  	elm.textContent += text[i]	
  	TYPING_TIMEOUT = setTimeout(() => {
	  typing_effect(elm, text, i + 1, speed)
	},speed)
}

function getRandomPercentage(min,max){
	return Math.floor(Math.random()* (max-min) + min )
}

function getRandomColor(){
  c = [ "#0097A7" , "#FF80AB", "#FFEB3B", "#EA80FC" , "#00C853" ]
  return c[Math.floor(Math.random() *  c.length )]
}

function border_glow(elm){
  clearInterval(BORDER_GLOW_INTERVAL)
  BORDER_GLOW_INTERVAL = setInterval(() => {
  elm.style.cssText = `
  border-radius: ${getRandomPercentage(40, 100)}%  ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}% / ${getRandomPercentage(40, 100)}%  ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}%; 
 box-shadow:  -0px 5px 10px 2px ${getRandomColor()}, 
 	      -5px 0px 10px 2px ${getRandomColor()}, 
              -0px 5px 10px 2px ${getRandomColor()},
              -5px 0px 10px 2px ${getRandomColor()};
    `
  },250)
}

function jibrish_text(text){
  let jibrish = ""
  const all_characters = "qazwsxedcrfvtgbyhnujmikolp0123456789"
  for (let index = 0; index < text.length; index++) {
  	const character = all_characters[Math.floor(Math.random()*((all_characters.length - 1) - 0 + 1)) + 0];
        jibrish = jibrish + character
  }
  return jibrish
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

function insertTopButton(){
	document.querySelector("#main").insertAdjacentHTML("beforeend", `
		<button class="fixed bottom-5 right-5 bg-smoky-black-700 rounded-full px-3 py-2 z-40"
		id="top-btn" onclick="scrollToTop()">
    		<i class="fa-solid fa-chevron-up"></i>
  		</button>
	  `)
}
