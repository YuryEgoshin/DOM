var numberImg1 = Math.floor(Math.random() * 6) + 1;
var numberImg2 = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice" + numberImg1 + ".png";
var image2 = "images/dice" + numberImg2 + ".png";
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

if(sessionStorage.getItem("check") == null) {
  sessionStorage.setItem("check", "false");
}


if (sessionStorage.getItem("check") == "false") {
  sessionStorage.setItem("check","true");
  document.querySelector(".img2").style.visibility = "hidden";
  document.querySelector(".img1").style.visibility = "hidden";
} else if (sessionStorage.getItem("check") == "true") {
  document.querySelector(".img2").style.visibility = "visible";
  document.querySelector(".img1").style.visibility = "visible";
  if (numberImg1 > numberImg2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else {
    if (numberImg2 > numberImg1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    }  else {
      document.querySelector("h1").innerHTML = "Draw!"
    }
  }
  sessionStorage.setItem("check","false")  
}