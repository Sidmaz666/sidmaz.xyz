const home_page=document.querySelector('.term-window');
const first_page=document.querySelector('.knowme');
const second_page=document.querySelector('.mind');
const third_page=document.querySelector('.why');
console.log(`${home_page}`);
console.log(`${first_page}`);
console.log(`${second_page}`);
console.log(`${third_page}`);

window.onload = function() {
  showHome();
}

function showHome(){
  home_page.style.display = "flex";
  first_page.style.display = "none";
  second_page.style.display = "none";
  third_page.style.display = "none";
  document.title = "Home";
}
function showKnowme(){
  home_page.style.display = "none";
  first_page.style.display = "flex";
  second_page.style.display = "none";
  third_page.style.display = "none";
  document.title = "Info";
}

function showMind(){
  home_page.style.display = "none";
  first_page.style.display = "none";
  second_page.style.display = "flex";
  third_page.style.display = "none";
  document.title = "Blogs";
  BlogHideAll();
}

function showWhy(){
  home_page.style.display = "none";
  first_page.style.display = "none";
  second_page.style.display = "none";
  third_page.style.display = "flex";
  document.title = "Why?";
}

function BlogHideAll(){
  const getPagetitle = document.title;
  const totalBlogs = document.querySelector('.mind').querySelectorAll('.para');
  if(getPagetitle == "Blogs"){
    console.log(`${getPagetitle}`);
    console.log(`${totalBlogs}`);
    for (var i=0; i < totalBlogs.length; i++){
	totalBlogs[i].style.display = "none";
    }
  }
}


const getSpan = document.querySelector('.mind').querySelectorAll('span');
  console.log(`${getSpan}`);
    for (var i=0; i < getSpan.length; i++){
      getSpan[i].addEventListener("click", function(){
	const getParaStyle = this.nextElementSibling.style.display ;
	if(getParaStyle == "none"){
	  console.log(`Flex-On`);
	  this.nextElementSibling.style.display = "flex" ;
	} else {
	  this.nextElementSibling.style.display = "none";
	  console.log(`FlexOff`);
	}
      });
    }

