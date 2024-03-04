const computerOptions = ["rock", "paper", "scissors"];
const playerSelection = prompt("Enter your selection");
const computerSelection = getComputerChoice(computerOptions);
let result = ""

function getComputerChoice(computerOptions) {
    randomChoice = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    console.log (playerSelection + " vs. " + computerSelection);
    playerSelectionLower = playerSelection.toLowerCase();
    computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === "rock") {
        if (computerSelectionLower === "rock") {
            console.log("Tie! Both selected rock!");
            result = "Tie! Both selected rock!";
        }
        else if (computerSelectionLower === "paper") {
            console.log("You lose! Paper beats rock!");
            result = "You lose! Paper beats rock!";
        }
        else if (computerSelectionLower === "scissors") {
            console.log("You win! Rock beats scissors!");
            result = "You win! Rock beats scissors!";
        }
    }
    else if (playerSelectionLower === "paper") {
        if (computerSelectionLower === "rock") {
            console.log("You win! Paper beats rock!");
            result = "You win! Paper beats rock!";
        }
        else if (computerSelectionLower === "paper") {
            console.log("Tie! Both selected paper!");
            result = "Tie! Both selected paper!";
        }
        else if (computerSelectionLower === "scissors") {
            console.log("You lose! Scissors beats paper!");
            result = "You lose! Scissors beats paper!";
        }
    }

    else if (playerSelectionLower === "scissors") {
        if (computerSelectionLower === "rock") {
            console.log("You lose! Rock beats scissors");
            result = "You lose! Rock beats scissors";
        }
        else if (computerSelectionLower === "paper") {
            console.log("You win! Scissors beats paper!");
            result = "You win! Scissors beats paper!";
        }
        else if (computerSelectionLower === "scissors") {
            console.log("Tie! Both selected scissors!");
            result = "Tie! Both selected scissors!";
        }
    }
    document.getElementById("result").innerHTML = result; 
}

playRound(playerSelection, getComputerChoice(computerOptions));



