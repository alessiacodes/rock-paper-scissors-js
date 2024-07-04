console.log("Rock, Paper, Scissors, Shoot!")

/** CONSTANTS **/ 
const PAPER = "paper";
const SCISSORS = "scissors";
const ROCK = "rock";

/** GLOBALS **/ 
let humanScore = 0;
let computerScore = 0;

/** FUNCTIONS **/ 
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * @param {number} min - The minimum value of the range
 * @param {number} max - The maximum value of the range
 * @return {number} A random integer between min and max
 */
function getRandomInt(min, max) {
    let min = Math.ceil(min);
    let max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @returns {string} The computer's choice, either "Rock", "Paper", or "Scissors"
 */
function getComputerChoice() {
    let randInt = getRandomInt(0, 2);
    if (randInt === 0) {
        return ROCK;
    } else if (randInt === 1) {
        return PAPER;
    } else if (randInt === 2) {
        return SCISSORS;
    }
}

/**
 * @returns {string} The human's choice, either "Rock", "Paper", or "Scissors"
 */
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === ROCK || humanChoice === PAPER || humanChoice === SCISSORS) {
        return humanChoice;
    } else {
        console.log("Please enter Rock, Paper, or Scissors");
        return getHumanChoice();
    }
}

/**
 * Plays a round of Rock, Paper, Scissors
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (humanChoice === ROCK && computerChoice === PAPER) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === PAPER && computerChoice === ROCK) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

/**
 * Plays five rounds of Rock, Paper, Scissors and determines the winner
 */
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("The computer won the game!");
    } else {
        console.log("The game was a tie!");
    }
    console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
}

//** MAIN **/
playGame();