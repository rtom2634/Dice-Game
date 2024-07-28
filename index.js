//For dice 1
var randomNumber1 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll ("img")[0].setAttribute("src",randomDiceImage);

//For Dice 2
var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

var randomSourceImage = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll ("img")[1].setAttribute("src",randomSourceImage);

//For Showing the result
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}

