const consoleTextarray = [
  `Loading Kernel...`,
  `Loading Modules...`,
  `Loading System I/O Devices...`,
  `Syncing Time Zone...`,
  `Enabling User Access...`,
  `Initializing...`,
];

function consoleText2HTML(text) {
  const textc = [];
  let sp = text.split(" ");
  sp.forEach((w) => {
    if (w !== " ") {
      textc.push(` <span>${w}</span>`);
    } else {
      textc.push(w);
    }
  });
  return `
    	<span class="font-arcade flex space-x-2">
	<span class="font-bold"> > </span>
	${textc.join().replaceAll(",", "")}
	</span>
  `;
}

let sleep = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 450);
  });

document.onreadystatechange = async function () {
  if (document.readyState !== "complete") {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
	<div
	class="flex justify-center 
	items-center h-screen
	absolute top-0 left-0
        bg-[url('./img/bg_material.png')]
	w-screen bg-[#04080d] text-white z-[99999]"
	id="loader">

	<div 
	class=" w-[100px] h-[100px] relative
	rounded-full border-2 border-cyan-500
	flex justify-center items-center
	"
	>
	<div 
	class=" w-[120px] h-[120px] absolute
	rounded-full bg-cyan-500 opacity-[0.1] blur-lg
	"
	>
	</div>

	<div 
	class=" w-[80px] h-[80px] absolute
	rounded-full border-2 border-cyan-500
	"
	>

	</div>
	<div 
	class=" w-[60px] h-[60px] absolute
	rounded-full border-2 border-cyan-500
	"
	>

	</div>
	<div 
	class=" w-[30px] h-[30px] absolute
	rounded-full border-2 border-cyan-500
	"
	>

	</div>
	<div 
	class=" w-[10px] h-[100px] absolute 
	mix-blend-multiply 
	animate-spin bg-cyan-500
	"
	>

	</div>
	<div 
	class=" w-[100px] h-[10px]
	absolute mix-blend-multiply 
	animate-spin bg-cyan-500
	"
	>

	</div>
	</div>
	
	<div
	class="absolute bottom-0 
	left-0 flex flex-col
	p-2
	"
	id="loading-text">

	</div>

	</div>
       `
    );
    for (let i = 0; i < consoleTextarray.length; i++) {
      const text = consoleTextarray[i];
      document
        .getElementById("loading-text")
        .insertAdjacentHTML("beforeend", consoleText2HTML(text));
      await sleep();
    }
  } else {
    document.querySelector("main").classList.remove("hidden");
    document.querySelector("header").classList.remove("hidden");
    let tv = 10;
    let is;
    setTimeout(() => {
      is = setInterval(() => {
        document.getElementById(
          "loader"
        ).style.transform = `translateY(-${tv}px)`;
        tv += tv;
      }, 50);
    }, 3000);
    setTimeout(() => {
      clearInterval(is);
      document.getElementById("loader").remove();
    }, 3500);
  }
};
