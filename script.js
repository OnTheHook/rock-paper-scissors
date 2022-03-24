let playerScore = 0;
let computerScore = 0;
let result;


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
    result = playRound(this.id, computerPlay());
    checkWinner(result);
    e.stopPropagation();
}

function checkWinner(winner) {

    if (winner === 'Player') {
        playerScore++;
    } else if (winner === 'Computer') {
        computerScore++;
    }
    console.log(playerScore)
    console.log(computerScore)
    if (playerScore >= 5) {
        console.log('Player wins!');
        rock.removeEventListener('click', getInput);
        paper.removeEventListener('click', getInput);
        scissors.removeEventListener('click', getInput);

    } else if (computerScore >= 5) {
        console.log('Computer wins!');
        rock.removeEventListener('click', getInput);
        paper.removeEventListener('click', getInput);
        scissors.removeEventListener('click', getInput);
    }
}

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

rock.addEventListener('click', getInput);
paper.addEventListener('click', getInput);
scissors.addEventListener('click', getInput);


