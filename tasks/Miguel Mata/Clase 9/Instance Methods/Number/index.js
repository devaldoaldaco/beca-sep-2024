// Ejemplo para `toExponential()`
// El método `toExponential()` devuelve una cadena que representa el número en notación exponencial.
const num1 = 12345;
console.log(num1.toExponential()); // "1.2345e+4"
console.log(num1.toExponential(2)); // "1.23e+4"

// Ejemplo para `toFixed()`
// El método `toFixed()` devuelve una cadena que representa el número en notación decimal con un número específico de decimales.
const num2 = 123.456;
console.log(num2.toFixed()); // "123"
console.log(num2.toFixed(2)); // "123.46"
console.log(num2.toFixed(4)); // "123.4560"

// Ejemplo para `toPrecision()`
// El método `toPrecision()` devuelve una cadena que representa el número en notación científica o decimal, con el número total de dígitos especificado.
const num3 = 123.456789;
console.log(num3.toPrecision()); // "123.456789"
console.log(num3.toPrecision(5)); // "123.46"
console.log(num3.toPrecision(7)); // "123.4568"

// Ejemplo para `toString()`
// El método `toString()` devuelve una cadena que representa el objeto `Number`. Puede tomar un argumento opcional que especifica la base para la conversión.
const num4 = 255;
console.log(num4.toString()); // "255"
console.log(num4.toString(2)); // "11111111" (base 2)
console.log(num4.toString(16)); // "ff" (base 16)

// Ejemplo para `valueOf()`
// El método `valueOf()` devuelve el valor primitivo del objeto `Number`. Normalmente se usa internamente, pero también puede ser útil para convertir el objeto a un número primitivo.
const num5 = new Number(42);
console.log(num5.valueOf()); // 42

// Ejemplo para `toLocaleString()`
// El método `toLocaleString()` convierte un número a una cadena utilizando una configuración regional específica.
// En este caso, se formatea el número de acuerdo con la configuración regional del usuario.
const number = 3500;
console.log(number.toLocaleString()); // "3,500" si se utiliza la configuración regional de inglés de EE. UU.
