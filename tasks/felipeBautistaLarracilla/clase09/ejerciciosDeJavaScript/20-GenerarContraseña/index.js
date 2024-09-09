/*
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.
*/
// escribe tu función acá
function password(string) {
    //Convertir el string a minusculas
    let resultado = string.toLowerCase();

    //Eliminar los espacios en blanco
    resultado = resultado.replace(/\s+/g, '');

    //Cambiar los caracteres segun la regla 
    resultado = resultado.replace(/a/g, '4');
    resultado = resultado.replace(/e/g, '3');
    resultado = resultado.replace(/i/g, '1');
    resultado = resultado.replace(/o/g, '0');
    return resultado;
}
// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""