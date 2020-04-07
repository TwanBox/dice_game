window.onload = start;

let allDices = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");

let randomNumber1 = Math.floor(Math.random() * allDices.length);

let randomNumber2 = Math.floor(Math.random() * allDices.length);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player one wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player two wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a tie!";
}

function start() {
    choosePic();
    choosePic2();
}

function choosePic() {
    document.querySelector("#img1").src = allDices[randomNumber1];
}

function choosePic2() {
    document.querySelector("#img2").src = allDices[randomNumber2];
}
