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
	document.querySelector('header').remove()    	
	document.querySelectorAll('section').forEach((e) => e.remove() )     	
	document.querySelector(`main`).insertAdjacentHTML("beforeend", `
  <section class="w-full h-screen bg-[url('./img/bg_material.png')] bg-[#00060c] snap-start relative" id="content-1">
  <div
      class="absolute particles top-[5em] w-full h-full flex justify-center"
      >
      <div id="particles-1" class="h-full w-full">
  </div>
  </div>
	
	<div class="flex w-full h-full justify-center
	  text-white md:items-center p-5 md:p-0
	  relative overflow-hidden flex-col">
	  
	   <div id="show-anime-container"></div>

	<span
	    class="p-2 text-3xl font-bold font-mono flex flex-col w-full items-center"
	>
		<span>ERROR 404</span>
		<span>PAGE NOT FOUND</span>
	</span>

	  	<button
		 class="mt-3 bg-[#263238] text-white p-1
		 pl-4 pr-4 rounded-[8px] font-bold
		 hover:bg-[#37474F] outline-none w-full md:w-auto"
		 onclick="window.location.href = '/'"
		  >
		  Go Back <i class="fa-solid fa-house"></i>
		</button>

	  </div>
  </section>
	  `)
    	document.title = 'ERROR 404 | PAGE NOT FOUND!'
    	setAnimeGIF()
  } 
}
