var cuentaUsuario;

// No primitivos

/**  
 * This method is used for add two numbers
 * @param a {Number}
 * @param b {Number}
 * @return {Number}
 */
function suma(a, b) {
    return a + b;
}

// No primitivos
// {}, []

// Primitivos
let variable = null;
Number 100 10.2 0
String "string" 'string' `Mi edad es: ${variable}`; "Mi edad es: " + variable;
Boolean true, false
undefined 
null
BigInt
Symbol

let edad = undefined;
edad = 30;

// can not read property of undefined

let obj;

console.log(obj.marca);

// FALSY & THRUTY
let nombre = "Aldo";
nombre = "";
if(nombre) { // type cohersion, valores falsy o thruty

}

// FALSY 
null, undefined, -1, ''

// THRUTY
1, 'ALDO', [], {}

// Variables
miVar = 0;
$miVar = 0;
_miVar = 0;

// VARIABLES Y DECLARACION Y INICIALIZACION

let miVariable; // declaracion  => var miVariable
miVariable = 0; // inicializacion o asignacion

// VARIABLES Y SCOPE

function saludar() {
    var nombre = 'aldo';
    // aqui nombre si esta disponible!!!! por que este si es su scope
    console.log(nombre);
}
// aqui nombre no esta disponible por que este no es su scope
console.log(nombre);

{
    // aqui nombre si esta disponible!!!! por que este si es su scope
    let nombre = 'Juan';    
    console.log(nombre);
}
// aqui nombre no esta disponible por que este no es su scope
console.log(nombre);


// REASIGNACION
const PI = 3.1416; // No permite la reasignacion de valores, ya que son CONSTANTES !!!

let nombre = 'Gabriel'; // Si permite la reasignacion de valores
nombre = 'Juana'; // Si permite la reasignacion de valores

var nombre = 'Gabriel'; // Si permite la reasignacion de valores
nombre = 'Juana'; // Si permite la reasignacion de valores

// REDECLARACION

const EDAD = 30;
const EDAD;

let EDAD;
let EDAD = 31;

var AGE;
var AGE;


var aldo = '30';
console.log(global);


cuentaUsuario = '0001002983';

// NO PRIMITIVOS

// Objetos
let persona = { // lo que almacena la variable persona es una referencia(direccion de memoria)
    nombre: 'Aldo',
    edad: 30
}; // Forma literal

console.log(persona);

let otraPersona = persona; // asiga la referencia(direccion de memoria) de donde estan guardados los valores de persona
otraPersona.edad = 31;
otraPersona['edad'] = 32;

const age = new Object(); // funcion constructora, prototipo, clase

// Arreglos

let arreglos = [];
let arreglo = new Array(1,2,3,4);
arreglos[0] // 

// arreglo = {
//     length: () => lastIndex
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }

// arreglo.length

console.log(arreglos, arreglo);

const a = new Number('0');
const b = new String('Aldo');
const c = new Boolean(30 > 18);

console.log(typeof a, typeof b, typeof c);

// ASI SE DECLARAN(POR QUE UNA REFERENCIA NUNCA CAMBIA)
let ALDO = {
    nombre: 'aldo',
    edad: 30,
    presentacion: () => {
        // console.log(this); // CONTEXTO => EJECUCION || DECLARACION
        // console.log(`Hola soy ${this.nombre}`);
        console.log(`Hola soy ALDO`);
    },
    tengoCarro: false,
    comidaFavorita: 'tacos de pollo',
    mascotas: [{nombre: 'kevin', edad: 2, peso: 2.7}, 'mia', 'sofia'],
    familia: {
        padre: 'Alberto',
        madre: 'Julia',
        familia: {
            hermano: 'Celia'
        }
    }
};

ALDO = {}; // cambio la referencia

ALDO.presentacion();

// OPERADORES 

let suma = 10 + "9";
console.log(suma);


if(true) {
// console.log('');
}

let esMayoryHombre = persona.edad >= 18 || persona.sexo === 'M';
let comparacion = 18 === '18'; // tipo de dato y valor

console.log(comparacion);


let compare = obtenerSexo(persona).sexo ?? 10;

const persona = {sexo: 0};
if(persona.sexo) {
    console.log(`HOLA SOY ${persona.sexo}`);
    if() {
        if() {
            if() {

            }
        }
    }
} else {
    console.log(`NO TIENE SEXO`);
}

console.log(persona.sexo ? `HOLA SOY ${persona.sexo}` : `NO TIENE SEXO`);

const persona = {
    name: 'aldo',
    age: '30',
    sex: 'M'
};

const array = ['aldo', 'denysse', 'axel'];
for(let property in persona) {
    // property = "name"
    // property = "age"
    // property = "sex"
    console.log(persona[property]);
}

for(let value of array) {
    // value = 'aldo'
    // value = 'denysse'
    // value = 'axel'
    console.log(value);
}

// String - instance methods
// Number - instance methods
// Boolean - instance methods
// Date - instance methods
// Array - instance methods
// Object - instance methods

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);