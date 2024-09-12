console.log(new Date(8.64e15).toString());
console.log(new Date(8.64e15 + 1).toString());

const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00");
const birthday2 = new Date("1995-12-17T03:24:00");
const birthaday3 = new Date(1995, 11, 17);
const birthaday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthaday5 = new Date(628021800000);

const date = new Date("2020-05-12T23:50:21.817Z");

date.toString();
date.toDateString();
date.toTimeString();
date.toISOString();
date.toJSON();
date.toUTCString();
date.toLocaleString();
date.toLocaleDateString();
date.toLocaleTimeString();

const date2 = new Date("2000-01-12T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),

]; 

const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

let date3 = new Date(98, 1);
date3 = new Date(22, 1);
date3 = new Date("2/1/22");

date.setFullYear(98);
date.toString();
date.setYear(22);
date.toString();

date.setFullYear(98);
date.getFullYear();
date.getFullYear(22);
date.getFullYear();

function doSomethingForAlongTime() {
  for (let i = 0; i < 100000000; i++) {    
  }
}

const start = new Date();
doSomethingForAlongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime();

function yourFunction() {

}


function printElapsedTime(testFn) {
  const starTime = Date.now();
  const result = testFn();
  const endTime = Date.now();


console.log(`Elapse time: ${String(endTime - startTime)} milliseconds `);
return resultudado;

}

const yourFunctionReturn = printElapsedTime(yourFunction);

const second = Math.floor(Date.now() / 1000);
