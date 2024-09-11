function _sumar(a,b,c) {
    return a + b + c; // 1+2+undefined => NaN
}

let fun1 = function(a,b,c) {
    return a + b + c; // 1+2+undefined => NaN
}


let fun2 = function(a,b,c) {
    return function() {
        return 0;
    }
}

let va = fun2(1,2,3);
console.log(va());

let suma = fun(1,2,3);
console.log(suma);
console.log(fun(1,2,3));

_sumar(1, 2); // undeinfed
// valor

const PERSONA = {
    saludar: function() {}
}

for(let fun in PERSONA) {
    PERSONA[fun]();
}

const arreglo = [function() {}, function() {}];

const a = arreglo[0];

// CALLBACK

function map(procesador) {
    return procesador();
}

let result = map(function(){return 10;});

console.log(result);

const numeros = [0,1,2,3,4,5];
function map(callback) {
    callback(numero[i])
}


const PERSON = {
    name: 'aldo',
    saludar: function() {
        console.log(this.name);
        // const a = () => {
        //     console.log(this.name);
        // }
        // a();
    },
    despedir: () => {
        console.log('adios');
    }
}

PERSON.saludar();
PERSON.despedir();

carro.conducir();

function solicitarDatos() {
    console.log(this);
}

// ARROW FUNCTION 

const f = () => {
    console.log(this);
}

solicitarDatos();

f();



Array.prototype.filter = (callback) => {
    let nuevoArreglo = [];
    console.log('el filter original no imprime este mensaje');
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) { // type cohersion
            nuevoArreglo.push(this[i]); // LIFO
        }
    }
    return nuevoArreglo; // [2,4,5]
}

const numerosPares = [0,1,2,4,5];

let nuevoArreglo = numerosPares.filter(function(item) {
    return item;
});

console.log(nuevoArreglo);

const objeto = {
    key: 'value'
};

const numero = new Number(20);
const numero2 = new Number(0);
const numero3 = new Number(20);

Number.__proto__ // Number {value}

function Car(color, llantas) {
    this.color = color; 
    this.llantas = llantas;
    this.methodOne = function() {

    }
} // funcion constructora

class Persona {
    constructor(color) {
        this.color = color;
    }
}

const ALDO = new Persona('aldo', [], 1.75, 1.68);
ALDO.saludar(); // hola soy aldo
ALDO.mostrarFamilia(); // { mipadres: [Alberto, Julia], mishermanos: [Alberto, Jesus, Alfonso, Magaly] }
ALDO.imc(); // estoy obeso > 1.5


