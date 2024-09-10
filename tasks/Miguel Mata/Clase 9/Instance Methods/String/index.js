// Ejemplo para `at()`
// El método `at()` permite acceder a un carácter en una posición específica de una cadena, utilizando índices negativos para acceder desde el final.
function returnLast(str) {
    return str.at(-1);
}

let invoiceRef = "myinvoice01";
console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";
console.log(returnLast(invoiceRef)); // '2'

// Ejemplo para `charAt()`
// El método `charAt()` devuelve el carácter en la posición especificada. Si no se proporciona un índice, se devuelve el carácter en el índice 0.
const anyString = "Brave new world";
console.log(`El carácter en el índice 0 es '${anyString.charAt()}'`); // 'B'
console.log(`El carácter en el índice 0 es '${anyString.charAt(0)}'`); // 'B'
console.log(`El carácter en el índice 1 es '${anyString.charAt(1)}'`); // 'r'
console.log(`El carácter en el índice 2 es '${anyString.charAt(2)}'`); // 'a'
console.log(`El carácter en el índice 3 es '${anyString.charAt(3)}'`); // 'v'
console.log(`El carácter en el índice 4 es '${anyString.charAt(4)}'`); // 'e'
console.log(`El carácter en el índice 999 es '${anyString.charAt(999)}'`); // '' (vacío)

// Ejemplo para `codePointAt()`
// El método `codePointAt()` devuelve el valor Unicode del punto de código en la posición especificada. A diferencia de `charCodeAt()`, maneja correctamente los caracteres de varios puntos de código.
const str1 = "𠮷𠮾";
console.log(str1.codePointAt(0)); // 134071
console.log(str1.codePointAt(1)); // 134086

console.log("ABC".codePointAt(0)); // 65
console.log("ABC".codePointAt(0).toString(16)); // 41

console.log("😍".codePointAt(0)); // 128525
console.log("\ud83d\ude0d".codePointAt(0)); // 128525
console.log("\ud83d\ude0d".codePointAt(0).toString(16)); // 1f60d

console.log("😍".codePointAt(1)); // 56845
console.log("\ud83d\ude0d".codePointAt(1)); // 56845
console.log("\ud83d\ude0d".codePointAt(1).toString(16)); // de0d

console.log("ABC".codePointAt(42)); // undefined

// Ejemplo para `concat()`
// El método `concat()` une dos o más cadenas y devuelve una nueva cadena. También puede concatenar otros tipos de valores como números y objetos.
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day.")); // 'Hello, Kevin. Have a nice day.'

const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)); // "Hello Venkat!"

console.log("".concat({})); // "[object Object]"
console.log("".concat([])); // ""
console.log("".concat(null)); // "null"
console.log("".concat(true)); // "true"
console.log("".concat(4, 5)); // "45"

// Ejemplo para `endsWith()`
// El método `endsWith()` verifica si una cadena termina con los caracteres especificados. Puede tomar un segundo argumento para determinar el punto de corte.
const str = "To be, or not to be, that is the question.";
console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

// Ejemplo para `includes()`
// El método `includes()` determina si una cadena contiene los caracteres especificados. Devuelve `true` si se encuentra, de lo contrario `false`.
console.log("Blue Whale".includes("blue")); // false

// Ejemplo para `indexOf()`
// El método `indexOf()` devuelve el primer índice en el que se encuentra una subcadena dentro de la cadena. Puede comenzar la búsqueda en un índice especificado.
console.log("hello world".indexOf("", 11)); // 11
console.log("hello world".indexOf("", 13)); // 11
console.log("hello world".indexOf("", 22)); // 11

// Ejemplo para `lastIndexOf()`
// El método `lastIndexOf()` devuelve el último índice en el que se encuentra una subcadena dentro de la cadena. Puede comenzar la búsqueda en un índice especificado.
console.log("Blue Whale, Killer Whale".lastIndexOf("blue")); // -1

// Ejemplo para `localeCompare()`
// El método `localeCompare()` compara dos cadenas teniendo en cuenta la configuración regional especificada. Puede ser útil para ordenar cadenas según un idioma específico.
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
console.log(items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }))); 
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

// Ejemplo para `normalize()`
// El método `normalize()` devuelve una cadena en una forma normalizada especificada. Esto es útil para comparar caracteres acentuados y otros caracteres Unicode.
const string1 = "\u00F1";
const string2 = "\u006E\u0303";
console.log(string1); // ñ
console.log(string2); // ñ

console.log(string1.normalize() === string2.normalize()); // true

// Ejemplo para `padEnd()`
// El método `padEnd()` rellena la cadena con los caracteres especificados hasta alcanzar la longitud deseada.
console.log("abc".padEnd(10)); // "abc       "
console.log("abc".padEnd(10, "foo")); // "abcfoofoof"
console.log("abc".padEnd(6, "123456")); // "abc123"
console.log("abc".padEnd(1)); // "abc"

// Ejemplo para `padStart()`
// El método `padStart()` rellena la cadena con los caracteres especificados hasta alcanzar la longitud deseada, añadiendo el relleno al principio de la cadena.
function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, "0");
}

const num = 123;
console.log(leftFillNum(num, 5)); // "00123"

// Ejemplo para `repeat()`
// El método `repeat()` devuelve una nueva cadena que contiene el número especificado de repeticiones de la cadena original.
console.log("abc".repeat(-1)); // RangeError
console.log("abc".repeat(0)); // ''
console.log("abc".repeat(1)); // 'abc'
console.log("abc".repeat(2)); // 'abcabc'
console.log("abc".repeat(3.5)); // 'abcabcabc'
console.log("abc".repeat(1 / 0)); // RangeError

// Ejemplo para `replace()`
// El método `replace()` reemplaza la primera aparición de una subcadena o expresión regular con una nueva subcadena.
console.log("xxx".replace("", "_")); // "_xxx"

// Ejemplo para `replaceAll()`
// El método `replaceAll()` reemplaza todas las apariciones de una subcadena o expresión regular con una nueva subcadena.
function unsafeRedactName(text, name) {
    return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
    return text.replaceAll(name, "[REDACTED]");
}

const report = "A hacker called ha.*er used special characters in their name to breach the system.";
console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."

// Ejemplo para `search()`
// El método `search()` busca una subcadena que coincide con una expresión regular y devuelve el índice de la primera coincidencia.
const str4 = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str4.search(re)); // 4 (índice de "J")
console.log(str4.search(reDot)); // -1 (no encontrado)

// Ejemplo para `slice()`
// El método `slice()` devuelve una copia superficial de una porción de una cadena entre los índices especificados.
const str5 = "The morning is upon us.";
console.log(str5.slice(-3)); // 'us.'
console.log(str5.slice(-3, -1)); // 'us'
console.log(str5.slice(0, -1)); // 'The morning is upon us'
console.log(str5.slice(4, -1)); // 'morning is upon us'

// Ejemplo para `split()`
// El método `split()` divide una cadena en un array de subcadenas utilizando un delimitador especificado.
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
const re2 = /\s*(?:;|$)\s*/;
const nameList = names.split(re2);
console.log(nameList); // ["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand"]

// Ejemplo para `startsWith()`
// El método `startsWith()` verifica si una cadena comienza con los caracteres especificados. Puede tomar un segundo argumento para especificar la posición de inicio.
console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true

// Ejemplo para `substring()`
// El método `substring()` devuelve una subcadena entre dos índices especificados.
const anyString2 = "Mozilla";
console.log(anyString2.substring(0, 1)); // "M"
console.log(anyString2.substring(1, 0)); // "M" (el orden de los índices no importa)

// Ejemplo para `toLocaleLowerCase()`
// El método `toLocaleLowerCase()` convierte una cadena a minúsculas utilizando la configuración regional especificada.
console.log("ALPHABET".toLocaleLowerCase()); // 'alphabet'
console.log("\u0130".toLocaleLowerCase("tr")); // 'i'
console.log("\u0130".toLocaleLowerCase("en-US")); // 'ı'

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
console.log("\u0130".toLocaleLowerCase(locales)); // 'i'

// Ejemplo para `toLocaleUpperCase()`
// El método `toLocaleUpperCase()` convierte una cadena a mayúsculas utilizando la configuración regional especificada.
console.log("alphabet".toLocaleUpperCase()); // 'ALPHABET'
console.log("Gesäß".toLocaleUpperCase()); // 'GESÄSS'
console.log("i\u0307".toLocaleUpperCase("lt-LT")); // 'I'

const locales2 = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
console.log("i\u0307".toLocaleUpperCase(locales2)); // 'I'

// Ejemplo para `toLowerCase()`
// El método `toLowerCase()` convierte una cadena a minúsculas.
console.log("ALPHABET".toLowerCase()); // 'alphabet'

// Ejemplo para `toString()`
// El método `toString()` devuelve la representación en cadena del objeto `String`. Si se sobreescribe, puede devolver un valor diferente.
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"

// Ejemplo para `toUpperCase()` con `call()`
// Se puede utilizar `call()` para aplicar `toUpperCase()` a objetos que implementan el método `toString()`.
const a = String.prototype.toUpperCase.call({
    toString() {
      return "abcdef";
    },
});
const b = String.prototype.toUpperCase.call(true);
console.log(a, b); // 'ABCDEF TRUE'

// Ejemplo para `valueOf()`
// El método `valueOf()` devuelve el valor primitivo de un objeto `String`.
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
