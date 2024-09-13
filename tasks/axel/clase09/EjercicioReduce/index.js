Array.prototype.reduce = function(callback, initialValue){
    let acumulador = this[0];
    for(let i = 1; i<this.length; i++){
        acumulador = callback(acumulador, this[i])
    }
    return acumulador;
}
let numbers = [1,2,3];
let currentValue = 0;

function numberReduce(numbers){
    return numbers.reduce((num,currentValue) => num + currentValue)
}
console.log(numberReduce(numbers));