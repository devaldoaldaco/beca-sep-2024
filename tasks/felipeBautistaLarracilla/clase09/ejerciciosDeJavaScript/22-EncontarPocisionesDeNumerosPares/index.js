/*
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.
*/
// escribe tu función acá
function posiciones(array) {

    array = array.map((num, index) => num % 2 === 0 ? index : -1) // Mapeamos los índices, dejando -1 para los números impares, si el numero cumple con la condicion se deja index
    //console.log(array);//[-1, 1, -1, 3, -1, 5]
    array = array.filter(index => index !== -1); // Filtramos para eliminar los -1, dejando solo los índices de los números pares
    return array;
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []