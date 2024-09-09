/* Comentarios para mas de una linea 

// Comentarios para una linea.


// Datos primitivos 

number 10 typeof 
String   
Boolean
undefined
null
BigInt
Symbol  */


// Declaraciòn de variables 

let variables;

// inicializaciòn de variables 
 let variables = 0;

 // Palabras reservadas

 // var es una palabra que todos los navegadores soportaban
 // let y const surgieron a partir de ecma script 6
 // scoope - es el hambito, el espacio en donde una variable es disponible


 function saludar() {
    var nombre = 'Rigo'
    //aqui nombre si esta disponible por que es su scoope
    console.log(nombre);
 }
// aqui nombre no esta disponible por que este no es su scoope
 console.log(nombre);

 // Const no permite la reasignaciòn de valores ya que son constantes.
 const pi = 3.1416;
 let nombre = 'Gabriel' // let si permite la reasignaciònm de valores
 var nombre = 'jan'  // Var tembien permite la asignacion de valores 
 
 // Redeclaraciòn

 const edad = 30;
 const edad;

 let edad; 
 let edad = 31;

 var age;
 var age;  // Var si permite la redeclaraciòn las otras dos no.

 // hoisting sube la decalraciòn de una variable con var pero con let y const no; 
 
 // Obejtos es una colecciòn de datos tiene llaves y valores puede almacenar cualquier tipo de valor que tiene js todas las propiedades se separan por coma(,). 
 
 // forma literal es la mas comùn
 let persona = { // lo que alamcena la varible persona es una referencia(direccion de memoria) por que es una clecciòn de datos primitivos.
    nombre: 'Aldo',
    edad: 30
 }; 

 let otraPersona = persona; // Asigna la referencia de donde esta guardando los valores de personas
otraPersona.edad=31;
 // A traves de una funciòn constructora, prototipo o clase
 const age = new Number();


 //Arreglos accedemos a ellos a traves del indice.
 let arreglos = []; // forma literal 
 let arreglo = new Array[1,2,3,4] // forma constructura
 arreglos[0]


 const rigo = {
    nombre: 'Rigo',
    edad: 30,
    presentacion: function() {
        console.log(this); // CONTEXTO => EJECUCIÒN !! DECLARACIÒN
        console.log();
        
        
        console.log('Hola soy rigo y me gustan los pugs');
    },
    tengoMoto: false,
    comidaFavorita: 'Pozole',
    mascotas: ['Keidy', 'Jerry', 'Layka'],
    familia: {
        padre: 'Ivan',
        madre: 'Mabo',
        familiap: {
            hermana: 'Gris'
        }
    }
 }

 rigo.presentacion();



const persona = {
    name: 'rigo',
    age: '30',
    sex: 'M'
}

 const array = ['rigo', 'edgar','gael'];
 for( let p in persona) {
    console.log(persona[p]);
 }


 
 

 
