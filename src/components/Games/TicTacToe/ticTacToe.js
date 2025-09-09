import './ticTacToe.css'
import { tictactoeEngine } from './components/Engines/ticTacToeEngine'
import { menuCreator } from '../../UI/menu/menus'
import { menuButtonCreator } from '../../UI/button/gameButton'

export const ticTacToe = (elementoPadre) => {
  const tictactoeDiv = document.getElementById('tictactoeDiv')
  menuCreator(elementoPadre, 'tictactoeMainMenu', null, 'mainMenu')
  const tictactoeMainMenu = document.getElementById('tictactoeMainMenu')

  const mainMenuOptionsDiv = document.createElement('div')
  mainMenuOptionsDiv.classList = 'mainMenuButtonsDiv'
  tictactoeMainMenu.appendChild(mainMenuOptionsDiv)

  menuButtonCreator(mainMenuOptionsDiv, 'menuTictactoeOption', '¡PLAY!', 'play')
  menuButtonCreator(
    mainMenuOptionsDiv,
    'menutictactoeOption',
    null,
    'tictactoeScore'
  )

  const startButtonTicTacToe = document.querySelector('.menuTictactoeOption')
  const scoreButtonTicTacToe = document.getElementById('tictactoeScore')
  scoreButtonTicTacToe.remove()
  startButtonTicTacToe.addEventListener('click', () => {
    setTimeout(() => {
      tictactoeEngine(tictactoeDiv)
    }, 0)
    setTimeout(() => {
      tictactoeMainMenu.remove()
    }, 0)
  })
}
