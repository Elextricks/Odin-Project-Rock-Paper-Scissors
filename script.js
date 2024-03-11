const computerOptions = ["rock", "paper", "scissors"];
let playerSelection = ""
const btnSelections = document.querySelectorAll('.player-selection');

btnSelections.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent);
        playerSelection = btn.textContent;
        playgame();
    });
});


const computerSelection = getComputerChoice(computerOptions);
let result = "";

function getPlayerSelection() {

}

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
}

function playgame() {
    for (i = 1; i <= 5; i++){
        if (verifyPlayerChoice(playerSelection)){
            playRound(playerSelection, getComputerChoice(computerOptions));
            
            let newElement = document.createElement("h1");
            newElement.setAttribute("id", `game${i}`)

            document.body.appendChild(newElement);

            document.getElementById(`game${i}`).innerHTML = `Game ${i}: ` + result;
        }
        else {
            document.getElementById("result").innerHTML = "You did not select rock, paper, or scissors. Please try again";
        }
    }
}

playgame()


