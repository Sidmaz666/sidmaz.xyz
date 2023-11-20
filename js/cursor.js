function fuzzyText(text){
  const tl = text.length
  const r = []
  const at = "qazwsxedcrfvtgbyhnujmikolp,./;'][-09876]'`12345`|}{:?><~!@#$%^&*()_+>}"
  for (let index = 0; index < tl; index++) {
  	const w = at[Math.floor(Math.random()*((at.length - 1) - 0 + 1)) + 0];
        r.push(w)
  }
  return r.toString().replaceAll(',','')
}

const cursorHTML = `
  <div
      class=" w-[40px] h-[40px] 
      hidden justify-center items-center 
      rounded-full border-2 border-cyan-300 
      mix-blend-screen 
      fixed pointer-events-none 
      z-[9999]"
      id="custom-cursor">
    	
    <div class="relative flex justify-center items-center">
    	<div class="w-[45px] h-[45px] bg-cyan-500 blur-lg rounded-full opacity-[40%] 
	  flex justify-center items-center z-[9990] absolute ">
	</div>

    	<div class="w-[30px] h-[30px] border-2 border-cyan-500 rounded-full absolute"></div>
    	<div class="w-[20px] h-[20px] border-2 border-cyan-500 rounded-full"></div>
    </div>
  </div>
`

const deviceType = detectDeviceType();

let isTouch

if('ontouchstart' in window){
  isTouch = true
} else {
  isTouch = false
}

window.addEventListener('touchstart', function () {
	isTouch = false
})

window.addEventListener('touchend', function () {
	isTouch = true
})

if(deviceType == "Desktop" && !isTouch){
document.body.insertAdjacentHTML("beforeend", cursorHTML)
const cursor = document.querySelector("#custom-cursor");

document.addEventListener("mouseleave", (e) => {
  cursor.style.display = "none";
});

document.addEventListener("mousemove", (e) => {
  cursor.style.display = "flex";
  cursor.style.left = (e.clientX - 15 ) + "px";
  cursor.style.top = (e.clientY - 15)+ "px";
});

document.addEventListener("mousedown", () => {
  cursor.style.transform = "scale(0.9)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "scale(1)";
});

const customCursorHover = document.querySelectorAll(
  ".cursor-hover-normal"
);

customCursorHover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.style.width = "50px"; 
    cursor.style.height = "50px";
  });

  element.addEventListener("mouseout", () => {
    cursor.style.width = "40px"; 
    cursor.style.height = "40px";
  });
});

const crazyHoverText = document.querySelectorAll(
  ".hover-crazy"
);

let isE = false
crazyHoverText.forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    if(!isE){
    isE = true
    const elm = event.target
    const elmText = elm.innerText
    const inv = setInterval(() => {
      elm.textContent = fuzzyText(elmText)
    },10)
    setTimeout(() => {
      clearInterval(inv)
      elm.textContent = elmText
      isE = false
    },400)
    }
  });
});

}

