"use strict";

function computerPlay(){
    // create variable and store random number between 0 and 2
    let result = Math.floor(Math.random() * 3)
    // if 0, return rock
    if(result === 0)
    return "rock";
    // if 1, return paper
    else if (result === 1)
    return "paper";
    // if 2, return scissors
    else return "scissors";
}

function playRound(playerSelection, computerSelection){
    let result;
    // make sure playerSelection is always lower case
    playerSelection = playerSelection.toLowerCase();
    // if players choose same thing, tie
    if(playerSelection === computerSelection){
        result = "You tied " + playerSelection + " ties " + playerSelection;
    }
    // if player chooses losing item, lose
    else if(playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock"){
                result = "You lost " + computerSelection + " beats " + playerSelection;
            }
    // if player chooses winning item, win
    else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper"){
                result = "You won " + playerSelection + " beats " + computerSelection;
            }
    // if input is not a form of rock, paper, or scissors, give error
    else
        result = "Error";
    
    return result;
    
}

function game(){
    var input;
    for(let i = 0; i < 5; i++){
        input = prompt("Choose rock, paper, or scissors: ");
        console.log(playRound(input, computerPlay()));
    }
}

game();