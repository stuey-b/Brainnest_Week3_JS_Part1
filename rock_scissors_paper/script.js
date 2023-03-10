let gameOver = false;
let computerScore = 0;
let playerScore = 0;
let currentRound = 1;

const computerPlay = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return `rock`;
    case 1:
      return `scissors`;
    case 2:
      return `paper`;
  }
};

const playerPlay = () => {
  return prompt(`Type 'rock', 'scissors' or 'paper' below: `).toLowerCase();
};

const displayFinalScore = () => {
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

const playAgain = () => {
  computerScore = 0;
  playerScore = 0;
  currentRound = 1
  console.clear();
  game();
};

const game = () => {
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
  while (!gameOver) {
    if (currentRound <= 5) {
      console.log(`********** ROUND ${currentRound} **********`);
      console.log(playRound());
      currentRound++;
    } else {
      console.log(displayFinalScore());
      const playAgainInput = prompt(`Would you like to play again? Type 'y' or 'n': `).toLowerCase();
      if (playAgainInput === 'y') {
        playAgain();
      } else {
        gameOver = true;
        console.log(`Thanks for playing! GAME OVER`);
      }
    }
  }
};

game();
