//!SMALL ASTEROID CLASS
export class SmallAsteroid {
  constructor(xPos, yPos, color, speed, ctx, targetX, targetY, W, H) {
    this.xPos = xPos
    this.yPos = yPos
    this.color = color
    this.speed = speed
    this.ctx = ctx
    this.radius = 15
    this.angle = 0 // le damos un ángulo de inicio
    this.rotationSpeed = (Math.random() - 0.5) * 0.05 // y una velocidad de rotación. Ese math random - 0.5 hará que el resultado sea positivo o negativo para que el asteroide gire aleatoriamente haica la derecha o la izq.

    //Calculamos el vector de dirección del asteroide usando la nave como referencia:
    const dx = targetX - xPos // calculamos la posición X de la nave
    const dy = targetY - yPos // y la Y
    const distance = Math.sqrt(dx * dx + dy * dy) // creamos un vector que apunte al a nave mediante X e Y.
    this.velX = (dx / distance) * this.speed // Calculamos la velocidad en X
    this.velY = (dy / distance) * this.speed // Y la velocidad en Y. Esto se calcula para normalizar el vector de velocidad del asteroide. Si usasemos el que hemos sacado de conseguir la posición de la nave, como cada distancia sería diferente la velocidad tambíen variraría. (PUede ser interesante para otras mecánicas)

    this.vertices = Math.floor(Math.random() * 5) + 5 // entre 5 y 10
    this.offset = []

    for (let i = 0; i < this.vertices; i++) {
      this.offset.push(Math.random() * 0.4 + 0.8) // entre 0.8 y 1.2
    }
  }
  draw() {
    const c = this.ctx
    c.save()
    c.translate(this.xPos, this.yPos) // Una vez más. Esto hace que las coordenadas 0,0 del canvas sean el centro de nuestro asteroide para que dibujemos lo que dibujemos sea a partir del centro del asteroide. y luego con el restore le devolvmeos al canvas su centro original para que este cambio no afecte a otros objetos.
    c.rotate(this.angle)
    c.strokeStyle = this.color
    c.lineWidth = 2

    c.beginPath()

    for (let i = 0; i < this.vertices; i++) {
      const angle = ((Math.PI * 2) / this.vertices) * i
      const radiusWithOffset = this.radius * this.offset[i]
      const px = Math.cos(angle) * radiusWithOffset
      const py = Math.sin(angle) * radiusWithOffset

      if (i === 0) {
        c.moveTo(px, py)
      } else {
        c.lineTo(px, py)
      }
    }

    c.closePath()
    c.stroke()
    c.restore()
  }
  update() {
    this.xPos += this.velX
    this.yPos += this.velY

    this.angle += this.rotationSpeed
    this.draw()
  }
}

//!BIG ASTEROID CLASS
export class BigAsteroid {
  constructor(xPos, yPos, color, speed, ctx, targetX, targetY, W, H) {
    this.xPos = xPos
    this.yPos = yPos
    this.color = color
    this.speed = speed
    this.ctx = ctx
    this.radius = 50
    this.angle = 0
    this.rotationSpeed = (Math.random() - 0.5) * 0.05

    const dx = targetX - xPos
    const dy = targetY - yPos
    const distance = Math.sqrt(dx * dx + dy * dy)
    this.velX = (dx / distance) * this.speed
    this.velY = (dy / distance) * this.speed

    this.vertices = Math.floor(Math.random() * 5) + 5
    this.offset = []

    for (let i = 0; i < this.vertices; i++) {
      this.offset.push(Math.random() * 0.4 + 0.8)
    }
  }
  draw() {
    const c = this.ctx
    c.save()
    c.translate(this.xPos, this.yPos)
    c.rotate(this.angle)
    c.strokeStyle = this.color
    c.lineWidth = 4

    c.beginPath()

    for (let i = 0; i < this.vertices; i++) {
      const angle = ((Math.PI * 2) / this.vertices) * i
      const radiusWithOffset = this.radius * this.offset[i]
      const px = Math.cos(angle) * radiusWithOffset
      const py = Math.sin(angle) * radiusWithOffset

      if (i === 0) {
        c.moveTo(px, py)
      } else {
        c.lineTo(px, py)
      }
    }

    c.closePath()
    c.stroke()
    c.restore()
  }
  update() {
    this.xPos += this.velX
    this.yPos += this.velY

    this.angle += this.rotationSpeed
    this.draw()
  }
}

//todo Función para que los asteroides aparezcan fuera del canvas:
export const randomSpawnPosition = (W, H) => {
  const side = Math.floor(Math.random() * 4) // Asignamos a "side" un valor random del 0 al 3
  let x, y // cuadno declaramos una variable de esta forma sin igual y con más de una lo que estamos haciendo es declarar dos variables undefined a las que les daremos un valor más adelante.

  //! SWITCH:

  // Se usa ocmo un if else pero más limpio cuando hay muchas opciones. Se usa "case": En caso de 0 pasa X, en caso de 1 pasa Y, en caso de 2 pasa Z y etc...
  switch (
    side // Aquí dentro es donde asignaremos el valor a X e Y del let anterior
  ) {
    case 0: // Aparece en el lado izquierdo del mapa
      x = -200 //a menos 200px del borde izq
      y = Math.random() * H // Y a una altura random porque da igual
      break
    case 1:
      x = W + 200 // Lo mismo pero en el lado derecho
      y = Math.random() * H
      break
    case 2:
      x = Math.random() * W
      y = -200 // Lo mismo pero arriba
      break
    case 3:
      x = Math.random() * W
      y = H + 200 // Lo mismo pero abajo
      break
  }
  return { x, y } // Nos devuelve la posición x e y generadas.
}
