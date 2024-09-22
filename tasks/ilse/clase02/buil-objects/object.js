// Object
/* 1. Object.prototype.hasOwnProperty() | .hasOwnProperty() | Retorna devuelve un booleano indicando 
                                                            si el objeto tiene la propiedad especificada.
    SINTAXIS: obj.hasOwnProperty(prop)

    Método que puede ser usando para determinar si un objeto tiene la propiedad especificada como 
    una propiedad directa de ese objeto; a diferencia del operador in, este método no verifica la 
    cadena prototipo del objeto.
*/

d = new Object();
d.prop = "exists";
d.hasOwnProperty("prop"); // true
d.hasOwnProperty("toString"); // false
d.hasOwnProperty("hasOwnProperty"); // false


/* 2. Object.prototype.isPrototypeOf() | .isPrototypeOf() |  
    SINTAXIS: prototypeObj.isPrototypeOf(obj)

    Método que permite comprobar si un objetyo existe o no en la cadena de prototipado de otro.
*/

function Fee() {
    // ...
  }
  
  function Fi() {
    // ...
  }
  Fi.prototype = new Fee();
  
  function Fo() {
    // ...
  }
  Fo.prototype = new Fi();

  function Fum() {
    // ...
  }
  Fum.prototype = new Fo();

/* 3. Object.prototype.propertyIsEnumerable() | .propertyIsEnumerable() | Retorna un Booleano 
    SINTAXIS: obj.propertyIsEnumerable(prop) 

    Método que puede determinar si la propiedad especificada en el objeto puede ser enumerada 
    por un ciclo for...in, con la excepción de propiedades heredadas a través de prototype.
*/

// Las propiedades definidas por el usuario vs las predefinidas
var a = ["es enumerable"];

a.propertyIsEnumerable(0); // true
a.propertyIsEnumerable("length"); // false

Math.propertyIsEnumerable("random"); // false
this.propertyIsEnumerable("Math"); //  false

/* 4. Object.prototype.toLocaleString() | .toLocaleString() | Retorna un String que representa un objeto. 
    SINTAXIS: objeto.toLocaleString()

    Método que devuelve el resultado de llamar a toString().
*/

const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(date1.toLocaleString('En'));// "12/19/2012, 9:00:00 PM"

const number1 = 123456.789;
console.log(number1.toLocaleString('de-DE'));// "123.456,789"


/* 5. Object.prototype.toString() | .toString() | Retorna un String que representa el objeto.
    SINTAXIS: .toString()

    Método que es heredado por todos los objetos que descienden de Object.
*/
/* Si no se sobreescribe en el objeto personalizado, toString devuelve [objecttype], donde type
 es el tipo de objeto*/
var objeto = new Object();
objeto.toString(); // Devuelve [object Object]


/* 6. Object.prototype.valueOf() | .valueOf() | Retorna el valor primitivo del objeto especificado.
    SINTAXIS: object.valueOf()

    Método que para convertir un objeto a un valor primitivo.
*/

function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function () {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  console.log(object1 + 3);// 7