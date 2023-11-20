function toggleMenu(btn) {
  if (detectDeviceType() == "Mobile" || detectDeviceType() == "Tablet") {
    let l,c,d,o;
    const isHidden = document
      .querySelector("nav > ul")
      .classList.contains("hidden");


    if (isHidden) {
    document.querySelector("nav > ul").classList.toggle("hidden");
    document.querySelector("nav > ul").classList.toggle("flex");
      l = 0;
      c = 100;
      d = 1;
      o = 0.1;
      btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
      l = 100;
      c = 0;
      d = 2;
      o = 0.9;
      btn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }


    const inva = setInterval(() => {
      if (d == 1 && l >= c) {
        clearInterval(inva);
      }

      if (d == 2 && l <= c) {
        clearInterval(inva);
	document.querySelector("nav > ul").classList.toggle("hidden");
	document.querySelector("nav > ul").classList.toggle("flex");
      }

      document.querySelector("nav > ul").style.width = `${l}%`;
      document.querySelector("nav > ul").style.opacity = `${o}`;

      if (isHidden) {
        l++;
	o+=0.01500;
      } else {
        l--;
	o-=0.01500;
      }
    }, 1);
  }
}
