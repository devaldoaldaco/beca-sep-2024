// Object - instance methods
/* Object.prototype.hasOwnProperty() : Valida si hay un apropiedad llamda con el nombre que espesifiques */
const example = {};
example.hasOwnProperty("prop"); // false
example.prop = "exists";
example.hasOwnProperty("prop"); // true - 'prop' has been defined
example.prop = null;
example.hasOwnProperty("prop"); // true - own property exists with value of null
example.prop = undefined;
example.hasOwnProperty("prop"); // true - own property exists with value of undefined

/* Object.prototype.isPrototypeOf() : Object instancias verifica si este objeto existe en la cadena de prototipos de otro objeto.*/
function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);
const bar = new Bar();
console.log(Foo.prototype.isPrototypeOf(bar));// Expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));// Expected output: true

/* Object.prototype.propiedadIsEnumerable() : Verifica si hay en un objeto o un array lo que estas buscando */
const o = {};
const a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";
o.propertyIsEnumerable("prop"); // true
a.propertyIsEnumerable(0); // true

/* Object.prototype.toLocaleString() : Cambia los datos dentro de un objeto a como lo manda cada region que colocamos */
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(date1.toLocaleString('ar-EG'));// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"
const number1 = 123456.789;
console.log(number1.toLocaleString('de-DE'));// Expected output: "123.456,789"

/* Object.prototype.toString() : instancias devuelve una cadena que representa este objeto. Este método está pensado para que lo anulen los objetos derivados para aplicar una lógica de conversión de tipos personalizada */
function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };
  console.log(dog1.toString());// Expected output: "Gabby"

/* Object.prototype.valorDe() : instancias convierte el thisvalor en un objeto . Este método está pensado para que lo anulen los objetos derivados para aplicar una lógica de conversión de tipos personalizada */
function MyNumberType(n) {
    this.number = n;
  }
  MyNumberType.prototype.valueOf = function () {
    return this.number;
  };
  const object1 = new MyNumberType(4);
  console.log(object1 + 3);// Expected output: 7