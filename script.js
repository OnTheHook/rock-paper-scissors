function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[num];
}

let computerSelection = computerPlay();

let playerSelection = prompt('Enter "Rock", "Paper", or "Scissors": ');
playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

if (computerSelection === 'Rock') {
    switch (playerSelection) {
        case 'Rock':
            console.log('Tie! Rock ties Rock');
            break;
        case 'Paper':
            console.log('You win! Paper beats Rock');
            break;
        case 'Scissors':
            console.log('You lose! Rock beats scissors');
            break;
        default:
            console.log('Invalid input');
    }

} else if (computerSelection == 'Paper') {
    switch (playerSelection) {
        case 'Rock':
            console.log('You lose! Paper beats Rock');
            break;
        case 'Paper':
            console.log('You tie! Paper ties Paper');
            break;
        case 'Scissors':
            console.log('You win! Scissors beats Paper');
            break;
        default:
            console.log('Invalid input');
    }
} else {
    switch (playerSelection) {
        case 'Rock':
            console.log('You win! Rock beats Scissors');
            break;
        case 'Paper':
            console.log('You lose! Scissors beats Paper');
            break;
        case 'Scissors':
            console.log('You tie! Scissors ties Scissors');
            break;
        default:
            console.log('Invalid input');
    }

}