import { gameStateTicTacToe } from '../Data & variables/data'
import { randomGrid, winningSequences } from '../Data & variables/variables'
import { checkIfWinner } from './checkIfWinnerEngine'
import { playersTurnSelector } from './playersTurnEngine'
import { stopTicTacToeGame } from './stopGameEngine'

export const tictactoeEngine = (elementoPadre) => {
  const gridDiv = document.createElement('div')
  gridDiv.id = 'ticTacToeGridDiv'
  gridDiv.style.backgroundImage = `url(${
    randomGrid[Math.floor(Math.random() * 3)]
  })`
  elementoPadre.appendChild(gridDiv)
  const emptyCell = Array(9).fill(true)

  for (let i = 0; i < 9; i++) {
    const cellInputButton = document.createElement('button')
    gridDiv.appendChild(cellInputButton)
    cellInputButton.id = i + 1
    cellInputButton.classList.add(`cell`)
    cellInputButton.addEventListener('click', () => {
      emptyCell[i] = false
      cellInputButton.disabled = true

      if (playersTurnSelector(emptyCell)) {
        gameStateTicTacToe.playerOneArray.push(parseInt(cellInputButton.id, 10))
        const o = document.createElement('img')
        o.src = './images/o.png'
        o.classList.add('xoMark')
        cellInputButton.appendChild(o)
        if (
          checkIfWinner(winningSequences, gameStateTicTacToe.playerOneArray)
        ) {
          gameStateTicTacToe.winner = 'Player Two'
          document
            .querySelectorAll('.cell')
            .forEach((btn) => (btn.disabled = true))
          setTimeout(() => {
            stopTicTacToeGame(tictactoeDiv)
          }, 500)
          return
        }
      } else {
        gameStateTicTacToe.playerTwoArray.push(parseInt(cellInputButton.id, 10))
        const x = document.createElement('img')
        x.src = './images/x.png'
        x.classList.add('xoMark')
        cellInputButton.appendChild(x)
        if (
          checkIfWinner(winningSequences, gameStateTicTacToe.playerTwoArray)
        ) {
          gameStateTicTacToe.playerScore++
          gameStateTicTacToe.winner = 'Player One'
          document
            .querySelectorAll('.cell')
            .forEach((btn) => (btn.disabled = true))
          setTimeout(() => {
            stopTicTacToeGame(tictactoeDiv)
          }, 500)
          return
        }
      }

      if (emptyCell.every((cell) => cell === false)) {
        setTimeout(() => {
          stopTicTacToeGame(tictactoeDiv)
        }, 500)
        const nameInput = document.getElementById('nameInput')
        nameInput.classList.add('displayNone')
      }
    })
  }
}
