// Ejemplo de `hasOwnProperty()`
// El método `hasOwnProperty()` verifica si el objeto tiene una propiedad específica como propia (no heredada).
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
console.log(fruits.hasOwnProperty(3)); // true ('Orange' está en la posición 3)
console.log(fruits.hasOwnProperty(4)); // false (no hay una posición 4)

// Ejemplo de `isPrototypeOf()`
// El método `isPrototypeOf()` verifica si un objeto está en la cadena de prototipos de otro objeto.

class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true (Baz es un prototipo de baz)
console.log(Baz.prototype.isPrototypeOf(bar)); // false (Baz no es un prototipo de bar)
console.log(Baz.prototype.isPrototypeOf(foo)); // false (Baz no es un prototipo de foo)
console.log(Bar.prototype.isPrototypeOf(baz)); // true (Bar es un prototipo de baz)
console.log(Bar.prototype.isPrototypeOf(foo)); // false (Bar no es un prototipo de foo)
console.log(Foo.prototype.isPrototypeOf(baz)); // true (Foo es un prototipo de baz)
console.log(Foo.prototype.isPrototypeOf(bar)); // true (Foo es un prototipo de bar)
console.log(Object.prototype.isPrototypeOf(baz)); // true (Object es un prototipo de baz)

// Ejemplo de `propertyIsEnumerable()`
// El método `propertyIsEnumerable()` verifica si una propiedad en el objeto es enumerable.

const o = {};
const a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";

console.log(o.propertyIsEnumerable("prop")); // true (la propiedad 'prop' es enumerable)
console.log(a.propertyIsEnumerable(0)); // true (el índice 0 del array es enumerable)

// Ejemplo de `toLocaleString()`
// El método `toLocaleString()` convierte un objeto en una cadena utilizando la configuración regional del usuario.

const obj = {
    toString() {
      return "My Object";
    },
};
console.log(obj.toLocaleString()); // "My Object" (utiliza el método `toString` del objeto)

// Ejemplo de `toString()`
// El método `toString()` convierte un objeto en una cadena representativa. Para arrays, convierte los elementos en una cadena separada por comas.
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3" (convierte el array en una cadena)
console.log(Object.prototype.toString.call(arr)); // "[object Array]" (usa el método `toString` del prototipo de Object)

// Ejemplo de `valueOf()`
// El método `valueOf()` devuelve el valor primitivo del objeto. Para objetos, devuelve el objeto mismo.

const obj2 = { foo: 1 };
console.log(obj2.valueOf() === obj2); // true (el valor primitivo del objeto es el objeto mismo)

// Ejemplo de `Object.prototype.valueOf.call()`
// El método `valueOf()` también puede ser llamado en tipos primitivos usando `call()`, lo cual envuelve el valor primitivo en un objeto wrapper.
console.log(Object.prototype.valueOf.call("primitive")); // [String: 'primitive'] (crea un objeto wrapper para la cadena primitiva)
