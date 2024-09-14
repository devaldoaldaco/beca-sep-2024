numeros=[1,2,3,4,5,6];
const cuadrado=x=>x*x;
const cuadradoNumero=numeros.map(cuadrado);
console.log(cuadradoNumero)


Array.prototype.Map = function(callback) {
    const nuevoArray = [];
    for (let i = 0; i < this.length; i++) {
        nuevoArray.push(callback(this[i]));
    }
    return nuevoArray;
  };
  
const dobles = numeros.map(cuadrado);
console.log(dobles); 



// Reduce
let initialValue=0;// inicializar el valor que se acumulara
const suma=numeros.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);//funcion callback para sumar numeros
console.log(suma)


Array.prototype.reduce=function(callback,valorInicial){
    let acumulador=valorInicial;//inicializa el acumulador en el valor que le damos al initialValue
    for(let i=0; i<this.length;i++){//recorremos el arreglo para itinerar cada elemento
        acumulador=callback(acumulador,this[i])//usamos la funcion del callback al acumulador y al valor actual del array
        //acumulador: el valor acumulado
        //this[i]:valor del elemento actualx
    }
    return acumulador;
}

const suma2=numeros.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
console.log(suma2)