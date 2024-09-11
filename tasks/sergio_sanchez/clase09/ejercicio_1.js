// filter
Array.prototype.filter = function(callback, thisArg){
    const result = [];
    for(let i = 0; i < this.length; i++){ 
        if (callback.call(thisArg, this[i])){
            result.push(this[i]);
        }
    }
    return result
}
let number =[0,1,2,3,4,5,6]
function numberFilter (number){
    return number.filter(num => num !== 2)
}
console.log(numberFilter(number))

// map
Array.prototype.map = function(callback){
    const result = [];
    for(let i = 0; i < this.length; i++){ 
        result.push(callback(this[i], this))
    }
    return result
}
let number =[0,1,2,3,4,5,6]
function numberMap (number){
    return number.map(num => num * 2)
}
console.log(numberMap(number))

// reduce
Array.prototype.reduce = function(callbackFn){
    let accumulator = this[0];
    for(let i = 1; i < this.length; i++){ 
        accumulator = callbackFn(accumulator, this[i])
    }
    return accumulator
}
let number =[1,2,3]
let currentValue = 0;
function numberReduce (number){
    return number.reduce((num, currentValue) => num + currentValue)
}
console.log(numberReduce(number))