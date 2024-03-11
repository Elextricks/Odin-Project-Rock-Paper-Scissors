// Define an array of options for the computer to choose from.
const computerOptions = ["rock", "paper", "scissors"];

// Select DOM elements for player selections, user score, and computer score.
const btnSelections = document.querySelectorAll('.player-selection');
const userScoreHolder = document.querySelector("#user-score");
const computerScoreHolder = document.querySelector("#computer-score");

// Create an element to display game results.
const gameResult = document.createElement('h2');

// Initialize scores for the user and computer.
let computerScore = 0;
let userScore = 0;

// Initialize a variable to store the player's selection.
let playerSelection = "";

// Add event listeners to each player selection button.
btnSelections.forEach(btn => {
    btn.addEventListener('click', () => {
        // Log the player's selection and update the playerSelection variable.
        console.log(btn.textContent);
        playerSelection = btn.textContent;
        // Call the playgame function to begin the game.
        playgame();
    });
});

// Generate a random choice for the computer.
const computerSelection = getComputerChoice(computerOptions);
// Initialize a variable to store the result of each round.
let result = "";

// Function to generate a random choice for the computer.
function getComputerChoice(computerOptions) {
    randomChoice = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomChoice];
}

// Function to verify if the player's choice is valid.
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

// Function to play a round of the game.
function playRound(playerSelection, computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === "rock") {
        if (computerSelectionLower === "rock") {
            result = "Tie! Both selected rock!";
        }
        else if (computerSelectionLower === "paper") {
            result = "You lose! Paper beats rock!";
            updateComputerScore();
        }
        else if (computerSelectionLower === "scissors") {
            result = "You win! Rock beats scissors!";
            updateUserScore();
        }
    }
    else if (playerSelectionLower === "paper") {
        if (computerSelectionLower === "rock") {
            result = "You win! Paper beats rock!";
            updateUserScore();
        }
        else if (computerSelectionLower === "paper") {
            result = "Tie! Both selected paper!";
        }
        else if (computerSelectionLower === "scissors") {
            result = "You lose! Scissors beats paper!";
            updateComputerScore();
        }
    }
    else if (playerSelectionLower === "scissors") {
        if (computerSelectionLower === "rock") {
            result = "You lose! Rock beats scissors!";
            updateComputerScore();
        }
        else if (computerSelectionLower === "paper") {
            result = "You win! Scissors beats paper!";
            updateUserScore();
        }
        else if (computerSelectionLower === "scissors") {
            result = "Tie! Both selected scissors!";
        }
    }
}

// Function to initiate a game round.
function playgame() {
    playRound(playerSelection, getComputerChoice(computerOptions));
    // Display the result of the game.
    gameResult.textContent = result;
    gameResult.style.cssText = "display:flex; justify-content:center;"
    document.body.appendChild(gameResult);
}

// Function to update the user's score.
function updateUserScore() {
    userScore += 1;
    // Update the displayed user score.
    userScoreHolder.style.cssText = "display:flex; justify-content:center; margin: 5px;"
    userScoreHolder.textContent = userScore;
    // Check if the game has ended.
    checkEndGame();
}

// Function to update the computer's score.
function updateComputerScore() {
    computerScore += 1;
    // Update the displayed computer score.
    computerScoreHolder.style.cssText = "display:flex; justify-content:center; margin: 5px;"
    computerScoreHolder.textContent = computerScore;
    // Check if the game has ended.
    checkEndGame();
}

// Function to check if the game has ended.
function checkEndGame() {
    if (userScore === 5) {
        // Display a message if the user wins.
        const winnerDiv = document.createElement("div");
        const newContent = document.createTextNode("You've won 5 games! Congratulations!")
        winnerDiv.appendChild(newContent);
        winnerDiv.style.cssText = 'display: flex; justify-content: center; font-weight:bold; font-size:32px;';
        document.body.appendChild(winnerDiv);
    }
    else if (computerScore === 5) {
        // Display a message if the computer wins.
        const winnerDiv = document.createElement("div");
        const newContent = document.createTextNode("Computer has won 5 games! You lose!")
        winnerDiv.appendChild(newContent);
        winnerDiv.style.cssText = 'display: flex; justify-content: center; font-weight:bold; font-size:32px;';
        document.body.appendChild(winnerDiv);
    }
}
