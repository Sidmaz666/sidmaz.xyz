import React from 'react'

import { FaReact, FaNodeJs,  FaPhp, FaTerminal } from 'react-icons/fa'

import apiImg1 from './assets/outputa.png'
import apiImg2 from  './assets/outputs.png'

import About from './about'
import Card from './card'
import Contact from './contact'
import Footer from './footer'

function Projects(){
  return (
    <>
	<div
	  className="
	  pr-14 pl-14
	  lg:pr-16 lg:pl-16
	  xl:pr-20 xl:pl-20
	  p-4
	  absolute
	  top-full
	  w-full
	  translate-y-[-10rem]
	  bg-green-900
	  space-y-5
	  "
	>

	<Card
	title="Manga Reader - Website"
	name="Manga Reader"
	type="Web App"
	category="Entertainment"
	desc="Read the latest, popular and updated Manga!"
	img="https://github.com/Sidmaz666/mangareaderr/raw/main/assets/img.png"
	gitLink="https://github.com/Sidmaz666/mangareaderr"
	liveLink="https://mangareaderr.netlify.app/"
	icon={<FaReact/>}
	/>

	<Card
	title="Aniswim - Website"
	name="Aniswim"
	type="Web App"
	category="Entertainment"
	desc="Stream and Download Latest,Recent Released Anime, Search for your favourite anime in Aniswim!"
	img="https://raw.githubusercontent.com/Sidmaz666/aniswim-website/main/assets/preview.png"
	gitLink="https://github.com/Sidmaz666/aniswim-website"
	liveLink="https://aniswim.herokuapp.com/"
	icon={<FaNodeJs/>}
	/>

	<Card
	title="Automatic Notification System"
	name="Automated Notifications"
	type="Web App"
	category="Notification Service"
	desc="A Simple website to send customized automatic scheduled Notifications to a given Email."
	 img="https://user-images.githubusercontent.com/81381178/164507757-55622ff7-e6ff-454a-8783-e871841cb570.png"
	  gitLink="https://github.com/Sidmaz666/automatic_notification_system.git"
	  icon={<FaNodeJs/>}
	  addClass="hidden"
	/>

	<Card
	title="Printing Order Services"
	name="Printing Order Portal"
	type="Website"
	category="E-Commerce"
	desc="A Demo Website to Place Order to Get your Printed Document or Photo with Admin panel to manage Orders."
	 img="https://github.com/Sidmaz666/printing_order_services_portal/raw/main/assets/portal.png?raw=true"
	  gitLink="https://github.com/Sidmaz666/printing_order_services_portal.git"
	  icon={<FaNodeJs/>}
	  addClass="hidden"
	/>



	  <Card
	   title="Streamosan - Website"
	   name="Streamosan"
	   type="Website"
	   category="Entertainment"
	   desc="Access to countless Latest and Old Movies & TV-Series. Select from Multiple Genre such as Drama, Sci-Fi and much more. Search Movies via Number or Alphabet. Get the latest trending Movies/TV-series in Streamosan for Streaming or Downlaoding. "
	    img="https://github.com/Sidmaz666/Streamosan/raw/main/assets/preview.png"
	    liveLink="https://streamosan.netlify.app"
	    gitLink="https://github.com/Sidmaz666/Streamosan"
	    icon={<FaReact/>}
	  />


	  <Card
	    title="EDRS - Website"
	    name="Employee Data Record System"
	    type="Website"
	    category="Database Management"
	    desc="Register, Login for Admin & Employee. Add aditional information, Employee details. Register Employee daily record. Admin access to Employee details."
	    img="https://github.com/Sidmaz666/Minimal_EDRS/raw/main/preview.png?raw=true"
	    gitLink="https://github.com/Sidmaz666/Minimal_EDRS"
	    addClass="hidden"
	    icon={<FaPhp/>}
	  />



	  <Card
		title="MangaFetch - API"
	        name="MangaFetch - API"
	    	type="API"
	    	icon={<FaNodeJs/>}
	    	img="https://github.com/Sidmaz666/manga-api/raw/main/assets/manga-api-logo.png"
	    	category="JSON API, Scrapper"
	    	desc="API Provides vast list of Manga details along with the Chapter Images"
		gitLink="https://github.com/Sidmaz666/manga-api/tree/deploy_api"
	    	liveLink="https://fetch-manga.herokuapp.com/"
	  />



	  <Card
		title="Streamo - API"
	        name="Streamo - API"
	    	type="API"
	    	icon={<FaNodeJs/>}
	    	img={ apiImg2 }
	    	category="JSON API, Scrapper"
	    	desc="API Provides vast list of Movies and TV-Series details along with the Video Links"
		gitLink="https://github.com/Sidmaz666/streamo-api"
	    	liveLink="https://streamo-api.herokuapp.com/"
	  />



	  <Card
		title="Aniswim - API"
	        name="Aniswim - API"
	    	type="API"
	    	icon={<FaNodeJs/>}
	    	img={ apiImg1 }
	    	category="JSON API, Scrapper"
	    	desc="API Provides vast list of Anime Movies and TV-Series details along with the Video Links"
		gitLink="https://github.com/Sidmaz666/aniswim-api"
	    	liveLink="https://aniswim-api.herokuapp.com/"
	  />

	    <b id="bash"></b>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>

	  <div
	    className="
	    pr-16 pl-16
	    w-full
	    flex
	    flex-col
	    justify-center
	    items-center
	    absolute
	    left-0
	    bg-[#0d0d26]
	    translate-y-[-0.4rem]
	    "
	  >

	<span
	  className="
	  flex
	  items-center
	  justify-center
	  antialiased
	  pt-16 pb-16 p-5
	  w-60
	  h-60
	  rounded-full
	  text-center	
	  text-3xl
	  translate-y-[-7rem]
	  border-t-4	
	  border-r-green-500
	  border-b-4
	  border-r-4 border-l-4
	  border-t-lime-500 
	  border-l-cyan-500
	  border-b-pink-500
	  rounded-full
	  bg-black
	  shadow-2xl
	  relative
	  z-30
	  "
	>
	  <span
	    className="
	    text-[#00E676]
	    z-50
	    font-semibold
	    italic
	    "
	  >

	Power of Shell Scripts in Linux

	  </span>
	</span>

	    <div
	      className="
	      flex
	      flex-col
	      w-full
	      space-y-5
	      translate-y-[-5rem]
	      "
	    >

	  <Card
		title="Wikimusic - APP"
	        name="Wikimusic"
	    	type="Shell Program"
	    	icon={<FaTerminal/>}
	    	img="https://github.com/Sidmaz666/wikimusic/raw/main/assets/preview.gif"
	    	category="Music, Audio"
	    	desc="A CLI Tool to Play Classical Music. The script scrapes from Free Wikipedia Sound Library"
		gitLink="https://github.com/Sidmaz666/wikimusic"
	  
	    	addClass="hidden"
	    	
	  />



	  <Card
		title="Manga - Script"
	        name="Manga"
	    	type="Shell Script"
	    	icon={<FaTerminal/>}
		img="https://github.com/Sidmaz666/manga/raw/main/assets/preview.gif"
		category="EBooks, PDF"
	    	desc="A CLI Tool(BashScript) To Browse and Read/Download Manga. Scrapes From Mangabuddy , FZF/Rofi as a Menu & Feh as a Manga Reader/Image Viewer."
		gitLink="https://github.com/Sidmaz666/manga"
	  
	    	addClass="hidden"
	    	
	  />



	  <Card
		title="Lyrica - Script"
		name="Lyrica"
	    	type="Shell Script"
	    	icon={<FaTerminal/>}
		img="https://github.com/Sidmaz666/lyrica/raw/main/assets/preview.gif"
		category="Text, Info"
	    	desc="A CLI Tool to Scrape Lyrics from Terminal either using Rofi or FZF(default). The script scrapes lyrics from A-Z Lyrics using curl, fzf or rofi as a menu and uses bat to display the lyrics."
		gitLink="https://github.com/Sidmaz666/lyrica"
	  
	    	addClass="hidden"
	    	
	  />


	    </div>



	    <About/>
		
	    <Contact/>

	    <Footer/>

	  </div>
      </div>
    </>
  )
}

export default Projects
