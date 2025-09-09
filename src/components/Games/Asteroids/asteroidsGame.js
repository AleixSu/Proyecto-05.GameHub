import './asteroidsGame.css'
import { menuButtonCreator } from '../../UI/button/gameButton'
import { menuCreator } from '../../UI/menu/menus'
import { gameStateAsteroids } from './components/Data & variables/variables'
import { gameLoop } from './components/Engines/gameLoopEngine'
import { SpaceShip } from './components/Objects/spaceShipClass'
import { asteroidScoreBoardMenuCreator } from '../../UI/scoreBoard/scoreBoard'

export const createAsteroidGame = (elementoPadre) => {
  const canvas = document.createElement('canvas')
  elementoPadre.appendChild(canvas)

  const H = elementoPadre.offsetHeight //OffsetHeight and width coge el tamaño renderizado del contenedor
  const W = elementoPadre.offsetWidth

  canvas.height = H
  canvas.width = W

  const ctx = canvas.getContext('2d')

  //! USAMOS EL CLASE/MOLDE :
  const ship = new SpaceShip(W / 2, H / 2, 'rgba(207, 207, 207, 1)', ctx, W, H)

  //EventListener de disparar

  if (gameStateAsteroids.shootListener) {
    //Comprobamos mediante esta variable que no tenga ya asignado un listener. Si lo tiene, lo borramos.
    window.removeEventListener('keydown', gameStateAsteroids.shootListener)
  }

  gameStateAsteroids.shootListener = (e) => {
    // Creamos la función de disparar y la asignamos a la variable.
    if (e.code === 'Space') {
      // Usamos .code  en vez de .key para que no tenga nada que ver el idioma en el que tenga el teclado el usuario.
      ship.shoot()
    }
  }

  window.addEventListener('keydown', gameStateAsteroids.shootListener) // creamos el listener con la variable. Al ser una función deberíamos de poner paréntesis al final? Nope. Porque no nos interesa que se llame y se active al instante si no darle la referencia y decirle "Oye, cuadno ocurra el 'keydown' llama a está función que está guardada en gameStateAsteroids.Listener"

  gameStateAsteroids.isRunning = true
  //Llamamos a la función creada para actualizar el frame mediante requestAnimationFrame:
  gameLoop(
    ctx,
    ship,
    W,
    H,
    gameStateAsteroids.smallAsteroids,
    gameStateAsteroids.bigAsteroids
  )

  const scoreDiv = document.createElement('div')
  scoreDiv.classList.add('scoreDiv')
  const score = document.createElement('h4')
  score.textContent = gameStateAsteroids.playerScore
  score.id = 'score'
  elementoPadre.appendChild(scoreDiv)
  scoreDiv.appendChild(score)
}

export const asteroidGameEngine = (elementoPadre) => {
  menuCreator(elementoPadre, 'asteroidMainMenu', 'MAIN MENU', 'mainMenu')
  const asteroidMainMenu = document.getElementById('asteroidMainMenu')

  const mainMenuOptionsDiv = document.createElement('div')
  mainMenuOptionsDiv.classList = 'mainMenuButtonsDiv'
  asteroidMainMenu.appendChild(mainMenuOptionsDiv)
  menuButtonCreator(mainMenuOptionsDiv, 'menuOption', 'START', 'start')
  menuButtonCreator(mainMenuOptionsDiv, 'menuOption', 'SCOREBOARD', 'score')

  const startButton = document.getElementById('start')
  const scoreButton = document.getElementById('score')
  const mainMenu = document.getElementById('mainMenu')

  startButton.addEventListener('click', () => {
    asteroidMainMenu.classList.toggle('gameMode')
    startButton.classList.toggle('menuOption')
    startButton.classList.toggle('hidden')
    scoreButton.classList.toggle('menuOption')
    scoreButton.classList.toggle('hidden')
    mainMenu.classList.toggle('hidden')
    setTimeout(() => {
      createAsteroidGame(asteroidDiv)
    }, 1150)
    setTimeout(() => {
      asteroidMainMenu.remove()
    }, 2000)
  })
  scoreButton.addEventListener('click', () => {
    asteroidMainMenu.classList.toggle('scoreBoardMode')
    startButton.classList.toggle('menuOption')
    startButton.classList.toggle('hidden')
    scoreButton.classList.toggle('menuOption')
    scoreButton.classList.toggle('hidden')
    mainMenu.classList.toggle('hidden')
    setTimeout(() => {
      startButton.remove()
      scoreButton.remove()
      mainMenu.remove()
      asteroidScoreBoardMenuCreator(
        asteroidMainMenu,
        'asteroidScoreBoardDiv',
        gameStateAsteroids.scoreList,
        'asteroidBackToMenu',
        'asteroidScoreList'
      )
    }, 500)
  })
}
