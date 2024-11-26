var num = Math.floor(Math.random()*6) + 1;
var img;
if(num == 1) img = "./images/dice1.png";
else if(num == 2) img = "./images/dice2.png";
else if(num == 3) img = "./images/dice3.png";
else if(num == 4) img = "./images/dice4.png";
else if(num == 6) img = "./images/dice5.png";
else img = "./images/dice6.png";
document.querySelector(".img1").setAttribute("src",img);


var n = Math.floor(Math.random()*6) + 1;
var i;
if(n == 1) i = "./images/dice1.png";
else if(n == 2) i = "./images/dice2.png";
else if(n == 3) i = "./images/dice3.png";
else if(n == 4) i = "./images/dice4.png";
else if(n == 6) i = "./images/dice5.png";
else i = "./images/dice6.png";
document.querySelector(".img2").setAttribute("src",i);


//if num > n player 1 wins else if(num < n ) player 2 wins else it's a tie

if(num > n){
    document.querySelector("h1").textContent = "Player 1 wins !!";
}else if(num < n){
    document.querySelector("h1").textContent = "Player 2 wins !!";
}else{
    document.querySelector("h1").textContent = "Oh gosh, It's a Tie!!";
}



