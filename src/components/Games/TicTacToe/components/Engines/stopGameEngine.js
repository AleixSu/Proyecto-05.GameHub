import { loseMenu } from '../../../../UI/menu/menus'
import { ticTacToe } from '../../ticTacToe'
import { gameStateTicTacToe } from '../Data & variables/data'
import { tictactoeEngine } from './ticTacToeEngine'

export const stopTicTacToeGame = (elementoPadre) => {
  tictactoeDiv.innerHTML = ''
  loseMenu(
    elementoPadre,
    'tttLoseMenu',
    gameStateTicTacToe.winner ? `${gameStateTicTacToe.winner} WINS` : 'DRAW',
    null
  )
  const tryAgain = document.getElementById('tryAgain')
  const goBack = document.getElementById('goBack')

  tryAgain.addEventListener('click', () => {
    tictactoeDiv.innerHTML = ''
    gameStateTicTacToe.winner = null
    gameStateTicTacToe.playerTwoArray = []
    gameStateTicTacToe.playerOneArray = []
    tictactoeEngine(tictactoeDiv)
  })
  goBack.addEventListener('click', () => {
    if (!nameInput.value) {
      gameStateTicTacToe.scoreList.push(
        `Player One - ${gameStateTicTacToe.playerScore}`
      )
      let sortedList = gameStateTicTacToe.scoreList.sort((a, b) => {
        let numA = parseInt(a.split('-')[1])
        let numB = parseInt(b.split('-')[1])
        return numB - numA
      })
      localStorage.setItem('tictactoeScoreList', JSON.stringify(sortedList))
    } else {
      gameStateTicTacToe.scoreList.push(
        `${nameInput.value} - ${gameStateTicTacToe.playerScore}`
      )
      let sortedList = gameStateTicTacToe.scoreList.sort((a, b) => {
        let numA = parseInt(a.split('-')[1])
        let numB = parseInt(b.split('-')[1])
        return numB - numA
      })
      localStorage.setItem('tictactoeScoreList', JSON.stringify(sortedList))
    }
    tictactoeDiv.innerHTML = ''
    gameStateTicTacToe.winner = ''
    gameStateTicTacToe.playerTwoArray = []
    gameStateTicTacToe.playerOneArray = []
    gameStateTicTacToe.playerScore = 0
    ticTacToe(tictactoeDiv)
  })
}
