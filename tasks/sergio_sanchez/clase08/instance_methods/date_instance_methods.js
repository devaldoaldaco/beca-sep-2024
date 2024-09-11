// Date - instance methods
/* Date.prototype.getDate() : Trae el dia en una fecha */
const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();
console.log(date1);// Expected output: 19

/* Date.prototype.getDay() : Trae el dia de la semana*/
const birthday = new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay();// Sunday - Saturday : 0 - 6
console.log(day1);// Expected output: 2

/* Date.prototype.getFullYear() : Trae el año en la fecha*/
const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getFullYear());// Expected output: 1969

/* Date.prototype.getHours() : Trae la hora*/
const birthday = new Date('March 13, 08 04:20');
console.log(birthday.getHours());// Expected output: 4

/* Date.prototype.getMilliseconds() : Trae los milisegundos que hay */
const moonLanding = new Date('July 20, 69 00:20:18');
moonLanding.setMilliseconds(123);
console.log(moonLanding.getMilliseconds());// Expected output: 123

/* Date.prototype.getMinutes() : Trae los minutos */
const birthday = new Date('March 13, 08 04:20');
console.log(birthday.getMinutes());// Expected output: 20

/* Date.prototype.getMonth() : Trae el mes en numero */
const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getMonth()); // (January gives 0) Expected output: 6

/* Date.prototype.getSeconds() : Trae lo segundos */
const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getSeconds());// Expected output: 18

/* Date.prototype.getTime() : Trae la hora en un numero que es UTC */
const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());// Expected output: -14182940000

/* Date.prototype.getTimezoneOffset() : Combierte la fecha en un numero para evaluar si es la misma hora y fecha */
const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');
console.log(date1.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.
console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());// Expected output: true

/* Date.prototype.getUTCDate() : Date instancias devuelve el día del mes para esta fecha según la hora universal */
const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');
console.log(date1.getUTCDate());// Expected output: 19
console.log(date2.getUTCDate());// Expected output: 20

/* Date.prototype.getUTCDay() : Date instancias devuelve el día de la semana para esta fecha según la hora universal, donde 0 representa el domingo */
const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');
// Tuesday
console.log(date1.getUTCDay());// Expected output: 2
// Wednesday
console.log(date2.getUTCDay());// Expected output: 3

/* Date.prototype.getUTCFullYear() : Date instancias devuelve el año para esta fecha según la hora universal */
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(date1.getUTCFullYear());// Expected output: 1975
console.log(date2.getUTCFullYear());// Expected output: 1976

/* Date.prototype.getUTCHours() : Date instancias devuelve las horas para esta fecha según la hora universal */
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(date1.getUTCHours());// Expected output: 12
console.log(date2.getUTCHours());// Expected output: 10

/* Date.prototype.getUTCMilliseconds() : Date instancias devuelve los milisegundos para esta fecha según la hora universal */
const exampleDate = new Date('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)
console.log(exampleDate.getUTCMilliseconds());// Expected output: 678

/* Date.prototype.getUTCMinutes() : Date instancias devuelve los minutos de esta fecha según la hora universal */
const date1 = new Date('1 January 2000 03:15:30 GMT+07:00');
const date2 = new Date('1 January 2000 03:15:30 GMT+03:30');
console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT Expected output: 15
console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT  Expected output: 45

/* Date.prototype.getUTCMonth() : Date instancias devuelve el mes para esta fecha según la hora universal, como un valor basado en cero (donde cero indica el primer mes del año) */
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
// December
console.log(date1.getUTCMonth());// Expected output: 11
// January
console.log(date2.getUTCMonth());// Expected output: 0

/* Date.prototype.getUTCSecnds() : Dateinstancias devuelve los segundos de la fecha especificada según la hora universal */
const moonLanding = new Date('July 20, 1969, 20:18:04 UTC');
console.log(moonLanding.getUTCSeconds());// Expected output: 4

/* Date.prototype.setDate() : cambia el dia de la fecha */
const event = new Date('August 19, 1975 23:15:30');
event.setDate(24);
console.log(event.getDate());// Expected output: 24
event.setDate(36);// Only 31 days in August!
console.log(event.getDate());// Expected output: 1

/* Date.prototype.setFullYear() : Cambia el año de la fecha */
const event = new Date('August 19, 1975 23:15:30');
event.setFullYear(1969);
console.log(event.getFullYear());// Expected output: 1969
event.setFullYear(0);
console.log(event.getFullYear());// Expected output: 0

/* Date.prototype.setHours() : cambia la hora de la fecha */
const event = new Date('August 19, 1975 23:15:30');
event.setHours(20);
console.log(event);// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)" Note: your timezone may vary
event.setHours(20, 21, 22);
console.log(event);// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"

/* Date.prototype.setMilliseconds() : Cambia los milisegundos */
const event = new Date('August 19, 1975 23:15:30');
console.log(event.getMilliseconds());// Expected output: 0
event.setMilliseconds(456);
console.log(event.getMilliseconds());// Expected output: 456

/* Date.prototype.setMinutes() : Cambia lo sminutos */
const event = new Date('August 19, 1975 23:15:30');
event.setMinutes(45);
console.log(event.getMinutes());// Expected output: 45
console.log(event);// Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)" Note: your timezone may vary

/* Date.prototype.setMonth() : Cambia el mes */
const event = new Date('August 19, 1975 23:15:30');
event.setMonth(3);
console.log(event.getMonth());// Expected output: 3
console.log(event);// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)" Note: your timezone may vary

/* Date.prototype.setSeconds() : Cambia los segundos */
const event = new Date('August 19, 1975 23:15:30');
event.setSeconds(42);
console.log(event.getSeconds());// Expected output: 42

/* Date.prototype.setTime() : Date instancias cambia la marca de tiempo para esta fecha, que es el número de milisegundos desde la época , definida como la medianoche del comienzo del 1 de enero de 1970, UTC */
const launchDate = new Date('July 1, 1999, 12:00:00');
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());
console.log(futureDate);

/* Date.prototype.setUTCDate() : Cambia el dia por la fehca UTC o la que se le indique */
const event = new Date('August 19, 1975 23:15:30 GMT-3:00');
console.log(event.getUTCDate());// Expected output: 20
event.setUTCDate(19);
console.log(event.getUTCDate());// Expected output: 19

/* Date.prototype.setUTCFullYear() : Cambia el año por la fehca UTC o la que se le indique */
const event = new Date('December 31, 1975 23:15:30 GMT-3:00');
console.log(event.getUTCFullYear());// Expected output: 1976
console.log(event.toUTCString());// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"
event.setUTCFullYear(1975);
console.log(event.toUTCString());// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"

/* Date.prototype.setUTCHours() : Cambia el hora por la fehca UTC o la que se le indique */
const event = new Date('August 19, 1975 23:15:30 GMT-3:00');
console.log(event.toUTCString());// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"
console.log(event.getUTCHours());// Expected output: 2
event.setUTCHours(23);
console.log(event.toUTCString());// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"

/* Date.prototype.setUTCMilliseconds() : Cambia el milisegundos por la fehca UTC o la que se le indique */
const date1 = new Date('2018-01-24T12:38:29.069Z');
console.log(date1.getUTCMilliseconds());// Expected output: 69
date1.setUTCMilliseconds(420);
console.log(date1.getUTCMilliseconds());// Expected output: 420

/* Date.prototype.setUTCMinutes() : Cambia el minutos por la fehca UTC o la que se le indique */
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
console.log(date1.getUTCMinutes());// Expected output: 15
date1.setUTCMinutes(25);
console.log(date1.getUTCMinutes());// Expected output: 25

/* Date.prototype.setUTCMonth() : Cambia el mes por la fehca UTC o la que se le indique */
const event = new Date('December 31, 1975 23:15:30 GMT-3:00');
console.log(event.toUTCString());// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"
console.log(event.getUTCMonth());// Expected output: 0
event.setUTCMonth(11);
console.log(event.toUTCString());// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"

/* Date.prototype.setUTCSeconds() : Cambia el segundos por la fehca UTC o la que se le indique */
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
console.log(date1.getUTCSeconds());// Expected output: 30
date1.setUTCSeconds(39);
console.log(date1.getUTCSeconds());// Expected output: 39

/* Date.prototype[Symbol.toPrimitive]() : Pasa la fecha a como se indica */
const date = new Date('20 December 2019 14:48');
console.log(date[Symbol.toPrimitive]('string'));// Expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"
console.log(date[Symbol.toPrimitive]('number'));// Expected output: 1576833480000

/* Date.prototype.toDateString() : Tranforma la fecha a un string */
const event = new Date(1993, 6, 28, 14, 39, 7);
console.log(event.toString());// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)" Note: your timezone may vary
console.log(event.toDateString());// Expected output: "Wed Jul 28 1993"

/* Date.prototype.toISOString() : Lo muestra en un string en formato de iso 8601  */
const event = new Date('05 October 2011 14:48 UTC');
console.log(event.toString());// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)" Note: your timezone may vary
console.log(event.toISOString());// Expected output: "2011-10-05T14:48:00.000Z"

/* Date.prototype.toJSON() : Lo pasa a un string y lo tranforma a un formato que da en el ejmeplo */
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);
console.log(jsonDate); // 1970-01-01T00:00:00.000Z

/* Date.prototype.toLocaleDateString() : Trae la fecha dependiendo que local le inidquemos */
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString('de-DE', options));// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012
console.log(event.toLocaleDateString('ar-EG', options));// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢
console.log(event.toLocaleDateString(undefined, options));// Expected output (varies according to local timezone and default locale): Thursday, December 20, 20

/* Date.prototype.toLocaleString() :  Te tarae la fecha en string y te la muestra dependiendo a que lugar la quieras mostrar */
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));// Expected output: "20/12/2012, 03:00:00"
// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));// Expected output: "2012. 12. 20. 오전 3:00:00"

/* Date.prototype.toLocaleTimeString() : Te trae la hora que depende de tu region */
// Depending on timezone, your results will vary
const event = new Date('August 19, 1975 23:15:30 GMT+00:00');
console.log(event.toLocaleTimeString('en-US'));// Expected output: "1:15:30 AM"
console.log(event.toLocaleTimeString('it-IT'));// Expected output: "01:15:30"
console.log(event.toLocaleTimeString('ar-EG'));// Expected output: "١٢:١٥:٣٠ ص"

/* Date.prototype.toString() : Te tare la fecha y hora en un string */
const event = new Date('August 19, 1975 23:15:30');
console.log(event.toString());// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"

/* Date.prototype.toTimeString() : Te trae la hora en string */
const event = new Date('August 19, 1975 23:15:30');
console.log(event.toTimeString());// Expected output: "23:15:30 GMT+0200 (CEST)"

/* Date.prototype.toUTCString() : Te trae la fecha de UTC */
const event = new Date('14 Jun 2017 00:00:00 PDT');
console.log(event.toUTCString());// Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"

/* Date.prototype.valueOf() : Te trae la fecha en formato de numero */
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(date1.valueOf());// Expected output: 823230245000
const date2 = new Date('02 Feb 1996 03:04:05 GMT');
console.log(date2.valueOf());// Expected output: 823230245000