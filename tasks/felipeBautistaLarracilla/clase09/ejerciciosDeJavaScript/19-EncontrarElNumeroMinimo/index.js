/*
Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

Nota: Intentarlo hacer sin el método Math.min de JavaScript.
*/
// escribe tu función acá
function min(numeros) {
    if (numeros.length === 0) {
        return undefined; // Retorna undefined si el arreglo está vacío
    }

    let minNumero = numeros[0]; // Inicializamos con el primer elemento

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < minNumero) {
            minNumero = numeros[i]; // Actualizamos minNumero si encontramos un número menor
        }
    }

    return minNumero;
}
// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2
