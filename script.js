"use strict";

function generateCompChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound() {
    const movesMade = makeMoves();
    const result = movesMade[1] - movesMade[0];
    console.log(result);
    const movesString = `You chose: ${movesArray[movesMade[0]]}, Computer chose: ${movesArray[movesMade[1]]}`;
    if (result === 0) {
        console.log("It's a tie. " + movesString);
        return 0;
    }else if (result === 2 || result === -1) {
        console.log("You Win. " + movesString);
        return 1;
    }else {
        console.log("You Lose. " + movesString);
        return -1;
    }
}

function makeMoves() {
    const computerChoice =  generateCompChoice();
    const playerChoice = movesArray.indexOf(prompt("Choose rock, paper or scissors: "));
    return [playerChoice, computerChoice];
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < 5; i++) {
        const roundResult = playRound();
        if (roundResult > 0) {
            playerScore++;
        } else if (roundResult < 0) {
            compScore++;
        }
    }
    console.log(`Game Over! Final Score:\nYou: ${playerScore}\nComputer: ${compScore}`);
}

let movesArray = ["rock", "paper", "scissors"];
game();


// console.log(playRound(playerChoice, computerChoice));
