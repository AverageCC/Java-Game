function playGame() {
    var coices = ["rock", "paper", "scissors"];
    var choice = prompt("Choose rock, paper, or scissors");

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        var computerChoice = choices[Math.floor(Math.random() * 3)];
        alert("The computer chose " + computerChoice);

        if (choice === computerChoice) {
            alert("The result is a tie!");
        } else if (
            (choice === "rock" && computerChoice === "scissors") ||
            (choice === "paper" && computerChoice === "rock") ||
            (choice === "scissors" && computerChoice === "paper")
        ) {
            alert("You win!");
        } else {
            alert("You lose!");
        }
    }
}
