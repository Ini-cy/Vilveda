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


// use a while loop instead
