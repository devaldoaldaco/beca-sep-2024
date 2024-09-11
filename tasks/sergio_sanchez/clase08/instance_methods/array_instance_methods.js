// Array - instance methods
/* Array.prototype.at() : nos trae areglo que seleccionamos */
const array1 = [5, 12, 8, 130, 44];
let index = 4;
console.log(`An index of ${index} returns ${array1.at(index)}`);// Expected output: "An index of 2 returns 8"
index = -2;
console.log(`An index of ${index} returns ${array1.at(index)}`);// Expected output: "An index of -2 returns 130"

/* Array.prototype.concat() : Junta los array y los hace uno */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);// Expected output: Array ["a", "b", "c", "d", "e", "f"]

/*  Array.prototype.copyWithin() : instancias superficiales copia parte de esta matriz a otra ubicación en la misma matriz y devuelve esta matriz sin modificar su longitud */
const array1 = ['a', 'b', 'c', 'd', 'e'];
// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));// Expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));// Expected output: Array ["d", "d", "e", "d", "e"]

/* Array.prototype.entries() : Muetra la posicion y el valor de array*/
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);// Expected output: Array [0, "a"]
console.log(iterator1.next().value);// Expected output: Array [1, "b"]

/* Array.prototype.every() : Valida si el array si cumplen con lo requerido */
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));// Expected output: true

/* Array.prototype.fill() : Cambia el array y se puede espesificar desde las posiciones que deseas */
const array1 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
console.log(array1.fill(5, 1));// Expected output: Array [1, 5, 5, 5]
console.log(array1.fill(6));// Expected output: Array [6, 6, 6, 6]

/* Array.prototype.filter() : Se puede filtrar dependiendo de la regla que se le ponga */
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);// Expected output: Array ["exuberant", "destruction", "present"]

/* Array.prototype.find() : Filtra tambien pero solo regrea el primer resultado que encunetra en el array */
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);// Expected output: 12

/* Array.prototype.findIndex() : Filtra tambien pero solo regrea el primer resultado que encunetra en el array  pero trae en que array esta */
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));// Expected output: 3

/* Array.prototype.findLast() : filtra y trae el array anterior del resultado de la condicion asignada*/
const array1 = [5, 12, 50, 100, 130, 44];
const found = array1.findLast((element) => element > 45);
console.log(found);// Expected output: 130

/* Array.prototype.findLastIndex() : Trae el anterior array de la condicion pero trae en que posision esta */
const array1 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));// Expected output: 3

/* Array.prototype.flat() : Lo pasa a un array y dependiendo desde cuantso array hay se pueden juntar in dicando a cuatos array jutos */
const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());// [1, 2, 3, 4, [5, 6]]

/* Array.prototype.flatMap() : Te devuelve una array con la oporacion o filtro que se ha deicido hacer */
const arr1 = [1, 2, 3, 4];
arr1.flatMap((x) => [x * 2]);// [2, 4, 6, 8]
// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);// [[2], [4], [6], [8]]

/* Array.prototype.forEach() : es un for sin tanto complicacion como normalmente se hace, y entra a cada array que encunetra */
const items = ["item1", "item2", "item3"];
const copyItems = [];
// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}
// after
items.forEach((item) => {
  copyItems.push(item);
});

/* Array.prototype.includes() : Trae un tru o false si encuentra o no encuentra dentro de array lo que estas buscando */
const array1 = [1, 2, 3];
console.log(array1.includes(2));// Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));// Expected output: true
console.log(pets.includes('at'));// Expected output: false

/* Array.prototype.indexOf() : Busca en el array cual es el igual y regresa cual es su posicion y si no hay manda un numero negativo */
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));// Expected output: 1
// Start from index 2
console.log(beasts.indexOf('bison', 2));// Expected output: 4
console.log(beasts.indexOf('giraffe'));// Expected output: -1

/* Array.prototype.join() : Junta el array a un string y puedes decidir con que separarlo */
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());// Expected output: "Fire,Air,Water"
console.log(elements.join(''));// Expected output: "FireAirWater"
console.log(elements.join('-'));// Expected output: "Fire-Air-Water"

/* Array.prototype.keys() : Da las todas las posiciones de la matris */
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

/* Array.prototype.lastIndexOf() : Muestra en donde se encuentra la posicion del ultimo valor requerido */
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));// Expected output: 3
console.log(animals.lastIndexOf('Tiger'));// Expected output: 1

/* Array.prototype.map() : Es una nueva forma para recorrer array donde podemos hacer diferentes funciones */
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);// Expected output: Array [2, 8, 18, 32]

/* Array.prototype.pop() : Devuelve el ultimo array que encontro y lo elimina del array */
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());// Expected output: "tomato"

/* Array.prototype.push() : Agrega un nuevo elemento al array */
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);// Expected output: 4
console.log(animals);// Expected output: Array ["pigs", "goats", "sheep", "cows"]

/* Array.prototype.reduce() : instancias ejecuta una función de devolución de llamada "reductor" proporcionada por el usuario en cada elemento de la matriz, en orden, y pasa el valor de retorno del cálculo en el elemento anterior */
const getMax = (a, b) => Math.max(a, b);
// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

/* Array.prototype.reduceRight() : Array instancias aplica una función contra un acumulador y cada valor de la matriz (de derecha a izquierda) para reducirlo a un solo valor */
const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  const result = array1.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  console.log(result);// Expected output: Array [4, 5, 2, 3, 0, 1]
  
/* Matriz.prototipo.reverse() : Voltea el array de final a inicio */
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);// Expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);// Expected output: "reversed:" Array ["three", "two", "one"]

/* Array.prototype.shift() : Elimina el primer elemento del array */
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);// Expected output: Array [2, 3]
console.log(firstElement);// Expected output: 1

/* Array.prototype.slice() : Muestra lo elementos del array dependiendo de las posisiciones que se le indiquen */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));// Expected output: Array ["camel", "duck"]

/* Array.prototype.some() : Si en el array hay un dato que se esta filtrando mandara un true y si no false */
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));// Expected output: true

/* Array.prototype.sort() : A comoda los elementos del string por el primer valo que se encuentra adentro del elemento */
const months = ['Jan','March', 'Feb', 'Dec'];
months.sort();
console.log(months);// Expected output: Array ["Dec", "Feb", "Jan", "March"]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);// Expected output: Array [1, 100000, 21, 30, 4]

/* Array.prototype.splice() : Puede agregar y elimnar elementos dependiendo de lo que se le indique */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');// Inserts at index 1
console.log(months);// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');// Replaces 1 element at index 4
console.log(months);// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

/* Array.prototype[Symbol.iterator]() : Arrayinstancias implementa el protocolo iterable y permite que las matrices sean consumidas por la mayoría de las sintaxis que esperan iterables, como la sintaxis de propagación y for...oflos bucles */
const array1 = ['a', 'b', 'c'];
const iterator1 = array1[Symbol.iterator]();
for (const value of iterator1) {
  console.log(value);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

/* Array.prototype.toLocaleString() : Retorna un String de pendiendo de la region */
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);// Expected output: "1,a,12/21/1997, 2:12:00 PM", This assumes "en" locale and UTC timezone - your results may vary

/* Array.prototype.toReversed() : Hace que los elementos se reviertan, del final a inicio */
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]
const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]

/* Array.prototype.toSorted() : Ordena alfabeticamente o acendentemente si es numero */
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]

 /* Array.prototype.toSpliced() : Puede agregar o eliminar los elementos que se seleccionan dependiendo del posicionamiento */
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

/* Array.prototype.toString() : Lo combierte en una cadena de string */
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
// Expected output: "1,2,a,1a"

/* Array.prototype.unshift() : Se pueden agregar elementos al array y te regresa cuantos son */
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// Expected output: 5

/* Array.prototype.values() : Te da el contenido del elemento  */
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

/* Array.prototype.with() : Crea un nuevo elelemnto dentro del array se puede seleccionar donde */
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
