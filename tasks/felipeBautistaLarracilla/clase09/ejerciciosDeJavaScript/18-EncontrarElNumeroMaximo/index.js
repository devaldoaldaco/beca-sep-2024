/*
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.
*/
// escribe tu función acá
function max(numeros) {
    if (numeros.length === 0) {
        return undefined; // Retorna undefined si el arreglo está vacío
    }

    let maxNumero = numeros[0]; // Inicializamos con el primer elemento

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maxNumero) {
            maxNumero = numeros[i]; // Actualizamos maxNumero si encontramos un número mayor
        }
    }

    return maxNumero;
}

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
