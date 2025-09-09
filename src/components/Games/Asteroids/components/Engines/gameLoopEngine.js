// Creamos un addeventListener para que si apretamos las teclas se de el valor de true y si la soltamos se de el valor de false. Esto es para poder pulsar varias teclas simultáneamente para girar y acelerar a la vez ademas de para evitar la función que trae el SO del delay que se crea entre la primera señal de apretar la tecla y la segunda que hace entender que la tecla se mantiene apretada.

import { gameStateAsteroids } from '../Data & variables/variables'
import {
  BigAsteroid,
  randomSpawnPosition,
  SmallAsteroid
} from '../Objects/asteroidsClass'
import { checkCollision } from './checkCollisionsEngine'

window.addEventListener(
  'keydown',
  (e) => (gameStateAsteroids.keys[e.key] = true)
)
window.addEventListener(
  'keyup',
  (e) => (gameStateAsteroids.keys[e.key] = false)
)
//Creamos la función para que se refresque continuamente el canvas según apretamos las teclas. Cada vez que se aprete una de las teclas asignadas en el move() se refrescara el frame haciendo las siguientes acciones:

//todo Frame setTimer
//Timer para evitar usar setTimer y que quede más limpio el código. Nos aprovecharemos del conteo de frames. Como gameloop se dispara cada frame haremos que sume 1 en cada frame a una variable. Esto hará que tarde 1 segundo en llegar a 60 frames. A partir de aquí podemos usar esa info para crear un timer que esté dentro de gameLoop, sea más limpio y menos molesto a la hora de cancelar el frameRate:

let smallAsteroidsTimer = 0 //sumo 1 cada frame que pase
const smallAsteroidsFrameRateCreation = 90 // cuando pasen 90 frames se creará un asteroide (1.5s)
let bigAsteroidsTimer = 0
const bigAsteroidsFrameRateCreation = 120

export const gameLoop = (
  context,
  figure,
  W,
  H,
  arraySmallAsteroids,
  arrayBigAsteroids
) => {
  if (!gameStateAsteroids.isRunning) {
    return
  }

  context.clearRect(0, 0, W, H) // limpiará el canvas. Cuando se trata de un juego donde hay varios objetos en pantalla el clearRect siempre se hará dentro del gameLoop, nunca en un objeto individual.

  figure.updateBullets()
  figure.move(gameStateAsteroids.keys) //actualizará la posición de la nave
  figure.draw() // dibujara la nave en la posición actualizada
  arraySmallAsteroids.forEach((asteroid) => asteroid.update()) // dibujamos y actualizamos cada asteroide creado en el array que le entregamos
  arrayBigAsteroids.forEach((asteroid) => asteroid.update()) // dibujamos y actualizamos cada

  smallAsteroidsTimer++
  if (smallAsteroidsTimer >= smallAsteroidsFrameRateCreation) {
    if (gameStateAsteroids.smallAsteroids.length < 10) {
      const spawn = randomSpawnPosition(W, H)
      const speed = Math.random() * 2 + 1
      gameStateAsteroids.smallAsteroids.push(
        new SmallAsteroid(
          spawn.x,
          spawn.y,
          'white',
          speed,
          context,
          figure.x,
          figure.y
        )
      )
    }
    smallAsteroidsTimer = 0
  }
  bigAsteroidsTimer++
  if (bigAsteroidsTimer >= bigAsteroidsFrameRateCreation) {
    if (gameStateAsteroids.bigAsteroids.length < 3) {
      const spawn = randomSpawnPosition(W, H)
      const speed = Math.random() * 2 + 1
      gameStateAsteroids.bigAsteroids.push(
        new BigAsteroid(
          spawn.x,
          spawn.y,
          'white',
          speed,
          context,
          figure.x,
          figure.y
        )
      )
    }
    bigAsteroidsTimer = 0
  }

  //Creamos un bule que recorra el array del final hacia adelante restando en vez de sumando porque al usar el splice el índice del contenido del array varía y provocaría un mal funcionamiento del bucle ya que saltaría algunos índices.
  for (let i = gameStateAsteroids.smallAsteroids.length - 1; i >= 0; i--) {
    const a = gameStateAsteroids.smallAsteroids[i]
    if (
      // Si la posicion de a está fuera de los márgenes -300
      a.xPos < -300 ||
      a.xPos > W + 300 ||
      a.yPos < -300 ||
      a.yPos > H + 300
    ) {
      gameStateAsteroids.smallAsteroids.splice(i, 1) // elimina solo ese índice
    }
  }

  for (let i = gameStateAsteroids.bigAsteroids.length - 1; i >= 0; i--) {
    const a = gameStateAsteroids.bigAsteroids[i]
    if (
      // Si la posicion de a está fuera de los márgenes -300
      a.xPos < -300 ||
      a.xPos > W + 300 ||
      a.yPos < -300 ||
      a.yPos > H + 300
    ) {
      gameStateAsteroids.bigAsteroids.splice(i, 1) // elimina solo ese índice
    }
  }

  checkCollision(
    figure,
    gameStateAsteroids.smallAsteroids,
    gameStateAsteroids.bigAsteroids,
    figure.bullets,
    context
  )
  gameStateAsteroids.animationId = requestAnimationFrame(() =>
    gameLoop(context, figure, W, H, arraySmallAsteroids, arrayBigAsteroids)
  )
}
