const array1 = [5, 12, 8, 130, 44];

// `at` devuelve el elemento en el índice especificado. Permite índices negativos.
let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

// `concat` une dos o más arrays en un nuevo array.
const array2 = ['a', 'b', 'c'];
const array3 = ['d', 'e', 'f'];
const array4 = array1.concat(array2);
console.log(array4);
// Expected output: Array ["5", "12", "8", "130", "44", "a", "b", "c"]

// `copyWithin` copia una sección de un array a otra posición dentro del mismo array.
const array5 = ['a', 'b', 'c', 'd', 'e'];
// Copia el elemento en índice 3 a índice 0
console.log(array5.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copia todos los elementos desde el índice 3 al final a partir del índice 1
console.log(array5.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

const array6 = ['a', 'b', 'c'];

// `entries` devuelve un iterador con pares de índice y valor.
const iterator6 = array1.entries();
console.log(iterator6.next().value);
// Expected output: Array [0, 5]

const isBelowThreshold = (currentValue) => currentValue < 40;
const array7 = [1, 30, 39, 29, 10, 13];

// `every` verifica si todos los elementos del array cumplen con la condición proporcionada.
console.log(array7.every(isBelowThreshold));
// Expected output: true

const array8 = [1, 2, 3, 4];

// `fill` cambia todos los elementos del array desde el índice inicial hasta el índice final por un valor fijo.
console.log(array8.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// `filter` crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

const array9 = [5, 12, 8, 130, 44];

// `find` devuelve el primer elemento que cumple con la condición proporcionada.
const found = array9.find((element) => element > 10);
console.log(found);
// Expected output: 12

const array10 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

// `findIndex` devuelve el índice del primer elemento que cumple con la condición proporcionada.
console.log(array10.findIndex(isLargeNumber));
// Expected output: 3

const array11 = [5, 12, 50, 130, 44];

// `findLast` devuelve el último elemento que cumple con la condición proporcionada.
const found2 = array11.findLast((element) => element > 45);
console.log(found2);
// Expected output: 130

const array12 = [5, 12, 50, 130, 44];
const isLargeNumber2 = (element) => element > 45;

// `findLastIndex` devuelve el índice del último elemento que cumple con la condición proporcionada.
console.log(array12.findLastIndex(isLargeNumber2));
// Expected output: 3

const arr1 = [0, 1, 2, [3, 4]];

// `flat` aplanará un array anidado.
console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [1, 2, 1];

// `flatMap` primero mapea cada elemento usando una función de mapeo y luego aplana el resultado.
const result2 = arr2.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result2);
// Expected output: Array [1, 2, 2, 1]

const array13 = ['a', 'b', 'c'];

// `forEach` ejecuta una función proporcionada una vez por cada elemento del array.
array13.forEach((element) => console.log(element));
// Expected output: "a" "b" "c"

const array14 = [1, 2, 3];

// `includes` determina si un array contiene un elemento específico.
console.log(array14.includes(2));
// Expected output: true

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// `indexOf` devuelve el primer índice en el que se encuentra un elemento específico.
console.log(beasts.indexOf('bison'));
// Expected output: 1

const elements = ['Fire', 'Air', 'Water'];

// `join` une todos los elementos de un array en una cadena.
console.log(elements.join());
// Expected output: "Fire,Air,Water"

const array15 = ['a', 'b', 'c'];

// `keys` devuelve un iterador para los índices de los elementos del array.
const iterator = array15.keys();
for (const key of iterator) {
    console.log(key);
}
// Expected output: 0 1 2

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// `lastIndexOf` devuelve el último índice en el que se encuentra un elemento específico.
console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

const array16 = [1, 4, 9, 16];

// `map` crea un nuevo array con los resultados de aplicar una función a cada elemento del array.
const map1 = array16.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// `pop` elimina el último elemento del array y lo devuelve.
console.log(plants.pop());
// Expected output: "tomato"

const animals2 = ['pigs', 'goats', 'sheep'];

// `push` añade uno o más elementos al final del array y devuelve la nueva longitud del array.
const count = animals2.push('cows');
console.log(count);
// Expected output: 4
console.log(animals2);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals2.push('chickens', 'cats', 'dogs');
console.log(animals2);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

const array17 = [1, 2, 3, 4];
// `reduce` ejecuta una función reductora sobre cada elemento del array, resultando en un único valor.
const initialValue = 0;
const sumWithInitial = array17.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumWithInitial);
// Expected output: 10

const array18 = [
    [0, 1],
    [2, 3],
    [4, 5],
];

// `reduceRight` ejecuta una función reductora sobre cada elemento del array, comenzando desde el final.
const result3 = array18.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
);
console.log(result3);
// Expected output: Array [4, 5, 2, 3, 0, 1]

const array19 = ['one', 'two', 'three'];
console.log('array1:', array19);
// Expected output: "array1:" Array ["one", "two", "three"]

// `reverse` invierte el orden de los elementos del array.
const reversed = array19.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

const array20 = [1, 2, 3];

// `shift` elimina el primer elemento del array y lo devuelve.
const firstElement = array20.shift();
console.log(array20);
// Expected output: Array [2, 3]

const animals3 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// `slice` devuelve una copia superficial de una porción del array dentro de un nuevo array.
console.log(animals3.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals3.slice(2, 4));
// Expected output: Array ["camel", "duck"]

const array = [1, 2, 3, 4, 5];

// `some` verifica si al menos un elemento del array cumple con la condición proporcionada.
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true

const months = ['March', 'Jan', 'Feb', 'Dec'];

// `sort` ordena los elementos del array in-place y devuelve el array.
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const months2 = ['Jan', 'March', 'April', 'June'];

// `splice` cambia el contenido de un array eliminando, reemplazando o añadiendo elementos.
months2.splice(1, 0, 'Feb');
// Inserta en el índice 1
console.log(months2);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

const array21 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];

// `toLocaleString` convierte el array en una cadena usando la configuración regional y opciones especificadas.
const localeString = array21.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM"

const items = [1, 2, 3];

// `toReversed` devuelve una nueva instancia del array con los elementos en orden inverso, dejando el array original sin cambios.
const reversedItems = items.toReversed();
console.log(reversedItems);
// Expected output: [3, 2, 1]
console.log(items);
// Expected output: [1, 2, 3]

const months4 = ["Mar", "Jan", "Feb", "Dec"];

// `toSorted` devuelve una nueva instancia del array ordenada, dejando el array original sin cambios.
const sortedMonths = months4.toSorted();
console.log(sortedMonths);
// Expected output: ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months4);
// Expected output: ['Mar', 'Jan', 'Feb', 'Dec']

const months5 = ["Jan", "Mar", "Apr", "May"];

// `toSpliced` devuelve una nueva instancia del array con elementos añadidos o eliminados, dejando el array original sin cambios.
const months6 = months5.toSpliced(1, 0, "Feb");
console.log(months6);
// Expected output: ["Jan", "Feb", "Mar", "Apr", "May"]

const array22 = [1, 2, 'a', '1a'];

// `toString` convierte todos los elementos del array en una cadena.
console.log(array22.toString());
// Expected output: "1,2,a,1a"

const array23 = [1, 2, 3];

// `unshift` añade uno o más elementos al inicio del array y devuelve la nueva longitud del array.
console.log(array23.unshift(4, 5));
// Expected output: 5
console.log(array23);
// Expected output: Array [4, 5, 1, 2, 3]

const array24 = ['a', 'b', 'c'];

// `values` devuelve un iterador para los valores de los elementos del array.
const iterator3 = array24.values();
for (const value of iterator3) {
  console.log(value);
}
// Expected output: "a" "b" "c"

const arr = [1, 2, 3, 4, 5];

// `with` devuelve una nueva instancia del array con un elemento reemplazado en la posición especificada.
console.log(arr.with(2, 6)); 
// Expected output: [1, 2, 6, 4, 5]
console.log(arr); 
// Expected output: [1, 2, 3, 4, 5]
