import { tetraminoMatrixColorsArray } from '../Data & variables/matrix'

export class TetrisPreviewGrid {
  constructor(ctx, canvasHeight, canvasWidth, cellSize) {
    this.ctx = ctx
    this.height = canvasHeight
    this.width = canvasWidth
    this.cellSize = cellSize
    this.rows = 4
    this.columns = 4
    this.mainPreviewMatrix = Array.from({ length: this.rows }, () =>
      Array(this.columns).fill(0)
    )
  }

  draw() {
    const c = this.ctx
    const cell = this.cellSize * 2
    c.clearRect(0, 0, this.width, this.height)

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        let valor = this.mainPreviewMatrix[row][column]

        let x = column * cell
        let y = row * cell

        if (valor !== 0) {
          // Pintar celda blanca
          c.fillStyle = tetraminoMatrixColorsArray[valor]
          c.fillRect(x, y, cell, cell)

          // Dibujar borde rojo solo en esta celda
          c.strokeStyle = 'black'
          c.lineWidth = 1
          c.strokeRect(x, y, cell, cell)
        }
      }
    }
  }

  tetraminoPreview(nextTetramino) {
    this.mainPreviewMatrix = Array.from({ length: this.rows }, () =>
      Array(this.columns).fill(0)
    )
    // Calcular offsets para centrar el tetramino
    const offsetX = Math.floor((this.columns - nextTetramino[0].length) / 2)
    const offsetY = Math.floor((this.rows - nextTetramino.length) / 2)

    // Copiar la pieza a la matriz de preview
    for (let row = 0; row < nextTetramino.length; row++) {
      for (let col = 0; col < nextTetramino[row].length; col++) {
        if (nextTetramino[row][col] !== 0) {
          this.mainPreviewMatrix[row + offsetY][col + offsetX] =
            nextTetramino[row][col]
        }
      }
    }
    this.draw()
  }
}
