var i = 0;
function change() {
  var tag = document.getElementById('words');
  var txt = ['INVEST', 'SELL', 'SAVE', 'TRADE'];
  document.getElementById('words').innerHTML = txt[i];

  i = (i + 1) % txt.length;
}

setInterval(change, 2000);

var timer;
var currentOpacity;
// get the current opacity of the image and change it to 0.3
var vilvedaImage = document.getElementById('vilveda-home-image-div');
currentOpacity = getComputedStyle(vilvedaImage).getPropertyValue('opacity');
currentOpacity = 0.3;

// everytime the function is called it increments the opacity by 0.1
function increaseOpacity() {
  currentOpacity += 0.1;
  vilvedaImage.style.opacity = currentOpacity;
}
// increment by 0.1 every 500 milliseconds (0.5 seconds)
function runTime() {
  timer = setInterval(increaseOpacity, 500);
}

if (currentOpacity < 1.0) {
  runTime();
}
let moreInfo = document.getElementById('more-info-section');
window.addEventListener('scroll', function () {
  var value = window.scrollY;

  moreInfo.style.top = -value * 0.5 + 'px';
});
