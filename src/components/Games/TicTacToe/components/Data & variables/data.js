export const gameStateTicTacToe = {
  keys: {},
  playerScore: 0,
  scoreList: JSON.parse(localStorage.getItem('tictactoeScoreList')) || [],
  playerOne: true,
  playerTwo: true,
  playerOneArray: [],
  playerTwoArray: [],
  playerScore: 0,
  winner: null
}
