// Función reduce
Array.prototype.reduce = () => {
    let multi = 1;
    for(let elemento of array){
      multi *= elemento;
    }
     return multi;
}

let array = [2, 9, 1, 5];
let nuevoArray = array.reduce();
console.log(nuevoArray);



