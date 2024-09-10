// Ejemplo de `getDate()`
// El método `getDate()` devuelve el día del mes para una fecha dada.
const xmas95 = new Date("1995-12-25T23:15:30");
const day = xmas95.getDate();
console.log(day); // 25 (25 de diciembre)

// Ejemplo de `getDay()`
// El método `getDay()` devuelve el día de la semana para una fecha dada, donde 0 representa el domingo.
const valentines = new Date("1995-02-14");
const day2 = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];
console.log(dayNames[day2]); // "Tuesday" (14 de febrero de 1995 fue un martes)

// Ejemplo de `getFullYear()`
// El método `getFullYear()` devuelve el año completo para una fecha dada.
const xmas952 = new Date("1995-12-25T23:15:30");
const fullYear = xmas952.getFullYear();
console.log(fullYear); // 1995

// Ejemplo de `getHours()`
// El método `getHours()` devuelve la hora del día para una fecha dada.
const xmas953 = new Date("1995-12-25T23:15:30");
const hours = xmas953.getHours();
console.log(hours); // 23 (23 horas o 11 PM)

// Ejemplo de `getMilliseconds()`
// El método `getMilliseconds()` devuelve los milisegundos de la fecha.
const xmas954 = new Date("1995-12-25T23:15:30");
const milliseconds = xmas954.getMilliseconds();
console.log(milliseconds); // 0 (no se especificaron milisegundos)

// Ejemplo de `getMinutes()`
// El método `getMinutes()` devuelve los minutos de la hora para una fecha dada.
const xmas955 = new Date("1995-12-25T23:15:30");
const minutes = xmas955.getMinutes();
console.log(minutes); // 15

// Ejemplo de `getMonth()`
// El método `getMonth()` devuelve el mes para una fecha dada (0 es enero, 11 es diciembre).
const valentines2 = new Date("1995-02-14");
const month = valentines2.getMonth();
const monthNames = ["January", "February", "March" /* , … */];
console.log(monthNames[month]); // "February" (febrero)

// Ejemplo de `getSeconds()`
// El método `getSeconds()` devuelve los segundos de la hora para una fecha dada.
const xmas956 = new Date("1995-12-25T23:15:30");
const seconds = xmas956.getSeconds();
console.log(seconds); // 30

// Ejemplo de `setTime()`
// El método `setTime()` establece el tiempo en milisegundos para una fecha dada.
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());

// Ejemplo de `getTimezoneOffset()`
// El método `getTimezoneOffset()` devuelve la diferencia, en minutos, entre la hora local y UTC.
const currentLocalDate = new Date();
const laborDay2016at0324GMTminus2 = new Date("2016-05-01T03:24:00-02:00");
console.log(currentLocalDate.getTimezoneOffset() ===
  laborDay2016at0324GMTminus2.getTimezoneOffset()); // Compara el desfase horario

// Ejemplo de `getUTCDate()`
// El método `getUTCDate()` devuelve el día del mes en la hora UTC para una fecha dada.
const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');
console.log(date1.getUTCDate()); // 19
console.log(date2.getUTCDate()); // 20

// Ejemplo de `getUTCDay()`
// El método `getUTCDay()` devuelve el día de la semana en la hora UTC para una fecha dada.
const date3 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date4 = new Date('August 19, 1975 23:15:30 GMT-11:00');
console.log(date3.getUTCDay()); // 2 (martes)
console.log(date4.getUTCDay()); // 3 (miércoles)

// Ejemplo de `getUTCFullYear()`
// El método `getUTCFullYear()` devuelve el año en la hora UTC para una fecha dada.
const date5 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date6 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(date5.getUTCFullYear()); // 1975
console.log(date6.getUTCFullYear()); // 1976

// Ejemplo de `getUTCHours()`
// El método `getUTCHours()` devuelve la hora en la hora UTC para una fecha dada.
const date7 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date8 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(date7.getUTCHours()); // 12
console.log(date8.getUTCHours()); // 10

// Ejemplo de `getUTCMilliseconds()`
// El método `getUTCMilliseconds()` devuelve los milisegundos en la hora UTC para una fecha dada.
const exampleDate = new Date('2018-01-02T03:04:05.678Z'); // 2 de enero de 2018, 03:04:05.678 (UTC)
console.log(exampleDate.getUTCMilliseconds()); // 678

// Ejemplo de `getUTCMinutes()`
// El método `getUTCMinutes()` devuelve los minutos en la hora UTC para una fecha dada.
const date9 = new Date('1 January 2000 03:15:30 GMT+07:00');
const date10 = new Date('1 January 2000 03:15:30 GMT+03:30');
console.log(date9.getUTCMinutes()); // 15
console.log(date10.getUTCMinutes()); // 45

// Ejemplo de `getUTCMonth()`
// El método `getUTCMonth()` devuelve el mes en la hora UTC para una fecha dada (0 es enero, 11 es diciembre).
const date11 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date12 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(date11.getUTCMonth()); // 11 (diciembre)
console.log(date12.getUTCMonth()); // 0 (enero)

// Ejemplo de `getUTCSeconds()`
// El método `getUTCSeconds()` devuelve los segundos en la hora UTC para una fecha dada.
const moonLanding = new Date('July 20, 1969, 20:18:04 UTC');
console.log(moonLanding.getUTCSeconds()); // 4

// Ejemplo de `setDate()`
// El método `setDate()` establece el día del mes para una fecha dada.
const theBigDay = new Date(1962, 6, 7, 12); // mediodía del 7 de julio de 1962
const theBigDay2 = new Date(theBigDay).setDate(24); // 24 de julio de 1962

// Ejemplo de `setFullYear()`
// El método `setFullYear()` establece el año para una fecha dada.
const theBigDay3 = new Date();
theBigDay3.setFullYear(1997); // Cambia el año a 1997

// Ejemplo de `setHours()`
// El método `setHours()` establece la hora para una fecha dada.
const theBigDay4 = new Date();
theBigDay4.setHours(7); // Cambia la hora a 7 AM

// Ejemplo de `setMilliseconds()`
// El método `setMilliseconds()` establece los milisegundos para una fecha dada.
const theBigDay5 = new Date();
theBigDay5.setMilliseconds(100); // Cambia los milisegundos a 100

// Ejemplo de `setMinutes()`
// El método `setMinutes()` establece los minutos para una fecha dada.
const theBigDay6 = new Date();
theBigDay6.setMinutes(45); // Cambia los minutos a 45

// Ejemplo de `setMonth()`
// El método `setMonth()` establece el mes para una fecha dada (0 es enero, 11 es diciembre).
const theBigDay7 = new Date();
theBigDay7.setMonth(6); // Cambia el mes a julio (mes 6)

// Ejemplo de `setSeconds()`
// El método `setSeconds()` establece los segundos para una fecha dada.
const theBigDay8 = new Date();
theBigDay8.setSeconds(30); // Cambia los segundos a 30

// Ejemplo de `setTime()` (repetido)
// El método `setTime()` puede ser usado nuevamente para establecer el tiempo en milisegundos.
const theBigDay9 = new Date("1999-07-01");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay9.getTime()); // Copia el tiempo de la fecha `theBigDay9`

// Ejemplo de `setUTCDate()`
// El método `setUTCDate()` establece el día del mes en la hora UTC para una fecha dada.
const theBigDay10 = new Date();
theBigDay10.setUTCDate(20); // Cambia el día del mes a 20

// Ejemplo de `setUTCFullYear()`
// El método `setUTCFullYear()` establece el año en la hora UTC para una fecha dada.
const theBigDay11 = new Date();
theBigDay11.setUTCFullYear(1997); // Cambia el año a 1997 en UTC

// Ejemplo de `setUTCHours()`
// El método `setUTCHours()` establece la hora en la hora UTC para una fecha dada.
const theBigDay12 = new Date();
theBigDay12.setUTCHours(8); // Cambia la hora a 8 AM en UTC

// Ejemplo de `setUTCMilliseconds()`
// El método `setUTCMilliseconds()` establece los milisegundos en la hora UTC para una fecha dada.
const theBigDay13 = new Date();
theBigDay13.setUTCMilliseconds(500); // Cambia los milisegundos a 500 en UTC

// Ejemplo de `setUTCMinutes()`
// El método `setUTCMinutes()` establece los minutos en la hora UTC para una fecha dada.
const theBigDay14 = new Date();
theBigDay14.setUTCMinutes(43); // Cambia los minutos a 43 en UTC

// Ejemplo de `setUTCSeconds()`
// El método `setUTCSeconds()` establece los segundos en la hora UTC para una fecha dada.
const theBigDay15 = new Date();
theBigDay15.setUTCSeconds(20); // Cambia los segundos a 20 en UTC

// Ejemplo de `toString()`
// El método `toString()` devuelve una cadena representativa de la fecha en la zona horaria local.
const d = new Date(0);
console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"

// Ejemplo de `toDateString()`
// El método `toDateString()` devuelve solo la parte de la fecha en una cadena representativa.
console.log(d.toDateString()); // "Thu Jan 01 1970"

// Ejemplo de `toISOString()`
// El método `toISOString()` devuelve una cadena en formato ISO 8601 en la hora UTC.
const d2 = new Date(0);
console.log(d2.toISOString()); // "1970-01-01T00:00:00.000Z"

// Ejemplo de `toJSON()`
// El método `toJSON()` devuelve una cadena en formato JSON representando la fecha.
const jsonDate = new Date(0).toJSON();
const backToDate = new Date(jsonDate);
console.log(jsonDate); // "1970-01-01T00:00:00.000Z"

// Ejemplo de `toLocaleDateString()`
// El método `toLocaleDateString()` devuelve una cadena con la fecha en la configuración regional y zona horaria local.
let date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
console.log(date.toLocaleDateString()); // Dependiendo de la configuración regional y zona horaria

// Ejemplo de `toLocaleString()`
// El método `toLocaleString()` devuelve una cadena con la fecha y la hora en la configuración regional y zona horaria local.
date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
console.log(date.toLocaleString()); // Dependiendo de la configuración regional y zona horaria

// Ejemplo de `toLocaleTimeString()`
// El método `toLocaleTimeString()` devuelve una cadena con la hora en la configuración regional y zona horaria local.
date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
console.log(date.toLocaleTimeString()); // Dependiendo de la configuración regional y zona horaria

// Ejemplo de `toTimeString()`
// El método `toTimeString()` devuelve una cadena con la parte de la hora de la fecha en la zona horaria local.
const d4 = new Date(0);
console.log(d4.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"

// Ejemplo de `toUTCString()`
// El método `toUTCString()` devuelve una cadena en formato UTC.
const d5 = new Date(0);
console.log(d5.toUTCString()); // "Thu, 01 Jan 1970 00:00:00 GMT"

// Ejemplo de `valueOf()`
// El método `valueOf()` devuelve el valor en milisegundos desde el 1 de enero de 1970.
const d6 = new Date(0); // 1970-01-01T00:00:00.000Z
console.log(d6.valueOf()); // 0
