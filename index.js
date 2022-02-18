var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", dice1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2);
