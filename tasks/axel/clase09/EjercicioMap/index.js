Array.prototype.map = function(callback){
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.push(callback(this[i]));
    }
    return result;
};
let numbers = [2,4,6];
let multiplicarPorDos = numbers.map(function(numero){
    return numero * 2;
});
console.log(multiplicarPorDos)
