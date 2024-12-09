let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

       let computerGuess = Math.floor(Math.random() * 3);

       switch (computerGuess) {
              case 0:
                     return "rock";
              case 1:
                     return "paper"
              default:
                     return "scissors";
       }
}

function getHumanChoices() {
       let humanChoice = prompt("Give one between rock, paper and scissors:");
       return humanChoice.toLowerCase();
}


function playRound(humanChoice, computerChoise) {
       if (humanChoice === "rock" && computerChoise === "paper") {
              computerScore++;
              console.log("you lose, paper beats rock");
       } else if (humanChoice === "rock" && computerChoise === "scissors") {
              humanScore++;
              console.log("you win, rock beats scissors");
       } else if (humanChoice === "paper" && computerChoise === "scissors") {
              computerScore++;
              console.log("you lose, scissors beats paper");
       } else if (humanChoice === "paper" && computerChoise === "rock") {
              humanScore++;
              console.log("you win, paper beats rock");
       } else if (humanChoice === "scissors" && computerChoise === "rock") {
              computerScore++;
              console.log("you lose, rock beats scissors");
       } else if (humanChoice === "scissors" && computerChoise === "paper") {
              humanScore++;
              console.log("you win, scissors beats paper");
       } else {
              humanScore++;
              computerScore++;
              console.log("Both are same, its a draw");
       }
}

function playGame() {
       let repeat = 5;
       while (repeat > 0) {
              let humanChoice = getHumanChoices();
              let computerChoise = getComputerChoice();
              playRound(humanChoice, computerChoise);
              repeat--;
       }
       if (humanScore > computerScore) {
              console.log("Congratulations, You won the tournament");
       } else if (humanScore < computerScore) {
              console.log("Better luck next time, You lost the tournament");
       } else {
              console.log("The tournament was a Draw");
       }
}
playGame();




