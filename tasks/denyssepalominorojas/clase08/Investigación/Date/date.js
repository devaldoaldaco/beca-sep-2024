/************************************************************************************************/
/* 1. Date.prototype.getDate() | .getDate() | Retorna un número entero, entre 1 y 31, que representa 
                                              el día del mes para la fecha dada según la hora local.
    SINTAXIS: dateObj.getDate()

    Método que devuelve el día del mes para la fecha especificada de acuerdo con la hora local.
*/

var Xmas95 = new Date("December 25, 1995 23:15:30");
var day = Xmas95.getDate();
console.log(day); // 25

/************************************************************************************************/
/* 2. Date.prototype.getDay() | .getDay() | Retorna un entero correspondiente al día de la semana; 
                                            siendo 0 (Domingo) el primer día, 1 (Lunes) el segundo, 
                                            etcétera.
    SINTAXIS: dateObj.getDay()

    Método que devuelve el día de la semana de la fecha especificada en función de la fecha local; 
    siendo 0 (Domingo) el primer día.
*/

var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = Xmas95.getDay();
console.log(weekday); // 1 (Ya que corresponde a un lunes)

/************************************************************************************************/
/* 3. Date.prototype.getFullYear() | .getFullYear() | Retorna un número correspondiente al año de 
                                                      la fecha indicada, según la hora local.
    SINTAXIS: dateObj.getFullYear()

    Método que devuelve el año de la fecha indicada acorde a la hora local.
    Usa este método en lugar del método getYear().
*/

const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getFullYear());// 1969

/************************************************************************************************/
/* 4. Date.prototype.getHours() | .getHours() | Retorna un número entero, entre 0 y 23, representando 
                                                la hora de la fecha dada de acuerdo a la hora local.
    SINTAXIS: dateObj.getHours()

    Método que retorna la hora de la fecha especificada, de acuerdo a la hora local.
*/

var Xmas95 = new Date("December 25, 1995 23:15:30");
var hours = Xmas95.getHours();
console.log(hours); // 23

/************************************************************************************************/
/* 5. Date.prototype.getMilliseconds() | .getMilliseconds() | Retorna un número, entre 0 y 999, que 
                                                              representa la cantidad de milisegundos en 
                                                              la fecha dada, de acuerdo a la hora local.
    SINTAXIS: dateObj.getMilliseconds()

    Método que devuelve la cantidad de milisegundos en el objeto fecha especificado de acuerdo a 
    la hora local.
*/

var ahora = new Date("December 25, 1995 23:15:30:10");
var milisegundos = ahora.getMilliseconds();
console.log(milisegundos);// 10

/************************************************************************************************/
/* 6. Date.prototype.getMinutes() | .getMinutes() | Retorna un número entero entre 0 y 59.
    SINTAXIS: dateObj.getMinutes()

    Método que devuelve los minutos de la fecha especificada en función de la hora local.
*/

var Xmas95 = new Date("December 25, 1995 23:15:30");
var minutos = Xmas95.getMinutes();
console.log(minutos); // 15

/************************************************************************************************/
/* 7. Date.prototype.getMonth() | .getMonth() | Retorna un entero entre 0 y 11, donde 0 corresponde 
                                                a Enero, 1 a Febrero y así sucesivamente.
    SINTAXIS: dateObj.getMonth()

    Método que devuelve el mes del objeto Date según la hora local, donde el número cero indica el 
    primer mes del año.
*/

var Navidad = new Date("December 25, 2014 23:15:30");
var mes = Navidad.getMonth();
console.log(mes); // 11

/************************************************************************************************/
/* 8. Date.prototype.getSeconds() | .getSeconds() | Retorna un número entero, entro 0 y 59, representando 
                                                    los segundos en la fecha dada de acuerdo a la hora local.
    SINTAXIS: dateObj.getSeconds()

    Método que devuelve los segundos en la fecha especificada de acuerdo a la hora local.
*/

const Navidad = new Date("December 25, 2014 23:15:30");
console.log(Navidad.getSeconds());// 30

/************************************************************************************************/
/* 9. Date.prototype.getTime() | .getTime() | Retorna un número de milisegundos desde el 1 de enero 
                                              de 1970 00:00:00 UTC.
    SINTAXIS: dateObj.getTime()

    Método que devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.
    Puede utilizar este método para ayudar a asignar una fecha y hora a otro objeto Date. 
    Este método es funcionalmente equivalente al metodo valueOf().
*/
// Para copiar fechas, construir un objeto de fecha con el mismo valor de tiempo 
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());

/************************************************************************************************/
/* 10. Date.prototype.getTimezoneOffset() | .getTimezoneOffset() | Retorna un número que representa 
                                                                   la diferencia, en minutos, entre la fecha 
                                                                   evaluada en la zona horaria UTC y la evaluada en 
                                                                   la zona horaria local.
    SINTAXIS: .getTimezoneOffset()

    Método que devuelve la diferencia, en minutos, entre esta fecha evaluada en la zona horaria UTC 
    y la misma fecha evaluada en la zona horaria local.
*/
/*En las regiones que utilizan el horario de verano, el valor de retorno puede cambiar según la hora 
  del año en la que se encuentre la fecha. A continuación se muestra el resultado en tiempo de ejecución 
  en Nueva York, donde la zona horaria es UTC-05:00*/
const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-01").getTimezoneOffset(); // 240

/************************************************************************************************/
/* 11. Date.prototype.getUTCDate() | .getUTCDate() | Retorna un número entero, entre 1 y 31, que 
                                                     representa el día del mes para la fecha determinada 
                                                     según la hora universal. 
                                                     Devuelve NaN si la fecha no es válida.
    SINTAXIS: .getUTCDate()

    Método que devuelve el día del mes para esta fecha según la hora universal.
*/

const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');
console.log(date1.getUTCDate());// 19
console.log(date2.getUTCDate());// 20

/************************************************************************************************/
/* 12. Date.prototype.getUTCDay() | .getUTCDay() | Retorna el día de la semana para esta fecha según 
                                                   la hora universal, donde 0 representa el domingo.
                                                    
    SINTAXIS: .getUTCDay()

    Método que devuelve un número entero correspondiente al día de la semana para la fecha dada según
    la hora universal: 0 para el domingo, 1 para el lunes, 2 para el martes, etc. 
    Devuelve NaN si la fecha no es válida.
*/

const date3 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date4 = new Date('August 19, 1975 23:15:30 GMT-11:00');

// Martes
console.log(date3.getUTCDay());// 2
// Miercoles
console.log(date4.getUTCDay());// 3

/************************************************************************************************/
/* 13. Date.prototype.getUTCFullYear() | .getUTCFullYear() | Retorna un número que representa el año 
                                                             en la fecha representada por el objectFecha 
                                                             en tiempo universal.
    SINTAXIS: objectoFecha.getUTCFullYear()

    Método que devuleve un número que representa el año en la fecha representada por el objectFecha en 
    tiempo universal
*/

const date5 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date6 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date5.getUTCFullYear());// 1975
console.log(date6.getUTCFullYear());// 1976

/************************************************************************************************/
/* 14. Date.prototype.getUTCHours() | .getUTCHours() | Retorna un número entero, entre 0 y 23, 
                                                       que representa las horas de la fecha dada.
    SINTAXIS: .getUTCHours()

    Método que devuelve las horas de esta fecha según la hora universal.
*/

const date7 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date8 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(date7.getUTCHours());// 12
console.log(date8.getUTCHours());// 10

/************************************************************************************************/
/* 15. Date.prototype.getUTCMilliseconds() | .getUTCMilliseconds() | Retorna un númmero
    SINTAXIS: .getUTCMilliseconds()

    Método que devuelve los milisegundos de esta fecha según la hora universal.
*/

const exampleDate = new Date('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)
console.log(exampleDate.getUTCMilliseconds());// 678

/************************************************************************************************/
/* 16. Date.prototype.getUTCMinutes() | .getUTCMinutes() | Retorna un número de 0 a 59
    SINTAXIS: .getUTCMinutes()

    Método que devuelve los minutos de esta fecha según la hora universal.
*/

const date9 = new Date('1 January 2000 03:15:30 GMT+07:00');
const date10 = new Date('1 January 2000 03:15:30 GMT+03:30');
// 31 Dec 1999 20:15:30 GMT
console.log(date9.getUTCMinutes()); // 15
// 31 Dec 1999 23:45:30 GMT
console.log(date10.getUTCMinutes()); // 45

/************************************************************************************************/
/* 17. Date.prototype.getUTCMonth() | .getUTCMonth() | Retorna un número que representa el mes (0 a 11)
    SINTAXIS: .getUTCMonth()

    Método que devuelve el mes de esta fecha según la hora universal, como un valor de base cero 
    (donde cero indica el primer mes del año).
*/

const date11 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date12 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
// Diciembre
console.log(date11.getUTCMonth());// 11
// Enero
console.log(date12.getUTCMonth());// 0

/************************************************************************************************/
/* 18. Date.prototype.getUTCSeconds() | .getUTCSeconds() | Retorna un número de 0 a 59
    SINTAXIS: .getUTCSeconds()

    Método que devuelve los segundos de la fecha especificada según la hora universal.
*/

const moonLanding1 = new Date('July 20, 1969, 20:18:04 UTC');
console.log(moonLanding1.getUTCSeconds());// 4

/************************************************************************************************/
/* 19. Date.prototype.setDate() | .setDate() | Retorna un número o un string
    SINTAXIS: .setDate(dateValue)

    Método que cambia el día del mes para esta fecha según la hora local.
*/

const ej = new Date('August 19, 1975 23:15:30');
ej.setDate(24);
console.log(ej.getDate());// 24
ej.setDate(32);// Only 31 days in August!
console.log(ej.getDate());// 1

/************************************************************************************************/
/* 20. Date.prototype.setFullYear() | .setFullYear() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: .setFullYear(yearValue)
              .setFullYear(yearValue, monthValue)
              .setFullYear(yearValue, monthValue, dateValue)

    Método que fija el año completo para una fecha específica de acuerdo a la zona horaria local. 
    Devuelve un nuevo valor de tipo timestamp.
*/

const ejemplo = new Date('August 19, 1975 23:15:30');

ejemplo.setFullYear(1969);
console.log(ejemplo.getFullYear());// 1969
ejemplo.setFullYear(0);
console.log(ejemplo.getFullYear());// 0

/************************************************************************************************/
/* 21. Date.prototype.setHours() | .setHours() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: .setHours(hoursValue)
              .setHours(hoursValue, minutesValue)
              .setHours(hoursValue, minutesValue, secondsValue)
              .setHours(hoursValue, minutesValue, secondsValue, msValue)

    Método que cambia las horas, minutos, segundos y/o milisegundos para esta fecha según la hora local.
*/

const eje = new Date('August 19, 1975 23:15:30');
eje.setHours(20);
console.log(eje);// "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
eje.setHours(20, 21, 22);
console.log(eje);// "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"

/************************************************************************************************/
/* 22. Date.prototype.setMilliseconds() | .setMilliseconds() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: setMilliseconds(millisecondsValue)

    Método que cambia los milisegundos para esta fecha según la hora local.
*/

const e = new Date('August 19, 1975 23:15:30');
console.log(e.getMilliseconds());// 0
e.setMilliseconds(456);
console.log(e.getMilliseconds());// 456

/************************************************************************************************/
/* 23. Date.prototype.setMinutes() | .setMinutes() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: .setMinutes(minutesValue)
              .setMinutes(minutesValue, secondsValue)
              .setMinutes(minutesValue, secondsValue, msValue)

    Método que cambia los minutos de esta fecha según la hora local.
*/

const ejemplo2 = new Date('August 19, 1975 23:15:30');

ejemplo2.setMinutes(45);
console.log(ejemplo2.getMinutes());// 45
console.log(ejemplo2);// "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Note: your timezone may vary

/************************************************************************************************/
/* 24. Date.prototype.setMonth() | .setMonth() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: .setMonth(monthValue)
              .setMonth(monthValue, dateValue)

    Método que cambia el mes y/o día del mes para esta fecha según la hora local.
*/

const ejemplo3 = new Date('August 19, 1975 23:15:30');

ejemplo3.setMonth(3);
console.log(ejemplo3.getMonth());// 3
console.log(ejemplo3);// "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary

/************************************************************************************************/
/* 25. Date.prototype.setSeconds() | .setSeconds() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: .setSeconds(secondsValue)
              .setSeconds(secondsValue, msValue)

    Método que cambia los segundos y/o milisegundos para esta fecha según la hora local.
*/

const ejemplo4 = new Date('August 19, 1975 23:15:30');

ejemplo4.setSeconds(42);
console.log(ejemplo4.getSeconds());// 42
console.log(ejemplo4);// "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary

/************************************************************************************************/
/* 26. Date.prototype.setTime() | .setTime() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: .setTime(timeValue)

    Método que cambia la marca de tiempo para esta fecha, que es el número de milisegundos desde la época.
*/

const launchDate = new Date('July 1, 1999, 12:00:00');
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);// "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);
console.log(futureDate);// "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary

/************************************************************************************************/
/* 27. Date.prototype[Symbol.toPrimitive]() | [Symbol.toPrimitive]() | Retorna un String o un Número.
    SINTAXIS: date[Symbol.toPrimitive](hint)

    Método que devuelve un valor primitivo que representa esta fecha. Puede ser una cadena o un 
    número, según la pista dada.
*/

// Depending on timezone, your results will vary
const date = new Date('20 December 2019 14:48');
console.log(date[Symbol.toPrimitive]('string'));// "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"
console.log(date[Symbol.toPrimitive]('number'));// 1576833480000


/************************************************************************************************/
/* 28. Date.prototype.toJSON() | .toJSON() | Retorna un String
    SINTAXIS: .toJSON()

    Método que devuelve una cadena que representa esta fecha en el mismo formato ISO que toISOString().
*/

const event = new Date('August 19, 1975 23:15:30 UTC');
const jsonDate = event.toJSON();
console.log(jsonDate);// "1975-08-19T23:15:30.000Z"
console.log(new Date(jsonDate).toUTCString());// "Tue, 19 Aug 1975 23:15:30 GMT"


/************************************************************************************************/
/* 29. Date.prototype.valueOf() | .valueOf() | Retorna un nuevo valor de tipo timestamp.
    SINTAXIS: .valueOf()

    Método que devuelve el número de milisegundos para esta fecha desde la época.
*/

const date13 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(date13.valueOf());// 823230245000

const date14 = new Date('02 Feb 1996 03:04:05 GMT');
console.log(date14.valueOf());// 823230245000

/************************************************************************************************/
/* 30. Date.prototype.toString() | .toString() | Retorna un String
    SINTAXIS: .toString()

    Método que devuelve un string que representa esta fecha interpretada en la zona horaria local.
*/

const ejer = new Date('August 19, 1975 23:15:30');
console.log(ejer.toString());// "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
