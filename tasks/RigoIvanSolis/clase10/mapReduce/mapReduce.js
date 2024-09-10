// Map 
Array.prototype.map = function (callback) {
    console.log("Transformando cada número a formato de cadena");
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
let formattedNumbers = numbers.map(num => `Número: ${num}`);
console.log(formattedNumbers);



// Reduce 
Array.prototype.reduce = function (callback, inicial) {
    let acumulador = inicial !== undefined ? inicial : 0;
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acum, valor) => acum + valor, 10);

console.log(resultado);  // 25 (10 + 1 + 2 + 3 + 4 + 5)
