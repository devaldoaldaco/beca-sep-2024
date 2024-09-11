
//ARRAY

/* 
*Array.prototype.at()
*Recibe un valor nùmerico y devuelve el elemento en la posicion del array
*correspondiente a ese nùmero
*/

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"


/*
*Array.prototype.concat()
*Unde dos o màs arrays devolviendo un array nuevo sin modificar los originales
*/
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


/*
*Array.prototype.copyWithin()
*Copia la seccion indicaa del indice, por ejemplo recibe dos nùmeros entonces copiara
*en el indice que se recibe en la izquierda lo que se encuentre en el indice de la 
*derecha, si son solo dos nùmeros copiara lo que sigue del segundo indice a los
*siguientes indices, si se especifica un tercer nùmero entonces se copiara hasta ese 
*numero
*/

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

/*
*Array.prototype.entries()
*Crea un nuevo array tipo objeto que contiene en cada elemento el indice y el
*elemento del array origial
*/

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

/*
*Array.prototype.every()
* Recibe una condicion y comprueba todos los valores de un array para ver si 
*cumplen con esa condicion, regresa un valor booleano
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true


/*
*Array.prototype.fill()
*Cambia todos los valores de un array a un valor estatico, si son 3 valores entonces
*el primer valor representa el valor estatico, el segundo donde comienza y el tercero
*en donde termina, si son dos valores entonces el primero el valor y el segundo la 
*posicion desde la cual incia y por ùltimo un solo valor cambia todos los valores
*del array.
*/

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]


/*
*Array.prototype.filter()
* Recibe una condiciòn y crea un nuevo array con todos los valores del array original
*que cumplen con la condicion dada.
*/

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


/*
*Array.prototype.find()
*Recibe una condicion y devuelve el primer valor del elemento  que cumple la condicion
*/

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

/*
*Array.prototype.findIndex()
*Recibe una condicion y devuelve el primer valor del indice que cumple la condicion
*si ninguno la cumple devuelve un -1
*/

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

/*
*Array.prototype.findLast()
**Recibe una condicion y devuelve el primer valor del indice que cumple la condicion
*pero comienza a buscar desde el final del array
*si ninguno la cumple devuelve un undefine
*/

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130


/*
*Array.prototype.findLastIndex()
**Recibe una condicion y devuelve el primer valor del indice que cumple la condicion
*pero comienza a buscar desde el final del array
*si ninguno la cumple devuelve un -1
*/

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130



/*
*Array.prototype.flat()
*Si hay un array dentro de los elementos del array principal entonces esta funcion
*concatena los valores de esos array al array principal dependiendo de la cantidad
*de concatenaciones que ingresemos en la funcion.
*/

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]



/*
*Array.prototype.flatMap()
*Mapea todo el array recibe una funciòn como condicion en conjunto de un operator 
*ternario, si uno de los valores cumple con la condicion entonces sustituye lo indicado
*los que no lo cumplan se quedan con el valor especifiado luego de los :
*/

const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]



/*
*Array.prototype.forEach()
*Recibe una funciòn y la ejecuta para cada elemento del array.
*/

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

/*
*Array.prototype.includes()
*Revisa los valores de un array recibe un valor y revisa si el valor se encuentra en el
array y devuele true o false dependidendo de si lo encuentra o no
*/

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


/*
*Array.prototype.indexOf()
*Recibe un valor y revisa los elementos del array, deuvelve el valor del primer indice
*en el que se puede encontrar ese valor y un .-1 si no se encuentra en el array.
*
*/

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1



/*
*Array.prototype.join()
*Concatena todos los valores de un array y devuelve un nuevo string uniendo los 
*elementos dependiendo de la indicaciòn que se le de.
*/

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


/*
*Array.prototype.keys()
*Crea un nuevo array con los valores del indice del array principal.
*/

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2



/*
*Array.prototype.lastIndexOf()
*Recibe un valor y devuelve el valor del indice donde se puede encontrar ese valor
*si el valor no esta dentro del array devuelve -1.
*/

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1

/*
*Array.prototype.map()
*Recibe una funciòn y devuelve un nuevo array al que se le ha aplicado la funciòn 
*a cada elemento del array original.
*/

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

/*
*Array.prototype.pop()
*Devuelve el ùltimo elemento del array, pero lo elimina del array modificando su
*tamaño
*/

onst plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]


/*
*Array.prototype.push()
*Recibe un valor que se va a agregar al array principal y devuelve el nuevo lenght
*del array, osea que si modifica el tamaño.
*/

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]




/*
*Array.prototype.reduce()
*Recibe una funciòn y la ejecuta para cada elemento del array en orden, con un valor
*de indice 1 si no se epecifica y comienza la siguiente operaciòn con el resultado
*de la primer operaciòn y viceversa.
*           reduce(callbackFn, initialValue)

*/

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10



/*
*Array.prototype.reduceRight()
*Hace lo mismo que la funciòn anterior, pero inicia de derecha a izquierda.
*/

const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array1.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(result);
  // Expected output: Array [4, 5, 2, 3, 0, 1]



/*
*Array.prototype.reverse()
*invierte el orden del array, el primer elemento pasa a ser el ultimo y viceversa
*el nuevo array se guarda en el array original, esto significa que es destructivo
*/

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


/*
*Array.prototype.shift()
*Devuelve el primer elemento del array y lo elimina del array modificando su tamaño
*
*/

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


/*
*Array.prototype.slice()
*Recibe hasta dos numeros donde el primer numero indica donde inicia y el segundo
*indica donde va a acabar. Devuelve un array con los elementos desde donde se inciia
*hasta un elemento antes de donde se acaba.
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

/*
*Array.prototype.some()
*Recibe una condicion y si alguno de los elementos del array cumple la condicion
*devuelve true, caso contrario devuelve false.
*/

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true


/*
*Array.prototype.sort()
*Convierte los elementos del array a string y los clasifica de menos a mayor dependiendo
*de su valor como string, por ejemplo los organiza alfabeticamente o dependiendo del
*numero con el cual inicien.
*/

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

/*
*Array.prototype.splice()
*Inserta un elemento o lo reemplaca dentro del array modificando el array principal
Esta es la sintaxis:
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
*/

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



/*
*Array.prototype[Symbol.iterator]()
*Crea un nuevo array que se puede iterar para obtener los valores del array original.
*/

const array1 = ['a', 'b', 'c'];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


/*
*Array.prototype.toLocaleString()
*Convierte los elementos a string y los separa dependiendo de nuestra eleccion.
*/

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary


/*
*Array.prototype.with()
*Reemplaza un elemento en el index señalado, recibe dos valores el primero es el index
y el segundo es el elemento que se va a reemplazar.

sintx:

arrayInstance.with(index, value)
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

//NUMBER

/*
*Number.prototype.toExponential()
Devuelve un string que represente el exponencial del numero dado
*/

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }
  
  console.log(expo(123456, 2));
  // Expected output: "1.23e+5"
  
  console.log(expo('123456'));
  // Expected output: "1.23456e+5"
  
  console.log(expo('oink'));
  // Expected output: "NaN"

/*
*Number.prototype.toFixed()
*Devuelve un string que reperesenta un numero flotante, pero limita los numeros despues
del punto decimal dependiendo de lo que le indiquemos.
*/

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  // Expected output: "123.46"
  
  console.log(financial(0.004));
  // Expected output: "0.00"
  
  console.log(financial('1.23e+5'));
  // Expected output: "123000.00"

/*
*Number.prototype.toLocaleString()
*Devuelve un string con lenguaje sensible que represente el numero colocado.
*/

function eArabic(x) {
    return x.toLocaleString('ar-EG');
  }
  
  console.log(eArabic(123456.789));
  // Expected output: "١٢٣٬٤٥٦٫٧٨٩"
  
  console.log(eArabic('123456.789'));
  // Expected output: "123456.789"
  
  console.log(eArabic(NaN));
  // Expected output: "ليس رقم"

/*
*Number.prototype.toPrecision()
*En numeros con punto decimal permite aumentar la precision hasta el numero indicado.
*/

function precise(x) {
    return x.toPrecision(4);
  }
  
  console.log(precise(123.456));
  // Expected output: "123.5"
  
  console.log(precise(0.004));
  // Expected output: "0.004000"
  
  console.log(precise(1.23e5));
  // Expected output: "1.230e+5"


/*
*Number.prototype.toString()
*Devuelve un string que represente ese nùmero, en la base de nùmero que nosotros indiquemos
.
*/
function hexColour(c) {
    if (c < 256) {
      return Math.abs(c).toString(16);
    }
    return 0;
  }
  
  console.log(hexColour(233));
  // Expected output: "e9"
  
  console.log(hexColour('11'));
  // Expected output: "b"


/*
*Number.prototype.valueOf()
*Devuelve el valor del nùmero, aùn cuando sea un objeto como en el ejemplo.
*/

const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"

//BOOLEAN

/*
*Boolean.prototype.toString()
Devuelve el valor booleano independiendtemente del tipo que tenìa con anterioridad.
*/

const flag1 = new Boolean(true);

console.log(flag1.toString());
// Expected output: "true"

const flag2 = new Boolean(1);

console.log(flag2.toString());
// Expected output: "true"

/*
*Boolean.prototype.valueOf()
Devuelte el valor primitivo del objeto booleano.
*/


console.log(x.valueOf());
// Expected output: false

const y = new Boolean('Mozilla');

console.log(y.valueOf());
// Expected output: true

//OBJETC

/*
Object.prototype.hasOwnProperty()
Devuelve un booleano si el valor de la primer propiedad del objeto es igual o no
al valor recibido.
*/

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false


/*Object.prototype.isPrototypeOf()
Revisa si el objeto existe en las propiedades de otros objetos.
*/

function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar();

console.log(Foo.prototype.isPrototypeOf(bar));
// Expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));
// Expected output: true


/*Object.prototype.propertyIsEnumerable()
Verifica si la propiedad del objeto es enumerable.
*/

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


/*Object.prototype.toLocaleString()
Devuelve un string que representa el objeto
*/
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString('ar-EG'));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString('de-DE'));
// Expected output: "123.456,789"

/*Object.prototype.toString()
Devuelve un string que represente el numero o valor adignado
*/

function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// Expected output: "Gabby"


/*Object.prototype.valueOf()
Convierte el valor recibido en un objeto
*/

function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// Expected output: 7

//STRING


/* 1. String.prototype.charAt() | .charAt() | Retorna nuevo String 
    SINTAXIS: str.charAt(indice)

    Método de String que devuelve en un nuevo String el carácter UTF-16 de una cadena.
*/

var cualquierCadena = "Hola";

console.log(
  "El carácter en el índice 0 es '" + cualquierCadena.charAt(0) + "'",
);// 'H'
console.log(
  "El carácter en el índice 1 es '" + cualquierCadena.charAt(1) + "'",
);// 'o'
console.log(
  "El carácter en el índice 2 es '" + cualquierCadena.charAt(2) + "'",
);// 'l'
console.log(
  "El carácter en el índice 3 es '" + cualquierCadena.charAt(3) + "'",
);// 'a'
console.log(
  "El carácter en el índice 999 es '" + cualquierCadena.charAt(999) + "'",
); // ''


/* 2. String.prototype.charCodeAt() | .charCodeAt() | Retorna un numero (Unicode)
    SINTAXIS: cadena.charCodeAt(indice);

    Método que devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
*/

"ABC".charCodeAt(0); // 65
"AaSdas".charCodeAt(2); // 83
// Si las letras son mayusculas o minusculas, cambia el Unicode 
"Aasdas".charCodeAt(2); // 115


/* 3. String.prototype.codePointAt() | .codePointAt() | Retorna un entero no negativo (Unicode)
    SINTAXIS: str.codePointAt(indice)

    Método que devuelve un entero no negativo que equivale al valor Unicode code point del carácter.
*/

"ABC".codePointAt(1); // 66
"\uD800\uDC00".codePointAt(0); // 65536
"XYZ".codePointAt(42); // undefined


/* 4. String.prototype.concat() | .concat() | Retorna un String de texto nueva.
    SINTAXIS:  str.concat(str2 [, ...strN])

    Método que oncatena los argumentos de tipo texto con la cadena de sobre la que se llama a la 
    función y devuelve una nueva cadena de texto. Los cambios en la cadena original o la cadena 
    devuelta no afectan al otro.
*/

const str1 = 'Denysse';
const str2 = 'Palomino';
console.log(str1.concat(' ', str2));// "Denysse Palomino"
console.log(str2.concat(', ', str1));// "Palomino, Denysse"


/* 5. String.prototype.endsWith() | .endsWith() | Retorna un booleano: true o false 
    SINTAXIS: str.endsWith(searchString[, position])

    Método que determina si una cadena de texto termina en otra cadena o no. Este método distingue 
    entre mayúsculas y minúsculas.
*/

const string = 'Me encanta Resident Evil!';
console.log(string.endsWith('Evil!'));// true
console.log(string.endsWith('Evil', 24));// true

const string1= 'Cómo estás?';
console.log(string1.endsWith('Cómo'));// false


/* 6. String.prototype.includes() | .includes() |  Retorna un Booleano: true o false 
    SINTAXIS: str.includes(searchString[, position])

    Método que permite determinar si una cadena de texto se encuentra incluida dentro de la otra.
*/
// Sí es encontrada 
const sentencia = 'Neon es mejor personaje que Clove';
const palabra = 'Clove';

console.log(
  `La palabra "${palabra}" ${
    sentencia.includes(palabra) ? 'está' : 'no está'
  } en la sentencia`,
);// 'La palabra "Clove" está en la sentencia'

// No es encontrada 
const sentencia1 = 'Neon es mejor personaje que Clove';
const palabra1 = 'Reyna';

console.log(
  `La palabra "${palabra1}" ${
    sentencia1.includes(palabra1) ? 'está' : 'no está'
  } en la sentencia`,
);// 'La palabra "Reyna" no está en la sentencia'


/* 7. String.prototype.indexOf() | .indexOf() | Retorna devuelve el índice, dentro del objeto 
 String que realiza la llamada.
    SINTAXIS: cadena.indexOf(valorBusqueda[, indiceDesde])

    Método que devuelve el índice, dentro del objeto String que realiza la llamada, de la primera 
    ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se 
    encuentra dicho valor.
*/

var cualquierCadena = "Hola soy Denysse Palomino Rojas";

document.write(
  "<P>El índice de posición de la primer y es " +
    cualquierCadena.indexOf("y"),
); // Muestra 7


/* 8. String.prototype.isWellFormed() | .isWellFormed() | Retorna un Booleano: true o false
    SINTAXIS: .isWellFormed()

    Método que comprueba si la cadena contiene un sustituto solitario o no. Un sustituto solitario 
    es una cadena que contiene caracteres Unicode
*/

const badFormed = "ab\uD800";
const wellFormed = "hola";
 
function checkFormation(str) {
    if(str.isWellFormed()){
        console.log(encodeURI(str)) 
    }// "hola"
}



/* 9. String.prototype.lastIndexOf() | .lastIndexOf() | Retorna el número de índice
    SINTAXIS: cadena.lastIndexOf(valorBusqueda[, indiceDesde])

    Método que devuelve la posicion (indice) en la que se encuentra el valorBusqueda, dentro del 
    objeto String que realiza la llamada, de la última ocurrencia del valor especificado; o -1 si 
    no se halla.
*/

"denysse".lastIndexOf("s"); // 5
"denysse".lastIndexOf("s", 6); // 2
"denysse".lastIndexOf("a", 0); // -1
"denysse".lastIndexOf("x"); // -1


/* 10. String.prototype.localeCompare() | .localeCompare() | Retorna un número 
    SINTAXIS: .localeCompare(compareString);
              .localeCompare(compareString, locales);
              .localeCompare(compareString, locales, options);

    Método que retorna un número indicando si una cadena de carateres de referencia va antes, 
    después o si es la misma que la cadena dada en orden alfabético.
*/

// La letra "a" va antes que "c" por lo que entrega un valor negativo
"a".localeCompare("c"); // -2 o -1 (o cualquier otro valor negativo)
// Alfabéticamente la palabra "omar" va después que "denysse" por lo que resulta en un valor positivo.
"omar".localeCompare("denysse"); // 2 o 1 (u otro valor positivo)


/* 11. String.prototype.match() | .match() | Retorna string
    SINTAXIS: .match(regexp)

    Método que devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
*/

const paragraph = 'El videojuego Valorant, es un shooter muy bueno de Riot Games.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Array ["E", "V", "R", "G"]


/* 12. String.prototype.matchAll() | .matchAll() | Retorna un iterador (el cual no es reiniciable).
    SINTAXIS: cadena.matchAll(expresionRegular)

    Método que retorna un iterador de todos los resultados de ocurrencia en una cadena de texto 
    contra una expresión regular, incluyendo grupos de captura.
*/

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];
console.log(array[0]);// Array ["test1", "e", "st1", "1"]
console.log(array[1]);// Array ["test2", "e", "st2", "2"]


/* 13. String.prototype.normalize() | .normalize() | Retorna un String que contiene la Forma de 
Normalización Unicode de la cadena dada.
    SINTAXIS: str.normalize([form])

    Método que retorna la Forma de Normalización Unicode de una cadena. No afecta el valor
    de la cadena en sí misma.
*/

// U+1E9B: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
var str3 = "\u1E9B\u0323";


/* 14. String.prototype.padEnd() | .padEnd() | Retorna un String 
    SINTAXIS:  padEnd(targetLength)
               padEnd(targetLength, padString)

    Método que rellena el string con un string determinado (repetido, si es necesario) para que
    la cadena resultante alcance una longitud determinada. El relleno se aplica desde el final de 
    esta cadena.
*/

"deny".padEnd(10); // "Aaron     "
"deny".padEnd(10, "foo"); // "denyfoofoo"
"deny".padEnd(6, "123456"); // "deny12"
"deny".padEnd(1); // "deny"


/* 15. String.prototype.padStart() | .padStart() | Retorna un String
    SINTAXIS: adStart(targetLength [, padString])

    Método que rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que 
    la cadena resultante alcance una longitud dada. 
*/

"deny".padStart(10); // "       deny"
"deny".padStart(10, "foo"); // "foofoodeny"
"deny".padStart(6, "123465"); // "12deny"


/* 16. String.prototype.repeat() | .repeat() | Retorna un String
    SINTAXIS: str.repeat(count);

    Método que construye y devuelve una nueva cadena que contiene el número especificado de 
    copias de la cadena en la cual fue llamada, concatenados.
*/

"deny".repeat(-1); // RangeError
"deny".repeat(0); // ''
"deny".repeat(1); // 'deny'
"deny".repeat(2); // 'denydeny'


/* 17. String.prototype.replace() | .replace() | Retorna un String  
    SINTAXIS: replace(patrón, reemplazo)

    Método que no cambia el valor de la cadena sobre la que se realiza la llamada. Devuelve una 
    nueva cadena.
*/

const paragraph1 = "Me gusta mucho jugar videojuegos con Denysse";
console.log(paragraph1.replace("jugar", 'ver'));// "Me gusta mucho ver videojuegos con Denysse"

const regex1 = /Denysse/;
console.log(paragraph1.replace(regex1, 'Omar'));// "Me gusta mucho jugar videojuegos con Omar"



/* 18. String.prototype.replaceAll() | .replaceAll() | Retorna un String
    SINTAXIS: .replaceAll(patrón, reemplazo)

    Método que no modifica el valor de la cadena en la que es ejecutado. Regresa una nueva cadena.
*/

const paragraph2 = "Me gusta mucho jugar Valorant con Denysse";
console.log(paragraph2.replaceAll('jugar', 'ver'));// "Me gusta mucho ver Valorant con Denysse"

// Global flag required when calling replaceAll with regex
const regex2 = /Denysse/g;
console.log(paragraph2.replaceAll(regex2, 'Omar'));// "Me gusta mucho jugar Valorant con Omar"


/* 19. String.prototype.search() | .search() | Retorna El índice de la primera coincidencia entre 
                                               la expresión regular y el string proporcionado.
    SINTAXIS: str.search(expresionregular)

    Método que ejecuta una búsqueda que encaje entre una expresión regular y el objeto String 
    desde el que se llama.
*/

function testinput(re, str) {
    var midstring;
    if (str.search(re) != -1) {
      midstring = " contains ";
    } else {
      midstring = " does not contain ";
    }
    console.log(str + midstring + re);
  }


/* 20. String.prototype.slice() | .slice() | Retorna un String 
    SINTAXIS: cadena.slice(inicioTrozo[, finTrozo])

    Método que extrae el texto de una cadena y devuelve una nueva cadena. Los cambios en el texto 
    de una cadena no afectan a la otra cadena.
*/

var cadena1 = "La mañana se nos echa encima.";
var cadena2 = cadena1.slice(3, -2);
console.log(cadena2);// nos echa.

// con índices negativos 
var cad = "La mañana se nos echa encima.";
cad.slice(-3); // 'ma.'
cad.slice(0, -1); // 'La mañana se nos echa encima'


/* 21. String.prototype.split() | .split() | Retorna un nuevo Array
    SINTAXIS: cadena.split([separador][,limite])

    Método que divide un objeto de tipo String en un array (vector) de cadenas mediante la 
    separación de la cadena en subcadenas.
*/

// busca 0 o más espacios en una cadena y devuelve las tres primeras divisiones que encuentra.
var miCadena = "Hola Mundo. Cómo estás hoy?";
var divisiones = miCadena.split(" ", 3);
print(divisiones); // Hola,Mundo.,Cómo



/* 22. String.prototype.startsWith() | .startsWith() | Retorna un Booleano: true si se encuentra  al
 inicio de la cadena o false en cualquier otro caso.
    SINTAXIS: str.startsWith(stringBuscada[, posicion])

    Método que te permite saber si una cadena de texto comienza o no con otra cadena de texto. 
    Este método distingue entre mayúsculas y minúsculas.
*/

const str3 = 'Denysse Palomino Rojas';

console.log(str3.startsWith('Den'));// true
console.log(str3.startsWith('Ro', 2));// false


/* 23. String.prototype.substring() |  .substring() | Retorna segmentos de un Strig o un String
    SINTAXIS: cadena.substring(indiceA[, indiceB'])

    Método que devuelve un subconjunto de un objeto String.
*/

var cualquierCadena = "Mozilla";
console.log(cualquierCadena.substring(0, 3));// "Moz" 
console.log(cualquierCadena.substring(0, 7));// "Mozilla"


/* 24. String.prototype[Symbol.iterator]() | [Symbol.iterator]() | Retorna un nuevo objeto iterador
(Unicode)
    SINTAXIS: string[Symbol.iterator]()

    Método en el que los String se repiten mediante puntos de código Unicode.
*/

const str4 = "`El exorcista`, es una pelicula que me da mucho miedo aún";

const iterator = str4[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "`"
  //                  "E"
  //                  "l"
}


/* 25. String.prototype.toLocaleLowerCase() | .toLocaleLowerCase() | Retorna un String representa 
la cadena desde la que se llama 
convertida a minúsculas
    SINTAXIS: str.toLocaleLowerCase()
              str.toLocaleLowerCase(locale)
              str.toLocaleLowerCase([locale, locale, ...])

    Método que retorna la cadena de texto desde la que se llama convertida en minúsculas, de 
    acuerdo con cualquier localización específica de correspondencia de mayúsculas y minúsculas.
*/

const dotted = 'İstanbul';
console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);// "i̇stanbul"
console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);// "istanbul"


/* 26. String.prototype.toLocaleUpperCase() | .toLocaleUpperCase() | Retorna devuelve el valor de 
la cadena que lo llama convertido 
en mayúsculas.
    SINTAXIS: str.toLocaleUpperCase()
              str.toLocaleUpperCase(locale)
              str.toLocaleUpperCase([locale, locale, ...])

    Método que devuelve el valor de la cadena convertida en mayúsculas según las asignaciones de casos 
    específicos de la configuración regional.
*/

"alphabet".toLocaleUpperCase(); // 'ALPHABET'
"i\u0307".toLocaleUpperCase("lt-LT"); // 'I'
let locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
"i\u0307".toLocaleUpperCase(locales); // 'I'


/* 27. String.prototype.toLowerCase() | .toLowerCase() | Retorna el valor en minúsculas de la cadena 
                                                         que realiza la llamada.
    SINTAXIS: cadena.toLowerCase()

    Método que devuelve el valor de la cadena convertida a minúsculas. toLowerCase no afecta al 
    valor de la cadena en sí misma.
*/

var textoMayusculas = "DENYSSE";
console.log(textoMayusculas.toLowerCase());// denysse


/* 28. String.prototype.toString() | .toString() | Retorna un String que representa al objeto.
    SINTAXIS: cadena.toString()

    Método que una cadena que representa al objeto especificado.
*/

cadena1 = new String("Hello world");
console.log(cadena1.toString()); // "Hello world"

/* 29. String.prototype.toUpperCase() | .toUpperCase() | Retorna el valor convertido en mayúsculas 
                                                         de la cadena que realiza la llamada.
    SINTAXIS: cadena.toUpperCase()

    Método que devuelve el valor de la cadena convertida a mayúsculas. toUpperCase no afecta al valor
    de la cadena en sí mismo.
*/

console.log("Aaron".toUpperCase()); // "DENYSSE"


/* 30. String.prototype.toWellFormed() | .toWellFormed() | Retorna una nueva cadena que es una copia 
                                                           de esta cadena, con todos los sustitutos 
                                                           solitarios reemplazados por el carácter de 
                                                           reemplazo Unicode.
    SINTAXIS: .toWellFormed()

    Método que itera a través de las unidades de código de esta cadena y reemplaza cualquier sustituto 
    solitario con el carácter de reemplazo Unicode.
*/

const illFormed = "https://example.com/search?q=\uD800";
try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}
console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"