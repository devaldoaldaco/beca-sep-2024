/*
Escribir una función llamada capitalizar que reciba un string y capitalice la 
primera letra:
*/
// escribe tu función acá
function capitalizar(string) {
    if (string.length === 0) {
        return ''; //Devuelve una cadena vacia si no hay caracteres
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
    //charAt(0)aydua a obtener el primer caracter del string
    //toUpperCase ayuda a combertir la primer letra de minuscula a mayuscula
    //slice(1) Para agregar el resto del string cortamos el resto del string 
    //a partir de la posición 1 hasta el final
}

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
