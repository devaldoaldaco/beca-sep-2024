
const isObject = (obj) => obj && typeof obj === "object";

if (new Boolean(true)) {
  console.log("this log is printed.");
}

if (new Boolean(false)) {
  console.log("This log is ALSO printed");

}

const myFalse = new Boolean(false);
const g = Boolean(myFalse);
const myString = new String("Hello");
const s = Boolean(myString);

if ([]) {
  console.log("[] is truthy");
  console.log("[]== false");
}


const bNoParam = Boolean();
const bZero = Boolean(0);
const bEmptyString = Boolean(null);
const bfalse = Boolean(false);


const btrue = Boolean(true);
const btrueString = Boolean("true");
const bfalseString =
Boolean ("false");
const bSuLin = Boolean("Su Lin");
const bArrayProto = Boolean([]);
const bObjProto = Boolean({});
