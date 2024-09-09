/*Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:
*/
// escribe tu función acá
function capitalizar(string) {
    let palabras = string.split(' '); //Dividir en un arreglo de palabras["hola","mundo"]
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(' '); //unir las palabras en un solo string separadas por un espacio
}
// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""