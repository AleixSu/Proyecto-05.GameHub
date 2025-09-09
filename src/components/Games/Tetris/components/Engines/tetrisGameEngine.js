import { gamesScreenCreator } from '../../../../HubMenu/hubMenu'
import { gameStateTetris, tetraminoArray } from '../Data & variables/variables'
import { TetrisPreviewGrid } from '../Objects/tetraminoPreviewClass'
import { TetraminoMaker } from '../Objects/tetraminosClass'
import { TetrisGrid } from '../Objects/tetrisGridClass'
import { createTetraminoArray } from './tetraminoPreviewEngine'
import { tetrisLoopEngine } from './tetrisLoopEngine'

export const tetrisGameEngine = (elementoPadre, elementoAccesorio) => {
  const canvas = document.createElement('canvas')
  elementoPadre.appendChild(canvas)

  const previewH3 = document.createElement('h3')
  previewH3.textContent = 'Next Piece:'
  elementoAccesorio.appendChild(previewH3)

  const canvasPreviewDiv = document.createElement('div')
  elementoAccesorio.appendChild(canvasPreviewDiv)
  const canvasPreview = document.createElement('canvas')
  canvasPreviewDiv.appendChild(canvasPreview)

  const levelh3 = document.createElement('h3')
  levelh3.textContent = 'Level:'
  elementoAccesorio.appendChild(levelh3)
  const levelData = document.createElement('h5')
  levelData.id = 'levelData'
  levelData.textContent = gameStateTetris.level
  elementoAccesorio.appendChild(levelData)
  const linesh3 = document.createElement('h3')
  linesh3.textContent = 'Lines:'
  elementoAccesorio.appendChild(linesh3)
  const linesData = document.createElement('h5')
  linesData.id = 'lineData'
  linesData.textContent = gameStateTetris.lineCounter
  elementoAccesorio.appendChild(linesData)
  const scoreh3 = document.createElement('h3')
  scoreh3.textContent = 'Score:'
  elementoAccesorio.appendChild(scoreh3)
  const scoreData = document.createElement('h5')
  scoreData.id = 'scoreData'
  scoreData.textContent = gameStateTetris.playerScore
  elementoAccesorio.appendChild(scoreData)

  const H = elementoPadre.offsetHeight
  const W = elementoPadre.offsetWidth
  const HA = elementoAccesorio.offsetHeight
  const WA = elementoAccesorio.offsetWidth

  const columns = 10
  const rows = 20

  const cell = Math.floor(Math.min(W / columns, H / rows))
  const cellA = Math.floor(Math.min(WA / columns, HA / rows))

  canvas.height = rows * cell
  canvas.width = columns * cell

  canvasPreview.height = 4 * cell
  canvasPreview.width = 4 * cell

  const ctx = canvas.getContext('2d')
  const ctxPreview = canvasPreview.getContext('2d')

  //! Llamamos a clase tetrisGrid para crear la tabla

  const tetrisBoard = new TetrisGrid(
    rows,
    columns,
    ctx,
    canvas.height,
    canvas.width,
    cell
  )

  createTetraminoArray()

  const firstTetramino = new TetraminoMaker(
    ctx,
    tetraminoArray[0],
    3,
    0,
    gameStateTetris.frameratePerLevel,
    cell
  )

  const tetraminoPreviewGrid = new TetrisPreviewGrid(
    ctxPreview,
    canvasPreview.height,
    canvasPreview.width,
    cellA
  )

  tetraminoPreviewGrid.tetraminoPreview(tetraminoArray[1])

  tetrisLoopEngine(ctx, tetrisBoard, firstTetramino, tetraminoPreviewGrid)
}
