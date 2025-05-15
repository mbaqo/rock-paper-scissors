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
    return `Your score: ${humanScore} | My score: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    console.log(`You chose ${humanChoice} and I chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || (humanChoice === "PAPER" && computerChoice === "ROCK") || (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(getScore());
        console.log("");
    }
}

playGame();

// console.log("I chose: " + getComputerChoice());
// console.log("You chose: " + getHumanChoice());