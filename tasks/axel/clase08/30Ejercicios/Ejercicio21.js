

function pares(numeros){
    let pares = numeros.filter(numero => numero % 2 === 0);
    console.log(pares);
}
console.log(pares([1, 2, 3, 4, 5, 6]));