//------------ ARRAY -------------
/*  Objeto global que se usa para la creación de arrays(arreglos) son objetos tipo lista de  alto nivel 
    Proporciona métodos para hacer recorridos o variaciones, sus elementos son variables.
*/

// CREACIÓN DE UN ARRAY 
let animales = ["Gato", "Perro", "Conejo", "Zorro", "Lobo"];
/* Mostrar el número de elementos que hay en el arreglo mediante la propiedad .length */
console.log(animales.length); 

/**********************************************************************************************************/
// ------MÉTODOS ARRAY------- //
/* 1. Array.prototype.at() | .at() SINTAXIS: .at(índice); | Retorna un elemento en el array que coincida con
                                                            el índice dado.
      SINTAXIS: at(índice);

      Método que recibe un valor númerico entero y retorna el elemento en esa posición, admite valores positivos 
      y negativos. (Los valores negativos contarán desde el último elemento del array).
*/

const array = [1, 12, 123, 140, 1];
let index = 1;
console.log(`En la posición ${index} está el número ${array.at(index)}`);
// Se espera de resultado: "En la posición 1 está el número 12"
index = -1;
console.log(`En la posición ${index} está el número ${array.at(index)}`);
// Se espera de resultado: "En la posición -1 está el número 44

/*  Si el índice se da en un índice negativo, el elemento devuelto se dará contando del final del arreglo
    Regresa un valor undefined si el índice dado no se puede encontrar */

/**********************************************************************************************************/

/* 2. Array.prototype.concat() | .concat() | Retorna una nueva instancia de Array.
        SINTAXIS: .concat(valor1[, valor2[, valor3[, valorN]]]) 

    Se usa para unir dos o más arrays. No cambia los arreglos existentes, sólo devuelve un nuevo arreglo.
*/

// Concatenar 2 arrays
const letras = ["a", "b", "c"];
const numeros = [1, 2, 3];
    letras.concat(numeros);
// Da como resultado ['a', 'b', 'c', 1, 2, 3]

// Concatenar 3 arrays
const num = [1, 2, 3];
const letras1 = ["r", "s", "m"];
const signos = ["-", "+", "*"];

const nArray = num.concat(letras1, signos);

console.log(nArray);
// Da como resultado [1, 2, 3, r, s, m, -, +, *]

/**********************************************************************************************************/

/* 3. Array.prototype.copyWithin() | .copyWithin() | Retorna un array modificado.
        SINTAXIS: .copyWWithin(target), .copyWWithin(target, start), .copyWWithin(target, start, end) 

       Método que transfiere una copia de una sección a otra dentro del mismo array (o contexto similar),
       sin modificar su propiedad length y lo devuelve. 
*/  

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copiar al índice 0 el elemento en el índice 2
console.log(array1.copyWithin(0, 2, 4));
// Resultado esperado: Array ["d", "b", "c", "d", "e"]

// Copie al índice 1 todos los elementos desde el índice 3 hasta el final.
console.log(array1.copyWithin(1, 3));
// Resultado esperado: Array ["d", "d", "e", "d", "e"]

/**********************************************************************************************************/

/* 4. Array.prototype.entries() | .entries() | Retorna un nuevo objeto iterador Array
        SINTAXIS: .entries().

    Método que retorna un nuevo objjeto Array Iterator que contiene los pares clave/valor para cada
    índice de la matriz.
*/
// Indicar cada array 1 por 1 
const array2 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Resultado  esperado: Array [0, "a"]
console.log(iterator1.next().value);
// Resultado esperado: Array [1, "b"]
console.log(iterator1.next().value);
// Resultado esperado: Array [2, "c"]

// Indicar el resultado con un ciclo for...of arrojando un solo Array
var a = ["a", "b", "c"];
var iterator = a.entries();
    for (let e of iterator) {
    console.log(e); 
    }
// [0, 'a']
// [1, 'b']
// [2, 'c']

/**********************************************************************************************************/

/* 5. Array.prototype.every() | .every() | Retorna un valor booleano: true a menos que el callback devuelva
                                           un falsy para un elemento del arregglo, en dado caso se devuelve 
                                           false inmediatamente.
    SINTAXIS: .every(callbackFn), .every(callbackFn, thisArg)

    Método iterativo. Llama a una función callbackFn proporcionada una vez por cada elemento de un arreglo,
    hasta que callbackFn devuelva un valor falsy. Sí every() encuentra dicho elemento, devuelve false.
*/

function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough); // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true

/**********************************************************************************************************/
/* 6. Array.prototype.fill() | .fill() | Retorna un arreglo modificado, rellenado con valor. 
        SINTAXIS: .fill(value[, start = 0[, end = this.length]])
    
    Método que cambia todos los elementos en un arreglo por un valor estático, 
    desde el índice start (por defecto 0) hasta el índice end (por defecto array.length).
*/

const array3 = ["a", "b", "c", "d"];

// Rellenar con la letra f desde la posición 2 hasta la posición 4
console.log(array3.fill("f", 2, 4)); // Array ["a", "b", "f", "f"]

// Rellenar con la letra x desde la posición 1 
console.log(array3.fill("x", 1)); // Array ["a", "x", "x", "x"]

// Rellenar con la letra y todo el arreglo
console.log(array3.fill("y")); // Array ["y", "y", "y", "y"]

/**********************************************************************************************************/

/* 7.  Array.prototype.filter() | filtrer() | Retorna Un nuevo array con los elementos que cumplen la condición. 
                                              Si ningún elemento cumple la condición, se devolverá un array vacío.
    SINTAXIS: var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

    Método que crea un nuevo array con todos los elementos que cumplan la condición implementada por la función 
    dada.
*/

const palabras = ['denysse', 'palomino', 'rojas', 'resident', 'evil'];

const res = palabras.filter((palabra) => palabra.length === 8);

console.log(res); // Array ["palomino", "resident"]


/**********************************************************************************************************/

/* 8. Array.prototype.find() | .find() | Retorna El valor del primer elemento del array que cumple la función 
                                         de prueba proporcionada; de lo contrario, devuelve undefined.
   SINTAXIS: .find(callback(element[, index[, array]])[, thisArg])

   Método que devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
*/

// Encontrar un objeto en un array por una de sus propiedades
const lista = [
    { nombre: "Perros", cantidad: 1 },
    { nombre: "Gatos", cantidad: 2 },
    { nombre: "Lobos", cantidad: 8 },
  ];
  function lobos(animal) {
    return animal.nombre === "Lobos";
  }
  console.log(lista.find(lobos)); // Object { nombre: "Lobos", cantidad: 8 }


/**********************************************************************************************************/

/* 9. Array.prototype.findIndex() | .findIndex() | Retorna Un índice en el array si un elemento pasa la 
                                                   prueba; en caso contrario, -1.
    SINTAXIS: .findIndex(callback( element[, index[, array]] )[, thisArg])
    
    Método ejecuta la función de callback una vez por cada índice del array hasta que encuentre uno donde 
    callback devuelva un valor verdadero (eso es, un valor que fuerza un true).
*/

const array5 = [1, 2, 8, 230, 0];
const isLargeNumber = (element) => element > 4; 

console.log(array5.findIndex(isLargeNumber)); // 3


/**********************************************************************************************************/

/* 10. Array.prototype.findLast() | .findLast()  | Retorna el último elemento (índice más alto) de la matriz 
                                                   que satisface la función de prueba proporcionada; indefinido 
                                                   si no se encuentra ningún elemento coincidente.
   SINTAXIS: .findLast(callbackFn), .findLast(callbackFn, thisArg)

   Método que tera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la 
   función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve indefinido.

*/

const array6 = [1, 2, 8, 55, 0];
const encontrar = array6.findLast((elemento) => elemento > 50);

console.log(encontrar); // 55

/**********************************************************************************************************/

/* 11. Array.prototype.findLastIndex() |  .findLastIndex() | Retorna El índice del último elemento 
                                                            (índice más alto) de la matriz que pasa la prueba.
    SINTAXIS: .findLastIndex(callbackFn), .findLastIndex(callbackFn, thisArg)

    El método de instancias de Array itera la matriz en orden inverso y devuelve el índice del primer elemento 
    que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, 
    se devuelve -1.
*/

const array7 = [1, 2, 55, 300, 0];
const indice = (elemento) => elemento === 0 ;

console.log(array7.findLastIndex(indice));// 4

/**********************************************************************************************************/

/* 11. Array.prototype.flat() | .flat() | Retorna Una nueva matriz con los elementos de la sub-matriz 
                                        concatenados en ella.
    SINTAXIS: var newArray = arr.flat([depth]);

    Método que crea una nueva matriz con todos los elementos de sub-array concatenados recursivamemte 
    hasta la profundidad especificada.
*/

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);

/**********************************************************************************************************/

/* 12. Array.prototype.flatMap() | .flatMap() | Retorna Una nueva matriz con cada elemento es el resultado 
                                                de la función de devolución de llamada y se aplana a una 
                                                profundidad de 1.
    SINTAXIS: var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
              // return element for new_array
              }[, thisArg])

    Método que primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una 
    nueva matriz.

*/

const arr1 = [2, 8, 4];
const result = arr1.flatMap((num) => (num === 8 ? [4, 5] : 1));

console.log(result); // [2, 4, 5, 1]

/**********************************************************************************************************/

/* 13. Array.prototype.forEach() | forEach() | Retorna undefined
   SINTAXIS: arr.forEach(function callback(currentValue, index, array) {
             // tu iterador
             }[, thisArg]);

   Método que ejecuta la función indicada una vez por cada elemento del array.
   Ejecuta la función callback una vez por cada elemento presente en el array en orden ascendente. 
   No es invocada para índices que han sido eliminados o que no hayan sido inicializados 
   (Ej. sobre arrays sparse)
*/

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
  }
  // Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
  [2, 5, , 9].forEach(logArrayElements);
  // salida:
  // a[0] = 2
  // a[1] = 5
  // a[2] = 9


/**********************************************************************************************************/
/* 14. Array.prototype.includes() | .includes() | Retorna un valor booleano
    SINTAXIS: .includes(searchElement[, fromIndex])

    Método que determina si una matriz incluye un determinado elemento, devuelve true o false según 
    corresponda.
*/

const array8 = [1, 2, 3];
console.log(array8.includes(1)); // true

const familiar = ['padre', 'madre', 'hermano'];
console.log(familiar.includes('madre'));// true
console.log(familiar.includes('hermana'));// false

/**********************************************************************************************************/

/* 15. Array.prototype.indexOf() | .index() | Retorna El primer índice del elemento en la matriz; -1 si no 
                                              se encuentra. 
    SINTAXIS: array.indexOf(searchElement[, fromIndex])

    Método que compara searchElement con los elementos del array usando igualdad estricta (el mismo método 
    que cuando se usa ===, o el operador igualdad-triple).
*/

//El siguiente ejemplo usa indexof() para localizar valores en un array
var array9 = [2, 9, 9];
array9.indexOf(2); // 0
array9.indexOf(7); // -1
array9.indexOf(9, 2); // 2
array9.indexOf(2, -1); // -1
array9.indexOf(2, -3); // 0


/**********************************************************************************************************/

/* 16. Array.prototype.join() | .join() | Retorna Una cadena con todos los elementos de la matriz unidos. 
                                          Si arr.length es 0, se devuelve la cadena vacía.
   SINTAXIS: .join([separator])

   Método que une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y 
   devuelve esta cadena.
*/

const nombres = ['denysse', 'levana', 'omar'];
console.log(elements.join());// "denysse,levana,omar"
console.log(elements.join(''));// "denysselevanaomar"
console.log(elements.join('-'));// "denysse-levana-omar"

/**********************************************************************************************************/
/* 17. Array.prototype.keys() | .keys() | Retorna Un nuevo objeto iterador Array.
    SINTAXIS: .keys()

    Método que devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el arreglo.
*/

const array10 = ['a', 'b', 'c', 'd'];
const iterador = array10.keys();
for (const key of iterador) {
  console.log(key);
}

/**********************************************************************************************************/
/* 18. Array.prototype.lastIndexOf() | .lastIndex() | Retorna El último índice del elemento en el arreglo; 
                                                      -1 si no se encuentra.
    SINTAXIS: .lastIndexOf(searchElement), .lastIndexOf(searchElement, fromIndex)

    Método que devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo,
    ó -1 si el elemento no se encontrara. 
*/

const figuras = ['Cuadrado', 'Triangulo', 'Circulo', 'Rombo'];
console.log(figuras.lastIndexOf('Circulo'));// 2
console.log(figuras.lastIndexOf('Rombo'));// 3

/**********************************************************************************************************/
/* 19. Array.prototype.map() | .map() | Retorna un nuevo array en la que cada elemento es el resultado de 
                                        ejecutar callback.
    SINTAXIS: var nuevo_array = arr.map(function callback(currentValue, index, array) {
              // Elemento devuelto de nuevo_array
              }[, thisArg])
    Método que llama a la función callback provista una vez por elemento de un array, en orden, y 
    construye un nuevo array con los resultados.
*/

var numeros1 = [1, 4, 9];
// Math.sqrt sirve para sacar raices 
var raices = numeros1.map(Math.sqrt);// [1, 2, 3]

/**********************************************************************************************************/
/* 20. Array.prototype.pop() | .pop() | Retorna El elemento que ha sido eliminado del array; 
                                        undefined si el array está vacío.
    SINTAXIS: .pop()

    Método que elimina el último elemento de un array y lo devuelve. 
    Este método cambia la longitud del array.
*/

const colores = ['amarillo', 'verde', 'morado', 'negro', 'blanco'];
console.log(colores.pop());// "blanco"
console.log(colores);// Array ['amarillo', 'verde', 'morado', 'negro']

/**********************************************************************************************************/
/* 21. Array.prototype.push() | .push() | Retorna La nueva propiedad length del objeto sobre el cual se 
                                          efectuó la llamada.
    SINTAXIS: .push(element1[, ...[, elementN]])

    Método que añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
*/

const animales1 = ['gato', 'oveja', 'cebra'];
const count = animales1.push('perro');
console.log(count);// 4
console.log(animales1);// Array ["gato", "oveja", "cebra", "perro"]

/**********************************************************************************************************/
/* 22. Array.prototype.reduce() | .reduce() | Retorna un único valor.
    SINTAXIS: .reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

    Método que ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un 
    único valor.
*/

const array11 = [2, 4, 3, 5];
// 0 + 2 + 4 + 3 + 5
const initialValue = 0;
const sumar = array11.reduce(
  (accumulador, currentValue) => accumulador + currentValue,
  initialValue,
);
console.log(sumar);// 14

/**********************************************************************************************************/
/* 23. Array.prototype.reduceRight() | .reduceRight() | Retorna un unico valor 
    SINTAXIS: array.reduceRight(
              funcion[,
              valorInicial])

    Método que Aplica una función simultáneamente contra un acumulador y cada elemento de un array 
    (de derecha a izquierda) para reducirlo a un único valor.
*/

[0, 1, 2, 3, 4].reduceRight(function (valorPrevio, valorActual, indice, array) {
    return valorPrevio + valorActual;
  });
  
  // First call
  (valorPrevio = 4), (valorActual = 3), (indice = 3);
  // Second call
  (valorPrevio = 7), (valorActual = 2), (indice = 2);
  // Third call
  (valorPrevio = 9), (valorActual = 1), (indice = 1);
  // Fourth call
  (valorPrevio = 10), (valorActual = 0), (indice = 0);
  
  // el array sobre el que se llama a reduceRight siempre es el objeto [0,1,2,3,4]
  // Valor Devuelto: 10

/**********************************************************************************************************/
/* 24. Array.prototype.reverse() | .reverse() | Retorna un array invertido
    SINTAXIS: .reverse()

    Método que invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el 
    último y el último pasa a ser el primero.
*/

const array12 = ['one', 'two', 'three'];
console.log('array1:', array12);// Array ["one", "two", "three"]
const reversed = array12.reverse();
console.log('reversed:', reversed);// Array ["three", "two", "one"]
// CUIDADO: Este metodo es destructivo -- cambia el array original.
console.log('array1:', array12);// "array1:" Array ["three", "two", "one"]

/**********************************************************************************************************/
/* 25. Array.prototype.shift() | .shift() | Retorna el valor eliminado del array
    SINTAXIS: .shift()

    Método que elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, 
    devolviendo el valor eliminado. Si la propiedad length es 0, devuelve undefined.
*/

var personajes = ["Breach", "Neon", "Yoru", "Viper", "Reyna"];
console.log("Personajes antes: " + personajes);// "Personajes antes: Breach,Neon,Yoru,Viper,Reyna"
var eliminado = miPescado.shift();
console.log("Personajes después: " + personajes);// "Personajes antes: Neon,Yoru,Viper,Reyna"
console.log("Elemento eliminado: " + eliminado);// "Elemento eliminado: Breach"

/**********************************************************************************************************/
/* 26. Array.prototype.slice() | .slice() | Retorna un nuevo array con los valores extraíd
    SINTAXIS: .slice([inicio [, fin]]);

    Método que devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta 
    fin (fin no incluido). El array original no se modificará.
*/
// Devolver una porción de un array existente 
var nombres1 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var femeninos = nombres1.slice(1, 3);
console.log(femeninos);

/**********************************************************************************************************/
/* 27. Array.prototype.some() | .some() | Retorna true si la función callback devuelve un valor truthy 
                                          para cualquier elemento del array; en caso contrario, false.
    SINTAXIS: .some(callback(element[, index[, array]])[, thisArg])

    Método que comprueba si al menos un elemento del array cumple con la condición implementada por la 
    función proporcionada.
*/

const array13 = [1, 2, 3, 4, 5];
// Comprueba si un elemento es par.
const even = (element) => element % 2 === 0;
console.log(array13.some(even));// true

/**********************************************************************************************************/
/* 28. Array.prototype.toString() | .toString() | Retorna una cadena de caracteres representando los 
                                                  elementos del array.
    SINTAXIS: .toString()

    Método que devuelve una cadena de caracteres representando el array especificado y sus elementos.
*/

const array14 = [5, 23, 'o', 'oh'];
console.log(array1.toString());// "5,23,o,oh"

/**********************************************************************************************************/
/* 29. Array.prototype.values() |  .values() | Retorna un nuevo objeto Array iterator.
    SINTAXIS: .values()

    Método que devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.
*/

var a = ["d", "e", "n", "y", "s", "s", "e"];
var iterator = a.values();

console.log(iterator.next().value); // d
console.log(iterator.next().value); // e
console.log(iterator.next().value); // n
console.log(iterator.next().value); // y
console.log(iterator.next().value); // s
console.log(iterator.next().value); // s
console.log(iterator.next().value); // e

/**********************************************************************************************************/
/* 30. Array.prototype.sort() | .sort() | Retorna un array ordenado.
    SINTAXIS: t([compareFunction])

    Método que ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
*/

const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ["word", "Word", "1 Word", "2 Words"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.













