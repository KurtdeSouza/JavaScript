var count = 0;
var correct = getRandomIntInclusive(0, 100);
var guesses = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
}

document.getElementById("guessSubmit").onclick = clickedSubmit;
// function call when submit button is clicked
// if the guess is correct...
// count is increased for number of guesses
function clickedSubmit() {
  var guess;
  if (verify(document.getElementById("guessField").value)) {
    document.getElementById("badGuess").innerHTML = "";
    // for test purposes
    //document.getElementById("correct").innerHTML = correct;
    guess = document.getElementById("guessField").value;
    if (guess == correct) {
      display.textContent = "Congratulations! You guessed correctly";
      display.style.backgroundColor = "green";
      startOverAppear();
    } else {
      if (guess > correct) {
        document.getElementById("lowOrHi").innerHTML = "Too High";
      } else {
        document.getElementById("lowOrHi").innerHTML = "Too Low";
      }
      display.textContent = "Incorrect, please try again.";
      display.style.backgroundColor = "red";
    }

    count++;
    guesses.push(document.getElementById("guessField").value);
    document.getElementById("guesses").innerHTML = guesses.toString();

    document.getElementById("guessField").value = "";
    if (count == 10) {
      display.textContent = "Game Over!!!";
      display.style.backgroundColor = "red";
      startOverAppear();
    }
  } else {
    document.getElementById("badGuess").innerHTML =
      "Invalid Guess. Please enter a number";
    document.getElementById("guessField").value = "";
  }
}
function startOverAppear() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  // resetButton = document.createElement("button");
  // resetButton.textContent = "Start new game";
  // document.body.append(resetButton);
  document.getElementById("resetGame").style.display = "block";
  document.getElementById("resetGame").addEventListener("click", resetGame);
}
function resetGame() {
  count = 0;
  correct = getRandomIntInclusive(0, 100);
  document.getElementById("lowOrHi").innerHTML = "";
  guessField.disabled = false;
  guessSubmit.disabled = false;

  guesses.length = 0;
  display.textContent = "";
  display.style.backgroundColor = "white";
  document.getElementById("guesses").innerHTML = guesses.toString();
  document.getElementById("resetGame").style.display = "none";
  guessField.focus();
}

function verify(guess) {
  if (!isNaN(guess)) {
    return true;
  }
  return false;
}
