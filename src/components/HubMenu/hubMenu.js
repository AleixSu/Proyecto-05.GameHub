import { asteroidGameEngine } from '../Games/Asteroids/asteroidsGame'
import { tetris } from '../Games/Tetris/tetris'
import { ticTacToe } from '../Games/TicTacToe/ticTacToe'
import { buttonSelectorCreator } from '../UI/button/gameButton'
import { navCreator } from '../UI/nav/nav'
import { titleCreator } from '../UI/titles/titleCreator'

import './hubMenu.css'

export const gamesScreenCreator = (elementoPadre) => {
  //*SECTION
  //TetrisSection
  const tetrisScreenSection = document.createElement('section')
  tetrisScreenSection.id = 'tetrisScreen'
  tetrisScreenSection.classList.add('game-screen')
  tetrisScreenSection.classList.add('hidden')
  elementoPadre.appendChild(tetrisScreenSection)

  //AsteroidSection
  const asteroidScreenSection = document.createElement('section')
  asteroidScreenSection.id = 'asteroidScreen'
  asteroidScreenSection.classList.add('game-screen')
  elementoPadre.appendChild(asteroidScreenSection)

  //Tic Tac Toe Section
  const ticTacToeScreenSection = document.createElement('section')
  ticTacToeScreenSection.id = 'ticTacToeScreen'
  ticTacToeScreenSection.classList.add('game-screen')
  ticTacToeScreenSection.classList.add('hidden')
  elementoPadre.appendChild(ticTacToeScreenSection)

  //todo AsteroidGame:

  const asteroidDiv = document.createElement('div')
  asteroidDiv.id = 'asteroidDiv'

  //todo TetrisGame:
  const tetrisMain = document.createElement('section')
  tetrisMain.id = 'tetrisMain'
  tetrisMain.classList.add('displayNone')
  const tetrisDiv = document.createElement('div')
  tetrisDiv.id = 'tetrisDiv'
  const tetrisAccessoryDiv = document.createElement('div')
  tetrisAccessoryDiv.id = 'tetrisAccesoryDiv'
  tetrisAccessoryDiv.classList.add('hidden')

  //todo TicTacToeGame:
  const tictactoeDiv = document.createElement('div')
  tictactoeDiv.id = 'tictactoeDiv'
  tictactoeDiv.classList.add('displayNone')

  //Asteroid Nav
  navCreator(asteroidScreenSection, 'asteroidNav')
  const asteroidNav = document.querySelector('.asteroidNav')

  buttonSelectorCreator(
    asteroidNav,
    asteroidDiv,
    tetrisMain,
    'transparent',
    tetrisScreenSection,
    asteroidScreenSection,
    './images/flechaNeon.png'
  )
  titleCreator(asteroidNav, 'h3', '15px', null, 'ASTEROID')
  buttonSelectorCreator(
    asteroidNav,
    asteroidDiv,
    tictactoeDiv,
    'transparent',
    ticTacToeScreenSection,
    asteroidScreenSection,
    './images/flechaNeon.png'
  )
  asteroidScreenSection.appendChild(asteroidDiv)
  asteroidGameEngine(asteroidDiv)

  //!______________________________________________________________

  //Tetris Nav
  navCreator(tetrisScreenSection, 'tetrisNav')
  const tetrisNav = document.querySelector('.tetrisNav')
  titleCreator(tetrisNav, 'img', '15px', 'tetrisImg', 'Tetris')
  const tetrisTitle = document.querySelector('.tetrisImg')
  tetrisTitle.src = './images/tetrisTitle.png'
  buttonSelectorCreator(
    tetrisNav,
    asteroidDiv,
    tetrisMain,
    'transparent',
    asteroidScreenSection,
    tetrisScreenSection,
    './images/flechaTetris.png'
  )
  tetrisScreenSection.appendChild(tetrisMain)
  tetrisMain.appendChild(tetrisDiv)
  tetrisMain.appendChild(tetrisAccessoryDiv)
  tetris(tetrisDiv)

  //!______________________________________________________________

  //Tic Tac Toe Nav
  navCreator(ticTacToeScreenSection, 'tictactoeNav')
  const tictactoeNav = document.querySelector('.tictactoeNav')
  buttonSelectorCreator(
    tictactoeNav,
    asteroidDiv,
    tictactoeDiv,
    'transparent',
    asteroidScreenSection,
    ticTacToeScreenSection,
    './images/flechaTiza.png'
  )
  titleCreator(tictactoeNav, 'h3', '15px', null, 'TIC TAC TOE')
  ticTacToeScreenSection.appendChild(tictactoeDiv)
  ticTacToe(tictactoeDiv)
}
