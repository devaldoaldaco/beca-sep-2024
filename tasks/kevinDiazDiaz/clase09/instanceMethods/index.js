/*String*/
/*String.prototype.at(): Accede a un caracter en la posición especificada
donde un valor positivo toma la cadena de inicio a fin empezando en 0 y uno
negativo lo toma de derecha a izquierda (UTF-16 porque JS lo usa para cadenas
de texto internamente)*/ 

const sentence1 = 'The quick brown fox jumps over the lazy dog.';

let index1 = 5;

console.log(`An index of ${index1} returns the character ${sentence.at(index1)}`);
// Expected output: "An index of 5 returns the character u"

index1 = -4;

console.log(`An index of ${index1} returns the character ${sentence.at(index1)}`);
// Expected output: "An index of -4 returns the character d"



/*String.prototype.charAt(): Es la misma funcionalidad de at, pero
solo acepta valores positivos*/
const sentence2 = 'The quick brown fox jumps over the lazy dog.';

const index2 = 4;

console.log(`The character at index ${index2} is ${sentence.charAt(index2)}`);
// Expected output: "The character at index 4 is q"



/*String.prototype.charCodeAt(): Devuelve el valor numérico que representa un
caracter en especifico en la codificación de caracteres UTF-16*/
const sentence3 = 'The quick brown fox jumps over the lazy dog.';

const index3 = 4;

console.log(
  `Character code ${sentence.charCodeAt(index3)} is equal to ${sentence.charAt(
    index3,
  )}`,
);
// Expected output: "Character code 113 is equal to q"



/*String.prototype.codePointAt(): se utiliza para obtener el valor del punto de 
código Unicode de un carácter el cual es universal y no depende de la codificación*/
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"



/*String.prototype.concat(): Se usa para unir dos o más cadenas de texto*/
const str11 = 'Hello';
const str21 = 'World';

console.log(str11.concat(' ', str21));
// Expected output: "Hello World"

console.log(str21.concat(', ', str11));
// Expected output: "World, Hello"



/*String.prototype.endsWith(): Se utiliza para determinar si una cadena de texto termina 
con una subcadena específica. Se puede especificar los caracteres que se quieren comparar*/
const str12 = 'Cats are the best!';

console.log(str12.endsWith('best!'));
// Expected output: true

console.log(str12.endsWith('best', 17));
// Expected output: true

const str22 = 'Is this a question?';

console.log(str22.endsWith('question'));
// Expected output: false



/*String.prototype.includes(): Se usa para determinar si una cadena de texto contiene una subcadena específica en cualquier
posición (devuelve true o false)*/
const sentence4 = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence4.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"



/*String.prototype.indexOf(): Devuelve la posición o índice de la primera aparición de la subcadena
también se le puede sumar para que busque una determinada aparición*/
const paragraph1 = "I think Ruth's dog is cuter than your dog!";

const searchTerm1 = 'dog';
const indexOfFirst = paragraph1.indexOf(searchTerm1);

console.log(`The index of the first "${searchTerm1}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm1}" is ${paragraph1indexOf(
    searchTerm1,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"



/*String.prototype.isWellFormed():determina si la cadena contiene o no suplementos huérfanos (lone surrogates).
las cuales son caracteres fuera del plano multilingue basico y deben de tener una unidad de codigo lalta y baja,
los que no contienen alguna son "huerfanos". No tiene parámetros*/
const text1 = 'Hello World'; // No contiene suplantadores
const text2 = 'A surrogate pair: \uD83D\uDE00'; // Correcto, par de suplantadores bien formado
const text3 = 'Incorrect surrogate pair: \uD83D'; // Incorrecto, falta la unidad de código baja

console.log(text1.isWellFormed()); // true
console.log(text2.isWellFormed()); // true
console.log(text3.isWellFormed()); // false



/*String.prototype.lastIndexOf(): busca la ultima aparición de una subcadena en otra cadena de texto y devuelve
el índice. Si no la encuentra devuelve -1*/
const paragraph3 = "I think Ruth's dog is cuter than your dog!";

const searchTerm3 = 'dog';

console.log(
  `Index of the last ${searchTerm3} is ${paragraph3.lastIndexOf(searchTerm3)}`,
);
// Expected output: "Index of the last "dog" is 38"



/*String.prototype.localeCompare(): compara dos cadenas y devuelve un número que indica si la cadena actual precede (-1),
sigue (1) o es igual (0) a la cadena proporcionada en el orden de clasificación local.*/
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0



/*String.prototype.match(): Se utiliza para obtener el resultado de la búsqueda de una coincidencia entre una cadena y una 
expresión regular.*/
const paragraph4 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex4 = /[A-Z]/g;
const found4 = paragraph4.match(regex4);

console.log(found);
// Expected output: Array ["T", "I"]



/*String.prototype.matchAll():  Su función es similar a match pero devuelve detalles adicionales de la coincidencia, como
el indice o la entrada*/
const paragraph5 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex5 = /[A-Z]/g;

const matches = paragraph5.matchAll(regex5);

for (const match of matches) {
  console.log(match);
}
// Expected output:
// ["T", index: 0, input: "The quick brown fox jumps over the lazy dog. It barked.", groups: undefined]
// ["I", index: 40, input: "The quick brown fox jumps over the lazy dog. It barked.", groups: undefined]



/*String.prototype.normalize(): e utiliza para normalizar una cadena de texto a una forma estándar 
de Unicode.*/
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Ame´lie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true



/*String.prototype.padEnd(): Se utiliza para rellenar una cadena de texto con caracteres adicionales al final, 
hasta alcanzar una longitud específica. Colocandp la longitud y el caracter (el default es espacio en blanco*/
const str13 = 'Breaded Mushrooms';

console.log(str13.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str23 = '200';

console.log(str23.padEnd(5));
// Expected output: "200  "



/*String.prototype.padStart(): se utiliza para rellenar una cadena de texto con caracteres adicionales al principio, hasta alcanzar una 
longitud específica. */
const str14 = '5';

console.log(str14.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"



/*String.prototype.repeat(): se utiliza para crear una nueva cadena de texto que repite la cadena original un número específico de veces. */
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "



/*String.prototype.replace(): se utiliza para reemplazar una parte de la cadena que coincide con un patrón especificado por una nueva subcadena.*/
const paragraph6 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph6.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex6 = /Dog/i;
console.log(paragraph6.replace(regex6, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"



/*String.prototype.replaceAll(): Funciona igual que replace pero este reemplaza todas las subcadens de la string que coincidan con el parámetro*/
const paragraph7 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph7.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex7 = /Dog/gi;
console.log(paragraph7.replaceAll(regex7, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"



/*String.prototype.search(): se utiliza para buscar una coincidencia con una expresión regular dentro de una cadena. Retorna el índice de la primera
coincidencia encontrada o -1 si no se encuentra ninguna coincidencia. Retorna el indice de la coincidencia*/
const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"



/*String.prototype.slice(): se utiliza para extraer una sección de una cadena y devolverla como una nueva cadena. No modifica la cadena original.
Permite indices negativos*/
const str3 = 'The quick brown fox jumps over the lazy dog.';

console.log(str3.slice(31));
// Expected output: "the lazy dog."

console.log(str3.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str3.slice(-4));
// Expected output: "dog."

console.log(str3.slice(-9, -5));
// Expected output: "lazy"



/*String.prototype.split(): se utiliza para dividir una cadena en un array de subcadenas, basándose en un delimitador especificado.*/
const str4 = 'The quick brown fox jumps over the lazy dog.';

const words2 = str4.split(' ');
console.log(words2[3]);
// Expected output: "fox"

const chars = str4.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str4.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]



/*String.prototype.startsWith(): se utiliza para determinar si una cadena comienza con una subcadena específica, devuelve true o false*/
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false



/*String.prototype.substring(): se utiliza para extraer una subcadena de una cadena principal, pero no permite indices negativos*/
const str5 = 'Mozilla';

console.log(str5.substring(1, 3));
// Expected output: "oz"

console.log(str5.substring(2));
// Expected output: "zilla"



/*String.prototype[Symbol.iterator](): Permite que las cadenas de texto sean iterables, es decir que se pueda usar "for of" u otras
estructuras de conttrol*/
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator2 = str[Symbol.iterator2]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator2.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}



/*String.prototype.toLocaleLowerCase(): convierte todos los caracteres de una cadena a minúsculas tomando en cuenta las reglas de
diferentes idiomas*/
const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"



/*String.prototype.toLocaleUpperCase(): Convierte todos los caracteres a mayusculas, tomando en cuenta las reglas de diferentes idiomas */
const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"



/*String.prototype.toLowerCase(): Convierte a minusculas los caracteres, pero no acepta otras reglas */
const sentence5 = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence5.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."



/*String.prototype.toString(): retorna el valor del string.*/
const stringObj1 = new String('foo');

console.log(stringObj1);
// Expected output: String { "foo" }

console.log(stringObj1.toString());
// Expected output: "foo"



/*String.prototype.toUpperCase(): Convierte en mayusculas la cadena de texto sin contemplar otras reglas de idioma */
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."



/*String.prototype.toWellFormed(): se encarga de reemplazar los "lone surrogates" (sustitutos solitarios) en una cadena con el 
carácter de reemplazo Unicode U+FFFD. no tiene parametros (sustituto alto y bajo)*/
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



/*String.prototype.trim(): se utiliza para eliminar los espacios en blanco SOLO al principio y al final de una cadena de texto.*/
const greeting1 = '   Hello world!   ';

console.log(greeting1);
// Expected output: "   Hello world!   ";

console.log(greeting1.trim());
// Expected output: "Hello world!";



/*String.prototype.trimEnd(): Elimiina los espacios en blanco al final de una cadena de texto*/
const greeting2 = '   Hello world!   ';

console.log(greeting2);
// Expected output: "   Hello world!   ";

console.log(greeting2.trimEnd());
// Expected output: "   Hello world!";



/*String.prototype.trimStart(): Elimina los espacios en blanco al inicio de una cadena de texto */
const greeting3 = '   Hello world!   ';

console.log(greeting3);
// Expected output: "   Hello world!   ";

console.log(greeting3.trimStart());
// Expected output: "Hello world!   ";



/*String.prototype.valueOf(): Retorna el valor del string */
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"


/*****************************************************************************************************************************************/


/*Number*/
/*Number.prototype.toExponential(): se utiliza para convertir un número en una cadena representada en 
notación científica (o notación exponencial)*/
function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}
  
console.log(expo(123456, 2));
// Expected output: "1.23e+5"
  
console.log(expo('123456'));
// Expected output: "1.23456e+5"
  
console.log(expo('oink'));
// Expected output: "NaN"
  


/*Number.prototype.toFixed(): se utiliza para formatear un número en una cadena con un número específico 
de dígitos decimales. retorna como una cadena redondeando si se ponen 0 decimales*/
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
  
console.log(financial(123.456));
// Expected output: "123.46"
  
console.log(financial(0.004));
// Expected output: "0.00"
  
console.log(financial('1.23e+5'));
// Expected output: "123000.00"
  


/*Number.prototype.toLocaleString(): Le aplica a numeros el formato de una región determinada 
transformanfolo en una cadena de texto*/
function eArabic(x) {
    return x.toLocaleString('ar-EG');
}
  
console.log(eArabic(123456.789));
// Expected output: "١٢٣٬٤٥٦٫٧٨٩"
  
console.log(eArabic('123456.789'));
// Expected output: "123456.789"
  
console.log(eArabic(NaN));
// Expected output: "ليس رقم"

  

/*Number.prototype.toPrecision(): Le da formato a un numero para que aparezcan el numero de 
digitos especificados, ya sea antes o despues del punto, redondeado y a la derecha del punto ignora los 0*/
function precise(x) {
    return x.toPrecision(4);
}
  
console.log(precise(123.456));
// Expected output: "123.5"
  
console.log(precise(0.004));
// Expected output: "0.004000"
  
console.log(precise(1.23e5));
// Expected output: "1.230e+5"



/*Number.prototype.toString():  Convierte un numero en una cadena de texto
En el ejemplo se convierte a hexadecimal*/
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
  


/*Number.prototype.valueOf(): Devuelve el valor del numero */
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"



/*****************************************************************************************************************************************/

/*Boolean.prototype.toString(): se utiliza para devolver una 
cadena que representa el valor booleano*/
const flag1 = new Boolean(true);

console.log(flag1.toString());
// Expected output: "true"

const flag2 = new Boolean(1);

console.log(flag2.toString());
// Expected output: "true"



/*Boolean.prototype.valueOf(): devuelve el valor primitivo de un 
objeto Boolean. Cuando no se coloca un valor es false por defecto*/
const x = new Boolean();

console.log(x.valueOf());
// Expected output: false

const y = new Boolean('Mozilla');

console.log(y.valueOf());
// Expected output: true


/*****************************************************************************************************************************************/

/*Date */
/*Date.prototype.getDate(): Devuelve el dia del mes del objeto datepara la fecha segun 
la hora local */
const birthday1 = new Date('August 19, 1975 23:15:30');
const date11 = birthday1.getDate();

console.log(date11);
// Expected output: 19



/*Date.prototype.getDay(): returna el dia del objeto date de la semana de acuerdo a
la hora local considerando a domingo como 0 */
const birthday2 = new Date('August 19, 1975 23:15:30');
const day12 = birthday2.getDay();
// Sunday - Saturday : 0 - 6

console.log(day12);
// Expected output: 2



/*Date.prototype.getFullYear(): Regresa el año del objeto date para la hora local */
const moonLanding1 = new Date('July 20, 69 00:20:18');

console.log(moonLanding1.getFullYear());
// Expected output: 1969



/*Date.prototype.getHours(): regresa la hora en un formato de 25 horas
de un objeto date */
const birthday3 = new Date('March 13, 08 04:20');

console.log(birthday3.getHours());
// Expected output: 4



/*Date.prototype.getMilliseconds(): Regresa los milisegundos para el objeto date
de acuerdo a la hora local */
const moonLanding2 = new Date('July 20, 69 00:20:18');
moonLanding2.setMilliseconds(123);

console.log(moonLanding2.getMilliseconds());
// Expected output: 123



/*Date.prototype.getMinutes(): regresa los minutos del objeto date de acuerdo
a la hora local */
const birthday = new Date('March 13, 08 04:20');

console.log(birthday.getMinutes());
// Expected output: 20



/*Date.prototype.getMonth(): Regresa el mes del objeto date de acuerdo a la hora
local, donde enero es 0 */
const moonLanding3 = new Date('July 20, 69 00:20:18');

console.log(moonLanding3.getMonth()); // (January gives 0)
// Expected output: 6



/*Date.prototype.getSeconds(): Regresa los segundos para el objeto date de acuerdo
a la hora local */
const moonLanding4 = new Date('July 20, 69 00:20:18');

console.log(moonLanding4.getSeconds());
// Expected output: 18



/*Date.prototype.getTime():  se utiliza para obtener el valor de tiempo en milisegundos 
desde la medianoche del 1 de enero de 1970 (también conocido como la época Unix) para el 
objeto Date especificado*/
const moonLanding5 = new Date('July 20, 69 20:17:40 GMT+00:00');

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding5.getTime());
// Expected output: -14182940000



/*Date.prototype.getTimezoneOffset():  se utiliza para obtener la diferencia, en minutos, 
entre la hora local del objeto Date y la hora UTC*/
const date13 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date23 = new Date('August 19, 1975 23:15:30 GMT-02:00');

console.log(date13.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

console.log(date13.getTimezoneOffset() === date23.getTimezoneOffset());
// Expected output: true



/*Date.prototype.getUTCDate(): Regresa el dia del mes  de una fecha en el horario UTC*/
const date14 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date24 = new Date('August 19, 1975 23:15:30 GMT-11:00');

console.log(date14.getUTCDate());
// Expected output: 19

console.log(date24.getUTCDate());
// Expected output: 20



/*Date.prototype.getUTCDay(): Regresa el dia de la semana de acuerdo al horario UTC donde
domingo es 0 */
const date15 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date25 = new Date('August 19, 1975 23:15:30 GMT-11:00');

// Tuesday
console.log(date15.getUTCDay());
// Expected output: 2

// Wednesday
console.log(date25.getUTCDay());
// Expected output: 3



/*Date.prototype.getUTCFullYear(): Regresa el año para el objeto date de acuerdo a el horario universal */
const date16 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date26 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date16.getUTCFullYear());
// Expected output: 1975

console.log(date26.getUTCFullYear());
// Expected output: 1976



/*Date.prototype.getUTCHours(): Regresa las horas del objeto date de acuerdo a el horario universal */
const date17 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date27 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date17.getUTCHours());
// Expected output: 12

console.log(date27.getUTCHours());
// Expected output: 10



/*Date.prototype.getUTCMilliseconds(): Regresa los milisegundos para el objeto date de acuerdo con el 
horario universal */
const exampleDate = new Date('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678



/*Date.prototype.getUTCMinutes(): Regresa los minutos para el objeto date de acuerdo con el 
horario universal */
const date18 = new Date('1 January 2000 03:15:30 GMT+07:00');
const date28 = new Date('1 January 2000 03:15:30 GMT+03:30');

console.log(date18.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Expected output: 15

console.log(date28.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Expected output: 45



/*Date.prototype.getUTCMonth(): Regresa el mes del año para el objeto date de acuerdo al horario
universal donde enero es 0*/
const date19 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date29 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

// December
console.log(date19.getUTCMonth());
// Expected output: 11

// January
console.log(date29.getUTCMonth());
// Expected output: 0



/*Date.prototype.getUTCSeconds(): Regresa los segundos del objeto date de acuerdo al horario universal */
const moonLanding = new Date('July 20, 1969, 20:18:04 UTC');

console.log(moonLanding.getUTCSeconds());
// Expected output: 4



/*Date.prototype.setDate(): Cambia el dia del mes para un objeto date de acuerdo a la hora local*/
const event1 = new Date('August 19, 1975 23:15:30');

event1.setDate(24);

console.log(event1.getDate());
// Expected output: 24

event1.setDate(32);
// Only 31 days in August!

console.log(event1.getDate());
// Expected output: 1



/*Date.prototype.setFullYear(): Cambia el año, mes y dia para un objeto date de acuerdo a la hora local*/
const event2 = new Date('August 19, 1975 23:15:30');

event2.setFullYear(1969);

console.log(event2.getFullYear());
// Expected output: 1969

event2.setFullYear(0);

console.log(event2.getFullYear());
// Expected output: 0



/*Date.prototype.setHours():  Cambia las horas, minutos y segundos para un objeto date de acuerdo a la hora local*/
const event3 = new Date('August 19, 1975 23:15:30');
event3.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event3.setHours(20, 21, 22);

console.log(event3);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"



/*Date.prototype.setMilliseconds(): Cambia los milisegundos para un objeto date de acuerdo a la hora local*/
const event4 = new Date('August 19, 1975 23:15:30');

console.log(event4.getMilliseconds());
// Expected output: 0

event4.setMilliseconds(456);

console.log(event4.getMilliseconds());
// Expected output: 456



/*Date.prototype.setMinutes(): Cambia los minutos para un objeto date de acuerdo a la hora local*/
const event5 = new Date('August 19, 1975 23:15:30');

event5.setMinutes(45);

console.log(event5.getMinutes());
// Expected output: 45

console.log(event5);
// Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Note: your timezone may vary



/*Date.prototype.setMonth():  Cambia el mes y/o dia del mes para un objeto date de acuerdo a la hora local*/
const event6 = new Date('August 19, 1975 23:15:30');

event6.setMonth(3);

console.log(event6.getMonth());
// Expected output: 3

console.log(event6);
// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary



/*Date.prototype.setSeconds(): Cambia los segundos y/o milisegundos para un objeto date de acuerdo a la hora local */
const event7 = new Date('August 19, 1975 23:15:30');

event7.setSeconds(42);

console.log(event7.getSeconds());
// Expected output: 42

console.log(event7);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary



/*Date.prototype.setTime():  se utiliza para establecer la fecha y hora del objeto Date en función de un valor en milisegundos 
desde la medianoche del 1 de enero de 1970 (época Unix)*/
const launchDate = new Date('July 1, 1999, 12:00:00');
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary



/*Date.prototype.setUTCDate(): cambia el dia del mes de acuerdo a el horario universal*/
const event8 = new Date('August 19, 1975 23:15:30 GMT-3:00');

console.log(event8.getUTCDate());
// Expected output: 20

event8.setUTCDate(19);

console.log(event8.getUTCDate());
// Expected output: 19



/*Date.prototype.setUTCFullYear(): cambia el año del objeto date de acuerdo a el horario universal*/
const event = new Date('December 31, 1975 23:15:30 GMT-3:00');

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"



/*Date.prototype.setUTCHours(): cambia las horas, minutos, segundos y/o milisegundos del objeto date de 
acuerdo a el horario universal*/
const event9 = new Date('August 19, 1975 23:15:30 GMT-3:00');

console.log(event9.toUTCString());
// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"

console.log(event9.getUTCHours());
// Expected output: 2

event9.setUTCHours(23);

console.log(event9.toUTCString());
// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"



/*Date.prototype.setUTCMilliseconds(): cambia los milisegundos del objeto date de acuerdo al horario universal*/
const date110 = new Date('2018-01-24T12:38:29.069Z');

console.log(date110.getUTCMilliseconds());
// Expected output: 69

date110.setUTCMilliseconds(420);

console.log(date110.getUTCMilliseconds());
// Expected output: 420



/*Date.prototype.setUTCMinutes(): cambia los minutos del objeto date de acuerdo al horario universal */
const date111 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

console.log(date111.getUTCMinutes());
// Expected output: 15

date111.setUTCMinutes(25);

console.log(date111.getUTCMinutes());
// Expected output: 25



/*Date.prototype.setUTCMonth(): cambia el mes y/o dia del objeto date de acuerdo al horario universal*/
const event10 = new Date('December 31, 1975 23:15:30 GMT-3:00');

console.log(event10.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event10.getUTCMonth());
// Expected output: 0

event10.setUTCMonth(11);

console.log(event10.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"



/*Date.prototype.setUTCSeconds(): cambia los segundos y/o milisegundos del objeto date de acuerdo al horario universal */
const date112 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

console.log(date112.getUTCSeconds());
// Expected output: 30

date112.setUTCSeconds(39);

console.log(date112.getUTCSeconds());
// Expected output: 39



/*Date.prototype[Symbol.toPrimitive](): permite personalizar la conversión del objeto Date a un valor primitivo en 
diferentes contextos*/
// Depending on timezone, your results will vary
const date = new Date('20 December 2019 14:48');

console.log(date[Symbol.toPrimitive]('string'));
// Expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]('number'));
// Expected output: 1576833480000



/*Date.prototype.toDateString(): se utiliza para obtener una representación en cadena de la fecha del objeto Date */
const event11 = new Date(1993, 6, 28, 14, 39, 7);

console.log(event11.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event11.toDateString());
// Expected output: "Wed Jul 28 1993"



/*Date.prototype.toISOString(): se utiliza para obtener una representación de la fecha y la hora del objeto Date en 
formato de cadena de acuerdo con el estándar ISO 8601. Este formato es una cadena en el formato "YYYY-MM-DDTHH:mm:ss.sssZ"*/
const event12 = new Date('05 October 2011 14:48 UTC');
console.log(event12.toString());
// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event12.toISOString());
// Expected output: "2011-10-05T14:48:00.000Z"



/*Date.prototype.toJSON(): devuelve una cadena en el formato ISO 8601 que representa la fecha y la hora del objeto Date*/
const event13 = new Date('August 19, 1975 23:15:30 UTC');

const jsonDate = event13.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"



/*Date.prototype.toLocaleDateString(): se utiliza para obtener una representación en cadena de la fecha del objeto Date, 
adaptada a la configuración regional (localización) del entorno en el que se ejecuta */
const event14 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event14.toLocaleDateString('de-DE', options));
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

console.log(event14.toLocaleDateString('ar-EG', options));
// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event14.toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012



/*Date.prototype.toLocaleString(): Devuelve una cadena que representa la fecha y la hora del objeto Date en un formato adaptado 
a la configuración regional. Si no se proporcionan argumentos, el formato dependerá de la configuración regional del entorno.*/
const event15 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event15.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event15.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// Expected output: "2012. 12. 20. 오전 3:00:00"



/*Date.prototype.toLocaleTimeString(): Devuelve una cadena que representa la hora del objeto Date en un formato adaptado a la 
configuración regional*/
// Depending on timezone, your results will vary
const event16 = new Date('August 19, 1975 23:15:30 GMT+00:00');

console.log(event16.toLocaleTimeString('en-US'));
// Expected output: "1:15:30 AM"

console.log(event16.toLocaleTimeString('it-IT'));
// Expected output: "01:15:30"

console.log(event16.toLocaleTimeString('ar-EG'));
// Expected output: "١٢:١٥:٣٠ ص"



/*Date.prototype.toString(): Regresa un string que representa lal objeto date interpretado en el horario local */
const event17 = new Date('August 19, 1975 23:15:30');

console.log(event17.toString());
// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary



/*Date.prototype.toTimeString(): devuelve una cadena que representa la hora del objeto Date sin tomar en cuenta 
configuraciones regionales */
const event18 = new Date('August 19, 1975 23:15:30');

console.log(event18.toTimeString());
// Expected output: "23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary



/*Date.prototype.toUTCString():  convierte la fecha y hora de un objeto Date en una cadena en formato UTC siguiendo el
estándar RFC 1123*/
const event19 = new Date('14 Jun 2017 00:00:00 PDT');

console.log(event19.toUTCString());
// Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"



/*Date.prototype.valueOf(): devuelve el valor en milisegundos desde el 1 de enero de 1970, 00:00:00 UTC (la época Unix) 
hasta la fecha y hora representadas por el objeto Date */
const date113 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date113.valueOf());
// Expected output: 823230245000

const date213 = new Date('02 Feb 1996 03:04:05 GMT');

console.log(date213.valueOf());
// Expected output: 823230245000


/*****************************************************************************************************************************************/

/*Array */
/*Array.prototype.at():  permite acceder a un elemento en una posición específica de un arreglo, utilizando un índice que 
puede ser positivo o negativo*/
const array11 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array11.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array11.at(index)}`);
// Expected output: "An index of -2 returns 130"



/*Array.prototype.concat(): combina dos o más arreglos en uno nuevo */
const array12 = ['a', 'b', 'c'];
const array22 = ['d', 'e', 'f'];
const array32 = array12.concat(array22);

console.log(array32);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]



/*Array.prototype.copyWithin():  se utiliza para copiar una parte de un 
arreglo a otra posición dentro del mismo arreglo. El tercer parámnetro es
el limite del numero de elementos a copiar*/
const array13 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array13.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array13.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]



/*Array.prototype.entries(): se usa para devolver un nuevo objeto iterador que contiene
los pares clave para cada indice del arreglo dando el indice y el contenido*/
const array14 = ['a', 'b', 'c'];

const iterator14 = array14.entries();

console.log(iterator14.next().value);
// Expected output: Array [0, "a"]

console.log(iterator14.next().value);
// Expected output: Array [1, "b"]



/*Array.prototype.every(): verifica si todos los elementos de un arreglo cumplen con una
condición especificada en una función de prueba.*/
const isBelowThreshold = (currentValue) => currentValue < 40;

const array15 = [1, 30, 39, 29, 10, 13];

console.log(array15.every(isBelowThreshold));
// Expected output: true



/*Array.prototype.fill(): se utiliza para llenar todos los elementos de un arreglo con un 
valor estático colocando un indice de inicio y final*/
const array16 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array16.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array16.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array16.fill(6));
// Expected output: Array [6, 6, 6, 6]



/*Array.prototype.filter(): crea un nuevo arreglo con todos los elementos que cumplan 
con la condición implementada por una función proporcionada*/
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter((word) => word.length > 6);

console.log(result1);
// Expected output: Array ["exuberant", "destruction", "present"]



/*Array.prototype.find(): Regresa el primer elemento en un array que satisface una condición especifica
si no hay, regresa "undefined" */
const array17 = [5, 12, 8, 130, 44];

const found7 = array17.find((element) => element > 10);

console.log(found7);
// Expected output: 12



/*Array.prototype.findIndex(): Retorna el indice del primer elemento que cumple con una condición específica
si no hay, regresa -1 */
const array18 = [5, 12, 8, 130, 44];

const isLargeNumber8 = (element) => element > 13;

console.log(array18.findIndex(isLargeNumber8));
// Expected output: 3



/*Array.prototype.findLast(): devuelve el último elemento de un arreglo que cumpla con la condición, si no hay
ninguno refresa "undefined" */
const array19 = [5, 12, 50, 130, 44];

const found = array19.findLast((element) => element > 45);

console.log(found);
// Expected output: 130



/*Array.prototype.findLastIndex(): Regresa el indice del ultimo elemento que cumple con la condicion, si no hay regresa -1 */
const array110 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array110.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130



/*Array.prototype.flat(): Crea un nuevo arreglo con todos los sub-arreglos concatenados hasta la profundidad especificada */
const arr11 = [0, 1, 2, [3, 4]];

console.log(arr11.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr21 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr21.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr21.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr21.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]



/*Array.prototype.flatMap():  primero mapea cada elemento del arreglo utilizando una función de mapeo y luego aplana el 
resultado en un solo nivel, combina flat y map*/
const arr1 = [1, 2, 1];

const result2 = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result2);
// Expected output: Array [1, 2, 2, 1]



/*Array.prototype.forEach(): ejecuta una función proporcionada una vez por cada elemento del arreglo, en orden
pero no devuelve un nuevo arreglo */
const array111 = ['a', 'b', 'c'];

array111.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



/*Array.prototype.includes(): determina si un arreglo contiene un elemento específico, devolviendo true o false */
const array112 = [1, 2, 3];

console.log(array112.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false



/*Array.prototype.indexOf(): devuelve el primer índice en el que se encuentra un elemento dado en un arreglo, o -1 
si el elemento no está */
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1



/*Array.prototype.join(): une todos los elementos de un arreglo en una sola cadena, separando los elementos con un 
separador especificado, usando la "," por defecto*/
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"



/*Array.prototype.keys(): devuelve un nuevo objeto iterador de arreglos que contiene los índices de cada elemento 
en el arreglo*/
const array113 = ['a', 'b', 'c'];
const iterator13 = array113.keys();

for (const key of iterator13) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2



/*Array.prototype.lastIndexOf():  devuelve el último índice en el que se encuentra un elemento dado en un arreglo, o -1
si no está*/
const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals1.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals1.lastIndexOf('Tiger'));
// Expected output: 1



/*Array.prototype.map(): crea un nuevo arreglo con los resultados de aplicar una función proporcionada a cada elemento 
del arreglo original*/
const array114 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array114.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]



/*Array.prototype.pop(): modifica el arreglo original y reduce su longitud en 1. Devuelve el elemento eliminado*/
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]



/*Array.prototype.push(): agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo*/
const animals3 = ['pigs', 'goats', 'sheep'];

const count = animals3.push('cows');
console.log(count);
// Expected output: 4
console.log(animals3);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals3.push('chickens', 'cats', 'dogs');
console.log(animals3);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]



/*Array.prototype.reduce(): aplica una función a un acumulador y a cada elemento del arreglo para reducirlo a un solo valor
de izquierda a derecha*/
const array115 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array115.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10




/*Array.prototype.reduceRight():  Similar a reduce pero lo realiza de derecha a izquierda*/
const array116 = [
    [0, 1],
    [2, 3],
    [4, 5],
];
  
const result = array116.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
);
  
console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]

  

/* Array.prototype.reverse(): invierte el orden de los elementos en un arreglo*/
const array117 = ['one', 'two', 'three'];
console.log('array1:', array117);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array117.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array117);
// Expected output: "array1:" Array ["three", "two", "one"]



/*Array.prototype.shift(): elimina el primer elemento de un arreglo y lo devuelve*/
const array118 = [1, 2, 3];

const firstElement = array118.shift();

console.log(array118);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1



/*Array.prototype.slice(): devuelve una copia superficial de una porción del arreglo 
dentro de un nuevo arreglo creado desde el inicio hasta el final (pero sin incluir el 
elemento en el índice final) y no modifica el arreglo original*/
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



/*Array.prototype.some(): prueba si al menos un elemento del arreglo cumple 
con la condición especificada en una función de prueba regresa true o false*/
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true



/*Array.prototype.sort(): ordena los elementos de un arreglo modificando el arreglo original
y devolviendo el arreglo nuevo */
const months1 = ['March', 'Jan', 'Feb', 'Dec'];
months1.sort();
console.log(months1);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array119 = [1, 30, 4, 21, 100000];
array119.sort();
console.log(array119);
// Expected output: Array [1, 100000, 21, 30, 4]



/*Array.prototype.splice(): permite cambiar el contenido de un arreglo eliminando, reemplazando (1) 
o añadiendo elementos (0)*/
const months5 = ['Jan', 'March', 'April', 'June'];
months5.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months5);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months5.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months5);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



/*Array.prototype[Symbol.iterator](): permite que el arreglo sea iterado utilizando construcciones 
de iteración como for of*/
const array120 = ['a', 'b', 'c'];
const iterator1 = array120[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



/*Array.prototype.toLocaleString(): devuelve una cadena de texto representando los elementos del 
arreglo, utilizando el formato local especificado.*/
const array121 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array121.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary



/*Array.prototype.toReversed(): devuelve una nueva versión del arreglo con sus elementos en orden 
inverso, sin modificar el arreglo original*/
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]



/*Array.prototype.toSorted(): devuelve una nueva versión del arreglo con sus elementos ordenados 
según el criterio de comparación especificado, sin modificar el arreglo original*/
const months6 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months6.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months6); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]



/*Array.prototype.toSpliced():  permite modificar un arreglo al eliminar y/o reemplazar elementos en 
una posición específica, devolviendo un nuevo arreglo con los elementos modificados pero no modifica el arreglo original*/
const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]



/*Array.prototype.toString(): convierte un arreglo a una cadena de texto, uniendo todos sus elementos con comas */
const array123 = [1, 2, 'a', '1a'];

console.log(array123.toString());
// Expected output: "1,2,a,1a"



/*Array.prototype.unshift(): se utiliza para añadir uno o más elementos al inicio de un arreglo, desplazando los 
elementos existentes hacia el final. */
const array124 = [1, 2, 3];

console.log(array124.unshift(4, 5));
// Expected output: 5

console.log(array124);
// Expected output: Array [4, 5, 1, 2, 3]



/*Array.prototype.values(): devuelve un nuevo objeto Array Iterator que itera cada elemento del arreglo*/
const array125 = ['a', 'b', 'c'];
const iterator = array125.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



/*Array.prototype.with(): permite crear una copia de un arreglo con un elemento modificado en una posición específica, pero no modifica
el arreglo original a diferencia de splice(), slice() owith()*/
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]


/*****************************************************************************************************************************************/

/*Object */
/*Object.prototype.hasOwnProperty(): se usa para determinar si un objeto tiene una propiedad específica como una propiedad propia, no heredada */
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false



/*Object.prototype.isPrototypeOf(): se utiliza para verificar si un objeto está en la cadena de prototipos de otro objeto */
function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar();

console.log(Foo.prototype.isPrototypeOf(bar));
// Expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));
// Expected output: true



/*Object.prototype.propertyIsEnumerable(): se utiliza para determinar si una propiedad específica de un objeto es enumerable
es decir que aparece en un bucle y es accesible mediante Object.keys()*/
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



/*Object.prototype.toLocaleString(): se utiliza para convertir un objeto en una cadena de texto, de acuerdo con la configuración 
regional y las opciones locales */
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString('ar-EG'));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString('de-DE'));
// Expected output: "123.456,789"



/*Object.prototype.toString(): devuelve una cadena que representa el objeto en un formato específico */
function Dog(name) {
    this.name = name;
}
  
const dog1 = new Dog('Gabby');
  
Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
};
  
console.log(dog1.toString());
// Expected output: "Gabby"

  

/*Object.prototype.valueOf():  devuelve el valor primitivo de un objeto*/
  function MyNumberType(n) {
    this.number = n;
}
  
MyNumberType.prototype.valueOf = function () {
    return this.number;
};
  
const object1 = new MyNumberType(4);
  
console.log(object1 + 3);
// Expected output: 7
  
