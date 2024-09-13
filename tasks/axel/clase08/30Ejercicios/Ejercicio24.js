
let resultado = [];

function empiezaConA(arreglo){
    resultado = arreglo.filter(palabra => /^[aA]/.test(palabra));
    console.log(resultado);
}
console.log(empiezaConA(["beta", "alfa", "Arbol", "gama"]));