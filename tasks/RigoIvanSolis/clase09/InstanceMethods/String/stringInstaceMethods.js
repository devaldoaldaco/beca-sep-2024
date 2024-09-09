/* Cadena.prototype.at(): te da el carácter en la posición index, donde los índices negativos cuentan desde el final de la cadena.*/

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

console.log('-----------------------------------------------------------------------------');

/* Cadena.prototype.charAt(): devuelve el carácter en una posición específica de una cadena. 
NOTA: charAt() solo maneja índices positivos y devuelve una cadena vacía para índices negativos, 
mientras que at() maneja tanto índices positivos como negativos,  */

const cadena = 'Hola';
const caracter = cadena.charAt(2); // Aquí '2' es el índice que queremos

console.log(caracter); // Imprime 'l'

console.log('-----------------------------------------------------------------------------');

/* String.prototype.charCodeAt(): evuelve el valor numérico del carácter en una posición 
específica de una cadena, utilizando el valor de su código de punto Unicode. 
NOTA: Unicode es un sistema para asignar números únicos a caracteres, y estos números se 
codifican en binario usando distintos formatos de codificación.*/

const cadenaAt = 'Hola';
const codigo = cadenaAt.charCodeAt(1); // Aquí '1' es el índice que queremos

console.log(codigo); // Imprime 111

console.log('-----------------------------------------------------------------------------');

/* String.prototype.codePointAt(): dice el código numérico de un carácter en una cadena de t
exto.*/

let texto = "Hola";
let codigoPoint = texto.codePointAt(0); // Obtiene el código del primer carácter

console.log(codigoPoint); // Muestra el código numérico de 'H', que es 72

console.log('-----------------------------------------------------------------------------');

/* String.prototype.concat(): concatena los argumentos de cadena a esta cadena y devuelve una
 nueva cadena.*/

let saludo = "Hola";
let nombre = "Mundo";
let mensaje = saludo.concat(" ", nombre); // Une las cadenas con un espacio entre ellas

console.log(mensaje); // Muestra "Hola Mundo"

console.log('-----------------------------------------------------------------------------');

/* Cadena.prototipo.endsWith(): determina si una cadena termina con los caracteres de esta 
cadena, devolviendo trueo falsesegún corresponda.*/

let mensaje2 = "Hola Mundo";

let terminaConMundo = mensaje2.endsWith("Mundo"); // Verifica si 'mensaje' termina con "Mundo"
console.log(terminaConMundo); // Muestra true

let terminaConHola = mensaje2.endsWith("Hola"); // Verifica si 'mensaje' termina con "Hola"
console.log(terminaConHola); // Muestra false

console.log('-----------------------------------------------------------------------------');

/* Cadena.prototipo.includes(): realiza una búsqueda que distingue entre mayúsculas y minúsculas 
para determinar si una cadena dada se puede encontrar dentro de esta cadena, y devuelve trueo false
según corresponda. */

let texto2 = "Hola Mundo";

let contieneMundo = texto2.includes("Mundo"); // Verifica si 'texto' contiene "Mundo"
console.log(contieneMundo); // Muestra true

console.log('-----------------------------------------------------------------------------');

/* Cadena.prototype.indexOf(): ncuentra la posición de la primera aparición de una subcadena 
dentro de una cadena.*/

let textoOf = "Hola Mundo";

let posicionMundo = textoOf.indexOf("Mundo"); // Encuentra la posición de "Mundo"
console.log(posicionMundo); // Muestra 5

console.log('-----------------------------------------------------------------------------');

/* Cadena.prototype.isWellFormed(): busca esta cadena y devuelve el índice de la última aparición 
de la subcadena especificada. */

let textoF = "Hola Mundo Mundo";

let ultimaPosicionMundo = textoF.lastIndexOf("Mundo"); // Encuentra la última posición de "Mundo"
console.log(ultimaPosicionMundo); // Muestra 11

console.log('-----------------------------------------------------------------------------');

/* String.prototype.localeCompare(): compara dos cadenas de texto de acuerdo con la configuración local y devuelve un número que 
indica su orden relativo. */

let a = "apple";
let b = "banana";

let comparacion = a.localeCompare(b); // Compara 'apple' con 'banana'
console.log(comparacion); // Muestra -1, porque 'apple' va antes que 'banana'

console.log('-----------------------------------------------------------------------------');

/* String.prototype.match(): busca coincidencias en una cadena de texto utilizando una expresión regular y devuelve un 
array con los resultados encontrados.*/

let textoM = "El sol es brillante y el cielo es azul";

// Expresión regular para encontrar la palabra "es"
let coincidencias = textoM.match(/es/g); // 'g' indica que queremos todas las coincidencias

console.log('-----------------------------------------------------------------------------');

/* String.prototype.matchAll(): encuentra todas las coincidencias de una expresión regular 
en una cadena y devuelve un iterador de todas las coincidencias.  */

let textoAl = "El sol es brillante y el cielo es azul";

// Expresión regular para encontrar todas las apariciones de "es"
let coincidenciasA = textoAl.matchAll(/es/g); // 'g' indica que queremos todas las coincidencias

// Convertimos el iterador a un array para mostrar los resultados
let resultado = Array.from(coincidenciasA);

console.log(resultado);
// Muestra: [[ 'es', index: 11, input: 'El sol es brillante y el cielo es azul', groups: undefined ],
//          [ 'es', index: 36, input: 'El sol es brillante y el cielo es azul', groups: undefined ]]

console.log('-----------------------------------------------------------------------------');

/* String.prototype.padEnd(): grega caracteres al final de una cadena hasta alcanzar una longitud 
deseada. Es útil cuando necesitas alinear texto o rellenar cadenas.   */

let textoE = "Hola";

// Agregar caracteres al final para que la cadena tenga una longitud de 10
let textoRellenado = textoE.padEnd(10, '*');

console.log(textoRellenado); // Muestra "Hola******"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.padStart(): agrega caracteres al principio de una cadena en lugar de al final.*/

let textoS = "Hola";

// Agregar caracteres al principio para que la cadena tenga una longitud de 10
let textoRellenadoInicio = textoS.padStart(10, '*');

console.log(textoRellenadoInicio); // Muestra "******Hola"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.repeat(): crea y devuelve una nueva cadena que consiste en la cadena original 
repetida un número específico de veces.*/

let textoR = "Hola ";

// Repetir la cadena 3 veces
let textoRepetido = textoR.repeat(3);

console.log(textoRepetido); // Muestra "Hola Hola Hola "

console.log('-----------------------------------------------------------------------------');

/*String.prototype.replace(): se usa para reemplazar una parte de una cadena de texto por otra.*/

let textoC = "Hola mundo";
let nuevoTexto = textoC.replace("mundo", "universo");
console.log(nuevoTexto);  // Salida: "Hola universo"

console.log('-----------------------------------------------------------------------------');

/*String.prototype.replaceAll(): se usa para reemplazar todas las ocurrencias de una parte de una 
cadena de texto por otra.*/

let textoU = "Hola mundo, mundo es grande";
let nuevoTextoU = textoU.replaceAll("mundo", "universo");
console.log(nuevoTextoU);  // Salida: "Hola universo, universo es grande"

console.log('-----------------------------------------------------------------------------');

/*String.prototype.search(): se usa para encontrar la posición de la primera ocurrencia de una 
cadena de texto o una expresión regular dentro de otra cadena. */

let textoSe = "Hola mundo";
let posicion = textoSe.search("mundo");
console.log(posicion);  // Salida: 5

console.log('-----------------------------------------------------------------------------');

/*String.prototype.slice(): se usa para extraer una parte de una cadena de texto, sin modificar la cadena original.
 Devuelve una nueva cadena que es una porción de la original.*/

let textoSli = "Hola mundo";
let parte = textoSli.slice(0, 4);
console.log(parte);  // Salida: "Hola"

console.log('-----------------------------------------------------------------------------');

/*String.prototype.split(): se usa para dividir una cadena de texto en un array de subcadenas, 
basándose en un delimitador que defines. */

let textoDiv = "manzana,banana,pera";
let frutas = textoDiv.split(",");
console.log(frutas);  // Salida: ["manzana", "banana", "pera"]

console.log('-----------------------------------------------------------------------------');
/* String.prototype.startsWith(): se usa para verificar si una cadena de texto comienza con una 
subcadena específica. Devuelve true si es así y false en caso contrario.*/

let textoW = "Hola mundo";
let empiezaConHola = textoW.startsWith("Hola");
console.log(empiezaConHola);  // Salida: true

console.log('-----------------------------------------------------------------------------');

/* String.prototype[Symbol.iterator](): te permite iterar sobre los caracteres de una cadena de
 texto, como si fuera una colección.*/
 let textoI = "Hola";
 let iterador = textoI[Symbol.iterator]();
 
 console.log(iterador.next().value);  // Salida: "H"
 console.log(iterador.next().value);  // Salida: "o"
 console.log(iterador.next().value);  // Salida: "l"
 console.log(iterador.next().value);  // Salida: "a"
 console.log(iterador.next().value);  // Salida: undefined

 console.log('-----------------------------------------------------------------------------');

 /* String.prototype.toLocaleLowerCase(): e usa para convertir todos los caracteres de una cadena 
 de texto a minúsculas, teniendo en cuenta las reglas de la configuración regional (locale). */

let textoT = "Hola Mundo";
let textoEnMinusculas = textoT.toLocaleLowerCase();
console.log(textoEnMinusculas);  // Salida: "hola mundo"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.toLocaleUpperCase(): se usa para convertir todos los caracteres de una cadena 
de texto a mayúsculas, teniendo en cuenta las reglas de la configuración regional (locale). */

let textom = "Hola Mundo";
let textoEnMayusculas = textom.toLocaleUpperCase();
console.log(textoEnMayusculas);  // Salida: "HOLA MUNDO"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.toLowerCase(): e usa para convertir todos los caracteres de una cadena de texto a
 minúsculas. */

let cadena1 = "JavaScript";
let cadena2 = "javascript";

if (cadena1.toLowerCase() === cadena2.toLowerCase()) {
  console.log("Las cadenas son iguales.");
} else {
  console.log("Las cadenas son diferentes.");
}
// Salida: "Las cadenas son iguales."

console.log('-----------------------------------------------------------------------------');

/* String.prototype.toString(): convierte el objeto de tipo String en una cadena de texto. 
Es una forma de asegurarse de que el valor sea una cadena. */

let textoP = "Hola mundo";  // Cadena primitiva
let textoComoCadena = textoP.toString();
console.log(textoComoCadena);  // Salida: "Hola mundo"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.toUpperCase(): se usa para convertir todos los caracteres de una cadena de 
texto a mayúsculas.*/
let textoMa = "hola mundo";
let textoEnMayusculas2 = textoMa.toUpperCase();
console.log(textoEnMayusculas2); // Salida: "HOLA MUNDO"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.trim(): se usa para eliminar los espacios en blanco al principio y al final 
de una cadena de texto. */
let textoConEspacios = "   hola mundo   ";
let textoSinEspacios = textoConEspacios.trim();
console.log(textoSinEspacios); // Salida: "hola mundo"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.trimEnd() y String.prototype.trimStart(): Estos métodos permiten eliminar 
espacios en blanco, pero de manera más específica:

trimStart() elimina los espacios en blanco al principio de una cadena.
trimEnd() elimina los espacios en blanco al final de una cadena.
 */

let textoConEspacios2 = "   hola mundo   ";

// Primero, eliminamos los espacios al principio
let textoSinEspaciosAlInicio = textoConEspacios.trimStart();

// Luego, eliminamos los espacios al final del resultado anterior
let textoFinal = textoSinEspaciosAlInicio.trimEnd();

console.log(textoFinal); // Salida: "hola mundo"

console.log('-----------------------------------------------------------------------------');

/* String.prototype.valueOf(): devuelve el valor primitivo de una cadena de texto. En otras 
palabras, te da la representación básica de la cadena.*/

let textoPri = "hola mundo";
let valorPrimitivo = textoPri.valueOf();
console.log(valorPrimitivo); // Salida: "hola mundo"






 










