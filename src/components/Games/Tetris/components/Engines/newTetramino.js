export const newTetramino = (array) => {
  const matrix = Object.values(array)

  const randomIndex = Math.floor(Math.random() * matrix.length)

  return matrix[randomIndex].map((row) => [...row])
}

//En este caso usamos el constructor global Object porque lo que buscamos es poder usar en ese objeto con las lógicas de un array por lo tanto convertimos el objeto en un array mediante Object.values y a partir de ahí ya podemos usar la lógica .length como si fuese un array. Recordamos que también existe el object.keys que en este el caso del arrays de matrix nos daría matrix1, matrix2, matrix3, etc... y también existe object.entries(array) quenos daría un array de arrays que cada subarray sería [clave, valor]. En el caso del array de tetraminos sería el siguiente:

/* [
                                                  ['matrix1', [
                                                    [0,0,0,0],
                                                    [1,1,1,1],
                                                    [0,0,0,0],
                                                    [0,0,0,0]
                                                  ]],
                                                  ['matrix2', [
                                                    [0,0,0,0],
                                                    [0,1,1,0],
                                                    [0,1,1,0],
                                                    [0,0,0,0]
                                                  ]],
                                                  etc...
                                                ] */
