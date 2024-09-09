/*
*** Date.prototype.getDate()***
The getDate() method of Date instances returns the day of the month for this date according to local time.

const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();

console.log(date1);
// Expected output: 19
*/
/*
*** Date.prototype.getDay() ***
The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate().

const birthday = new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// Expected output: 2
*/
/*
*** Date.prototype.getFullYear() ***
The getFullYear() method of Date instances returns the year for this date according to local time.
Use this method instead of the getYear() method.

const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear());
// Expected output: 1969
*/
/*
*** Date.prototype.getHours() ***

The getHours() method of Date instances returns the hours for this date according to local time.

const birthday = new Date('March 13, 08 04:20');

console.log(birthday.getHours());
// Expected output: 4
*/
/*
*** Date.prototype.getMilliseconds() ***
The getMilliseconds() method of Date instances returns the milliseconds for this date according to local time.

const moonLanding = new Date('July 20, 69 00:20:18');
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// Expected output: 123 
*/
/*
*** Date.prototype.getMinutes()***
The getMinutes() method of Date instances returns the minutes for this date according to local time.

const birthday = new Date('March 13, 08 04:20');

console.log(birthday.getMinutes());
// Expected output: 20
*/
/*
*** Date.prototype.getMonth() ***
The getMonth() method of Date instances returns the month for this date according to local time, as a zero-based value (where zero indicates the first month of the year).


const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getMonth()); // (January gives 0)
// Expected output: 6
*/
/*
*** Date.prototype.getSeconds() ***
The getSeconds() method of Date instances returns the seconds for this date according to local time.

const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getSeconds());
// Expected output: 18
*/
/*
*** Date.prototype.getTime() ***
The getTime() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000
*/
/*
*** Date.prototype.getTimezoneOffset()***

The getTimezoneOffset() method of Date instances returns the difference, in minutes, between this date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone.

const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

console.log(date1.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Expected output: true
*/
/*
*** Date.prototype.getUTCDate()***
The getUTCDate() method of Date instances returns the day of the month for this date according to universal time.

const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');

console.log(date1.getUTCDate());
// Expected output: 19

console.log(date2.getUTCDate());
// Expected output: 20
*/
/*
***Date.prototype.getUTCDay()***

The getUTCDay() method of Date instances returns the day of the week for this date according to universal time, where 0 represents Sunday.

const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');

// Tuesday
console.log(date1.getUTCDay());
// Expected output: 2

// Wednesday
console.log(date2.getUTCDay());
// Expected output: 3
*/
/*
*** Date.prototype.getUTCFullYear() ***
The getUTCFullYear() method of Date instances returns the year for this date according to universal time.

const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date1.getUTCFullYear());
// Expected output: 1975

console.log(date2.getUTCFullYear());
// Expected output: 1976
*/
/*
*** Date.prototype.getUTCHours() ***

The getUTCHours() method of Date instances returns the hours for this date according to universal time.

const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date1.getUTCHours());
// Expected output: 12

console.log(date2.getUTCHours());
// Expected output: 10
*/
/*
*** Date.prototype.getUTCMilliseconds() ***
The getUTCMilliseconds() method of Date instances returns the milliseconds for this date according to universal time.

const exampleDate = new Date('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678
*/
/*
*** Date.prototype.getUTCMinutes() ***
The getUTCMinutes() method of Date instances returns the minutes for this date according to universal time.

const date1 = new Date('1 January 2000 03:15:30 GMT+07:00');
const date2 = new Date('1 January 2000 03:15:30 GMT+03:30');

console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Expected output: 15

console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Expected output: 45
*/
/*
*** Date.prototype.getUTCMonth() ***

The getUTCMonth() method of Date instances returns the month for this date according to universal time, as a zero-based value (where zero indicates the first month of the year).


const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

// December
console.log(date1.getUTCMonth());
// Expected output: 11

// January
console.log(date2.getUTCMonth());
// Expected output: 0
*/
/*
*** Date.prototype.getUTCSeconds() ***

The getUTCSeconds() method of Date instances returns the seconds in the specified date according to universal time.

const moonLanding = new Date('July 20, 1969, 20:18:04 UTC');

console.log(moonLanding.getUTCSeconds());
// Expected output: 4
*/
/*
*** Date.prototype.getYear() *** deprecated

The getYear() method of Date instances returns the year for this date according to local time. Because getYear() does not return full years ("year 2000 problem"), it is deprecated and has been replaced by the getFullYear() method.

const xmas = new Date("1995-12-25");
const year = xmas.getYear(); // returns 95
console.log(year);
*/
/*
*** Date.prototype.setDate() ***
The setDate() method of Date instances changes the day of the month for this date according to local time.

const event = new Date('August 19, 1975 23:15:30');

event.setDate(24);

console.log(event.getDate());
// Expected output: 24

event.setDate(32);
// Only 31 days in August!

console.log(event.getDate());
// Expected output: 1
*/
/*
*** Date.prototype.setFullYear()***
The setFullYear() method of Date instances changes the year, month, and/or day of month for this date according to local time.

const event = new Date('August 19, 1975 23:15:30');

event.setFullYear(1969);

console.log(event.getFullYear());
// Expected output: 1969

event.setFullYear(0);

console.log(event.getFullYear());
// Expected output: 0
*/
/*
*** Date.prototype.setHours() ***
The setHours() method of Date instances changes the hours, minutes, seconds, and/or milliseconds for this date according to local time.

const event = new Date('August 19, 1975 23:15:30');
event.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event.setHours(20, 21, 22);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
*/
/*
*** Date.prototype.setMilliseconds() ***
The setMilliseconds() method of Date instances changes the milliseconds for this date according to local time.

const event = new Date('August 19, 1975 23:15:30');

console.log(event.getMilliseconds());
// Expected output: 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// Expected output: 456
*/
/*
*** Date.prototype.setMinutes() ***
The setMinutes() method of Date instances changes the minutes for this date according to local time.

const event = new Date('August 19, 1975 23:15:30');

event.setMinutes(45);

console.log(event.getMinutes());
// Expected output: 45

console.log(event);
// Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Note: your timezone may vary
*/
/*
*** Date.prototype.setMonth() ***
The setMonth() method of Date instances changes the month and/or day of the month for this date according to local time.

const event = new Date('August 19, 1975 23:15:30');

event.setMonth(3);

console.log(event.getMonth());
// Expected output: 3

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary
*/
/*
*** Date.prototype.setSeconds() ***
The setSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to local time.

const event = new Date('August 19, 1975 23:15:30');

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
*/
/*
*** Date.prototype.setTime() ***
 The setTime() method of Date instances changes the timestamp for this date, which is the number of milliseconds since the epoch, defined as the midnight at the beginning of January 1, 1970, UTC.
 
const launchDate = new Date('July 1, 1999, 12:00:00');
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary
*/
/*
*** Date.prototype.setUTCDate() ***
The setUTCDate() method of Date instances changes the day of the month for this date according to universal time.

const event = new Date('August 19, 1975 23:15:30 GMT-3:00');

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
*/
/*
*** Date.prototype.setUTCFullYear() ***
The setUTCFullYear() method of Date instances changes the year for this date according to universal time.

const event = new Date('December 31, 1975 23:15:30 GMT-3:00');

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
*/
/*
*** Date.prototype.setUTCHours() ***
The setUTCHours() method of Date instances changes the hours, minutes, seconds, and/or milliseconds for this date according to universal time.

const event = new Date('August 19, 1975 23:15:30 GMT-3:00');

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"

console.log(event.getUTCHours());
// Expected output: 2

event.setUTCHours(23);

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"
*/
/*
*** Date.prototype.setUTCMilliseconds() ***
The setUTCMilliseconds() method of Date instances changes the milliseconds for this date according to universal time.

const date1 = new Date('2018-01-24T12:38:29.069Z');

console.log(date1.getUTCMilliseconds());
// Expected output: 69

date1.setUTCMilliseconds(420);

console.log(date1.getUTCMilliseconds());
// Expected output: 420
*/
/*
*** Date.prototype.setUTCMinutes() ***
The setUTCMinutes() method of Date instances changes the minutes for this date according to universal time.

const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

console.log(date1.getUTCMinutes());
// Expected output: 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());
// Expected output: 25
*/
/*
*** Date.prototype.setUTCMonth() ***
The setUTCMonth() method of Date instances changes the month and/or day of the month for this date according to universal time.

const event = new Date('December 31, 1975 23:15:30 GMT-3:00');

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Expected output: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
*/
/*
*** Date.prototype.setUTCSeconds()***
The setUTCSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to universal time.


const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

console.log(date1.getUTCSeconds());
// Expected output: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Expected output: 39
*/
/*
*** Date.prototype.setYear() *** deprecated
The setYear() method of Date instances sets the year for a specified date according to local time.

const theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
console.log(theBigDay);
*/
/*
*** Date.prototype[Symbol.toPrimitive]() ***
The [Symbol.toPrimitive]() method of Date instances returns a primitive value representing this date. It may either be a string or a number, depending on the hint given.


// Depending on timezone, your results will vary
const date = new Date('20 December 2019 14:48');

console.log(date[Symbol.toPrimitive]('string'));
// Expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]('number'));
// Expected output: 1576833480000
*/
/*
*** Date.prototype.toDateString() *** 
The toDateString() method of Date instances returns a string representing the date portion of this date interpreted in the local timezone.

const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());
// Expected output: "Wed Jul 28 1993"
*/
/*
*** Date.prototype.toISOString() ***
The toISOString() method of Date instances returns a string representing this date in the date time string format, a simplified format based on ISO 8601, which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always UTC, as denoted by the suffix Z.

const event = new Date('05 October 2011 14:48 UTC');
console.log(event.toString());
// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toISOString());
// Expected output: "2011-10-05T14:48:00.000Z"
*/
/* 
*** Date.prototype.toJSON() ***
The toJSON() method of Date instances returns a string representing this date in the same ISO format as toISOString().

const event = new Date('August 19, 1975 23:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
*/
/*
*** Date.prototype.toLocaleDateString()***
The toLocaleDateString() method of Date instances returns a string with a language-sensitive representation of the date portion of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString('de-DE', options));
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString('ar-EG', options));
// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event.toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012
*/
/*
*** Date.prototype.toLocaleString() ***
The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// Expected output: "2012. 12. 20. 오전 3:00:00"
*/
/*
*** Date.prototype.toLocaleTimeString() *** 
The toLocaleTimeString() method of Date instances returns a string with a language-sensitive representation of the time portion of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.

// Depending on timezone, your results will vary
const event = new Date('August 19, 1975 23:15:30 GMT+00:00');

console.log(event.toLocaleTimeString('en-US'));
// Expected output: "1:15:30 AM"

console.log(event.toLocaleTimeString('it-IT'));
// Expected output: "01:15:30"

console.log(event.toLocaleTimeString('ar-EG'));
// Expected output: "١٢:١٥:٣٠ ص"
*/
/*
*** Date.prototype.toString() ***
The toString() method of Date instances returns a string representing this date interpreted in the local timezone.

const event = new Date('August 19, 1975 23:15:30');

console.log(event.toString());
// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
*/
/*
*** Date.prototype.toTimeString() ***
The toTimeString() method of Date instances returns a string representing the time portion of this date interpreted in the local timezone.

const event = new Date('August 19, 1975 23:15:30');

console.log(event.toTimeString());
// Expected output: "23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
*/
/*
*** Date.prototype.toUTCString()***
 The toUTCString() method of Date instances returns a string representing this date in the RFC 7231 format, with negative years allowed. The timezone is always UTC. toGMTString() is an alias of this method.

 const event = new Date('14 Jun 2017 00:00:00 PDT');

console.log(event.toUTCString());
// Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"
*/
/*
*** Date.prototype.valueOf() ***
The valueOf() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date('02 Feb 1996 03:04:05 GMT');

console.log(date2.valueOf());
// Expected output: 823230245000
*/
