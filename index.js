const container = document.querySelector('.container');
const rockbtn = document.createElement('button')
const paperbtn = document.createElement('button')
const scissorsbtn = document.createElement('button');
const humanscorebtn = document.createElement('button');
const compscorebtn = document.createElement('button');


rockbtn.style.backgroundColor = "green";
paperbtn.style.backgroundColor = "green";
scissorsbtn.style.backgroundColor = "green";
humanscorebtn.style.backgroundColor = "yellow";
compscorebtn.style.backgroundColor = "yellow";

rockbtn.style.color = "white";
paperbtn.style.color = "white";
scissorsbtn.style.color = "white";
humanscorebtn.style.color = "black";
compscorebtn.style.color = "black";

rockbtn.textContent = "Rock";
paperbtn.textContent = "Paper";
scissorsbtn.textContent = "Scissors";
container.appendChild(rockbtn);
container.appendChild(paperbtn);
container.appendChild(scissorsbtn);
container.appendChild(humanscorebtn);
container.appendChild(compscorebtn);
const resultsDiv = document.createElement('div');
container.appendChild(resultsDiv);


let humanScore = 0;
let computerScore = 0;
humanscorebtn.textContent = `Human: ${humanScore}`;
compscorebtn.textContent = `Computer: ${computerScore}`;

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

function handleRound(humanChoice) {
       let computerChoice = getComputerChoice();
       if (
           (humanChoice === "rock" && computerChoice === "scissors") ||
           (humanChoice === "paper" && computerChoice === "rock") ||
           (humanChoice === "scissors" && computerChoice === "paper")
       ) {
           humanScore++;
           resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
       } else if (humanChoice === computerChoice) {
           resultsDiv.textContent = "It's a draw!";
       } else {
           computerScore++;
           resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
       }
       humanscorebtn.textContent = `Human: ${humanScore}`;
       compscorebtn.textContent = `Computer: ${computerScore}`;

       if(humanScore === 5 || computerScore === 5){
              if(humanScore === 5){
                     resultsDiv.textContent ='Yeah, the user wins';
              }
              else{
                     resultsDiv.textContent ='ohh, Computer wins';
              }
              
              resetGame();
       }
   }

   function resetGame() {
       humanScore = 0;
       computerScore = 0;
       humanscorebtn.textContent = `Human: ${humanScore}`;
       compscorebtn.textContent = `Computer: ${computerScore}`;
       resultsDiv.textContent ="Game has been reset!";
   }
   
   // Event Listeners
   rockbtn.addEventListener('click', () => handleRound("rock"));
   paperbtn.addEventListener('click', () => handleRound("paper"));
   scissorsbtn.addEventListener('click', () => handleRound("scissors"));