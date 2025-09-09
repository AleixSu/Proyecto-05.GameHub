export const checkIfWinner = (winningSequences, playerOneCells) => {
  return winningSequences.some((sequence) =>
    sequence.every((number) => playerOneCells.includes(number))
  )
}
