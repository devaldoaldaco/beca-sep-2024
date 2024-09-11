/*String instance methods

***String.prototype.anchor()***
The anchor() method of string values creates a string that embeds this string in 
<a> element with a name (<a name = "...">str</a>). 

const contentString = "Hello, world";
document.body.innerHTML = contentString.anchor("hello");

*/
/*
***String.prototype.at()***
The at method of String values takes an integer value and returns a new String consisting 
fo single UTF-16 code unit located at the specified offset. This method allows for positive
and negative integers. Negative integers count back from the last string character.

const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
//Expected output: "An index of 5 returns the character u"

index = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
//Expected output: "An index of -4 returns the character d"
*/
/*
***String.prototype.big()***
The big() method of String values creates a string that embeds this string in a 
<big> element (<big>str</big>),which causes this string to be displayed in a big font. 

const contentString = "Hello, world";
document.body.innerHTML = contentString.big();

*/
/*
***String.prototype.blink()***
The blick() method of String values creates a string that embeds this string in a <blink> 
element (<blick>str</blick>), which used to cause a string to blink in old browsers.

const contentString = "Hello, world";
document.body.innerHTML = contentString.blink();
*/
/*
***String.prototype.bold()***
The bold() method of string values creates a string that embeds this string in a <b> 
element (<b>str</b>), which causes this string to be displayed as bold.

const contentString = "Hello, world";
document.body.innerHTML = contentString.bold();
*/
/*
***String.protetype.charAt()***
The charAt() method of String values returns a new string consisting of the single
UTF-16 code unit at the given index.

charAt() always indexes the string as a sequence of UTF-16 code units, so it may 
return lone surrogates. To get the full Unicode code point at the given index,
use String.prototype.codePointAt(). and String.fromCodePoint().

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
//Expected output: "The charcter at index 4 is q"
*/
/*
***String.prototype.charCodeAt()***
The charCodeAt() method of String values returns an integer between 0 and 65535
representing the UTF-16 code unit at the given index. 
charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it 
may return lone surrogates. To get the full Unicode code point at the given index, use
String.prototype.codePointAt().

const sentence = 'The quick brown fox jumps over the lazy dog.'
const index = 4;

console.log(`Character code ${sentence.charCodeAt(index)} is equal to 
${sentence.charAt(index,)}`,);
//Expected output: "Character code 113 is equal to q"
*/
/*
***String.prototype.codePointAt()***
The codePointAt() method of String values returns a non-negative integer that is the
Unicode code point value of the character starting at the given index. Note that 
the index is still based on UTF-16 code units, not Unicode code points. 

const icons = '☃★♲';
console.log(icons.codePointAt(1));
//Expected output; "9733"
*/
/*
***String.prototype.concat()***
The concat() method of String values concatenates the string arguments to this 
string and returns a new string.

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
//Expected output:"Hello World"
console.log(str2.concat(', ', str1));
//Expected output: "World, Hello"
*/
/*
***String.prototype.endsWith ***
The endsWith() method of String values determines whether a string ends
with the characters of this string, returning true or false as appropiate  

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
//Expected output: true
console.log(str1.endsWith('best', 17));
//Expected output: true

const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
//Expected output:false
*/
/*
***String.prototype.fixed()*** Deprecated
The fixed() method of String values creates a string that embeds this string 
in a <tt> element (<tt>str</tt>), which causes this string to be displayed in 
a fixed width font.

const contentString = "Hello, world";
document.body.innerHTML = contentString.fixed();
*/
/*
***String.prototype.fontcolor() deprecated
The fontcolor() method of String values creates a string that embeds this string
in a <font> element (<font color="...">str</font>), which causes this string to be
displayed in the specified font color.

const contentString = "Hello, world";
document.body.innerHTML = contentString.fontcolor("red");
*/
/*
***String.prototype.fontsize() deprecated
The fontsize() method of String values creates a string that embeds this string in a
<font> element (<font size="...">str</font>), which causes this string to be 
displayed in the specified font size. 

const contentString = "Hello, world";
document.body.innerHTML = contentString.fontsize(7);
*/
/*
***String.prototype.includes()
The includes() method of String values performs a case-sensitive search 
to determine whether a given string may be found within this string, returning
true or false as appropiate.

const sentence = 'The quick brown fox jumps over the lazy dog';

const word = 'fox';
console.log(
    `The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'
    } in the sentence`,);
*/
/*
***String.prototype.indexOf()***
The indexOf()method of String values searches this string and returns the index
of the first occurence of the specified substring. It takes an optional starting 
position and returns the first occurrence of the specified substring at ab 
index greater than or equal to the specified number.


const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(`The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm, indexOfFirst + 1,)}`,);
// Expected output: "The index of the second "dog" is 38"
*/
/*
***String.prototype.isWellFormed()***
The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.

const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
];

for (const str of strings) {
    console.log(str.isWellFormed());
}
// Logs:
// false
// false
// false
// false
// true
// true
*/
/*
***String.prototype.italics() Deprecated

The italics() method of String values creates a string that embeds this string in an <i> element (<i>str</i>), which causes this string to be displayed as italic.

const contentString = "Hello, world";

document.body.innerHTML = contentString.italics();
*/
/*
***String.prototype.lastIndexOf()***
The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.


const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';

console.log(
    `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,);
// Expected output: "Index of the last "dog" is 38"
*/
/*
***String.prototype.link()*** deprecated
/*
The link() method of String values creates a string that embeds this string in an <a> element (<a href="...">str</a>), to be used as a hypertext link to another URL.


const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
*/
/*
***String.prototype.localeCompare()***
The localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.

When comparing large numbers of strings, such as in sorting large arrays, it is better to create an Intl.Collator object and use the function provided by its compare() method.

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0
*/
/*
***String.prototype.match()***
The match() method of String values retrieves the result of matching this string against a regular expression.

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

*/
/*
***String.prototype.matchAll()***
The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
*/
/*
***String.prototype.normalize()***
The normalize() method of String values returns the Unicode Normalization Form of this string.
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true
*/
/*
***String.prototype.padEnd()***
The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// Expected output: "200  "
*/
/*
***String.prototype.padStart()***
The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"
*/
/*
***String.prototype.repeat()***
The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
*/
/*
***String.prototype.replace()***
The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
*/
/*
***String.prototype.replaceAll()***
The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"
*/
/*
***String.prototype.search()***
The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"
*/
/*
***String.prototype.slice()***
The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

*/
/*
***String.prototype.small()***deprecated
The small() method of String values creates a string that embeds this string in a <small> element (<small>str</small>), which causes this string to be displayed in a small font.
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
*/
/*
*** String.prototype.split()***
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
*/
/*
***String.prototype.startsWith()***
The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false
*/
/*
***String.prototype.strike()*** Deprecated
The strike() method of String values creates a string that embeds this string in a <strike> element (<strike>str</strike>), which causes this string to be displayed as struck-out text.

const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
*/
/*
***String.prototype.sub()*** Deprecated
The sub() method of String values creates a string that embeds this string in a <sub> element (<sub>str</sub>), which causes this string to be displayed as subscript.
const contentString = "Hello, world";

document.body.innerHTML = contentString.sub();
*/
/*
***String.prototype.substr()*** Deprecated
The substr() method of String values returns a portion of this string, starting at the specified index and extending for a given number of characters afterwards.

const str = 'Mozilla';

console.log(str.substr(1, 2));
// Expected output: "oz"

console.log(str.substr(2));
// Expected output: "zilla"

*/
/*
*** String.prototype.substring() ***
The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"
*/
/*
*** String.prototype.sup() *** Deprecated
The sup() method of String values creates a string that embeds this string in a <sup> element (<sup>str</sup>), which causes this string to be displayed as superscript.

const contentString = "Hello, world";

document.body.innerHTML = contentString.sup();
*/
/*
***String.prototype[Symbol.iterator]()***
The [Symbol.iterator]() method of String values implements the iterable protocol and allows strings to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns a string iterator object that yields the Unicode code points of the string value as individual strings.

const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
    console.log(theChar.value);
    theChar = iterator.next();
    // Expected output: "T"
    //                  "h"
    //                  "e"
}
*/
/*
***String.prototype.toLocaleLowerCase()***
The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"
*/
/*
***String.prototype.toLocaleUpperCase()***
The toLocaleUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.

const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"
*/
/*
*** String.prototype.toLowerCase()***
The toLowerCase() method of String values returns this string converted to lower case.

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
*/
/*
***String.prototype.toString()***
The toString() method of String values returns this string value.


const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
*/
/*
***String.prototype.toUpperCase()***
The toUpperCase() method of String values returns this string converted to uppercase.
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
*/
/*
***String.prototype.toWellFormed()***
The toWellFormed() method of String values returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.

const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
];

for (const str of strings) {
    console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
*/
/*
***String.prototype.trim()***
The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
*/
/*
***String.prototype.trimEnd()***
The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
*/
/*
***String.prototype.trimStart()***
The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
*/
/*
***String.prototype.valueOf()***
The valueOf() method of String values returns this string value.

*/
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"

