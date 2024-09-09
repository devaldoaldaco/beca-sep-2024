/*
*** Object.prototype.hasOwnProperty() ***

The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false
*/
/*
*** Object.prototype.isPrototypeOf() ***

The isPrototypeOf() method of Object instances checks if this object exists in another object's prototype chain.

function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar();

console.log(Foo.prototype.isPrototypeOf(bar));
// Expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));
// Expected output: true
*/
/*
*** Object.prototype.propertyIsEnumerable()***
The propertyIsEnumerable() method of Object instances returns a boolean indicating whether the specified property is this object's enumerable own property.

const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1'));
// Expected output: true

console.log(array1.propertyIsEnumerable(0));
// Expected output: true

console.log(array1.propertyIsEnumerable('length'));
// Expected output: false
*/
/* 
*** Object.prototype.toLocaleString() ***
The toLocaleString() method of Object instances returns a string representing this object. This method is meant to be overridden by derived objects for locale-specific purposes.

const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString('ar-EG'));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString('de-DE'));
// Expected output: "123.456,789"
*/
/*
*** Object.prototype.toString() ***
The toString() method of Object instances returns a string representing this object. This method is meant to be overridden by derived objects for custom type coercion logic.

function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// Expected output: "Gabby"
*/
/*
*** Object.prototype.valueOf() ***
The valueOf() method of Object instances converts the this value to an object. This method is meant to be overridden by derived objects for custom type conversion logic.

function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// Expected output: 7
*/
