export const multiplierEngine = (multiplier, gameStateTetris) => {
  const levelMultiplayer =
    gameStateTetris.level === 0 ? 1 : gameStateTetris.level

  switch (multiplier) {
    case 1:
      gameStateTetris.playerScore += 100 * levelMultiplayer
      break
    case 2:
      gameStateTetris.playerScore += 300 * levelMultiplayer
      break
    case 3:
      gameStateTetris.playerScore += 500 * levelMultiplayer
      break
    case 4:
      gameStateTetris.playerScore += 800 * levelMultiplayer
      break
    default:
      console.warn('Multiplier inválido:', multiplier)
  }
  const scoreData = document.getElementById('scoreData')
  scoreData.textContent = gameStateTetris.playerScore
}
