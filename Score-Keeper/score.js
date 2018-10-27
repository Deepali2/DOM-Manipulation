let player1 = document.getElementsByTagName("button")[0];
let player2 = document.getElementsByTagName("button")[1];
let reset = document.getElementsByTagName("button")[2];
let input = document.querySelector("input[type='number']");
let gameOver = false;
let winningScore = 5;

let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");
let playingTillScore = document.getElementById("playingTillScore");

player1.addEventListener("click", player1Func);
player2.addEventListener("click", player2Func);
reset.addEventListener("click", resetFunc);
input.addEventListener("change", playingTillScoreFunc);

function player1Func() {   
  if (!gameOver) player1Score.textContent++;  
  if (Number(player1Score.textContent) === winningScore) {
    player1Score.classList.add("winningColor");
    gameOver = true;
  }
}

function player2Func() {
  if (!gameOver) player2Score.textContent++;
  if (Number(player2Score.textContent) === winningScore) {
    player2Score.classList.add("winningColor");
    gameOver = true;
  }
}

function resetFunc() {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Score.classList.remove("winningColor");
  player2Score.classList.remove("winningColor");
  gameOver = false;
}

function playingTillScoreFunc() {  
  playingTillScore.textContent = this.value; // same as input.value since we are listening on input
  winningScore = Number(this.value); // same as input.value since we are listening on input
  resetFunc();
}