function detectDeviceType(){
  const userAgent = navigator.userAgent;
  if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return 'Mobile';
  } else if (/Tablet|iPad/i.test(userAgent)) {
    return 'Tablet';
  } else {
    return 'Desktop';
  }
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (screenWidth <= 768) {
    return 'Mobile';
  } else if (screenWidth <= 1024) {
    return 'Tablet';
  } else {
    return 'Desktop';
  }
if (window.orientation && window.screen.availWidth < 1024) {
    return 'Tablet';
  }
  return 'Desktop';
}

function checkScreenSize() {
  const screenWidth = window.innerWidth;  
  if (screenWidth < 768) {
    return "Mobile";
  } else if (screenWidth >= 768 && screenWidth < 1024) {
    return "Tablet";
  } else {
    return "Desktop";
  }
}

function fixNavonSR(){
    if(checkScreenSize() == "Desktop" || checkScreenSize() == "Tablet"){
      document.querySelector('nav > ul').removeAttribute('style')
    }
}
