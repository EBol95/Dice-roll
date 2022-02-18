function diceRoll(img){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var dice = "images/dice" + randomNumber + ".png";
  document.querySelector(img).setAttribute("src", dice);
  return randomNumber
}

var randomNumber1 = diceRoll(".img1");
var randomNumber2 = diceRoll(".img2");
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 wins!🚩"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 wins!🚩"
}
else {
  document.querySelector("h1").innerHTML = "DRAW!"
}
//dry = don't reapeat yourself
