//Variable donde guardaremos todos los stats del juego para que sea mucho más facil gestionarlos y asegurarnos que a lo largo del codigo se usasn y recorren los mismos arrays y variables sin crearse duplicados ni nada.

export const gameStateAsteroids = {
  animationId: null,
  ship: null,
  ctx: null,
  keys: {},
  smallAsteroids: [], //Array de asteroides pequeños que llenamos para crearlos
  bigAsteroids: [], //Array de asteroides grandes que llenamos para crearlos
  bullets: [], //Array de balas que llenamos para crearlas
  shootListener: null, // Variable que usamos para detectar si se ha asociado el eventlistener de disparar anteriormente y poder eliminarlo o no para que no se vayan duplicado y creando bugs.
  isRunning: false,
  playerScore: 0,
  scoreList: JSON.parse(localStorage.getItem('asteroidScoreList')) || []
}
