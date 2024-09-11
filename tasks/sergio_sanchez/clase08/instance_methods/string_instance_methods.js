// String - instance methods
/* String.prototype.at() : Es para traer a letra en espesifico, depenediendo su posicion*/
const myString = "Every green bus drives fast.";
const atWay = myString.at(2);
console.log(atWay); // 't'

/* String.prototype.charAt() : Mismo caso se puede tarer una letra en espesifico, dependiendo la posicion*/
const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);

/* String.prototype.charCodeAt() : Te trae el codigo de la letra, numero, caracter, etc*/
"ABC".charCodeAt(0); // returns 65

/* String.prototype.codePointAt() : alores devuelve un entero no negativo que es el valor del punto de código Unicode del carácter que comienza en el índice indicado*/
const icons = '☃★♲';
console.log(icons.codePointAt(1)); // Expected output: "9733"

/* String.prototype.concat() : Se usa para unir string*/
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Expected output: "Hello World"

/* String.prototype.endsWith() : Validar si la ultima palabra existe en la cadena de texto y se puede calcular hasta que ultima letra empieza 1*/
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!')); // Expected output: true
console.log(str1.endsWith('best', 17)); // Expected output: true

/* String.prototype.includes() : Validar si la palabra existe en la cadena de texto*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
); // Expected output: "The word "fox" is in the sentence"

/* String.prototype.indexOf() : Te muestra en que posiscion se encuentra la palabra*/
const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`); // Expected output: "The index of the first "dog" is 15"

/* String.prototype.isWellFormed() : Trae un valos true o false si la cadena esta malo bien formada*/
const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "c\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.isWellFormed());
  }
  // Logs:
  // false
  // false
  // false
  // false
  // true
  // true

/* String.prototype.lastIndexOf() : Busca la ultima palabra que deseas buscar*/
const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);

/* String.prototype.localeCompare() : Compara el strin si es igual da 1 si no es igual -1 y omite letras especiales*/
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase
console.log(a.localeCompare(b)); // Expected output: 1

/* String.prototype.match() : Hace un tipo filtro para poder hacer un array con la informacion filtrada*/
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // Expected output: Array ["T", "I"]

/* Cadena.prototipo.matchAll() : Hace un array con mucha mas informacion y cosas dependiendo lo que se busca*/
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]); // Expected output: Array ["test1", "e", "st1", "1"]

/* String.prototype.normalize() : Hace que la cadena de string y el tamaño queden iguales*/
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(`${name1}, ${name2}`);// Expected output: "Amélie, Amélie"
console.log(name1 === name2);// Expected output: false
console.log(name1.length === name2.length);// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');
console.log(`${name1NFC}, ${name2NFC}`);// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);// Expected output: true
console.log(name1NFC.length === name2NFC.length);// Expected output: true

/* String.prototype.padEnd() : Agrega espacios al final de la frase o palabra de lado izquierdo se agrega hasta que posisicion y de la do derecho se agrega que se colocara*/
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));// Expected output: "Breaded Mushrooms........"

const str2 = '200';
console.log(str2.padEnd(5));// Expected output: "200  "

/* String.prototype.padStart() : Se agrega al inicio lo que se le indica y hasta cuantas posiciones agregar */
const str1 = '5';
console.log(str1.padStart(2, '0'));// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber);// Expected output: "************5581"

/* String.prototype.repeat() : Se repite la cadena de texto que se indica */
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);// Expected output: "I feel Happy! Happy! Happy! "

/* String.prototype.replace() : Remplaza la primera letra o palabras por lo que le inidacas */
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("Ruth's", 'my'));// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));// Expected output: "I think Ruth's ferret is cuter than your dog!"

/* String.prototype.replaceAll() : Remplaza todas las letras o palabras por lo que se le indica */
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replaceAll('dog', 'monkey'));// Expected output: "I think Ruth's monkey is cuter than your monkey!"

const regex = /Dog/gi; // Global flag required when calling replaceAll with regex
console.log(paragraph.replaceAll(regex, 'ferret'));// Expected output: "I think Ruth's ferret is cuter than your ferret!"

/* String.prototype.search() : Busca la palabra o letra que se le indica si enceuntra regresa el numero de la posicion y si no la encunetra un valor negativo*/
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation

/* String.prototype.slice() : Se puede inidcar desde que posicion quieres que solo muestre el texto*/
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));// Expected output: "the lazy dog."
console.log(str.slice(4, 19));// Expected output: "quick brown fox"
console.log(str.slice(-4));// Expected output: "dog."
console.log(str.slice(-9, -5));// Expected output: "lazy"

/* String.prototype.split() : Hace un array desde tu lo inidques */
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

/* String.prototype.startsWith() : Busca desde el inicio si existe lo que estamos buscando, aparte se le puede indicar desde donde empieza y aroja un true o false*/
const str = "To be, or not to be, that is the question.";
console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true

/* String.prototype.substring() : Se extrae las posiciones que se le indica al texto */
const str = 'Mozilla';
console.log(str.substring(1, 3));// Expected output: "oz"
console.log(str.substring(2));// Expected output: "zilla"

/* String.prototype[Symbol.iterator]() : Cada letra se vuelva un array y se puede usar con for o while*/
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}

/* String.prototype.toLocaleLowerCase() : valores devuelve esta cadena convertida a minúsculas, de acuerdo con cualquier asignación de mayúsculas y minúsculas específica de la configuración regional.*/
const dotted = 'Istanbul';
console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);// Expected output: "i̇stanbul"
console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);// Expected output: "istanbul"

/* String.prototype.toLocaleUpperCase() : valores devuelve esta cadena convertida a mayúsculas, de acuerdo con cualquier asignación de mayúsculas y minúsculas específica de la configuración regional.*/
const city = 'istanbul';
console.log(city.toLocaleUpperCase('en-US'));// Expected output: "ISTANBUL"
console.log(city.toLocaleUpperCase('TR'));// Expected output: "İSTANBUL"

/* String.prototype.toLowerCase() : Convierte toda las letras en minúsculas*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());// Expected output: "the quick brown fox jumps over the lazy dog."

/* String.prototype.toString() : Pasa a string un array o un objeto */
const stringObj = new String('foo');
console.log(stringObj);// Expected output: String { "foo" }
console.log(stringObj.toString());// Expected output: "foo"

/* String.prototype.toUpperCase() : Pasa todas las letras a mayusculas */
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

/* String.prototype.toWellFormed() : valores devuelve una cadena donde todos los sustitutos solitarios de esta cadena se reemplazan con el carácter de reemplazo Unicode U+FFFD. */
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];
for (const str of strings) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"

/* String.prototype.trim() : Elimina los espacion iniciales y finales */
const greeting = '   Hello world!   ';
console.log(greeting);// Expected output: "   Hello world!   ";
console.log(greeting.trim());// Expected output: "Hello world!";

/* String.prototype.trimEnd() : Elimina los espacios del final */
const greeting = '   Hello world!   ';
console.log(greeting);// Expected output: "   Hello world!   ";
console.log(greeting.trimEnd());// Expected output: "   Hello world!";

/* String.prototype.trimStart() : Elimina los espacios del inicio */
const greeting = '   Hello world!   ';
console.log(greeting);// Expected output: "   Hello world!   ";
console.log(greeting.trimStart());// Expected output: "Hello world!   ";

/* String.prototype.valueOf() : Pasa a string un array o un objeto */
const stringObj = new String('foo');
console.log(stringObj);// Expected output: String { "foo" }
console.log(stringObj.valueOf());// Expected output: "foo"