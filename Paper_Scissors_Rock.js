let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice = "paper"
let secondPlayerChoice = "rock"

let firstPossibility = firstPlayerChoice === "paper" && secondPlayerChoice === "rock";

let secondPossibility = firstPlayerChoice === "rock" && secondPlayerChoice === "scissors";

let thirdPossibility = firstPlayerChoice === "scissors" && secondPlayerChoice === "paper";

let fourthPossibility = firstPlayerChoice === "rock" && secondPlayerChoice === "paper";

let fifthPossibility = firstPlayerChoice === "scissors" && secondPlayerChoice === "rock";

let sixthPossibility = firstPlayerChoice === "paper" && secondPlayerChoice === "scissors";

let seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log(`first player won!`);
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log(`second player won!`);
}
  else if (seventhPossibility) {
    console.log('there is a tie! pick again');
  } else {
  console.log('something went wrong')
}
