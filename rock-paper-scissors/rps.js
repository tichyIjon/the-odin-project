function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
    let computerChoice = choices[(Math.round(Math.random() * 2))]
    return computerChoice;
    };


function gameRound(computerSelection,playerSelection) {
    if (computerSelection === playerSelection) {
        return "it's a draw!"
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerWins += 1;
            return "player won! paper beats rock!"
        } else if (playerSelection === 'scissors') {
            computerWins += 1;
            return "computer won! rock beats scissors!"
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            computerWins += 1;
            return "computer won! paper beats rock!"
        } else if (playerSelection === 'scissors') {
            playerWins += 1;
            return "player won! scissors beats paper!"
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'paper') {
            playerWins += 1;
            return "computer won! scissors beat paper!"
        } else if (playerSelection === 'rock') {
            computerWins += 1;
            return "player won! rock beats scissors!"
        }
    }
};

let roundCounter = 0;
let computerWins = 0;
let playerWins = 0;

// function Game() {

//     for (let i = 0;i < 5; i++) {

//         let playerSelection = prompt('choose your move (rock/paper/scissors): ')
//         let computerSelection = getComputerChoice()
//         console.log("computer selection: " + computerSelection);
//         console.log("player selection: " + playerSelection);
//         console.log(gameRound(computerSelection,playerSelection))
//     }

//     if (computerWins > playerWins) {
//         console.log(`COMPUTER WON ${computerWins} : ${playerWins}`)
//     } else if (playerWins > computerWins) {
//         console.log(`PLAYER WON ${playerWins} : ${computerWins}`)
//     } else if (playerWins === computerWins) {
//         console.log(`IT'S A DRAW ${computerWins} : ${playerWins}`)
//     };

// } 

// Game()

let rockBtn = document.querySelector('#rock')
let paperBtn = document.querySelector('#paper')
let scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click',() => {
    let playerSelection = 'rock';
    console.log(playerSelection)

    let computerSelection = getComputerChoice()
    console.log(computerSelection)

    let computerSelectionDisplay = document.querySelector('.computer-selection')
    let playerSelectionDisplay = document.querySelector('.player-selection')
    let resultDisplay = document.querySelector('.result')
    let scoreDisplay = document.querySelector('.score')

    computerSelectionDisplay.textContent = `computer selection: ${computerSelection}`
    playerSelectionDisplay.textContent = `player selection: ${playerSelection}`

    let result = gameRound(computerSelection,playerSelection);
    console.log(result)

    resultDisplay.textContent = result;
    scoreDisplay.textContent = `computer: ${computerWins} - ${playerWins} :player`

    roundCounter += 1;

    if (roundCounter === 5) {
        let scoreDisplay = document.querySelector('.score')
        if (computerWins > playerWins) {
            scoreDisplay.textContent = 'COMPUTER WON THE GAME'
        } else if (playerWins > computerWins) {
            scoreDisplay.textContent = 'PLAYER WON THE GAME'
        } else if (playerWins === computerWins) {
            scoreDisplay.textContent = 'NO ONE WON THE GAME'
        }
    }
})
paperBtn.addEventListener('click',() => {
    let playerSelection = 'paper';
    console.log(playerSelection)

    let computerSelection = getComputerChoice()
    console.log(computerSelection)

    let computerSelectionDisplay = document.querySelector('.computer-selection')
    let playerSelectionDisplay = document.querySelector('.player-selection')
    let resultDisplay = document.querySelector('.result')
    let scoreDisplay = document.querySelector('.score')

    computerSelectionDisplay.textContent = `computer selection: ${computerSelection}`
    playerSelectionDisplay.textContent = `player selection: ${playerSelection}`

    let result = gameRound(computerSelection,playerSelection);
    console.log(result)

    resultDisplay.textContent = result;
    scoreDisplay.textContent = `computer: ${computerWins} - ${playerWins} :player`

    roundCounter += 1;

    if (roundCounter === 5) {
        let scoreDisplay = document.querySelector('.score')
        if (computerWins > playerWins) {
            scoreDisplay.textContent = 'COMPUTER WON THE GAME'
        } else if (playerWins > computerWins) {
            scoreDisplay.textContent = 'PLAYER WON THE GAME'
        } else if (playerWins === computerWins) {
            scoreDisplay.textContent = 'NO ONE WON THE GAME'
        }
    }
})
scissorsBtn.addEventListener('click',() => {
    let playerSelection = 'scissors';
    console.log(playerSelection)

    let computerSelection = getComputerChoice()
    console.log(computerSelection)

    let computerSelectionDisplay = document.querySelector('.computer-selection')
    let playerSelectionDisplay = document.querySelector('.player-selection')
    let resultDisplay = document.querySelector('.result')
    let scoreDisplay = document.querySelector('.score')

    computerSelectionDisplay.textContent = `computer selection: ${computerSelection}`
    playerSelectionDisplay.textContent = `player selection: ${playerSelection}`

    let result = gameRound(computerSelection,playerSelection);
    console.log(result)

    resultDisplay.textContent = result;
    scoreDisplay.textContent = `computer: ${computerWins} - ${playerWins} :player`

    roundCounter += 1;

    if (roundCounter === 5) {
        let scoreDisplay = document.querySelector('.score')
        if (computerWins > playerWins) {
            scoreDisplay.textContent = 'COMPUTER WON THE GAME'
        } else if (playerWins > computerWins) {
            scoreDisplay.textContent = 'PLAYER WON THE GAME'
        } else if (playerWins === computerWins) {
            scoreDisplay.textContent = 'NO ONE WON THE GAME'
        }
    }
})

