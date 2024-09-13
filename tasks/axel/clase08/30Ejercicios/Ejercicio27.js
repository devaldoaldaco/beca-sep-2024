
const numPal =  ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
let result = [];

function numerosAPalabras(numeros){
    result = numeros.map(numero => numPal[numero])
    console.log(result);
}
console.log(numerosAPalabras([0, 1, 2, 3, 4]));