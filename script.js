const CHOICES = ['air', 'water', 'earth', 'fire'];
const WINNER_MAP = {
  air: 'earth',
  water: 'fire',
  earth: 'water',
  fire: 'air',
};

let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
  return prompt('Choose an Element: Air, Water, Earth, or Fire');
}

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function normalizeChoice(choice) {
  return (choice || '').trim().toLowerCase();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

function isValidChoice(choice) {
  return CHOICES.includes(choice);
}

function playRound(playerChoice, computerChoice) {
  const player = normalizeChoice(playerChoice);
  const computer = normalizeChoice(computerChoice);

  if (!player || !computer) {
    console.log('Round skipped: missing choice.');
    return;
  }

  if (!isValidChoice(player)) {
    console.log(`Round skipped: "${playerChoice}" is not a valid element.`);
    return;
  }

  console.log(`Computer chose ${capitalize(computer)}.`);

  if (player === computer) {
    console.log(`It's a tie! Both chose ${capitalize(player)}.`);
    return;
  }

  if (WINNER_MAP[player] === computer) {
    playerScore++;
    console.log(`You win! ${capitalize(player)} beats ${capitalize(computer)}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${capitalize(computer)} beats ${capitalize(player)}.`);
  }
}

function playGame() {
  resetScores();

  for (let round = 1; playerScore < 3 && computerScore < 3; round++) {
    console.log(`--- Round ${round} ---`);
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
  }

  console.log('--- Final Result ---');
  if (playerScore > computerScore) {
    console.log(`You won the game! Final score: Player ${playerScore} - Computer ${computerScore}`);
  } else {
    console.log(`You lost the game. Final score: Player ${playerScore} - Computer ${computerScore}`);
  }
}

// Start the game:
playGame();
