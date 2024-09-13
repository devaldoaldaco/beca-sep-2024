
let duplicado = 0;
function duplicar(numeros){
    duplicado = numeros.map(numero => numero * 2);
    console.log(duplicado);
}

console.log(duplicar([1, 2, 3]));