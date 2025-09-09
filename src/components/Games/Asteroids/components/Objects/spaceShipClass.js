import { Bullet } from './bulletsClass'

//! Creamos el molde de la nave con los parámetros que usaremos a la hora de dibujarla, darle movilidad y updatearla.
export class SpaceShip {
  constructor(x, y, color, ctx, W, H) {
    //Asignamos la posición inicial, el color y el contexto donde dibujaremos la nave
    this.x = x
    this.y = y
    this.W = W
    this.H = H
    this.color = color
    this.ctx = ctx

    //Creamos las físicas de la nave:
    this.angle = 0 //Ángulo de rotación inicial
    this.rotSpeed = 0.09 // Velocidad de rotación
    this.velX = 0 //Velocidad inicial en X y en Y
    this.velY = 0
    this.accel = 0.6 // Cuanto se acelera por frame hasta llegar a la max.Speed
    this.maxSpeed = 8
    this.friction = 0.99 // Valor que usaremos para generar la fricción de la nave y el frenado. Se Se múltiplicará cada frame este número por la velocidad que tenga la nave hasta llegar a 0.

    // Dimensiones de la nave:
    this.length = 60 // Estes dos datos hacen referencia al height del objeto creado
    this.wingSpan = 40 // y al width.
    // Creamos un array donde guardaremos las balas que queramos crear para que despues en draw un forEach recorra el array y sepa que y cuantas pintar.
    this.bullets = [] //Hará la función de cargador. Lo cargarmos a traves de .push más adelante en shoot()
  }
  //! Método para dibujar la nave
  draw() {
    const c = this.ctx // Asignamos una variable corta y rápida al contexto
    const scale = 0.6 // Variable para reescalar la nave a nuestro gusto sin tener que cambiar dato por dato

    //todo Alteramos las coordenadas del canvas para dibujar la nave bien orientada.
    c.save() // Guardamos el estado actual del canvas antes de que se modifique
    c.translate(this.x, this.y) // modifica els istema de cordenadas en horizontal y vertical para que la info que se pase con this.x y y sea la posición actual de la nave.
    c.rotate(this.angle) // modifica el sistema de coordenadas rotándolo para que "arriba" coincida con al dirección real de la nave.

    //Es decir, la nave siempre se dibuja igual pero con las coordenadas del canvas alteradas para que se vea en la posición correcta y orientada.

    //Después con restore() dejamos el canvas como estaba para que otros objetos no se vean afectados.

    //todo Pintamos el cuerpo de la nave
    c.beginPath() // destapamos el lápiz
    c.moveTo(0, -this.length * 0.6 * scale) // apoyamos el lápiz y empezamos a pintar desde la punta de la nave
    c.lineTo(this.length * 0.2 * scale, 0) // desde el moveTo pintamos el lado derecho de la nave.
    c.lineTo(0, this.length * 0.6 * scale) // seguimos por la cola
    c.lineTo(-this.length * 0.2 * scale, 0) // Pintamos el lado izq llegando a la punta
    c.closePath() //levantamos y tapamos el lapiz
    c.fillStyle = this.color // Escogemos el color del cual lo rellenaremos
    c.fill() // Lo rellenamos
    c.strokeStyle = 'black' //Elegimos el color de a linea del borde del dibujo
    c.lineWidth = 2 * scale // Escogemos el grosor de esa linae
    c.stroke() // Lo pintamos

    //todo Pintamos las alas traseras
    c.beginPath() // El mismo concepto que con el cuerpo
    c.moveTo(this.length * 0.1 * scale, this.length * 0.2 * scale)
    c.lineTo(this.wingSpan * scale, this.length * 0.3 * scale)
    c.lineTo(this.wingSpan * scale, this.length * 0.4 * scale)
    c.lineTo(this.length * 0.1 * scale, this.length * 0.35 * scale)
    c.closePath()
    c.fill()
    c.stroke()

    c.beginPath() // La otra ala trasera serán los mismo valores pero empezando el negativo.
    c.moveTo(-this.length * 0.1 * scale, this.length * 0.2 * scale)
    c.lineTo(-this.wingSpan * scale, this.length * 0.3 * scale)
    c.lineTo(-this.wingSpan * scale, this.length * 0.4 * scale)
    c.lineTo(-this.length * 0.1 * scale, this.length * 0.35 * scale)
    c.closePath()
    c.fill()
    c.stroke()

    //todo Pintamos la ventana
    c.fillStyle = 'rgba(141, 150, 156, 0.8)'
    c.fillRect(-3 * scale, -this.length * 0.25 * scale, 6 * scale, 18 * scale)

    //todo Usamos restore
    c.restore() // Para dejar el canvas como estaba para que otros objetos no se vean afectados en la alteraciónd e las coordenadas del canvas

    this.bullets.forEach((bullet) => bullet.draw(this.ctx))
  }

  //! Creamos el método move() para mover la nave
  //todo Funcionalidad a las teclas
  move(keys) {
    if (keys['ArrowLeft']) this.angle -= this.rotSpeed //Flechas izq resta RADIANES al ángulo de la nave para rotarla a la izq.
    if (keys['ArrowRight']) this.angle += this.rotSpeed //Lo mismo pero sumando y rotando hacia la der.
    if (keys['ArrowUp']) {
      //Con la siguiente formula lo que hacemos es convertir cada ángulo en el que está apuntando la nave según la posición en un vector de dirección dado que la nave siempre avanza hacia donde apunta.

      this.velX += Math.cos(this.angle - Math.PI / 2) * this.accel
      this.velY += Math.sin(this.angle - Math.PI / 2) * this.accel

      // Con el Math.cos claculamos el el componente X del vector y con el Math.sin el componente Y del vector. Al calcular esto conseguimos movernos en el ángulo que queramos. Al usar this.angle estamos calculando el ángulo en el que apunta la nave para que vaya hacia adelante.

      //El problema de "canvas" es que el número 0 cuando hablamos de ángulos es hacia la derecha y si no lo recalculasemos la nave se movería hacia la derecha cuando apretasemos la tecla. Esto lo corregimos restando  Math.PI/2 que equivale a 90 grados.

      //Ademas, le multiplicamos la aceleración que es 0,6 por frame hasta que llegue a maxSpeed.
    }

    //todo aplicamos frenado, velocidad y máx velocidad:
    // Múltiplicamos la friccion que es un 0,X para que frene tanto al acelerar como al soltar la tecla. Aquí al multiplicarlo directamente con la velocidad hace que el número disminuya.
    this.velX *= this.friction
    this.velY *= this.friction

    // Creamos la variable de speed: La fórmula calcula la longitud de un vector usando el teorema de pitágoras usando el valor de la velocidad X y la velocidad Y.

    const speed = Math.hypot(this.velX, this.velY)
    //Y lo capamos para que la velocidad no sea infinta aplicando un codicional de que si el valor es superior al establecido en el constructor mediante maxSpeed esta se bloquee.
    if (speed > this.maxSpeed) {
      //A continuación recalculamos para que si al hacer el teorema de pitagoras anterior el resultado es mayor a 8(this.maxSpeed) se aplique el factor de reducción para limitarlo:
      const factor = this.maxSpeed / speed
      this.velX *= factor
      this.velY *= factor

      //Ejemplo numérico:
      //*                           velX = 6, velY = 8
      //*               speed = √(6² + 8²) = √(36 + 64) = √100 = 10
      // Queremos que maxSPeed sea 8:
      //*                          factor = 8 / 10 = 0.8
      // Y reducimos la velocidad:
      //*                           this.velX *= factor
      //*                           this.velY *= factor
    }

    // Con esto actualizamos la posición cada vez que se llame a move()
    this.x += this.velX
    this.y += this.velY

    // Y por último creamos el efecto de que si sale por un lado aparece por el otro:
    if (this.x < 0) this.x = this.W
    if (this.x > this.W) this.x = 0
    if (this.y < 0) this.y = this.H
    if (this.y > this.H) this.y = 0
  }

  shoot() {
    const bulletSpeed = 15
    // Definimos la posición inicial donde aparecera la bala (punta de nave)
    const bulletX =
      this.x + Math.cos(this.angle - Math.PI / 2) * this.length * 0.6
    const bulletY =
      this.y + Math.sin(this.angle - Math.PI / 2) * this.length * 0.6

    // Definimos la dirección de la bala. Hacia el mismo lado donde apunte la nave
    const velX = Math.cos(this.angle - Math.PI / 2) * bulletSpeed
    const velY = Math.sin(this.angle - Math.PI / 2) * bulletSpeed

    // Ponemos un máximo de balas disparadas en pantalla.
    if (this.bullets.length < 10) {
      this.bullets.push(new Bullet(bulletX, bulletY, velX, velY))
    }
  }
  // actualizamos las bullets
  updateBullets() {
    this.bullets.forEach((bullet) => bullet.update(this.W, this.H)) // Aqui recorremos el array de this.bullets para ver cuantas hay activas para ir actualizando su posición.
    this.bullets = this.bullets.filter((bullet) => bullet.isActive) //Una vez actualizadas hacemos un filtro para sacar las que estan desactivadas para que el array no crezca de manera infinita.
  }
}
