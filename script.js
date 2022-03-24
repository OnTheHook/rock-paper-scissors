let playerScore = 0;
let computerScore = 0;
let result;

const player = document.querySelector('.player-choice');
const computer = document.querySelector('.computer-choice');

const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

const update = document.querySelector('.update')

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[num];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock') {
        switch (playerSelection) {
            case 'Rock':
                return 'Tie';
            case 'Paper':
                return 'Player';
            case 'Scissors':
                return 'Computer';
            default:
                return 'Invalid input';
        }

    } else if (computerSelection == 'Paper') {
        switch (playerSelection) {
            case 'Rock':
                return 'Computer';
            case 'Paper':
                return 'Tie';
            case 'Scissors':
                return 'Player';
            default:
                return 'Invalid input';
        }
    } else {
        switch (playerSelection) {
            case 'Rock':
                return 'Player';
            case 'Paper':
                return 'Computer';
            case 'Scissors':
                return 'Tie';
            default:
                return 'Invalid input';
        }

    }
}

function getInput(e) {
    let playerChoice = this.id
    let computerChoice = computerPlay();
    display(player, playerChoice);
    display(computer, computerChoice);
    result = playRound(playerChoice, computerChoice);
    if (result === 'Player') {
        update.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
    } else if (result === 'Computer') {
        update.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}!`;
    } else {
        update.textContent = 'Tie!';
    }
    checkWinner(result);
    console.log(result);  
    e.stopPropagation();
}

function display(element, choice) {
    if (choice === 'Rock') {
        element.innerHTML = '&#9994;';
    } else if (choice === 'Paper') {
        element.innerHTML = '&#9995;'
    } else if (choice === 'Scissors') {
        element.innerHTML = '&#9996;'
    }
}
function checkWinner(winner) {

    if (winner === 'Player') {
        playerScore++;
        playerScoreDisplay.innerHTML = `Player: ${playerScore}`
    } else if (winner === 'Computer') {
        computerScore++;
        computerScoreDisplay.innerHTML = `Computer: ${computerScore}`
    }
    console.log(playerScore)
    console.log(computerScore)
    if (playerScore >= 5) {
        update.textContent = 'Player wins the match!';
        rock.removeEventListener('click', getInput);
        paper.removeEventListener('click', getInput);
        scissors.removeEventListener('click', getInput);

    } else if (computerScore >= 5) {
        update.textContent = 'Computer wins the match!';
        rock.removeEventListener('click', getInput);
        paper.removeEventListener('click', getInput);
        scissors.removeEventListener('click', getInput);
    }
}


rock.addEventListener('click', getInput);
paper.addEventListener('click', getInput);
scissors.addEventListener('click', getInput);


