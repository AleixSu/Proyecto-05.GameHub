import { gameStateAsteroids } from '../Data & variables/variables'

export const stopGame = () => {
  if (gameStateAsteroids.animationId !== null) {
    cancelAnimationFrame(gameStateAsteroids.animationId)
    gameStateAsteroids.animationId = null
    gameStateAsteroids.isRunning = false
  }

  if (gameStateAsteroids.shootListener) {
    //Comprobamos mediante esta variable que no tenga ya asignado un listener. Si lo tiene, lo borramos.
    window.removeEventListener('keydown', gameStateAsteroids.shootListener)
    gameStateAsteroids.shootListener = null
  }

  Object.keys(gameStateAsteroids.keys).forEach((k) => {
    gameStateAsteroids.keys[k] = false
  })

  gameStateAsteroids.smallAsteroids.length = 0
  gameStateAsteroids.bigAsteroids.length = 0

  const asteroidDiv = document.getElementById('asteroidDiv')
}
