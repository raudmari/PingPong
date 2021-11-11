
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display")
}

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 3; // võidu seis
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) { // Kui mäng ei ole läbi
    player.score += 1; // Liida üks juurde
    if (player.score === winningScore) {
      isGameOver = true; // Mäng on läbi
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score; // Muuda lehel mängija 1 seisu
  }
}

p1.button.addEventListener("click", function(){
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function(){
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset); // seadistasime reset nupu. lisasime nupule reset funktsionaalsuse

winningScoreSelect.addEventListener("change", function(){
  winningScore = parseInt(this.value); // muudame tekstväärtuse numberiks
  reset();
});

function reset(){
  isGameOver = false;
  for(let player of [p1, p2]){
      player.score = 0;
      player.display.textContent = 0;
      player.display.classList.remove("has-text-success", "has-text-danger");
      player.button.disabled = false;
  }
}

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
