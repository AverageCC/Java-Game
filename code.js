function playGame() { // This function is called when the user clicks the button
    const choices = ['rock', 'paper', 'scissors']; // const is a variable that cannot be reassigned which establishes the choices for the computer.
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // This line of code randomly selects a choice for the computer by generating a random number between 0 and 2 and then using that number to select a random option from the array.
    const userChoice = prompt("Please choose and option. Rock, Paper or Scissors?").toLowerCase(); // This prompts the user to enter a choice without case sensitivity.

    // This while loop checks if the user's response is valid. If the user's choice is not valid then the user is prompted to enter a valid choice.
    while (choices.indexOf(userChoice) === -1) {
        if (userChoice === 'shoot') {
            alert("You shouldn't bring a gun to a rock, paper, scissors fight!"); // This is my little easter egg. If the user types 'shoot' then this alert is displayed.
            return; // This resets the user menu.
        }
        userChoice = prompt("Invalid choice. Please choose Rock, Paper or Scissors.").toLowerCase(); // This prompts the user to enter a valid choice with no regard of case sensitivity.
    }

    if(userChoice === computerChoice) { // This checks if the user and computer responses are the same. If they're the same then the It's a tie! alert is displayed.
        alert("It's a tie!");
    } else if( // This checks if the user has a winning combination.
        (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock') // || is used for OR
    ) {
        alert(`You win! ${userChoice} beats ${computerChoice}.`); // If the user wins then the alert displays the winning message.
    } else {
        alert(`You lose! ${computerChoice} beats ${userChoice}.`); // If the user loses then the alert displays the losing message.
    }
}
