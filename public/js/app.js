const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0; // mängija 1 seise
let p2Score = 0; // mängija 2 seis

let winningScore = 5; // võidu seis

let isGameOver = false;

p1Button.addEventListener("click", function() {
  if (!isGameOver) { // Kui mäng ei ole läbi
    p1Score += 1; // Liida üks juurde
    if (p1Score === winningScore) {
      isGameOver = true; // Mäng on läbi
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score; // Muuda lehel mängija 1 seisu
  }
});

p2Button.addEventListener("click", function() {
  if (!isGameOver) { // Kui mäng ei ole läbi
    p2Score += 1; // Liida üks juurde
    if (p2Score === winningScore) {
      isGameOver = true; // Mäng on läbi
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  } // Muuda lehel mängija 1 seisu
});

resetButton.addEventListener("click", reset); // seadistasime reset nupu. lisasime nupule reset funktsionaalsuse

winningScoreSelect.addEventListener("change", function(){
  winningScore = parseInt(this.value); // muudame tekstväärtuse numberiks
  reset();
});


function reset(){
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("has-text-success", "has-text-danger"); // eemaldab class'i winner või loser
  p2Display.classList.remove("has-text-danger","has-text-success");
  p1Button.disabled = false;
  p2Button.disabled = false;
}