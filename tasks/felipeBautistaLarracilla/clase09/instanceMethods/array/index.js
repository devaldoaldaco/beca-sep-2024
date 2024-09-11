/*
*** Array.prototype.at()***
The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
*/
/*
*** Array.prototype.concat() ***
The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
*/
/*
*** Array.prototype.copyWithin() ***
The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
*/
/*
*** Array.prototype.entries() ***
The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.


const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
*/
/*
*** Array.prototype.every() ***
The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
*/
/*
*** Array.prototype.fill() ***
The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
*/
/*
*** Array.prototype.filter() ***
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
*/
/*
***  Array.prototype.find() ***
The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
*/
/*
*** Array.prototype.findIndex() ***

The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
See also the find() method, which returns the first element that satisfies the testing function (rather than its index).

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
*/
/*
*** Array.prototype.findLast() ***
The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130
*/
/*
*** Array.prototype.findLastIndex() ***
The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
See also the findLast() method, which returns the value of last element that satisfies the testing function (rather than its index).

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130
*/
/*
*** Array.prototype.flat() ***
The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
*/
/*
*** Array.prototype.flatMap() ***
The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.


const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]

*/
/*
*** Array.prototype.forEach() ***
The forEach() method of Array instances executes a provided function once for each array element.

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
*/
/*
*** Array.prototype.includes() ***
The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
*/
/*
*** Array.prototype.indexOf() ***
The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
*/
/*
*** Array.prototype.join() ***
The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
*/
/*
*** Array.prototype.keys() ***
The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
*/
/*
*** Array.prototype.lastIndexOf() ***
The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1
*/
/*
*** Array.prototype.map() ***
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
*/
/*
*** Array.prototype.pop() ***
The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
*/
/*
*** Array.prototype.push() ***
The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
*/
/*
*** Array.prototype.reduce() ***
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/
/*
*** Array.prototype.reduceRight() ***
The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

See also Array.prototype.reduce() for left-to-right.

const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array1.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(result);
  // Expected output: Array [4, 5, 2, 3, 0, 1]
*/
/*
*** Array.prototype.reverse() ***
The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

To reverse the elements in an array without mutating the original array, use toReversed().

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]
*/
/*
*** Array.prototype.shift() ***
The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
*/
/*
*** Array.prototype.slice() ***
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
*/
/*
*** Array.prototype.some() *** 
 The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
 
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
*/
/*
*** Array.prototype.sort() ***
The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
*/
/*
*** Array.prototype.splice() ***

The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
*/
/*
*** Array.prototype[Symbol.iterator]() ***

The [Symbol.iterator]() method of Array instances implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.
The initial value of this property is the same function object as the initial value of the Array.prototype.values property.

const array1 = ['a', 'b', 'c'];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
*/
/*
*** Array.prototype.toLocaleString() ***
The toLocaleString() method of Array instances returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
*/
/*
*** Array.prototype.toReversed() ***
The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
*/
/*
*** Array.prototype.toSorted() *** 
The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.

const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
*/
/*
*** Array.prototype.toSpliced() ***
The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.

const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]
*/
/*
*** Array.prototype.toString() ***
The toString() method of Array instances returns a string representing the specified array and its elements.

const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
*/
/*
*** Array.prototype.unshift() ***
The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
*/
/*
*** Array.prototype.values() ***

The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.

const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
    console.log(value);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
*/
/*
*** Array.prototype.with() ***
The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
*/
