/*
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":
*/
// escribe tu respuesta acá
function numeroDeAes(string) {
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}


// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
