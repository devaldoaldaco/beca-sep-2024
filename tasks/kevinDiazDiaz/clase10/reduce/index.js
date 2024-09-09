Array.prototype.reduce = function(callback, valor_actual, indice, arreglo){
    let acumulado=valor_actual;

    if(indice===undefined){
        indice=0;
    }

    if(arreglo===undefined){
        arreglo=this;
    }

    for(let i=indice; i<arreglo.length;i++){
        acumulado=callback(acumulado,arreglo[i]);
    }

    return acumulado;
}

const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma); // 10