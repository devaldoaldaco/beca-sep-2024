/*Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).
*/
// escribe tu función acá
function empiezanConA(array) {
    return array.filter(palabra => palabra.toLowerCase().startsWith('a'));
    //filter crea un nuevo arreglo conlos elementos que pasan la prueba
    //la funcion toma cada palabra del arreglo
    //.toLowerCase() convierte cada palabra en minuscula
    //.startWith('a') verifica si la palabra convertida empieza con a
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []