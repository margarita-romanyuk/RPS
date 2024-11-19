let round=0;
let totalRounds = 3;
let userScore=0;
let computerScore=0;

function startGame() {
    round = 0;
    userScore = 0;
    computerScore = 0;
     // Reset UI elements
     document.getElementById("result-box").style.display = "block";
     document.getElementById("round-status").innerText = "Game started!Round 1 of 3.";// 
     document.getElementById("user-choice").innerText = "";
     document.getElementById("computer-choice").innerText = "";
     document.getElementById("game-result").innerText = "";
}

function playRound(userChoice) {
    // Check if the game is over
    if (round >= totalRounds) {
        document.getElementById("round-status").innerText = "Game over! Press 'Start' to play again.";
        return;
    }
    // Use a for loop 
    for (let i = round; i < totalRounds; i++) {
        // Increment round number
        round++;
        // Generate computer choice
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        // Display user and computer choices
        document.getElementById("user-choice").innerText = `You chose: ${userChoice}`;
        document.getElementById("computer-choice").innerText = `Computer chose: ${computerChoice}`;
        // Determine the result
        let result;
        if (userChoice === computerChoice) {
            result = "Dead heat!";
        } 
        else if ((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")){
                result = "Victory!";
                userScore++;
        } 
        else {
            result = "Loss!";
            computerScore++;
        }
        // Display the round result
        document.getElementById("game-result").innerText = result;
        // Check the last round
        if (round === totalRounds) {
            // Determine the final result
            const finalResult =
            userScore > computerScore
            ? "Victory! You won the game!"
            : userScore < computerScore
            ? "Defeat! The computer won!"
            : "Game over!";
        } 
        else {
            document.getElementById("round-status").innerText = `Round ${round + 1} of ${totalRounds}.`;
        }
        // Exit the loop after processing one round (for interactive gameplay)
        break;
    }
}
       
        
        
