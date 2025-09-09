import { tetraminoMatrixColorsArray } from '../Data & variables/matrix'

export class TetraminoMaker {
  constructor(ctx, matrix, xPos, yPos, level, cellSize) {
    this.ctx = ctx
    this.matrix = matrix
    this.gridBottom = 20
    this.gridWidth = 10
    this.xPos = xPos
    this.yPos = yPos
    this.angle = 0
    this.level = level
    this.cellSize = cellSize

    this.canMove = true
    this.dasDelay = 10
    this.arrDelay = 3
    this.dasCounter = 0
    this.arrCounter = 0
    this.movingLeft = false
    this.movingRight = false
    this.rotating = false
    this.frameCount = 0
  }

  draw() {
    const c = this.ctx
    const cell = this.cellSize

    for (let row = 0; row < 4; row++) {
      for (let column = 0; column < 4; column++) {
        let valor = this.matrix[row][column]

        let x = (this.xPos + column) * cell
        let y = (this.yPos + row) * cell

        if (valor !== 0) {
          c.fillStyle = tetraminoMatrixColorsArray[valor]
          this.ctx.fillRect(x, y, cell, cell)
          this.ctx.strokeStyle = 'black'
          this.ctx.strokeRect(x, y, cell, cell)
        }
      }
    }
  }

  update(mainGrid) {
    this.frameCount++
    if (this.frameCount >= this.level) {
      if (this.canMoveDown(mainGrid)) {
        this.yPos += 1
      } else {
        this.fixToGrid(mainGrid)
        return false
      }
      this.frameCount = 0
    }
    return true
  }

  canMoveHorizontal(dir, mainGrid) {
    // dir = -1 (izquierda) o +1 (derecha)
    for (let row = 0; row < 4; row++) {
      // Si voy a la derecha, miro de derecha a izquierda; a la izquierda, de izq a dcha
      for (
        //Bucle para ver el limite de la figura y detectar colision.
        let col = dir > 0 ? 3 : 0; //Inicio: Si dir es menor a 0 empezará en 0 y si es mayor en 3 (empezará por le inicio o por el final dependiendo de dir)
        dir > 0 ? col >= 0 : col < 4; // si el dir es menor a 0 el BUCLE SEGUIRÁ hasta que col sea igual o mauor a 0 y i dir e menor, seguirá ahsta que col sea inferior a 4.
        col += dir > 0 ? -1 : 1 // Cada vuelta a col se le sumará -1 o 1 dependiendo del valor de dir.
      ) {
        if (this.matrix[row][col] !== 0) {
          const nextX = this.xPos + col + dir
          const nextY = this.yPos + row
          if (nextX < 0 || nextX >= this.gridWidth) return false
          if (mainGrid[nextY] && mainGrid[nextY][nextX] !== 0) return false
          break
        }
      }
    }
    return true
  }

  rotateTetramino() {
    let tMatrix = []
    for (let i = 0; i < this.matrix.length; i++) {
      tMatrix[i] = []
      for (let j = 0; j < this.matrix.length; j++) {
        tMatrix[i][j] = this.matrix[j][i]
      }
      tMatrix[i].reverse()
    }
    this.matrix = tMatrix
  }

  canMoveDown(mainGrid) {
    for (let column = 0; column < 4; column++) {
      for (let row = 3; row >= 0; row--) {
        if (this.matrix[row][column] !== 0) {
          const nextY = this.yPos + row + 1
          const nextX = this.xPos + column
          if (nextY >= this.gridBottom) return false
          if (mainGrid[nextY][nextX] !== 0) return false
          break
        }
      }
    }
    return true
  }
  //!Función para fijar piezas:
  //Función para pasarle al mainGrid la pieza una vez toque fondo. Básicamente una vez llegue al final haremos un barrido que detecte los 1 de la matriz de la pieza y la posición de estos los envíe a la matriz principal para que convierta esas posiciones (que serán celdas) en 1 y a la hora de pintarlo los pinte del color de la pieza.
  fixToGrid(mainGrid) {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.matrix[row][col] !== 0) {
          const gridY = this.yPos + row
          const gridX = this.xPos + col
          mainGrid[gridY][gridX] = this.matrix[row][col]
        }
      }
    }
  }

  move(keys, mainGrid) {
    if (keys['ArrowLeft']) {
      if (!this.movingLeft) {
        if (this.canMoveHorizontal(-1, mainGrid)) this.xPos--
        this.movingLeft = true
        this.dasCounterLeft = 0
        this.arrCounterLeft = 0
      } else {
        this.dasCounterLeft++
        if (this.dasCounterLeft > this.dasDelay) {
          this.arrCounterLeft++
          if (this.arrCounterLeft >= this.arrDelay) {
            if (this.canMoveHorizontal(-1, mainGrid)) this.xPos--
            this.arrCounterLeft = 0
          }
        }
      }
    } else {
      this.movingLeft = false
      this.dasCounterLeft = 0
      this.arrCounterLeft = 0
    }

    if (keys['ArrowRight']) {
      if (!this.movingRight) {
        if (this.canMoveHorizontal(1, mainGrid)) this.xPos++
        this.movingRight = true
        this.dasCounterRight = 0
        this.arrCounterRight = 0
      } else {
        this.dasCounterRight++
        if (this.dasCounterRight > this.dasDelay) {
          this.arrCounterRight++
          if (this.arrCounterRight >= this.arrDelay) {
            if (this.canMoveHorizontal(1, mainGrid)) this.xPos++
            this.arrCounterRight = 0
          }
        }
      }
    } else {
      this.movingRight = false
      this.dasCounterRight = 0
      this.arrCounterRight = 0
    }
    if (keys['ArrowUp']) {
      if (!this.rotating) {
        this.rotateTetramino()
        for (let row = 0; row < 4; row++) {
          for (let col = 0; col < 4; col++) {
            if (this.matrix[row][col] !== 0) {
              //Recorremos las celdas de la matriz y buscamos las que estén llenas, que serán el tetramino
              const newX = this.xPos + col // anotamos en la nueva variable la posición de la celda llena en la linea horizontal
              const newY = this.yPos + row //lo mismo pero en la linea vertical.

              if (newX < 0) this.xPos++ // Si sale por el ladod erecho del grid le sumamos uno para desplazarlo hacia dentro
              if (newX >= this.gridWidth) this.xPos-- // lo mismo pero por el lado izq
              if (newY >= this.gridBottom) this.yPos-- // lom ismo pero por debajo
            }
          }
        }
        this.rotating = true
        this.arrCounterRot = 0
      } else {
        this.arrCounterRot++
        if (this.arrCounterRot >= this.arrDelay) this.arrCounterRot = 0
        this.draw()
      }
    } else {
      this.rotating = false
      this.arrCounterRot = 0
    }

    if (keys['ArrowDown']) {
      if (this.canMoveDown(mainGrid)) {
        this.yPos += 1
      } else {
        this.fixToGrid(mainGrid)
        return false
      }
    }
  }
}
