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
    playRound(playerSelection, getComputerChoice(computerOptions));
}

function updateUserScore() {
    userScore += 1;
    userScoreHolder.style.cssText = "display:flex; justify-content:center; margin: 5px;"
    userScoreHolder.textContent = userScore;

    checkEndGame();
}

function updateComputerScore() {
    computerScore += 1;
    computerScoreHolder.style.cssText = "display:flex; justify-content:center; margin: 5px;"
    computerScoreHolder.textContent = computerScore;

    checkEndGame();
}

function checkEndGame() {
    if (userScore === 5) {
        const winnerDiv = document.createElement("div");
        const newContent = document.createTextNode("You've won 5 games! Congratulations!")

        winnerDiv.appendChild(newContent);
        winnerDiv.style.cssText = 'display: flex; justify-content: center; font-weight:bold; font-size:32px;';
        document.body.appendChild(winnerDiv);
    }
    else if (computerScore === 5) {
        const winnerDiv = document.createElement("div");
        const newContent = document.createTextNode("Computer has won 5 games! You lose!")

        winnerDiv.appendChild(newContent);
        winnerDiv.style.cssText = 'display: flex; justify-content: center; font-size:32px;';
        document.body.appendChild(winnerDiv);
    }
}
