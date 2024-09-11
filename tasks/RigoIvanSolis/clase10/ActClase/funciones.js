/* declaraciòn de una funciòn: 
paralbra resevada, nombre, parametros 
entre parentesis, llaves y valor de retorno. */

function _sumar(a,b,c) {
    return a + b +c;
}

_sumar(1,2,3);



// salida temprana se utiliza para vaildar un dato y 
// y evitar procesar datos sin necesidad.
function _sumar(a,b,c) {
    if ( !a && !b && !c){
        return null;
    }
}

_sumar(1,2,3);

let fun1 = function(a,b,c){
    return a + b + c;
}

// una function Expresion es por que se almacena en una vairable

// esta funciòmn retorna otra funciòn
let fun2 = function(a,b,c){
    return function() {
        return 0;
    }
}

let va = fun2(1,2,3);
console.log(va());

const PERSONA = {
    saludar: function() {}
}

for(let fun in persona) {
    PERSONA['fun']();
}

const arreglo = [function() {}, function() {}];

const a = arreglo[0];


// CALLBACK

function map(procesador) {
    return procesador();
}

let result = map(function(){return 10;});

console.log(result);

// ARROW FUNCTION

function solicitarDatos() {
    console.log(thisS);
    
}

const f = () => {
    console.log(this);
}

solicitarDatos();

f();



const person = {
    saludar: function(){
        console.log(this);
    },
    despedir:() => {
        console.log(this);
        
    }
}

person.saludar();
person.despedir();

//-----------------------------------

const numerosPares = [0,1,2,4,5];

let nuevoArreglo = numerosPares.filter((item, index) => {

    if(item > 1){
        return item;
    }

});

console.log(nuevoArreglo);


//filter es una funcion constructora por que tiene que hacer referencia a this.

Array.prototype.filter = function(callback) {
    let nuevoArray = [];
    for (let index = 0; index < array.length; index++) {
        if (callback(this.push[i])) {
            nuevoArray.push(this[i]);
        }       
    }
    return nuevoArray;
}

const numerosParess = [0,1,2,3,5];

let nuevoArray = numerosParess.filter(function(item){
    return item;
});


const numero = new Number();

function Number(value) {
    this.value = value;
}


function Car(color, llantas) {
    this.color = color;
    this.llantas = llantas;
}

// en java

class Car {
    constructor(color) {
        this.color = color;
    }
}

// clase o funcion tipo persona con el metodo saludar, que pinte hola mi nombre es.
// dentro de esa funcion o clase generar un metodo que nos ayude a calcular el indice de masa muscfular de esa persona con datos de altura y peso retornar un valor, no imprime el resultado en consola solo lo retorna

//esta persona debe mostrar en pantalla el nombre completo de su familia en forma de lista, todos esos familiares deben ser instacia de persona,
// cada persona va a tener una especie de arreglo de mas personas 

// metodo saludar
// mostrar familia : debe mosytrar algo asi
// mihermano: alberto
// papa: ivan 

/* get name() {
    return name 
}

este metododo deberia existir 

solo son 3 metodos y el getter y sus propiedades

generar clase persona o funcion: 


un metodo que entre a la propiedad name y balbla

const rigo = new Person( 'aldo', [], 1.75,1.68); o agregarlos en el constructor

rigo.saludar(); // hola soy rigo
rigo.mostrarFamilia(); { mis padres: [alberto, ejemplo], mishermanos: [alberto,jesus,alfonso]}
rigo:imc(); estoy obeso 1.5

*/


