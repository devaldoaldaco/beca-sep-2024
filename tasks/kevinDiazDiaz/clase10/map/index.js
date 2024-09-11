Array.prototype.map= function(callback, indice, arreglo){
    let nuevo_arreglo=[];

    if(indice===undefined){
        indice=0;
    }

    if(arreglo===undefined){
        arreglo=this;
    }

    for(let i=indice; i<arreglo.length; i++){
        nuevo_arreglo.push(callback(arreglo[i]));
    }
    return nuevo_arreglo;
}

const numeros = [1, 2, 3, 4];
const duplicados = numeros.map(num => num * 2);

console.log(numeros); //[1,2,3,4]
console.log(duplicados); // [2, 4, 6, 8]
