/*
Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).
*/
// escribe tu función acá
function terminanConS(array) {
    return array.filter(palabra => palabra.toLowerCase().endsWith('s'));
    //filter crea un nuevo arreglo conlos elementos que pasan la prueba
    //la funcion toma cada palabra del arreglo
    //.toLowerCase() convierte cada palabra en minuscula
    //.endstWith('s') verifica si la palabra convertida termina con s
}
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []