/*Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
*/
// escribe tu función acá
function numAsteriscos(matriz) {
    let contador = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === '*') {
                contador++;
            }
        }
    }
    return contador;
}

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
]))
// 5