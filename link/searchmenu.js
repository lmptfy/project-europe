var nbclck=0;

function menu() {
  nbclck++;

  if (nbclck%2==0) {
    if (w > 835) {
      document.getElementById("menu").style.top="-330px";
      document.body.style.overflow="";
    } else {
      document.getElementById("menu").style.top="-430px";
      document.body.style.overflow="";
      }
    }

  else {
    if (w > 835) {
      document.getElementById("menu").style.top="101px";
      document.body.style.overflow="hidden";
    } else {
      document.getElementById("menu").style.top="80px";
      document.body.style.overflow="hidden";
    }
  }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("banner").style.top = "0";
  } else {
    document.getElementById("banner").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}
