/*
Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
*/
// escribe tu función acá
function duplicar(array) {
    return array.map(num => num * 2); //funcion de flecha
    //map crea un nuevo arreglo con los resultados de la llamada a la funcion indicada
    //aplicados a cada uno de sus elementos
}

// usando funcion anonima
/*
function duplicar(array) {
    return arreglo.map(function(num) {
        return num * 2;
    });
}
*/
//Usando una funcion normal(nombrada)
/*
function duplicar(array) {
    function multiplicarPorDos(num) {
        return num * 2;
    }
    return arreglo.map(multiplicarPorDos); 
}
*/


// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []