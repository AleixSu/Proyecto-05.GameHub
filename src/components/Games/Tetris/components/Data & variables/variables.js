export const gameStateTetris = {
  keys: {},
  playerScore: 0,
  scoreList: JSON.parse(localStorage.getItem('tetrisScoreList')) || [],
  animationId: null,
  level: 0,
  frameratePerLevel: 48,
  lineCounter: 0
}

export let tetraminoArray = []
