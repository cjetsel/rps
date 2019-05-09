console.log("hey girl hey");
let choice = ["rock", "paper", "scissors"]
let computerChoice = choice[Math.floor(Math.random() * choice.length)];
let result = "";

function computerTurn() {
  computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
}

function play(choose) {
  computerTurn();
  document.getElementById("computer").innerHTML = `${computerChoice}!`;
  document.getElementById("player").innerHTML = `${choose}!`;
  if (choose == "rock") {
    if (choose == computerChoice) {
      result = "tie";
      console.log(result);
      declare(result, choose);
      return result;
    }
    else computerChoice == "scissors" ? result = "win" : result = "lose";
    console.log(result);
    declare(result, choose);
    return result;
  }
  else if (choose == "paper") {
    if (choose == computerChoice) {
      result = "tie";
      console.log(result);
      declare(result, choose);
      return result;
    }
    computerChoice == "scissors" ? result = "lose" : result = "win";
    console.log(result);
    declare(result, choose);
    return result;
  }
  else {
    if (choose == computerChoice) {
      result = "tie";
      console.log(result);
      declare(result, choose);
      return result;
    }
    computerChoice == "paper" ? result = "win" : result = "lose";
    console.log(result);
    declare(result, choose);
    return result;
  }
}

function declare(result, choose) {
  if (result == "win") {
    document.getElementById("winner").innerHTML = `<h1 class="text-center text-success"> Winner!</h1>`;
  }
  else if (result == "lose") {
    document.getElementById("winner").innerHTML = `<h1 class="text-center text-danger"> Loser!</h1>`
  } else {
    document.getElementById("winner").innerHTML = `<h1 class="text-center text-primary"> It's a tie! Try again?</h1>`
  }
}



