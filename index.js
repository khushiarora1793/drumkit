
//to add event listener to all the buttons

//var numberofdrumbuttons = document.querySelectorAll(".drum").length;
 //for(var i =0;i<numberofdrumbuttons;i++){

  //document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  //  var buttonInnerHTML = this.innerHTML;
  //switch (buttonInnerHTML) {
  //  case "w":
  //    var tom1 = new Audio("tom-1.mp3");
  //    tom1.play();
  //    break;

  //  case "a":
  //    var tom2 = new Audio("tom-2.mp3");
    //  tom2.play();
  //    break;

  //  case "s":
  //    var tom3 = new Audio('tom-3.mp3');
  //    tom3.play();
  //  break;

  //  case "d":
  //    var tom4 = new Audio('tom-4.mp3');
  //    tom4.play();
  //    break;

  //  case "j":
  //    var snare = new Audio('snare.mp3');
  //    snare.play();
  //    break;

  //  case "k":
  //    var crash = new Audio('crash.mp3');
  //    crash.play();
  //    break;

  //  case "l":
  //    var kick = new Audio('kick-bass.mp3');
  //    kick.play();
  //    break;


  //  default: console.log(key);

  // }


    var numberOfDrumButtons = document.querySelectorAll(".drum").length;

  for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

    });

  }

  document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

  });


  function makeSound(key) {

    switch (key) {
      case "w":
        var tom1 = new Audio('tom-1.mp3');
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio('tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio('snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio('crash.mp3');
        crash.play();
        break;

      case "l":
        var kick = new Audio('kick-bass.mp3');
        kick.play();
        break;


      default: console.log(key);

    }
  }


  function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);

  }

//  this.style.color=white;
  //  alert("I got clicked!");
  //  var audio = new Audio('sounds/tom-1.mp3');
  //  audio.play();


//  });



//}






 //this is done for seperately 7..7 buttons so we use loop
//document.querySelectorAll("button").[1]addEventListener("click",function(){
//  alert("I got clicked!");
//});



 //anonomous function
 //document.querySelector("button").addEventListener("click",function(){
  //alert("I got clicked!");
//});

 //this is only for first button ..mesaage appears
//document.querySelector("button").addEventListener("click", handleclick)
//function handleclick(){
//  alert("I got clicked!");
//}-->
