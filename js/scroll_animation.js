const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if( entry.target.classList.contains('name-anim')){
	fuzzName(entry.target);
      }
      if(entry.target.classList.contains('liquid_profile')){
	liquidProfile(entry.target)
      }
      if(entry.target.classList.contains('about-text')){
	typingEffect(entry.target, aboutText,0)
      }
      if(entry.target.classList.contains('glitch-text')) {
      	randomTextGlitch(entry.target)
      } 
      checkLoader(
	function(){
	  entry.target.classList.add('animate')
	}
      )
    } else {
	  entry.target.classList.remove('animate')
    }
  });
});

const grab_name = document.querySelectorAll(".name-anim");
const grab_animClassRight = document.querySelectorAll(".show-animation-r");
const grab_animClassLeft = document.querySelectorAll(".show-animation-l");
const grab_liquidProfile = document.querySelectorAll(".liquid_profile");
const grab_glitchText = document.querySelectorAll(".glitch-text");


grab_name.forEach((el) => {
  observer.observe(el);
});

grab_animClassRight.forEach((el) => {
  observer.observe(el)
})

grab_animClassLeft.forEach((el) => {
  observer.observe(el)
})


grab_liquidProfile.forEach((el) => {
  observer.observe(el)
})

grab_glitchText.forEach((el) => {
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

function fuzzName(el) {
  let i, o;
  o = el.textContent;
  const x = setInterval(() => {
    if (!document.querySelector("#loader")) {
      clearInterval(x)
      setTimeout(() => {
        i = setInterval(() => {
          el.textContent = "";
          el.textContent = fuzzyText(o);
        }, 5);
      }, 300);
      setTimeout(() => {
        clearInterval(i);
        el.textContent = o;
      }, 800);
    }
  }, 1);
}

const aboutText = "I'm a seasoned wordsmith and coder with 4 years in web development, fluent in HTML, CSS, Javascript, PHP, MySQL, and Node.js. Proficient in Tailwind CSS, React, and WordPress. A BCA graduate who finds harmony in crafting digital experiences and playing guitar. Welcome to my portfolio—a fusion of creativity and precision."

let typeEff_TO
function typingEffect(elm,text,i=0){
  	if(i == 0) {
	  clearTimeout(typeEff_TO)
	  elm.textContent = ''
	}
	if(i == text.length - 1){
	  clearTimeout(typeEff_TO)
	  return 
	}
  	elm.textContent += text[i]	
  	typeEff_TO = setTimeout(() => {
	  typingEffect(elm, text, i + 1)
	},5)
}

function getRandomPercentage(min,max){
	return Math.floor(Math.random()* (max-min) + min )
}

function getRandomColor(){
  c = [ "#0097A7" , "#FF80AB", "#FFEB3B", "#EA80FC" , "#00C853" ]
  return c[Math.floor(Math.random() *  c.length )]
}

let LP_TO
function liquidProfile(elm){
  clearInterval(LP_TO)
  LP_TO = setInterval(() => {
  elm.style.cssText = `
  border-radius: ${getRandomPercentage(40, 100)}%  ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}% / ${getRandomPercentage(40, 100)}%  ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}% ${getRandomPercentage(40, 100)}%; 
 box-shadow:  -0px 5px 10px 2px ${getRandomColor()}, 
 	      -5px 0px 10px 2px ${getRandomColor()}, 
              -0px 5px 10px 2px ${getRandomColor()},
              -5px 0px 10px 2px ${getRandomColor()};
    `
  },250)
}

function randomIcon(){
  const iarr = [
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-brands fa-html5 left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50  fa-brands fa-html5 right-[5px]"></i>
    <i class="z-[50] fa-brands fa-html5 relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50  fa-brands fa-css3-alt  left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50  fa-brands fa-css3-alt right-[5px]"></i>
    <i class="z-[50] fa-brands fa-css3-alt relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-brands fa-js left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-brands fa-js right-[5px]"></i>
    <i class="z-[50] fa-brands fa-js relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-brands fa-php left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-brands fa-php right-[5px]"></i>
    <i class="z-[50] fa-brands fa-php relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-solid fa-database left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-solid fa-database right-[5px]"></i>
    <i class="z-[50] fa-solid fa-database relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-solid fa-code left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-solid fa-code right-[5px]"></i>
    <i class="z-[50] fa-solid fa-code relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-brands fa-node-js left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-brands fa-node-js right-[5px]"></i>
    <i class="z-[50] fa-brands fa-node-js relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-brands fa-react left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-brands fa-react right-[5px]"></i>
    <i class="z-[50] fa-brands fa-react relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-brands fa-linux left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-brands fa-linux right-[5px]"></i>
    <i class="z-[50] fa-brands fa-linux relative"></i>
    `,
    `
    <i class="absolute z-[30] text-cyan-500/50 fa-brands fa-wordpress left-[5px]"></i>
    <i class="absolute z-[30] text-red-500/50 fa-brands fa-wordpress right-[5px]"></i>
    <i class="z-[50] fa-brands fa-wordpress relative"></i>
    `
  ]
  return iarr[Math.floor(Math.random()*iarr.length)]
}

let RTG_TO
function randomTextGlitch(main_element){
  clearTimeout(RTG_TO)
  const node = main_element.querySelectorAll('.gspan > span')
  const random = Math.floor(Math.random() * node.length)
  fuzzName(node[random])
  RTG_TO = setTimeout(() => {
    randomTextGlitch(main_element)
    document.querySelector('.chgicons').innerHTML = ''
    document.querySelector('.chgicons').insertAdjacentHTML("beforeend", randomIcon())
  },2000)
}

