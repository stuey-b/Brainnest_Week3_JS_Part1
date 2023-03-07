let notGameOver = true;
let computerScore = 0;
let playerScore = 0;
let currentRound = 1;

const computerPlay = () => {
  //options that the computer can choose
  choices = [`rock`, `scissors`, `paper`];
  //use RNG to randomly select a value from the choices array
  const randomChoice = Math.floor(Math.random() * choices.length);
  //return the selected choice
  return choices[randomChoice];
}

const playerPlay = () => {
  const playerSelection = prompt("Make a choice. Type 'rock', 'scissors' or 'paper' below: ");
  return playerSelection.toLowerCase();
}

const nextRound = () => currentRound += 1;

const displayFinalScore = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return `FINAL RESULT: Your Score: ${playerScore}. Opponents score: ${computerScore}. CONGRATULATIONS! You WON!`
  } else if (playerScore < computerScore) {
    return `FINAL RESULT: Your Score: ${playerScore}. Opponents score: ${computerScore}. OOF! You LOST. Better luck next time.`
  } else {
    return `FINAL RESULT: Your Score: ${playerScore}. Opponents score: ${computerScore}. You TIED!`
  }
}

const playRound = () => {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  switch (playerSelection + " " + computerSelection) {
    case `rock rock`:
    case `scissors scissors`:
    case `paper paper`:
      return `You TIED! ${playerSelection} & ${computerSelection}.`;
    case `paper rock`:
    case `rock scissors`:
    case `scissors paper`:
      playerScore += 1;
      return `You WON! ${playerSelection} beats ${computerSelection}.`;
    case `rock paper`:
    case `scissors rock`:
    case `paper scissors`:
      computerScore += 1;
      return `You LOST! ${computerSelection} beats ${playerSelection}.`;
  }
}

const game = () => {
  console.log(`Let's play ROCK, SCISSORS, PAPER!`);
  while (notGameOver) {
    if (currentRound <= 5) {
      console.log(`********** ROUND ${currentRound} **********`);
      console.log(playRound());
      nextRound();
    } else {
      console.log(displayFinalScore(playerScore, computerScore));
      console.log(`Thanks for playing! GAME OVER`);
      notGameOver = false
    }
  }
}

game();