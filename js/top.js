function isElementInViewport(elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

setInterval(() => {
const elementIds = ['about','work','skills','exp','contact'];
  for (let index = 0; index < elementIds.length; index++) {
  	const element = elementIds[index];
	const elementInView = isElementInViewport(element);
	if(elementInView == true){
	      document.querySelector('#top-btn').classList.remove('hidden')
	      return
	} else {
	      document.querySelector('#top-btn').classList.add('hidden')
	}
}  	
},50)

