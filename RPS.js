const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const win = "win";
const lose = "lose";
const tie = "Tie";


function getComputerChoice() {
    
    let randomComputerChoice = Math.floor(Math.random() * 3) +1;

    if (randomComputerChoice === 1) {
        return rock;
    } else if (randomComputerChoice === 2) {
        return paper;
    } else if (randomComputerChoice === 3) {
        return scissors;
    }

}






function playRound (playerSelection, computerSelection) {
    
    
   

    if (playerSelection === rock && computerSelection === rock) {
        return tie;
    } else if (playerSelection === paper && computerSelection === paper){
        return tie;
    } else if (playerSelection === scissors && computerSelection === scissors){
        return tie;

    } else if (playerSelection === rock && computerSelection === paper) {
        return lose;
    } else if (playerSelection === rock && computerSelection === scissors ) {
        return win;

    } else if (playerSelection === paper && computerSelection === rock ) {
        return win;
    } else if (playerSelection === paper && computerSelection === scissors ) {
        return lose;

    } else if (playerSelection === scissors && computerSelection === rock ) {
        return lose;
    } else if (playerSelection === scissors && computerSelection === paper ) {
        return win;
    }
    

}

function game() {
    
    
    let winTally = 0;
    let lossTally = 0;
    let tieTally = 0;

    for (let i = 0; i < 5; i++) {
        let player = prompt("Choose your weapon");
        let playerSelection = player.toLowerCase();
        const computerSelection = getComputerChoice();
            if (playRound(playerSelection, computerSelection) === win) {
                winTally++;
                console.log("You won that round!");
            } else if (playRound(playerSelection, computerSelection) === lose) {
                lossTally++;
                console.log("You lost that round!");
            } else if (playRound(playerSelection, computerSelection) === tie) {
                tieTally++;
                console.log("You tied that round!");
            }
    }

    if (winTally > lossTally && winTally > tieTally) {
        console.log("Congratulations, you win!");
    } else if (lossTally > winTally && lossTally > winTally) {
        console.log("Loser, you lost!");
    } else {
        console.log("You tied!");
    }
}

    
console.log(game());
console.log(getComputerChoice());










