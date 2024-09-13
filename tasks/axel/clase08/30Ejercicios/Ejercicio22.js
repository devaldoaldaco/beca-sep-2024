let numeros = [1, 2, 3, 4, 5, 6];
let pares = []; 

function posiciones(numeros){
    numeros.forEach((numero, indice) =>{
        if (numero % 2 === 0) {
            pares.push(indice);
        }

        
    });
};
console.log(pares);
posiciones();