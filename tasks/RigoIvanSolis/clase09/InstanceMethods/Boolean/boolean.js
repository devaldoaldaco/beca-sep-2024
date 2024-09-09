/* Object.prototype.hasOwnProperty(): erifica si un objeto tiene una 
propiedad específica como propia, es decir, no heredada.*/

let obj = { name: 'Alice', age: 30 };

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // true
console.log(obj.hasOwnProperty('toString')); // false (heredada de Object.prototype)

console.log("------------------------------------------------------------------------");

/* Object.prototype.isPrototypeOf(): verifica si un objeto es el prototipo de otro 
objeto. En otras palabras, te dice si un objeto está en la cadena de prototipos de otro objeto.
*/

function Person(name) {
    this.name = name;
  }
  
  let alice = new Person('Alice');
  
  console.log(Person.prototype.isPrototypeOf(alice)); // true
  console.log(Object.prototype.isPrototypeOf(alice)); // true
  
  // Crear un objeto sin el prototipo Person
  let plainObject = {};
  
  console.log(Person.prototype.isPrototypeOf(plainObject)); // false

console.log("------------------------------------------------------------------------");

/* Object.prototype.propertyIsEnumerable(): verifica si una propiedad específica de un 
objeto es enumerable.*/

let obj2 = { name: 'Alice', age: 30 };

console.log(obj2.propertyIsEnumerable('name')); // true
console.log(obj2.propertyIsEnumerable('age')); // true

// Definir una propiedad no enumerable
Object.defineProperty(obj2, 'secret', {
  value: 'hidden',
  enumerable: false
});

console.log(obj2.propertyIsEnumerable('secret')); // false

console.log("------------------------------------------------------------------------");

/* Object.prototype.toLocaleString(): se usa para convertir un objeto a una cadena 
basada en la configuración regional. Aunque la implementación predeterminada para Object
no hace mucho (generalmente devuelve una cadena que representa el objeto en formato
"[object Object]"), este método es más útil en otros objetos como Date y Number, donde 
el formato depende de la configuración regional.*/

let date = new Date();
console.log(date.toLocaleString('en-US')); // "9/8/2024, 12:00:00 PM"
console.log(date.toLocaleString('es-ES')); // "8/9/2024 12:00:00"

console.log("------------------------------------------------------------------------");

/* Object.prototype.toString(): convierte un objeto en una cadena que representa el objeto.*/
  
let obj3 = { name: 'Alice', age: 30 };
console.log(obj3.toString()); // "[object Object]"

console.log("------------------------------------------------------------------------");

/* Object.prototype.valueOf(): devuelve el valor primitivo de un objeto. */

let strObj = new String('hello');
console.log(strObj.valueOf()); // "hello"
console.log(typeof strObj.valueOf()); // "string"

