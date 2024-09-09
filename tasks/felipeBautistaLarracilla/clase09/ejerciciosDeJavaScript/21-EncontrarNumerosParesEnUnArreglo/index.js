/*
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.
*/
// escribe tu función acá
function pares(array) {
    return array.filter(num => num % 2 === 0);
    //filter crea un nuevo arreglo con los elementos que cumplen la condicion

}
// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []