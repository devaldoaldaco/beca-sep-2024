/* Number.prototype.toExponential(): convierte un número en una cadena representada 
en notación exponencial. */

let num = 123456;
console.log(num.toExponential()); // "1.23456e+5"

console.log("-------------------------------------------------------------------");

/* Number.prototype.toFixed(): onvierte un número en una cadena con una cantidad 
específica de decimales.*/

let numDe = 3.14159;
console.log(numDe.toFixed(2)); // "3.14"

console.log("-------------------------------------------------------------------");

/* Number.prototype.toLocaleString(): convierte un número en una cadena, formateada 
de acuerdo con las convenciones de un país o región específica.*/

let nump = 1234567.89;
console.log(nump.toLocaleString('en-US')); // "1,234,567.89"
console.log(nump.toLocaleString('de-DE')); // "1.234.567,89"

console.log("-------------------------------------------------------------------");

/* Number.prototype.toPrecision(): convierte un número en una cadena con una 
precisión específica, es decir, con un número fijo de dígitos significativos. */

let num1 = 123.456789;
console.log(num1.toPrecision(5)); // "123.46"

console.log("-------------------------------------------------------------------");

/* Number.prototype.toString(): convierte un número en una cadena. Puedes especificar
 la base (o sistema numérico) en la que deseas representar el número, utilizando una
  base de 2 a 36. */

let numS = 255;

console.log(numS.toString());    // "255" (base 10 por defecto)
console.log(numS.toString(2));   // "11111111" (base 2, representación binaria)
console.log(numS.toString(16));  // "ff" (base 16, representación hexadecimal)
console.log(numS.toString(8));   // "377" (base 8, representación octal)

console.log("-------------------------------------------------------------------");

/* Number.prototype.valueOf(): devuelve el valor primitivo del objeto Number*/

let numObj = new Number(42);
console.log(numObj.valueOf()); // 42 (valor primitivo del objeto Number)
console.log(typeof numObj.valueOf()); // "number"


