"use strict";

function playRound() {
    const movesMade = makeMoves(this.dataset.move);
    const result = movesMade[1] - movesMade[0];
    return checkRoundEnd(result, movesMade[0], movesMade[1]);
}

function makeMoves(inputMove) {
    const computerChoice =  generateCompChoice();
    return [inputMove, computerChoice];
}

function generateCompChoice() {
    return Math.floor(Math.random() * 3);
}

function checkRoundEnd(result, playerMove, compMove) {
    resultText.textContent = "";
    const movesString = `You chose: ${MOVESARRAY[playerMove]}, Computer chose: ${MOVESARRAY[compMove]}`;
    if (result === 0) {
        resultText.textContent = "It's a tie. " + movesString;
    }else if (result === 2 || result === -1) {
        resultText.textContent = "You Win. " + movesString;
        keepScores(1);
    }else {
        resultText.textContent = "You Lose. " + movesString;
        keepScores(-1);
    }
}

function keepScores(roundResult) {
    if (roundResult === 1) {
        playerScore.textContent = Number(playerScore.textContent) + 1;
        checkWin(+playerScore.textContent, "player");
    } else if (roundResult === -1) {
        compScore.textContent = Number(compScore.textContent) + 1;
        checkWin(+compScore.textContent, "computer");
    }
}

function checkWin(score, whoWon) {
    if (score === 5) {
        if (whoWon === "player") {
            gameEnd.textContent = "Congratulations! You Won!"
        } else {
            gameEnd.textContent = "Oh no! You Lost!"
        }
        buttonArray.forEach((button) => {
            button.removeEventListener("click", playRound);
        });
    }
}

const MOVESARRAY = ["rock", "paper", "scissors"];
const buttonArray = [
    document.querySelector("button[data-move='0']"),
    document.querySelector("button[data-move='1']"),
    document.querySelector("button[data-move='2']"),
];
const resultText = document.querySelector(".result");
const playerScore = document.querySelector("strong[data-person=player]");
const compScore = document.querySelector("strong[data-person=computer]");
const gameEnd = document.querySelector(".game-end");

buttonArray.forEach((button) => {
    button.addEventListener("click", playRound);
});
