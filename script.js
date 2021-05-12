"use strict";

var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("playerScore");
const compScore_span = document.getElementById("compScore");
const result_div = document.getElementById("result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissors");
const gameResult_div = document.getElementById("gameResult");


function computerPlay(){
    
    let result = Math.floor(Math.random() * 3);
    
    if(result === 0)
    return "rock";
   
    else if (result === 1)
    return "paper";
    
    else return "scissors";
}

function win(playerSelection, computerSelection){
    userScore++;
    userScore_span.textContent = userScore;
    compScore_span.textContent = compScore;

    if(userScore < 5)
        result_div.textContent = "You win, " + playerSelection + " beats " + computerSelection + ".";
    else if(userScore === 5){
        result_div.textContent = "You win this round, " + playerSelection + " beats " + computerSelection + ".";
        gameResult_div.textContent = "Game Over. YOU WON! Refresh to play again.";
        reset();
    }
}

function loss(playerSelection, computerSelection){
    compScore++;
    compScore_span.textContent = compScore;
    userScore_span.textContent = userScore;
    if(compScore < 5)
        result_div.textContent = "You lost this round, " + computerSelection + " beats " + playerSelection + ".";
    else if(compScore === 5){
        result_div.textContent = "You lost this round, " + computerSelection + " beats " + playerSelection + ".";
        gameResult_div.textContent = "Game Over. YOU LOST! Refresh to play again.";
        reset();
    }
}

function draw(playerSelection, computerSelection){
    result_div.textContent = "You tied this round, " + playerSelection + " ties " + computerSelection + ".";
}

function playRound(playerSelection){
    var computerSelection = computerPlay();
        if(playerSelection === computerSelection){
            draw(playerSelection, computerSelection);
        }
        
        else if(playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock"){
                    loss(playerSelection, computerSelection);
        }
        
        else if(playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper"){
                    win(playerSelection, computerSelection);
        }
}

function reset(){
    rock_button.setAttribute('disabled', 1);
    paper_button.setAttribute('disabled', 1);
    scissor_button.setAttribute('disabled', 1);
}

function main(){
        rock_button.addEventListener('click', function(){
            playRound("rock");
        })

        paper_button.addEventListener('click', function(){
            playRound("paper");
        })

        scissor_button.addEventListener('click', function(){
            playRound("scissors");
        })
}

main();


// function playRound(playerSelection, computerSelection){
//     let result;
//     // make sure playerSelection is always lower case
//     playerSelection = playerSelection.toLowerCase();
//     // if players choose same thing, tie
//     if(playerSelection === computerSelection){
//         // result = "You tied " + playerSelection + " ties " + playerSelection;
//         result = 1;
//     }
//     // if player chooses losing item, lose
//     else if(playerSelection === "rock" && computerSelection === "paper" ||
//             playerSelection === "paper" && computerSelection === "scissors" ||
//             playerSelection === "scissors" && computerSelection === "rock"){
//                 // result = "You lost " + computerSelection + " beats " + playerSelection;
//                 result = 2;
//             }
//     // if player chooses winning item, win
//     else if(playerSelection === "rock" && computerSelection === "scissors" ||
//             playerSelection === "paper" && computerSelection === "rock" ||
//             playerSelection === "scissors" && computerSelection === "paper"){
//                 // result = "You won " + playerSelection + " beats " + computerSelection;
//                 result = 3;
//             }
//     // if input is not a form of rock, paper, or scissors, give error
//     else
//         result = "Error";
    
//     return result;
    
// }

// function game(){
//     var compScoreValue = 0;
//     var playerScoreValue = 0;
//     var roundResult;
//     var playerChoice;
//     var computerChoice;

//     const compScore = document.getElementById("compScore");
//     const playerScore = document.getElementById("playerScore");

//     const button = document.querySelectorAll(".button");
//     const result = document.getElementById("result");
//     button.forEach(button => button.addEventListener("click", function(e){
//         playerChoice = e.target.textContent;
//         computerChoice = computerPlay();
//         roundResult = playRound(playerChoice, computerChoice);
//         console.log(roundResult);
//     }))
// }
//     // var input;
//     // for(let i = 0; i < 5; i++){
//     //     input = prompt("Choose rock, paper, or scissors: ");
//     //     console.log(playRound(input, computerPlay()));
//     // }


