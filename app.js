let scores, current_score, active_player, isPlaying;
//initialize
init();
//New Game Function
document.getElementById("new-game").addEventListener("click", init);
//Roll Dice function
document.getElementById("roll-dice").addEventListener("click", () => {
  let Dice = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice").style.display = "block";
  document.getElementById("dice").src = "./img/dice-" + Dice + ".png";
  if (Dice !== 1) {
    current_score += Dice;
    document.getElementById(
      "current-score-" + active_player
    ).textContent = current_score;
  } else {
    document.getElementById("current-score-" + active_player).textContent = 0;
    nextPlayer();
  }
  console.log(Dice);
});

//Hold Function Button
document.getElementById("hold").addEventListener("click", () => {
  let last_score;
  scores[active_player] += current_score;
  document.getElementById("score-" + active_player).textContent =
    scores[active_player];
  document.getElementById("current-score-0").textContent = 0;
  document.getElementById("current-score-1").textContent = 0;
  if (scores[active_player] >= 20) {
    document.querySelector(".player-" + active_player).textContent =
      "WINNER !!!";
    document.getElementById("dice").style.display = "none";
    // isPlaying = false;
    document.getElementById("roll-dice").style.display = "none";
    document.getElementById("hold").style.display = "none";
  } else {
    nextPlayer();
  }
});

//Next Player Function
function nextPlayer() {
  active_player === 0 ? (active_player = 1) : (active_player = 0);
  current_score = 0;
  document.querySelector(".player-0").classList.remove("active");
  document.querySelector(".player-1").classList.remove("active");
  document.querySelector(".player-" + active_player).classList.toggle("active");
}

//Initilize function
function init() {
  scores = [0, 0];
  current_score = 0;
  active_player = 0;
  isPlaying = true;
  document.getElementById("score-0").textContent = scores[0];
  document.getElementById("score-1").textContent = scores[1];
  document.getElementById("current-score-0").textContent = current_score;
  document.getElementById("current-score-1").textContent = current_score;
  document.getElementById("dice").style.display = "none";
  document.querySelector(".player-0").textContent = "PLAYER 1";
  document.querySelector(".player-1").textContent = "PLAYER 2";
  document.querySelector(".player-0").classList.add("active");
  document.querySelector(".player-1").classList.remove("active");
  document.getElementById("roll-dice").style.display = "block";
  document.getElementById("hold").style.display = "block";
}
