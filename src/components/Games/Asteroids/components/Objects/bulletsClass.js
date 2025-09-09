export class Bullet {
  constructor(x, y, velX, velY) {
    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
    this.radius = 2 // Tamaño de la bala
    this.isActive = true // Lo usarmeos para que cuando salga del mapa se vuevla false y se elimine del array para que se deje de dibujar.
  }

  update(W, H) {
    this.x += this.velX
    this.y += this.velY

    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
      this.isActive = false
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.fill()
  }
}
