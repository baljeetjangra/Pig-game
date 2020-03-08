let scores, current_score, active_player;
init();

document.getElementById("roll-dice").addEventListener("click", () => {
  let Dice = Math.floor(Math.random() * 6 + 1);
  console.log(Dice);
});

function init() {
  scores = [0, 0];
  current_score = 0;
  active_player = 0;
  document.getElementById("score-0").textContent = scores[0];
  document.getElementById("score-1").textContent = scores[1];
  document.getElementById("current-score-0").textContent = current_score;
  document.getElementById("current-score-1").textContent = current_score;
  document.getElementById("dice").style.display = "none";
}
