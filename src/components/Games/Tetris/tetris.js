import { menuButtonCreator } from '../../UI/button/gameButton'
import { menuCreator } from '../../UI/menu/menus'
import { tetrisScoreBoardMenuCreator } from '../../UI/scoreBoard/scoreBoard'
import { gameStateTetris } from './components/Data & variables/variables'
import { tetrisGameEngine } from './components/Engines/tetrisGameEngine'
import './tetris.css'

//aquí se creará el menú y esas cosas
export const tetris = (elementoPadre) => {
  const tetrisDiv = document.getElementById('tetrisDiv')
  menuCreator(elementoPadre, 'tetrisMainMenu', null, 'mainMenu')
  const tetrisMainMenu = document.getElementById('tetrisMainMenu')

  const mainMenuOptionsDiv = document.createElement('div')
  mainMenuOptionsDiv.classList = 'mainMenuButtonsDiv'
  tetrisMainMenu.appendChild(mainMenuOptionsDiv)

  const titleImg = document.createElement('img')
  titleImg.id = 'tetrisTitle'
  titleImg.src = './images/tetrisLogo2.png'
  tetrisMainMenu.appendChild(titleImg)
  menuButtonCreator(mainMenuOptionsDiv, 'menuTetrisOption', 'PLAY', 'play')
  menuButtonCreator(
    mainMenuOptionsDiv,
    'menuTetrisOption',
    'SCOREBOARD',
    'tetrisScore'
  )

  const startButton = document.getElementById('play')
  const scoreButton = document.getElementById('tetrisScore')

  startButton.addEventListener('click', () => {
    setTimeout(() => {
      tetrisGameEngine(tetrisDiv, tetrisAccesoryDiv)
      tetrisAccesoryDiv.classList.toggle('hidden')
    }, 0)
    setTimeout(() => {
      tetrisMainMenu.remove()
    }, 0)
  })
  scoreButton.addEventListener('click', () => {
    startButton.classList.toggle('hidden')
    scoreButton.classList.toggle('hidden')
    tetrisMainMenu.classList.toggle('hidden')
    setTimeout(() => {
      tetrisMainMenu.remove()
    }, 1000)
    setTimeout(() => {
      startButton.remove()
      scoreButton.remove()
      titleImg.remove()
      tetrisScoreBoardMenuCreator(
        tetrisDiv,
        'tetrisScoreBoardDiv',
        gameStateTetris.scoreList,
        'tetrisBackToMenu',
        'tetrisScoreList'
      )
    }, 1000)
  })
}
