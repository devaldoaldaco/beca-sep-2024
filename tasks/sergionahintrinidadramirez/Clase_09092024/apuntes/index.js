
let numbers = [1, 4, 9];
//reduce
let total = (numbers.reduce((sum, num) => sum + num, 0,));
console.log(total);

Array.prototype.reduce = function () {
    console.log("Aqui estaremos viendo nuestro reduce editado, ahora resta")
    let res = 0;
    for (let i = 0; i < this.length; i++) {
        res -= numbers[i];
    }
    return res;
}
let editReduce = numbers.reduce();
console.log(editReduce);

//map

let conMaps = numbers.map(function (num) {
    return Math.sqrt(num);
});
console.log(numbers);
console.log(conMaps);

Array.prototype.map = function () {
    console.log("Aqui estaremos viendo nuestro maps editado, ahora eleva al cuadrado")
    const cuad = []
    for (let i = 0; i < this.length; i++) {
        cuad.push(numbers[i] * numbers[i])
    }
    return cuad;
}

let editMaps = numbers.map();
console.log(editMaps);
