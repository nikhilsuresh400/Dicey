// Player 1 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "assets/images/dice" + randomNumber1 + ".png");

// Player 2 dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "assets/images/dice" + randomNumber2 + ".png");

var h3 = document.querySelector("h3");

if (randomNumber1 > randomNumber2) {
    h3.innerHTML = "Player 1 wins!";
    document.querySelector(".img1").classList.add("dropShadow");

} else if (randomNumber1 < randomNumber2) {
    h3.innerHTML = "Player 2 wins!";
    document.querySelector(".img2").classList.add("dropShadow");

} else {
    h3.innerHTML = "It's a draw!";
}