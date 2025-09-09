import { menuButtonCreator } from '../../../../UI/button/gameButton'
import { loseMenu, menuCreator } from '../../../../UI/menu/menus'
import { asteroidGameEngine, createAsteroidGame } from '../../asteroidsGame'
import { gameStateAsteroids } from '../Data & variables/variables'
import { SmallAsteroid } from '../Objects/asteroidsClass'
import { stopGame } from './stopGameEngine'

export const checkCollision = (
  figure,
  sAsteroidsArray,
  bAsteroidsArray,
  bulletsArray,
  context
) => {
  for (let i = sAsteroidsArray.length - 1; i >= 0; i--) {
    const sAsteroid = sAsteroidsArray[i]

    for (let j = bulletsArray.length - 1; j >= 0; j--) {
      const bullet = bulletsArray[j]

      const dx = sAsteroid.xPos - bullet.x
      const dy = sAsteroid.yPos - bullet.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < sAsteroid.radius) {
        sAsteroidsArray.splice(i, 1)
        bulletsArray.splice(j, 1)
        gameStateAsteroids.playerScore = gameStateAsteroids.playerScore + 100
        const score = document.getElementById('score')
        score.textContent = gameStateAsteroids.playerScore
        break
      }
    }
  }

  for (let i = sAsteroidsArray.length - 1; i >= 0; i--) {
    const sAsteroid = sAsteroidsArray[i]

    const dx = sAsteroid.xPos - figure.x
    const dy = sAsteroid.yPos - figure.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    for (let j = bAsteroidsArray.length - 1; j >= 0; j--) {
      const bAsteroid = bAsteroidsArray[j]

      const dx = bAsteroid.xPos - figure.x
      const dy = bAsteroid.yPos - figure.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < bAsteroid.radius) {
        const asteroidDiv = document.getElementById('asteroidDiv')
        stopGame()
        loseMenu(
          asteroidDiv,
          'asteroidLoseMenu',
          'YOU DIED',
          'ENTER YOUR CODENAME'
        )
        const tryAgain = document.getElementById('tryAgain')
        const goBack = document.getElementById('goBack')

        tryAgain.addEventListener('click', () => {
          if (!nameInput.value) {
            gameStateAsteroids.scoreList.push(
              `??? - ${gameStateAsteroids.playerScore}`
            )
            let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
              let numA = parseInt(a.split('-')[1])
              let numB = parseInt(b.split('-')[1])
              return numB - numA
            })
            localStorage.setItem(
              'asteroidScoreList',
              JSON.stringify(sortedList)
            )
          } else {
            gameStateAsteroids.scoreList.push(
              `${nameInput.value} - ${gameStateAsteroids.playerScore}`
            )
            let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
              let numA = parseInt(a.split('-')[1])
              let numB = parseInt(b.split('-')[1])
              return numB - numA
            })
            localStorage.setItem(
              'asteroidScoreList',
              JSON.stringify(sortedList)
            )
          }
          asteroidDiv.innerHTML = ''
          gameStateAsteroids.playerScore = 0
          gameStateAsteroids.isRunning = true
          createAsteroidGame(asteroidDiv)
        })
        goBack.addEventListener('click', () => {
          if (!nameInput.value) {
            gameStateAsteroids.scoreList.push(
              `??? - ${gameStateAsteroids.playerScore}`
            )
            let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
              let numA = parseInt(a.split('-')[1])
              let numB = parseInt(b.split('-')[1])
              return numB - numA
            })
            localStorage.setItem(
              'asteroidScoreList',
              JSON.stringify(sortedList)
            )
          } else {
            gameStateAsteroids.scoreList.push(
              `${nameInput.value} - ${gameStateAsteroids.playerScore}`
            )
            let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
              let numA = parseInt(a.split('-')[1])
              let numB = parseInt(b.split('-')[1])
              return numB - numA
            })
            localStorage.setItem(
              'asteroidScoreList',
              JSON.stringify(sortedList)
            )
          }
          asteroidDiv.innerHTML = ''
          gameStateAsteroids.playerScore = 0
          gameStateAsteroids.isRunning = true
          asteroidGameEngine(asteroidDiv)
        })
        break
      }
    }
    if (distance < sAsteroid.radius) {
      const asteroidDiv = document.getElementById('asteroidDiv')
      stopGame()
      loseMenu(
        asteroidDiv,
        'asteroidLoseMenu',
        'YOU DIED',
        'ENTER YOUR CODENAME'
      )
      const tryAgain = document.getElementById('tryAgain')
      const goBack = document.getElementById('goBack')
      const nameInput = document.getElementById('nameInput')

      tryAgain.addEventListener('click', () => {
        if (!nameInput.value) {
          gameStateAsteroids.scoreList.push(
            `??? - ${gameStateAsteroids.playerScore}`
          )
          let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
            let numA = parseInt(a.split('-')[1])
            let numB = parseInt(b.split('-')[1])
            return numB - numA
          })
          localStorage.setItem('asteroidScoreList', JSON.stringify(sortedList))
        } else {
          gameStateAsteroids.scoreList.push(
            `${nameInput.value} - ${gameStateAsteroids.playerScore}`
          )
          let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
            let numA = parseInt(a.split('-')[1])
            let numB = parseInt(b.split('-')[1])
            return numB - numA
          })
          localStorage.setItem('asteroidScoreList', JSON.stringify(sortedList))
        }
        asteroidDiv.innerHTML = ''
        gameStateAsteroids.playerScore = 0
        gameStateAsteroids.isRunning = true
        createAsteroidGame(asteroidDiv)
      })
      goBack.addEventListener('click', () => {
        if (!nameInput.value) {
          gameStateAsteroids.scoreList.push(
            `??? - ${gameStateAsteroids.playerScore}`
          )
          let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
            let numA = parseInt(a.split('-')[1])
            let numB = parseInt(b.split('-')[1])
            return numB - numA
          })
          localStorage.setItem('asteroidScoreList', JSON.stringify(sortedList))
        } else {
          gameStateAsteroids.scoreList.push(
            `${nameInput.value} - ${gameStateAsteroids.playerScore}`
          )
          let sortedList = gameStateAsteroids.scoreList.sort((a, b) => {
            let numA = parseInt(a.split('-')[1])
            let numB = parseInt(b.split('-')[1])
            return numB - numA
          })
          localStorage.setItem('asteroidScoreList', JSON.stringify(sortedList))
        }
        asteroidDiv.innerHTML = ''
        gameStateAsteroids.playerScore = 0
        gameStateAsteroids.isRunning = true
        asteroidGameEngine(asteroidDiv)
      })
      break
    }
  }

  for (let i = bAsteroidsArray.length - 1; i >= 0; i--) {
    const bAsteroid = bAsteroidsArray[i]

    for (let j = bulletsArray.length - 1; j >= 0; j--) {
      const bullet = bulletsArray[j]

      const dx = bAsteroid.xPos - bullet.x
      const dy = bAsteroid.yPos - bullet.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < bAsteroid.radius) {
        bAsteroidsArray.splice(i, 1)
        bulletsArray.splice(j, 1)
        for (let k = 0; k < 3; k++) {
          const offSetX = (Math.random() - 0.5) * 50
          const offSetY = (Math.random() - 0.5) * 50

          const newSpeed = Math.random() * 3 + 1

          const angle = Math.random() * Math.PI * 2

          const velX = Math.cos(angle) * newSpeed
          const velY = Math.sin(angle) * newSpeed

          const fragmentedAsteroid = new SmallAsteroid(
            bAsteroid.xPos + offSetX,
            bAsteroid.yPos + offSetY,
            'white',
            newSpeed,
            context
          )
          fragmentedAsteroid.velX = velX
          fragmentedAsteroid.velY = velY

          gameStateAsteroids.smallAsteroids.push(fragmentedAsteroid)
        }
        gameStateAsteroids.playerScore = gameStateAsteroids.playerScore + 50
        const score = document.getElementById('score')
        score.textContent = gameStateAsteroids.playerScore
        break
      }
    }
  }
}
