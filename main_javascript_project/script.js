const computerPlay = () => {
  //options that the computer can choose
  choices = [`rock`, `scissors`, `paper`];
  //use RNG to randomly select a value from the choices array
  const randomChoice = Math.floor(Math.random() * choices.length);
  //return the selected choice
  return choices[randomChoice];
}

const playerPlay = () => {
  //ask the user to make a choice
  const playerSelection = prompt("Make a choice. Type 'rock', 'scissors' or 'paper': ");
  //return their choice and set all characters to lowercase
  return playerSelection.toLowerCase();
}

// notGameOver = true

let computerScore = 0
let playerScore = 0

const playRound = () => {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  console.log(playerSelection, computerSelection);
  switch (playerSelection + " " + computerSelection) {
    //the game is a tie
    case `rock rock`:
    case `scissors scissors`:
    case `paper paper`:
      console.log("it's a tie!");
      break;
    case `paper rock`:
    case `rock scissors`:
    case `scissors paper`:
      playerScore += 1;
      console.log(`You WIN! Your current score is ${playerScore}`);
      // return `You win!`
      break;
    case `rock paper`:
    case `scissors rock`:
    case `paper scissors`:
      computerScore += 1;
      console.log("You LOSE!");
    // return `You LOSE!`
  }
}

playRound();
