import { loseMenu } from '../../../../UI/menu/menus'
import { tetris } from '../../tetris'
import { gameStateTetris } from '../Data & variables/variables'
import { tetrisGameEngine } from './tetrisGameEngine'

export const stopTetrisGame = () => {
  if (gameStateTetris.animationId !== null) {
    cancelAnimationFrame(gameStateTetris.animationId)
    gameStateTetris.animationId = null

    loseMenu(tetrisDiv, 'tetrisLoseMenu', 'GAME OVER', 'Enter your name')
    const tryAgain = document.getElementById('tryAgain')
    const goBack = document.getElementById('goBack')

    tryAgain.addEventListener('click', () => {
      if (!nameInput.value) {
        gameStateTetris.scoreList.push(`??? - ${gameStateTetris.playerScore}`)
        let sortedList = gameStateTetris.scoreList.sort((a, b) => {
          let numA = parseInt(a.split('-')[1])
          let numB = parseInt(b.split('-')[1])
          return numB - numA
        })
        localStorage.setItem('tetrisScoreList', JSON.stringify(sortedList))
      } else {
        gameStateTetris.scoreList.push(
          `${nameInput.value} - ${gameStateTetris.playerScore}`
        )
        let sortedList = gameStateTetris.scoreList.sort((a, b) => {
          let numA = parseInt(a.split('-')[1])
          let numB = parseInt(b.split('-')[1])
          return numB - numA
        })
        localStorage.setItem('tetrisScoreList', JSON.stringify(sortedList))
      }
      tetrisDiv.innerHTML = ''
      tetrisAccesoryDiv.innerHTML = ''
      gameStateTetris.playerScore = 0
      gameStateTetris.lineCounter = 0
      gameStateTetris.level = 0
      gameStateTetris.frameratePerLevel = 48
      gameStateTetris.isRunning = true
      tetrisGameEngine(tetrisDiv, tetrisAccesoryDiv)
    })
    goBack.addEventListener('click', () => {
      if (!nameInput.value) {
        gameStateTetris.scoreList.push(`??? - ${gameStateTetris.playerScore}`)
        let sortedList = gameStateTetris.scoreList.sort((a, b) => {
          let numA = parseInt(a.split('-')[1])
          let numB = parseInt(b.split('-')[1])
          return numB - numA
        })
        localStorage.setItem('tetrisScoreList', JSON.stringify(sortedList))
      } else {
        gameStateTetris.scoreList.push(
          `${nameInput.value} - ${gameStateTetris.playerScore}`
        )
        let sortedList = gameStateTetris.scoreList.sort((a, b) => {
          let numA = parseInt(a.split('-')[1])
          let numB = parseInt(b.split('-')[1])
          return numB - numA
        })
        localStorage.setItem('tetrisScoreList', JSON.stringify(sortedList))
      }
      tetrisAccesoryDiv.classList.toggle('hidden')
      tetrisDiv.innerHTML = ''
      tetrisAccesoryDiv.innerHTML = ''
      gameStateTetris.playerScore = 0
      gameStateTetris.lineCounter = 0
      gameStateTetris.level = 0
      gameStateTetris.frameratePerLevel = 48
      gameStateTetris.isRunning = true
      tetris(tetrisDiv)
    })
  }
}
