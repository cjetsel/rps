console.log("hey girl hey");
let choice = ["rock", "paper", "scissors"]
let computerChoice = choice[Math.floor(Math.random() * choice.length)];
let result = "";

function computerTurn() {
  computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
}

function play(choice) {
  computerTurn();
  console.log(computerChoice);
  if (choice == "rock") {
    if (choice == computerChoice) {
      result = "tie";
      console.log(result);
      declare(result);
      return result;
    }
    else computerChoice == "scissors" ? result = "win" : result = "lose";
    console.log(result);
    declare(result);
    return result;
  }
  else if (choice == "paper") {
    if (choice == computerChoice) {
      result = "tie";
      console.log(result);
      declare(result);
      return result;
    }
    computerChoice == "scissors" ? result = "lose" : result = "win";
    console.log(result);
    declare(result);
    return result;
  }
  else {
    if (choice == computerChoice) {
      result = "tie";
      console.log(result);
      declare(result);
      return result;
    }
    computerChoice == "paper" ? result = "win" : result = "lose";
    console.log(result);
    declare(result);
    return result;
  }
}

function declare(result) {
  if (result == "win") {
    document.getElementById("winner").innerHTML = `<h2> ${choice} beats ${computerChoice}! Winner!</h2>`;
  }
  else if (result == "lose") {
    document.getElementById("winner").innerHTML = `<h2> ${computerChoice} beats ${choice}! Loser!</h2>`
  } else {
    document.getElementById("winner").innerHTML = `<h2> It's a tie! Try again?</h2>`
  }
}



