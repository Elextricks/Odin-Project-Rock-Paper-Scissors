const computerOptions = ["rock", "paper", "scissors"];
const btnSelections = document.querySelectorAll('.player-selection');
const userScoreHolder = document.querySelector("#user-score");
const computerScoreHolder = document.querySelector("#computer-score");
let computerScore = 0;
let userScore = 0;
let playerSelection = ""

btnSelections.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent);
        playerSelection = btn.textContent;
        playgame();
    });
});

const computerSelection = getComputerChoice(computerOptions);
let result = "";


function getComputerChoice(computerOptions) {
    randomChoice = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomChoice];
}

function verifyPlayerChoice(playerSelection) {
    if (playerSelection.toLowerCase() !== "rock" && 
        playerSelection.toLowerCase() !== "paper" && 
        playerSelection.toLowerCase() !== "scissors") {
        return false;
    }
    else {
        return true;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === "rock") {
        if (computerSelectionLower === "rock") {;
            result = "Tie! Both selected rock!";
        }
        else if (computerSelectionLower === "paper") {;
            result = "You lose! Paper beats rock!";
            updateComputerScore()
        }
        else if (computerSelectionLower === "scissors") {;
            result = "You win! Rock beats scissors!";
            updateUserScore()
        }
    }
    else if (playerSelectionLower === "paper") {
        if (computerSelectionLower === "rock") {;
            result = "You win! Paper beats rock!";
            updateUserScore()
        }
        else if (computerSelectionLower === "paper") {;
            result = "Tie! Both selected paper!";
        }
        else if (computerSelectionLower === "scissors") {;
            updateComputerScore()
        }
    }

    else if (playerSelectionLower === "scissors") {
        if (computerSelectionLower === "rock") {;
            updateComputerScore()
        }
        else if (computerSelectionLower === "paper") {;
            result = "You win! Scissors beats paper!";
            updateUserScore()
        }
        else if (computerSelectionLower === "scissors") {;
            result = "Tie! Both selected scissors!";
        }
    }
}

function playgame() {
    if (verifyPlayerChoice(playerSelection)){
        playRound(playerSelection, getComputerChoice(computerOptions));
    }
    else {
        document.getElementById("result").innerHTML = "You did not select rock, paper, or scissors. Please try again";
    }
}

function updateUserScore() {
    userScore += 1
    userScoreHolder.textContent = "Score: " + userScore;
}

function updateComputerScore() {
    computerScore += 1
    computerScoreHolder.textContent = "Score: " + computerScore;
}
