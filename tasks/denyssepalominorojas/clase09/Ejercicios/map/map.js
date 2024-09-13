// funcion map 
Array.prototype.map = () => {
    let nuevoArreglo = [];  
    for(let i = 0; i< numbers.length; i++){
      nuevoArreglo.push(numbers[i]*numbers[i]);
    }
    return nuevoArreglo;
  }

  let numbers = [2,4,5,2];
  let editMap = numbers.map();
  console.log(editMap);