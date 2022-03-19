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


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computer;
    let player;

    for (let i = 0; i < 5; i++) {
        computer = computerPlay();
        player = prompt('Enter "Rock", "Paper", or "Scissors": ');
        player = player[0].toUpperCase() + player.slice(1).toLowerCase();
        winner = playRound(player, computer);
        if (winner === 'Player') {
            playerScore++;
            console.log(`You win! ${player} beats ${computer}`)
        } else if (winner === 'Computer') {
            computerScore++;
            console.log(`You lose! ${computer} beats ${player}`)
        } else if (winner === 'Tie') {
            console.log('Tie');
        } else {
            console.log('Invalid input');
        }
    }
    if (playerScore > computerScore) {
        console.log('You win the game!');
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log('You lose the game!');
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}.`);
    } else {
        console.log('The game is tied!');
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}.`);
    }
}

game();