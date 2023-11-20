window.onload = async function () {
  await checkPath();
  window.addEventListener('resize',function(){ fixNavonSR() })
  particlesJS.load("particles-1", "../js/json/particles-1.json");
  particlesJS.load("particles-2", "../js/json/particles-2.json");
  particlesJS.load("particles-3", "../js/json/particles-3.json");
  particlesJS.load("particles-4", "../js/json/particles-2.json");
  particlesJS.load("particles-5", "../js/json/particles-1.json");
};
