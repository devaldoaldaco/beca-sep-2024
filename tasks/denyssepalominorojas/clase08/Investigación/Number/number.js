/************************************************************************************************/
/* 1. Number.prototype.toExponential() | .toExponential() | Retorna un String que representa el 
                                                            objeto número dado en notación exponencial
    SINTAXIS: .toExponential(), .toExponential(fractionDigits)

    Método de valores numéricos devuelve una cadena que representa este número en 
    notación exponencial.
*/

const numObj = 3.1416;

console.log(numObj.toExponential()); // "3.1416e+0"
console.log(numObj.toExponential(4)); // "3.1416e+0"
console.log(numObj.toExponential(2)); // "3.14e+0"
console.log((3.1416).toExponential()); // "3.1416e+0"
console.log((3.1).toExponential()); // "3.1e+0"

/************************************************************************************************/
/* 2. Number.prototype.toFixed() | .toFixed() | Retorna un String que representa el número dado, 
                                                usando notación de punto fijo.
    SINTAXIS: numObj.toFixed([digitos])

    Método que formatea un número usando notación de punto fijo.
*/

function ejemplo(x) {
    return Number.parseFloat(x).toFixed(1);
  }
  console.log(ejemplo(123.456));// "123.4"
  console.log(ejemplo(0.001));// "0.0"
  console.log(ejemplo('3.1e+3'));// "3100.0"

/************************************************************************************************/
/* 3. Number.prototype.toLocaleString() | .toLocaleString() | Retorna 
    SINTAXIS: numObj.toLocaleString([locales [, options]])

    Método que retorna una representacion localizada del número en forma de texto.
*/

function e(x) {
    return x.toLocaleString('En');
  }
  console.log(e(123456.789));// "123,456.789"
  console.log(e('123456.789'));// "123456.789"
  console.log(e(NaN));// "NaN"

/************************************************************************************************/
/* 4. Number.prototype.toPrecision() | .toPrecision() | Retorna devuelve un String que representa un 
                                                        objeto Number según la precisión especificada.
    SINTAXIS: numObj.toPrecision([precision])

    Método que devuelve una cadena que representa un objeto Number según la precisión especificada.
*/

function precise(x) {
    return x.toPrecision(2);
  }
  console.log(precise(123.456));// "1.2e+2"
  console.log(precise(0.002));// "0.0020"
  console.log(precise(2.31e5));// "2.3e+5"

/************************************************************************************************/
/* 5. Number.prototype.toString() | .toString() | Retorna una cadena que representa al objeto Number 
                                                  especificado
    SINTAXIS: number .toString( [base ] )

    Método que comprueba su primer argumento, e intenta devolver una cadena de representación en 
    la base especificada.
*/

var howMany = 12;
alert("howMany.toString() is " + howMany.toString()); // "12"
alert("20 .toString() is " + (20).toString()); // "20"

/************************************************************************************************/
/* 6. Number.prototype.valueOf() | .valueOf() | Retorna retorna el valor primitivo inserto en un 
                                                objeto Number.
    SINTAXIS: numObj.valueOf()

    Método usualmente llamado de forma interna por JavaScript y no es explicitado en el código web.
*/

var numObj1 = new Number(9);
console.log(typeof numObj1); // objeto

var num = numObj1.valueOf();
console.log(num); // 9
console.log(typeof num); // número