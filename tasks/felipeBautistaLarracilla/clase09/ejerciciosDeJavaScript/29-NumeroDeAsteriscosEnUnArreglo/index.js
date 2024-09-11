/*
Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:
*/
// escribe tu función acá
function numAsteriscos(arreglo) {
    let contador = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === '*') {
            contador++;
        }
    }

    return contador;
}


// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
