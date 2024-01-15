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

async function checkPath(){
const validPath = '/'
  const currentPath = window.location.pathname
  if(currentPath !== validPath){
	document.querySelector(`body`).insertAdjacentHTML("beforeend", `
  <div class="flex flex-col text-2xl 
  absolute top-0 left-0 z-50 justify-center items-center
  w-screen h-screen overflow-x-hidden overflow-y-hidden bg-smoky-black-800 text-liberty-300"
  ">
	
	<div class="flex w-full h-full justify-center
	  text-white md:items-center p-5 md:p-0
	  relative overflow-hidden flex-col">
	  
	   <div id="show-anime-container"
	    class="flex justify-center"
	   ></div>

	<span
	    class="p-2 text-3xl font-bold font-mono flex flex-col w-full items-center"
	>
		<span>ERROR 404</span>
		<span>PAGE NOT FOUND</span>
	</span>

	  	<button
		 class="mt-3 bg-liberty-600 hover:bg-liberty-700 text-white p-1
		 pl-4 pr-4 rounded-[8px] font-bold
		 outline-none w-full md:w-auto"
		 onclick="window.location.href = '/'"
		  >
		  Go Back <i class="fa-solid fa-house"></i>
		</button>

	  </div>
  </div>
	  `)
    	document.title = 'ERROR 404 | PAGE NOT FOUND!'
    	setAnimeGIF()
  } 
}

window.onload = async function() {
	await checkPath()
}
