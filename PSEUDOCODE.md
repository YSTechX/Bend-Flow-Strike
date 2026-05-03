# Pseudocode — Bend Flow Strike

## Goal
One-line goal: Implement a best-of-5 elemental duel (Air, Water, Earth, Fire).

## Data
elements = ['air','water','earth','fire']
winnerMap = { 'air':'earth', 'water':'fire', 'earth':'water', 'fire':'air' }

## State
playerScore = 0
opponentScore = 0
round = 1
maxRounds = 5
neededToWin = 3

## Main loop
while round <= maxRounds and playerScore < neededToWin and opponentScore < neededToWin:
  player = getPlayerChoice()
  opponent = getOpponentChoice()
  if player == opponent:
    record "tie"
  else if winnerMap[player] == opponent:
    playerScore += 1
    record "player wins round"
  else:
    opponentScore += 1
    record "opponent wins round"
  round += 1

announce winner based on scores

## Edge cases
- invalid input -> prompt again
- ties do not count toward wins