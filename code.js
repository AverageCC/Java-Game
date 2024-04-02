function playGame() {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

    if(userChoice === computerChoice) {
        alert("It's a tie!");
    } else if(
        (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        alert("You win! " + userChoice + " beats " + computerChoice + ".");
    } else {
        alert("You lose! " + computerChoice + " beats " + userChoice + ".");
    }
}
