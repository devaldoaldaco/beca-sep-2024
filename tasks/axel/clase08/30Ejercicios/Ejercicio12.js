let arreglo = [4, 1, 2, 3];
let numero = 1;

function multiplicarArreglo(){
    arreglo.forEach(elemento => numero *= elemento);
    console.log(numero);
}
multiplicarArreglo();