/*
Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
*/
// escribe tu función acá
function numerosAPalabras(array) {
    // Mapeo de números a palabras
    const palabras = [
        "cero", "uno", "dos", "tres", "cuatro",
        "cinco", "seis", "siete", "ocho", "nueve"
    ];//Creamos un arreglo palabras donde cada índice corresponde a su número respectivo en palabras.

    // Convertir cada número en su correspondiente palabra
    return array.map(num => palabras[num]);
    //Usamos map para recorrer el arreglo de números.
    //Para cada número (num), usamos palabras[num] para obtener su versión en palabras y crear un nuevo arreglo con estos valores.
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho","nueve"]