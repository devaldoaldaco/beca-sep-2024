/**********************************************************************************************************/
/* 1. Boolean.prototype.valueOf() | .valueOf() | Retorna devuelve el valor primitivo de un objeto booleano.
    SINTAXIS: 

    Método booleano devuelve el valor primitivo de un objeto booleano o booleano literal como un tipo de 
    datos booleano.
*/

const a = new Boolean();
console.log(a.valueOf());// false
const x = new Boolean('Hola');
console.log(x.valueOf());// true
