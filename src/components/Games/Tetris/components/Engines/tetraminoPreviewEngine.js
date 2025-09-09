import { tetraminoMatrixArray } from '../Data & variables/matrix'
import { tetraminoArray } from '../Data & variables/variables'
import { newTetramino } from './newTetramino'

export const createTetraminoArray = () => {
  while (tetraminoArray.length < 2) {
    tetraminoArray.push(newTetramino(tetraminoMatrixArray))
  }
  return tetraminoArray
}
