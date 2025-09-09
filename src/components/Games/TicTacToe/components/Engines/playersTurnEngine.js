export const playersTurnSelector = (array) => {
  let turnNum = array.filter((falses) => falses === false).length

  return turnNum % 2 === 0
}
