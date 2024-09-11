/* Object.prototype.hasOwnProperty(): El método hasOwnProperty() verifica si un objeto
 tiene una propiedad específica como propia, es decir, no heredada. */

 let obj = { name: 'Alice', age: 30 };

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // true
console.log(obj.hasOwnProperty('toString')); // false (heredada de Object.prototype)


console.log("-------------------------------------------------------------------------");

/* verifica si un objeto está en la cadena de prototipos de otro objeto. En otras palabras, 
determina si el objeto actúa como prototipo de otro objeto.*/

function Person(name) {
    this.name = name;
  }
  
  let alice = new Person('Alice');
  
  console.log(Person.prototype.isPrototypeOf(alice)); // true
  console.log(Object.prototype.isPrototypeOf(alice)); // true
  
  // Crear un objeto que no herede de Person.prototype
  let plainObject = {};
  
  console.log(Person.prototype.isPrototypeOf(plainObject)); // false


console.log("-------------------------------------------------------------------------");

/* Object.prototype.propertyIsEnumerable(): verifica si una propiedad específica de un 
objeto es enumerable, lo que significa que la propiedad aparecerá en bucles for...in y en 
métodos como Object.keys().
*/

let obj2 = { name: 'Alice', age: 30 };

// Propiedades enumerables por defecto
console.log(obj2.propertyIsEnumerable('name')); // true
console.log(obj2.propertyIsEnumerable('age')); // true

// Definir una propiedad no enumerable
Object.defineProperty(obj2, 'secret', {
  value: 'hidden',
  enumerable: false
});

console.log(obj2.propertyIsEnumerable('secret')); // false

console.log("-------------------------------------------------------------------------");

/* Object.prototype.toString(): devuelve una cadena que representa el objeto en formato
 "[object Type]". Este método es comúnmente sobrescrito por otros tipos de objetos para 
 proporcionar una representación más útil. */

let obj3 = { name: 'Alice', age: 30 };
console.log(obj3.toString()); // "[object Object]"

console.log("-------------------------------------------------------------------------");

/* Object.prototype.valueOf(): devuelve el valor primitivo del objeto. 
Para los objetos básicos, como los creados a partir de Object, el método valueOf() 
devuelve el propio objeto. Sin embargo, algunos objetos como Number, String, y Date 
sobrescriben este método para devolver sus valores primitivos correspondientes.
*/
let obj4 = { name: 'Alice', age: 30 };
console.log(obj4.valueOf()); // { name: 'Alice', age: 30 }
console.log(obj4.valueOf() === obj); // true
