console.log("Helllo World")

    let rock = 1;
    let paper = 2;
    let scissors = 3;


function getComputerChoice() { 
    return Math.floor(Math.random() * 3) + 1;
}

  

let scores = {
 draw: 0,
 humanScore: 0,
 computerScore: 0,
};


function playRound(humanChoice, computerChoice) { 
    if (humanChoice === 1 && computerChoice == 2){
        scores.computerScore++;
        console.log("You lose. Paper beats Rock.")
    } else if (humanChoice === 1 && computerChoice == 3){
        scores.humanScore++;
        console.log("Congratulations!! YOU ROCKED THAT");
    } else if (humanChoice === 2 && computerChoice == 1){
        scores.humanScore++
        console.log("Congratulations!! YOU WON");
    } else if (humanChoice === 2 && computerChoice == 3){
        scores.computerScore++
        console.log("You lose. Scissors cut deep.");
    } else if (humanChoice === 3 && computerChoice == 1){
        scores.computerScore++
        console.log("You lose. Crushing Blow.");
    } else if (humanChoice === 3 && computerChoice == 2){
        scores.humanScore++
        console.log("Congratulations!! YOU SLICED IT UP")
    } else {
        scores.draw++
        console.log("Draw. Try Again")
    } 
} 




function playGame(){
    for (let i = 0; i < 5; i++){
        
        userInput = prompt("Choose Your Fate Challenger Rock, Paper or Scissor? Enter Exit To Chicken Out");
        let humanChoice = gethumanChoice(userInput);
        let computerChoice = getComputerChoice();
        
        function gethumanChoice(input) { 
            input = input.toLowerCase()
            if (input == "rock") {
                return 1;
            }  else if (input == "paper") {
                return 2
            }   else if (input == "scissors") {
                return 3;
            }   else {
                return null
            }
        }

     playRound(humanChoice, computerChoice); 
        
    }
        console.log(scores);


}


 playGame()






 