Array.prototype.filter = function(){
  let nuevoArreglo = [];
  for(let i =0; i< this.length; i++){
    if(this[i] !==0){
      if(this[i]% 2 === 0){
       nuevoArreglo.push(this[i]);
      }
    }else i++;
  }
  return nuevoArreglo;
}
const numerosPares = [0,0,0,1,2,3,0,4,5,6,7,8,9,10,12,11];
let nuevoArreglo = numerosPares.filter(function(item){
  return item;
})
console.log(nuevoArreglo);

///Map///
Array.prototype.map = () => {
  let nuevoArreglo = [];  
  console.log('Version modificada de map');
  for(let i = 0; i< numbers.length; i++){
    nuevoArreglo.push(numbers[i]*numbers[i]);
  }
  return nuevoArreglo;
}
let numbers = [1,2,3,4,5];
let editMap = numbers.map();
console.log(editMap);

///reduce///
Array.prototype.reduce = () => {
  let sumador = 0;
  console.log('Version Modificada de Reduce');
  for(let elemento of arreglo){
    sumador += elemento;
  }
  return sumador;
}
let arreglo = [0,2,3,5,6];
let editReduce = arreglo.reduce();
console.log(editReduce);