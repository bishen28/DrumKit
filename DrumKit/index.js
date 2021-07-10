var x = document.querySelectorAll(".drum").length;
var i;
for (i = 0; i < x; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttominnerHTML = this.innerHTML;
    playsound(buttominnerHTML);
    buttonAnimation(buttominnerHTML);
  });
}



  document.addEventListener("keydown", logkey);
  function logkey(event){
    var K = event.key; K = K.toLowerCase();
     playsound(K);
     buttonAnimation(K);
  }


function playsound(key){

  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
  }
}

function buttonAnimation(keyPressed){
      var activeClass = document.querySelector("."+keyPressed);
      activeClass.classList.add("pressed");
       setTimeout(function(){activeClass.classList.remove("pressed"); }, 100);
}
