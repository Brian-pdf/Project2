let wins = 0;
let ties = 0;
let losses = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = computerPlay();

        const result = playRound(userChoice, computerChoice);

        document.getElementById('result').innerText = result;

        document.getElementById('wins').innerText = wins;
        document.getElementById('ties').innerText = ties;
        document.getElementById('losses').innerText = losses;
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        ties++;
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        wins++;
        return "You win!";
    } else {
        losses++;
        return "You lose!";
    }
}
