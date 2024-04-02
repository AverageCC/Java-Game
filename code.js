function playGame() { // This function will run when the user clicks the button
    var choices = ['rock', 'paper', 'scissors']; // This is a set of choices for rock paper scissors
    var computerChoice = choices[Math.floor(Math.random() * 3)]; // This is the computer's choice

    var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase(); // This creates a prompt for the user to inout their choice. toLowerCase() makes it so that the input is not case sensitive

    if(userChoice === computerChoice) { // This says that if the user choice and the computer choice are the same, then it's a tie
        alert("It's a tie!"); // This will alert the user that it's a tie
    } else if(
        (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock') // These are all the winning combinations that trigger the, "You Won!" line
    ) {
        alert("You win! " + userChoice + " beats " + computerChoice + "."); // This will alert the user that they won
    } else {
        alert("You lose! " + computerChoice + " beats " + userChoice + "."); // This will alert the user that they lost  only if none of the other conditions are met
    }
}
