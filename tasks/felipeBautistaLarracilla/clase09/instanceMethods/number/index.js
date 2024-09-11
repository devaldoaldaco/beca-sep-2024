/*
***Number.prototype.toExponential()***
The toExponential() method of Number values returns a string representing this number in exponential notation.

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Expected output: "1.23e+5"

console.log(expo('123456'));
// Expected output: "1.23456e+5"

console.log(expo('oink'));
// Expected output: "NaN"
*/
/*
***Number.prototype.toFixed()***
The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  // Expected output: "123.46"
  
  console.log(financial(0.004));
  // Expected output: "0.00"
  
  console.log(financial('1.23e+5'));
  // Expected output: "123000.00"
  */
/*
***Number.prototype.toLocaleString()***

The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number. In implementations with Intl.NumberFormat API support, this method simply calls Intl.NumberFormat.

Every time toLocaleString is called, it has to perform a search in a big database of localization strings, which is potentially inefficient. When the method is called many times with the same arguments, it is better to create a Intl.NumberFormat object and use its format() method, because a NumberFormat object remembers the arguments passed to it and may decide to cache a slice of the database, so future format calls can search for localization strings within a more constrained context.

function eArabic(x) {
    return x.toLocaleString('ar-EG');
}

console.log(eArabic(123456.789));
// Expected output: "١٢٣٬٤٥٦٫٧٨٩"

console.log(eArabic('123456.789'));
// Expected output: "123456.789"

console.log(eArabic(NaN));
// Expected output: "ليس رقم"
*/
/*
*** Number.prototype.toPrecision()***
The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.

function precise(x) {
    return x.toPrecision(4);
}

console.log(precise(123.456));
// Expected output: "123.5"

console.log(precise(0.004));
// Expected output: "0.004000"

console.log(precise(1.23e5));
// Expected output: "1.230e+5"
*/
/*
*** Number.prototype.toString() ***
 The toString() method of Number values returns a string representing this number value.
 
function hexColour(c) {
    if (c < 256) {
        return Math.abs(c).toString(16);
    }
    return 0;
}

console.log(hexColour(233));
// Expected output: "e9"

console.log(hexColour('11'));
// Expected output: "b"
*/
/*
***Number.prototype.valueOf()***
The valueOf() method of Number values returns the value of this number.
*/
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"
