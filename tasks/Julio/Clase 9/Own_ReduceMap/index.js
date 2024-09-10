
let encabezadosh2=document.getElementsByTagName('h2');

let animals=["owl","cat","dog"];

/* My own definition of Map ------------------------------------------------------*/
Array.prototype.map = function changeEachOne(callback) {
    
    let newArray=[];
    for (const element of this) {
        newArray.push(callback(element))
    }
    return newArray;
  };

let animalsv2=animals.map(function addString(item){
    return item+" is an animal!";
});

console.log(animalsv2);

encabezadosh2[0].innerHTML= `El nuevo arreglo creado con mi versión de 'map' es:<em> ${animalsv2} </em>`;

/* ------------------------------------------------------------------------------*/



/* My own definition of Reduce ------------------------------------------------------*/


let numbers=[1,2,3,4,5];

Array.prototype.reduce = function changeEachOne(callback) {
    
    let acum=this[0];
    for (let i=1; i<this.length; i++ ) {
        acum=callback(acum, this[i]);
    }
    return acum;
};



let result=numbers.reduce(function reduce(acumulador, currentValue){
    return acumulador*currentValue;
});


/* Muestra de los resultados en pantalla */
console.log(result);
encabezadosh2[1].innerHTML=`El valor resultante de aplicar mi versión de 'reduce' al arreglo es:${result}`;


document.querySelector('em').style.color="red";


