// function change() {
//    var words = ["TRADE","INVEST","SELL"],
//    i = 0;
//    setInterval(function(){ $('#words').fadeOut(function(){
//        $(this).innerHTML(words[(i = (i + 1) % words.length)]).fadeIn();
//      }); }, 1000)
//  })
//
//  change();

// document.getElementById("words").innerHTML = "yourTextHere";
var i = 0;
function change() {
  var tag = document.getElementById('words');
  var txt = ['INVEST', 'SELL', 'SAVE', 'TRADE'];
  // tag.style.innerHTML = txt[i];
  document.getElementById('words').innerHTML = txt[i];

  i = (i + 1) % txt.length;
}

setInterval(change, 2000);

var timer;
var currentOpacity;
var vilvedaImage = document.getElementById('vilveda-home-image-div');
currentOpacity = getComputedStyle(vilvedaImage).getPropertyValue('opacity');
currentOpacity = 0.3;

function increaseOpacity() {
  currentOpacity += 0.1;
  vilvedaImage.style.opacity = currentOpacity;
}

function runTime() {
  timer = setInterval(increaseOpacity, 500);
}

if (currentOpacity < 1.0) {
  runTime();
}


window.addEventListener('scroll', function () {
  var value = window.scrollY;

  vilvedaImage.style.top = -value * 0.5 + 'px';
  console.log(vilvedaImage.style.top);
});

// use a while loop instead
