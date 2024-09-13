
let resultado = [];
function terminaConS(palabras){
    resultado = palabras.filter(palabra => /[sS]$/.test(palabra));
    console.log(resultado);

}
console.log(terminaConS(["pruebas", "arroz", "árbol", "tokens"]));