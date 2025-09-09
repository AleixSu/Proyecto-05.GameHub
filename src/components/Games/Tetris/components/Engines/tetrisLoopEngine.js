import { gameStateTetris, tetraminoArray } from '../Data & variables/variables'
import { TetraminoMaker } from '../Objects/tetraminosClass'
import { checkIfLevelUp } from './levelUpEngine'
import { stopTetrisGame } from './stopGameEngine'
import { createTetraminoArray } from './tetraminoPreviewEngine'

export const tetrisLoopEngine = (context, grid, tetramino, gridPreview) => {
  window.addEventListener(
    'keydown',
    (e) => (gameStateTetris.keys[e.key] = true)
  )
  window.addEventListener('keyup', (e) => (gameStateTetris.keys[e.key] = false))

  let gameLoopTetris = () => {
    tetramino.move(gameStateTetris.keys, grid.mainMatrix)
    gridPreview.tetraminoPreview(tetraminoArray[1])

    if (tetramino.canMoveDown(grid.mainMatrix)) {
      tetramino.update(grid.mainMatrix)
    } else {
      tetramino.fixToGrid(grid.mainMatrix)
      tetraminoArray.shift()
      createTetraminoArray()

      if (grid)
        if (grid.check4Losers()) {
          stopTetrisGame()
          return
        }

      grid.check4Lines()
      tetramino = new TetraminoMaker(
        context,
        tetraminoArray[0],
        3,
        0,
        gameStateTetris.frameratePerLevel,
        grid.cellSize,
        gameStateTetris.frameratePerLevel
      )
      checkIfLevelUp(gameStateTetris)
    }

    grid.draw(context)
    tetramino.draw(context)

    gameStateTetris.animationId = requestAnimationFrame(gameLoopTetris)
  }
  gameLoopTetris()
}
