
    let rock = 1;
    let paper = 2;
    let scissors = 3;


function getComputerChoice() { 
    return Math.floor(Math.random() * 3) + 1;
} 
  
 
function playRound(humanChoice, computerChoice) { 

    if (humanChoice === 1 && computerChoice == 2){
        scores.computerScore++;
        resultsDiv.textContent = "You lose. Paper beats Rock.";
    } else if (humanChoice === 1 && computerChoice == 3){
        scores.humanScore++;
        resultsDiv.textContent = "Congratulations!! YOU ROCKED THAT";
    } else if (humanChoice === 2 && computerChoice == 1){
        scores.humanScore++
        resultsDiv.textContent = "Congratulations!! YOU WON";
    } else if (humanChoice === 2 && computerChoice == 3){
        scores.computerScore++
        resultsDiv.textContent = "You lose. Scissors cut deep.";
    } else if (humanChoice === 3 && computerChoice == 1){
        scores.computerScore++
        resultsDiv.textContent = "You lose. Crushing Blow.";
    } else if (humanChoice === 3 && computerChoice == 2){
        scores.humanScore++
        resultsDiv.textContent = "Congratulations!! YOU SLICED IT UP";
    } else {
        scores.draw++;
        resultsDiv.textContent = "Draw. Try Again";
    }  

        document.querySelector("#humanScore").textContent = scores.humanScore;
        document.querySelector("#computerScore").textContent = scores.computerScore;
        document.querySelector("#draw").textContent = scores.draw;


        if (scores.humanScore === 5 || scores.computerScore === 5) {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        
            resultsDiv.textContent += " Game Over.";
        }
        
    }



 let scores = {
    draw: 0,
    humanScore: 0,
    computerScore: 0,
};



  

 const rockBtn = document.querySelector("#rockBtn");
 rockBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound(1, computerChoice);
 });


const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound(2, computerChoice);

});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound(3, computerChoice);
});


const resultsDiv = document.querySelector("#Results");





 