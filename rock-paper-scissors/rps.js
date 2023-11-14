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
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerWins += 1;
            return "player won! paper beats rock!"
        } else if (playerSelection === 'scissors') {
            computerWins += 1;
            return "computer won! rock beat scissors!"
        }
    }
};

let computerWins = 0;
let playerWins = 0;

function Game() {

    for (let i = 0;i < 5; i++) {

        let playerSelection = prompt('choose your move (rock/paper/scissors): ')
        let computerSelection = getComputerChoice()
        console.log("computer selection: " + computerSelection);
        console.log("player selection: " + playerSelection);
        console.log(gameRound(computerSelection,playerSelection))
    }

    if (computerWins > playerWins) {
        console.log(`COMPUTER WON ${computerWins} : ${playerWins}`)
    } else if (playerWins > computerWins) {
        console.log(`PLAYER WON ${playerWins} : ${computerWins}`)
    } else if (playerWins === computerWins) {
        console.log(`IT'S A DRAW ${computerWins} : ${playerWins}`)
    };

}; Game();