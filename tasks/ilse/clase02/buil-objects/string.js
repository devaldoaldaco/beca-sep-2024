// String
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

const str1 = 'Ilse';
const str2 = 'Castillo';
console.log(str1.concat(' ', str2));// "Ilse Castillo"
console.log(str2.concat(', ', str1));// "Castillo, Ilse"


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

var cualquierCadena = "Hola soy Ilse Castillo";

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

"ilse".lastIndexOf("s"); // 5
"ilse".lastIndexOf("s", 6); // 2
"ilse".lastIndexOf("a", 0); // -1
"ilse".lastIndexOf("x"); // -1


/* 10. String.prototype.localeCompare() | .localeCompare() | Retorna un número 
    SINTAXIS: .localeCompare(compareString);
              .localeCompare(compareString, locales);
              .localeCompare(compareString, locales, options);

    Método que retorna un número indicando si una cadena de carateres de referencia va antes, 
    después o si es la misma que la cadena dada en orden alfabético.
*/

// La letra "a" va antes que "c" por lo que entrega un valor negativo
"a".localeCompare("c"); // -2 o -1 (o cualquier otro valor negativo)
// Alfabéticamente la palabra "gavi" va después que "ilse" por lo que resulta en un valor positivo.
"gavi".localeCompare("ilse"); // 2 o 1 (u otro valor positivo)


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

"ils".padEnd(10);
"ils".padEnd(10, "foo"); 
"ils".padEnd(6, "123456"); 
"ils".padEnd(1);

/* 15. String.prototype.padStart() | .padStart() | Retorna un String
    SINTAXIS: adStart(targetLength [, padString])

    Método que rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que 
    la cadena resultante alcance una longitud dada. 
*/

"ils".padStart(10); 
"ils".padStart(10, "foo"); 
"ils".padStart(6, "123465"); 

/* 16. String.prototype.repeat() | .repeat() | Retorna un String
    SINTAXIS: str.repeat(count);

    Método que construye y devuelve una nueva cadena que contiene el número especificado de 
    copias de la cadena en la cual fue llamada, concatenados.
*/

"ils".repeat(-1);
"ils".repeat(0); 
"ils".repeat(1); 
"ils".repeat(2); 

/* 17. String.prototype.replace() | .replace() | Retorna un String  
    SINTAXIS: replace(patrón, reemplazo)

    Método que no cambia el valor de la cadena sobre la que se realiza la llamada. Devuelve una 
    nueva cadena.
*/

const paragraph1 = "Me gusta mucho jugar videojuegos con Ilse";
console.log(paragraph1.replace("jugar", 'ver'));
const regex1 = /Ilse/;
console.log(paragraph1.replace(regex1, 'Gavi'));


/* 18. String.prototype.replaceAll() | .replaceAll() | Retorna un String
    SINTAXIS: .replaceAll(patrón, reemplazo)

    Método que no modifica el valor de la cadena en la que es ejecutado. Regresa una nueva cadena.
*/

const paragraph2 = "Me gusta mucho ver peliculas";
console.log(paragraph2.replaceAll('jugar', 'ver'));

// Global flag required when calling replaceAll with regex
const regex2 = /Ilse/g;
console.log(paragraph2.replaceAll(regex2, 'Gavi'));

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

const str3 = 'Ilse Castillo Bermudez';

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

var textoMayusculas = "Ilse";
console.log(textoMayusculas.toLowerCase());

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

console.log("ilse".toUpperCase()); 


/* 30. String.prototype.toWellFormed() | .toWellFormed() | Retorna una nueva cadena que es una copia 
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