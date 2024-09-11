// Number - instance methods
/* Number.prototype.toExponential() : Se agrega el e+1 y se puede indicar desde que numero*/
const numObj = 77.1234;
console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1

/* Number.prototype.toFixed() : Valida desde que numero mostrar despues de . */
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));// Expected output: "123.46"
  console.log(financial(0.004));// Expected output: "0.00"
  console.log(financial('1.23e+5'));// Expected output: "123000.00"

/* Number.prototype.toLocaleString() : Dependiendo de la localidad se muestra en string el numero*/

function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

console.log(eArabic(123456.789))// Expected output: "١٢٣٬٤٥٦٫٧٨٩"
console.log(eArabic('123456.789'));// Expected output: "123456.789"
console.log(eArabic(NaN));// Expected output: "ليس رقم"

/* Number.prototype.toPrecision() : Te muestra los numero indicados desde el primer numero que hay en la variable no cuenta el 0*/
let num = 5.123456;
console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

/* Number.prototype.toString() : pasa un numero a string */
const count = 10;
console.log(count.toString()); // "10"
console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

/* Number.prototype.valueOf() : Pasa a un numero dentro de un objeto */
const numObj = new Number(42);
console.log(typeof numObj);// Expected output: "object"
const num = numObj.valueOf();
console.log(num);// Expected output: 42
console.log(typeof num);// Expected output: "number"
