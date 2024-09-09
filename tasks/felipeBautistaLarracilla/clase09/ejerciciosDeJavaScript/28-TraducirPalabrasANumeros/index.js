/*
Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.
*/
// escribe tu función acá
function palabrasANumeros(array) {
    // Mapeo de palabras a números
    const mapaPalabrasANumeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    // Convertir cada palabra a su correspondiente número, o -1 si no es válida
    array = array.map(palabra => mapaPalabrasANumeros[palabra.toLowerCase()] !== undefined
        ? mapaPalabrasANumeros[palabra.toLowerCase()]
        : -1);
    return array;
}

/*
return array.map(palabra => {
    const palabraMinuscula = palabra.toLowerCase();
    
    if (mapaPalabrasANumeros[palabraMinuscula] !== undefined) {
        return mapaPalabrasANumeros[palabraMinuscula];
    } else {
        return -1;
    }
});
*/

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]
