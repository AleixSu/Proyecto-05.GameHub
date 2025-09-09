import { asteroidGameEngine } from '../../Games/Asteroids/asteroidsGame'
import { tetris } from '../../Games/Tetris/tetris'
import { menuButtonCreator } from '../button/gameButton'

import './scoreBoard'

export const asteroidScoreBoardMenuCreator = (
  elementoPadre,
  className,
  scoreArray,
  backButtonId,
  localStorageKey
) => {
  if (!localStorage.getItem(localStorageKey)) {
    const initialScoreList = ['DEV - 10001']
    localStorage.setItem(localStorageKey, JSON.stringify(initialScoreList))
  }
  const scoreBoardDiv = document.createElement('div')
  elementoPadre.appendChild(scoreBoardDiv)
  scoreBoardDiv.classList.add(className)
  const menuTitle = document.createElement('h3')
  menuTitle.textContent = 'SCOREBOARD'
  menuTitle.classList.add('scoreBoardTitle')
  const scoreList = document.createElement('div')
  scoreList.classList.add('scoreList')
  const ulScore = document.createElement('ul')
  let scorePosition = 0
  scoreList.appendChild(ulScore)
  scoreBoardDiv.appendChild(menuTitle)
  scoreBoardDiv.appendChild(scoreList)

  for (let i = 0; i < 20; i++) {
    const score = scoreArray[i]
    if (score === undefined) {
      ++scorePosition
      const ulScoreHTML = `
        <li>${scorePosition}. ---</li>
        `
      ulScore.innerHTML += ulScoreHTML
    } else {
      ++scorePosition
      const ulScoreHTML = `
        <li>${scorePosition}. ${score}</li>
        `
      ulScore.innerHTML += ulScoreHTML
    }
  }
  menuButtonCreator(scoreBoardDiv, 'backToMenu', 'BACK', backButtonId)
  const asteroidBackToMenu = document.getElementById('asteroidBackToMenu')
  asteroidBackToMenu.addEventListener('click', () => {
    scoreBoardDiv.classList.toggle('hidden')
    elementoPadre.classList.toggle('scoreBoardMode')
    scoreBoardDiv.remove()
    asteroidMainMenu.remove()
    asteroidGameEngine(asteroidDiv)
    asteroidMainMenu.classList.toggle('scoreBoardMode')
    const startButton = document.getElementById('start')
    const scoreButton = document.getElementById('score')
    startButton.classList.toggle('hidden')
    scoreButton.classList.toggle('hidden')
    console.log({
      asteroidMainMenu,
      mainMenu,
      startButton,
      scoreButton,
      asteroidDiv
    })
    /*       mainMenu.classList.toggle('hidden') */
    setTimeout(() => {
      asteroidMainMenu.classList.toggle('scoreBoardMode')
      /*       mainMenu.classList.toggle('hidden') */
      startButton.classList.toggle('hidden')
      scoreButton.classList.toggle('hidden')
    }, 100)
  })
}

export const tetrisScoreBoardMenuCreator = (
  elementoPadre,
  className,
  scoreArray,
  backButtonId,
  localStorageKey
) => {
  if (!localStorage.getItem(localStorageKey)) {
    const initialScoreList = ['DEV - 10001']
    localStorage.setItem(localStorageKey, JSON.stringify(initialScoreList))
  }
  const scoreBoardDiv = document.createElement('div')
  elementoPadre.appendChild(scoreBoardDiv)
  scoreBoardDiv.classList.add(className)
  const menuTitle = document.createElement('h3')
  menuTitle.textContent = 'SCOREBOARD'
  menuTitle.classList.add('scoreBoardTitle')
  const scoreList = document.createElement('div')
  scoreList.classList.add('scoreList')
  const ulScore = document.createElement('ul')
  let scorePosition = 0
  scoreList.appendChild(ulScore)
  scoreBoardDiv.appendChild(menuTitle)
  scoreBoardDiv.appendChild(scoreList)

  for (let i = 0; i < 20; i++) {
    const score = scoreArray[i]
    if (score === undefined) {
      ++scorePosition
      const ulScoreHTML = `
        <li>${scorePosition}. ---</li>
        `
      ulScore.innerHTML += ulScoreHTML
    } else {
      ++scorePosition
      const ulScoreHTML = `
        <li>${scorePosition}. ${score}</li>
        `
      ulScore.innerHTML += ulScoreHTML
    }
  }
  menuButtonCreator(scoreBoardDiv, 'backToMenu', 'BACK', backButtonId)
  const tetrisBackToMenu = document.getElementById('tetrisBackToMenu')
  tetrisBackToMenu.addEventListener('click', () => {
    scoreBoardDiv.classList.toggle('tetrisScoreBoardDiv')
    scoreBoardDiv.classList.add('hidden')
    scoreBoardDiv.remove()
    const tetrisMainMenu = document.getElementById('tetrisMainMenu')
    tetris(tetrisDiv)
  })
}
