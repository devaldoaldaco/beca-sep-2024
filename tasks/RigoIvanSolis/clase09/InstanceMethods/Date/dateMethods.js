/* Date.prototype.getDate(): evuelve el día del mes para una fecha específica según
 la hora local. El valor retornado es un número entero entre 1 y 31, 
 dependiendo del mes.*/

let date1 = new Date('2024-01-15');
let date2 = new Date('2024-12-25');

console.log(date1.getDate()); // 15 (día del mes de enero)
console.log(date2.getDate()); // 25 (día del mes de diciembre)

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getDay(): devuelve el día de la semana para una fecha específica 
según la hora local. El valor retornado es un número entero entre 0 y 6, donde 0 
representa el domingo y 6 representa el sábado.*/

let date1g = new Date('2024-01-15'); // Esta es un lunes
let date2g = new Date('2024-12-25'); // Esta es un miércoles

console.log(date1g.getDay()); // 1 (lunes)
console.log(date2g.getDay()); // 3 (miércoles)

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getFullYear(): devuelve el año completo (de cuatro dígitos) para una 
fecha específica según la hora local. Es útil cuando necesitas obtener el año de una 
fecha para propósitos de manipulación o visualización.*/

let date1f = new Date('2024-01-15');
let date2f = new Date('1999-12-31');

console.log(date1.getFullYear()); // 2024
console.log(date2.getFullYear()); // 1999

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getHours(): devuelve la hora de la fecha especificada según la hora 
local. El valor retornado es un entero entre 0 y 23, donde 0 representa la medianoche 
y 23 representa la última hora del día.*/

let currentTime = new Date();
console.log(currentTime.getHours()); // Por ejemplo, 14 para 2 PM

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getMilliseconds(): devuelve los milisegundos (milésimas de segundo)
 de una fecha específica según la hora local. */

 let specificTime = new Date('2024-09-08T12:30:45.678Z'); // Incluye milisegundos
console.log(specificTime.getMilliseconds()); // 678

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getMinutes(): devuelve los minutos de una fecha específica según la 
hora local. El valor retornado es un entero entre 0 y 59.
*/

let currentTime2 = new Date();
console.log(currentTime2.getMinutes()); // Por ejemplo, 45 si son las 12:45 PM

console.log("-----------------------------------------------------------------------");

/*Date.prototype.getMonth(): devuelve el mes de una fecha específica según la hora local. 
El valor retornado es un entero entre 0 y 11, donde 0 representa enero y 11 representa 
diciembre. */

let specificDate = new Date('2024-09-08'); // 8 de septiembre
console.log(specificDate.getMonth()); // 8

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getSeconds(): devuelve los segundos de una fecha específica según 
la hora local. El valor retornado es un entero entre 0 y 59.*/

let specificTime2 = new Date('2024-09-08T12:34:56'); // 56 segundos
console.log(specificTime.getSeconds()); // 56

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getTime(): devuelve el número de milisegundos transcurridos desde
el 1 de enero de 1970 (la época Unix) hasta la fecha especificada. Este valor es un 
entero que representa el tiempo en milisegundos.*/

let specificDate1 = new Date('2024-09-08T12:00:00');
console.log(specificDate1.getTime()); // Por ejemplo, 1694179200000

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getTimezoneOffset(): devuelve la diferencia, en minutos, entre la
 hora local y la hora UTC (Tiempo Universal Coordinado) para la fecha especificada.*/

let now = new Date();
console.log(now.getTimezoneOffset()); // Imprime la diferencia en minutos entre la hora local y UTC

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getUTCDate(): se usa para obtener el día del mes en una fecha dada, 
pero en la zona horaria UTC (Tiempo Universal Coordinado). */

let fecha = new Date('2024-09-09T12:00:00Z');

// Usar el método getUTCDate() para obtener el día del mes en UTC
let diaDelMes = fecha.getUTCDate();

// Imprimir el resultado en la consola
console.log(diaDelMes);  // Esto imprimirá: 9

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getUTCDay(): devuelve el día de la semana de una fecha en la zona 
horaria UTC. El valor devuelto es un número entre 0 y 6, donde 0 representa el domingo 
y 6 representa el sábado.*/

// Crear un objeto Date con una fecha específica en formato UTC
let fecha2 = new Date('2024-09-09T12:00:00Z');

// Usar el método getUTCDay() para obtener el día de la semana en UTC
let diaDeLaSemana = fecha2.getUTCDay();

// Imprimir el resultado en la consola
console.log(diaDeLaSemana);  // Esto imprimirá: 1

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getUTCFullYear(): devuelve el año de una fecha en la zona horaria 
UTC. A diferencia de otros métodos que devuelven el año de acuerdo con la zona horaria 
local, getUTCFullYear() siempre se basa en la hora UTC.*/

// Crear un objeto Date con una fecha específica en formato UTC
let fecha3 = new Date('2024-09-09T12:00:00Z');

// Usar el método getUTCFullYear() para obtener el año en UTC
let año = fecha3.getUTCFullYear();

// Imprimir el resultado en la consola
console.log(año);  // Esto imprimirá: 2024

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getUTCHours(): devuelve la hora de una fecha en la zona horaria UTC
(Tiempo Universal Coordinado). La hora se devuelve en formato de 24 horas, es decir, 
un número entre 0 y 23.*/

// Crear un objeto Date con una fecha y hora específica en formato UTC
let fecha4 = new Date('2024-09-09T15:30:00Z');

// Usar el método getUTCHours() para obtener la hora en UTC
let horaUTC = fecha4.getUTCHours();

// Imprimir el resultado en la consola
console.log(horaUTC);  // Esto imprimirá: 15

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getUTCMinutes(): evuelve los minutos de una fecha en la zona horaria 
UTC (Tiempo Universal Coordinado). Los minutos se devuelven como un número entre 0 y 59.*/

// Crear un objeto Date con una fecha y hora específica en formato UTC
let fecha5 = new Date('2024-09-09T15:45:00Z');

// Usar el método getUTCMinutes() para obtener los minutos en UTC
let minutosUTC = fecha5.getUTCMinutes();

// Imprimir el resultado en la consola
console.log(minutosUTC);  // Esto imprimirá: 45

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getUTCMonth(): devuelve el mes de una fecha en la zona horaria UTC. 
Los meses se devuelven como un número entre 0 y 11, donde 0 representa enero y 1
representa diciembre.*/

// Crear un objeto Date con una fecha específica en formato UTC
let fecha7 = new Date('2024-09-09T12:00:00Z');

// Usar el método getUTCMonth() para obtener el mes en UTC
let mesUTC = fecha7.getUTCMonth();

// Imprimir el resultado en la consola
console.log(mesUTC);  // Esto imprimirá: 8

console.log("-----------------------------------------------------------------------");

/* Date.prototype.getUTCSeconds(): devuelve los segundos de una fecha en la zona horaria
UTC (Tiempo Universal Coordinado). Los segundos se devuelven como un número entre 0 y 59.*/

// Crear un objeto Date con una fecha y hora específica en formato UTC
let fecha8 = new Date('2024-09-09T15:45:30Z');

// Usar el método getUTCSeconds() para obtener los segundos en UTC
let segundosUTC = fecha8.getUTCSeconds();

// Imprimir el resultado en la consola
console.log(segundosUTC);  // Esto imprimirá: 30

console.log("-----------------------------------------------------------------------");

/* Date.prototype.setDate(): establece el día del mes para una fecha específica.
El valor que se pasa como argumento debe ser un número entre 1 y 31, que representa 
el día del mes que deseas establecer.*/

// Crear un objeto Date con una fecha específica
let fecha9 = new Date('2024-09-09');

// Mostrar la fecha original
console.log('Fecha original:', fecha9.toDateString());  // Esto imprimirá: Mon Sep 09 2024

// Usar el método setDate() para establecer un nuevo día del mes
fecha.setDate(15);

// Mostrar la fecha modificada
console.log('Fecha modificada:', fecha9.toDateString());  // Esto imprimirá: Sun Sep 15 2024

console.log("-----------------------------------------------------------------------");

/* Date.prototype.setFullYear(): establece el año de una fecha específica. Además de
 cambiar el año, este método puede también modificar el mes y el día si el nuevo año 
 lleva a una fecha que no es válida en el mes actual.*/

 // Crear un objeto Date con una fecha específica
let fechaN = new Date('2024-09-09');

// Mostrar la fecha original
console.log('Fecha original:', fechaN.toDateString());  // Esto imprimirá: Mon Sep 09 2024

// Usar el método setFullYear() para establecer un nuevo año
fecha.setFullYear(2025);

// Mostrar la fecha modificada
console.log('Fecha modificada:', fechaN.toDateString());  // Esto imprimirá: Tue Sep 09 2025

console.log("-----------------------------------------------------------------------");

/* Date.prototype.setHours(): stablece la hora para una fecha específica. Puedes 
usar este método para ajustar la hora, los minutos, los segundos y los milisegundos. 
Los parámetros que puedes pasar son:
Hora (0-23)*/

let fechaQ = new Date('2024-09-09T12:30:00');
fecha.setHours(25);  // Establece la hora en 25, lo cual no es válido
console.log(fechaQ.toString());  // Esto imprimirá: Tue Sep 10 2024 01:00:00 GMT+xxxx (zona horaria local)








 




