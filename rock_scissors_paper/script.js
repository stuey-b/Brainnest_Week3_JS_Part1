const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return `rock`;
    case 1:
      return `scissors`;
    case 2:
      return `paper`;
  }
};

const playerPlay = () => {
  const playerSelection = prompt(`Type 'rock', 'scissors' or 'paper' below: `);
  return playerSelection.toLowerCase();
};

const displayFinalScore = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return `FINAL RESULT: 
    Your Score: ${playerScore} 
    Opponents score: ${computerScore} 
    CONGRATULATIONS! You WON!`;
  } else if (playerScore < computerScore) {
    return `FINAL RESULT: 
    Your Score: ${playerScore} 
    Opponents score: ${computerScore}
    OOF! You LOST. Better luck next time.`;
  } else {
    return `FINAL RESULT: 
    Your Score: ${playerScore} 
    Opponents score: ${computerScore}
    You TIED!`;
  }
};

const playAgain = () => {
  computerScore = 0;
  playerScore = 0;
  currentRound = 1;
  console.clear();
  game();
};

const playRound = () => {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    return `You TIED! ${playerSelection} & ${computerSelection}.`;
  } else {
    switch (playerSelection + " " + computerSelection) {
      case `paper rock`:
      case `rock scissors`:
      case `scissors paper`:
        playerScore++;
        return `You WON! ${playerSelection} beats ${computerSelection}.`;
      case `rock paper`:
      case `scissors rock`:
      case `paper scissors`:
        computerScore++;
        return `You LOST! ${computerSelection} beats ${playerSelection}.`;
    }
  }
};

const game = () => {
  let notGameOver = true;
  let computerScore = 0;
  let playerScore = 0;
  let currentRound = 1;
  console.log(`Let's play ROCK, SCISSORS, PAPER!`);
  console.log(`    
      _______
  ---'   ____)
        (_____)
        (_____)
        (____)
  ---.__(___) `);
  console.log(`    
      _______
  ---'   ____)____
            ______)
         __________)
        (____)
  ---.__(___)`);
  console.log(`     
      _______
  ---'    ____)____
             ______)
            _______)
           _______)
  ---.__________)`);
  while (notGameOver) {
    if (currentRound <= 5) {
      console.log(`********** ROUND ${currentRound} **********`);
      console.log(playRound());
      currentRound++;
    } else {
      console.log(displayFinalScore(playerScore, computerScore));
      console.log(`Would you like to play again? Check the prompt box.`);
      const playAgainInput = prompt(
        `Would you like to play again? Type 'y' or 'n': `
      );
      if (playAgainInput === `y`) {
        playAgain();
        // computerScore = 0;
        // playerScore = 0;
        // currentRound = 1;
        // console.clear();
        // game();
      } else {
        notGameOver = false;
        console.log(`Thanks for playing! GAME OVER`);
      }
    }
  }
};

game();
