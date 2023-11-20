let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(moveStep) {
  showSlide((slideIndex += moveStep));
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }

  slides[slideIndex - 1].classList.remove("hidden");

}
