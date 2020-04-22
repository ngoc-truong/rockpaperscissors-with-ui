let playerScore = 0;
let computerScore = 0;

function chooseComputerSelection(){
    let sign = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);

    return sign[choice];
}

function choosePlayerSelection(selection){
    //let selection = prompt("Please select rock, paper or scissors?");
    selection = selection.toLowerCase();

    while (selection !== "rock" && selection !== "paper" && selection !== "scissors"){
        selection = prompt("Sorry, man, but that is not a valid choice! Choose rock, paper or scissors.");
        selection = selection.toLowerCase();
    }

    return selection;
}

function playOneRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection) {
        return `You both chose ${playerSelection}. It's a draw`;
    } else if ( playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;

        return `You won! ${capitalize(playerSelection)} beats ${computerSelection} :).`;
    } else {
        computerScore += 1;
        return `Sorry, you lose! ${capitalize(playerSelection)} is beaten by ${computerSelection} :(.`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


const buttons = document.querySelectorAll('button');
const resultBoard = document.querySelector("#result-board");
const playerScoreboard = document.querySelector("#player-score");
const computerScoreboard = document.querySelector("#computer-score");


// Start game

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let computer = chooseComputerSelection();
    let human = button.id;
    result = playOneRound(human, computer);
    resultBoard.textContent = result;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;

    refreshScoreboard();
  });
});

function refreshScoreboard(){
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
    }
}