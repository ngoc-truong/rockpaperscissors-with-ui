function chooseComputerSelection(){
    let sign = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);

    return sign[choice];
}

function choosePlayerSelection(){
    let selection = prompt("Please select rock, paper or scissors?");
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

        return `You won! ${capitalize(playerSelection)} beats ${computerSelection} :).`;
    } else {
        return `Sorry, you lose! ${capitalize(playerSelection)} is beaten by ${computerSelection} :(.`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function startGame(){
    for (i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        let computer = chooseComputerSelection();
        let human = choosePlayerSelection();
    
        let result = playOneRound(human, computer);
        console.log(result);
    }
}

startGame();