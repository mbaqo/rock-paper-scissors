let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

function getScore() {
    return `Your score: ${humanScore} - My score: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    const choiceDisplay = document.querySelector("#results-choice");

    humanChoice = humanChoice.toUpperCase();
    if (humanChoice === computerChoice) {
        choiceDisplay.textContent = ("It's a tie!");
    }
    else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || (humanChoice === "PAPER" && computerChoice === "ROCK") || (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        choiceDisplay.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        choiceDisplay.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((btn) => btn.addEventListener("click", (e) => {
        playRound(btn.textContent, getComputerChoice());
        document.querySelector("#results-score").textContent = (getScore());
        setTimeout(() => {
            if (checkWinner()) {
                displayWinner();
            }
        }, 0);
    }));
}

function checkWinner() {
    if (humanScore === 5) {
        return "You Won!";
    }
    if (computerScore === 5) {
        return "I Won!";
    }
    return "";
}

function displayWinner() {
    alert(checkWinner());
    humanScore = 0;
    computerScore = 0;
}

// document.querySelectorAll()

playGame();

// console.log("I chose: " + getComputerChoice());
// console.log("You chose: " + getHumanChoice());