import { tetraminoMatrixColorsArray } from '../Data & variables/matrix'
import { gameStateTetris } from '../Data & variables/variables'
import { multiplierEngine } from '../Engines/multiplierEngine'

export class TetrisGrid {
  constructor(rows, columns, ctx, canvasHeight, canvasWidth, cellSize) {
    this.height = canvasHeight
    this.width = canvasWidth
    this.rows = rows
    this.columns = columns
    this.cellSize = cellSize
    this.ctx = ctx
    this.mainMatrix = Array.from({ length: this.rows }, () =>
      Array(this.columns).fill(0)
    )
    this.multiplier = 0
  }
  draw() {
    const c = this.ctx
    const cell = this.cellSize
    c.clearRect(0, 0, this.width, this.height)

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        let valor = this.mainMatrix[row][column]

        let x = column * cell //Localizamos donde pintar cada vez a partir de la columna en la que jugamos y multiplicandolo por la celda para movernos x celdas.
        let y = row * cell

        if (valor === 0) {
          c.fillStyle = 'transparent'
        } else {
          c.fillStyle = tetraminoMatrixColorsArray[valor]
        }

        this.ctx.fillRect(x, y, cell, cell) // En cada vuelta del bucle pintamos una celda variando la posición vertical y horizontal. El W y el H es la medida de la celda.
        this.ctx.strokeStyle = 'transparent'
        this.ctx.strokeRect(x, y, cell, cell)
      }
    }
  }
  check4Lines() {
    for (let row = 0; row < this.mainMatrix.length; row++) {
      let line = this.mainMatrix[row]
      let fullLine = true

      for (let i = 0; i < line.length; i++) {
        if (line[i] === 0) {
          fullLine = false
          break
        }
      }
      if (fullLine) {
        this.mainMatrix.splice(row, 1)
        this.mainMatrix.unshift(Array(this.columns).fill(0))
        this.multiplier++
        gameStateTetris.lineCounter += 1
        const linesData = document.getElementById('lineData')
        linesData.textContent = gameStateTetris.lineCounter
      }
    }
    if (this.multiplier !== 0) {
      multiplierEngine(this.multiplier, gameStateTetris)
    }

    this.multiplier = 0
  }

  check4Losers() {
    for (let cell = 0; cell < this.mainMatrix[0].length; cell++) {
      let cellrow = this.mainMatrix[0][cell]
      if (cellrow !== 0) {
        return true
      }
    }
    return false
  }
}
