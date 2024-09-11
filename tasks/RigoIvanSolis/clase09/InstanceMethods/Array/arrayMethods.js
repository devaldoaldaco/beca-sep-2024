/* Array.prototype.at(): permite acceder a un elemento en una posición específica de 
un array, utilizando un índice positivo o negativo.*/

const frutas = ['manzana', 'banana', 'cereza', 'dátil'];

// Usamos el método at() para acceder a elementos usando índices positivos y negativos
console.log(frutas.at(2));  // 'cereza' (tercer elemento del array)
console.log(frutas.at(-1)); // 'dátil' (último elemento del array)

console.log("-------------------------------------------------------------------------");

/* Array.prototype.concat(): mse utiliza para combinar dos o más arrays en uno solo. */

// arrays: uno de frutas y otro de verduras
const frutas1 = ['manzana', 'banana', 'cereza'];
const verduras = ['zanahoria', 'espinaca'];

// Método concat() para combinar ambos arrays en uno solo
const frutasYVerduras = frutas1.concat(verduras);

// Resultado en la consola
console.log(frutasYVerduras); // ['manzana', 'banana', 'cereza', 'zanahoria', 'espinaca']

// Agregar elementos individuales al array usando concat()
const másFrutas = frutas1.concat('kiwi', 'mango');

// Resultado en la consola
console.log(másFrutas); // ['manzana', 'banana', 'cereza', 'kiwi', 'mango']

console.log("-------------------------------------------------------------------------");

/* Array.prototype.copyWithin():
se usa para copiar una parte de un array dentro del mismo array en una ubicación especificada.
Es útil para realizar reemplazos de segmentos dentro del mismo array sin crear un nuevo array.*/

let arreglo = [1, 2, 3, 4, 5];

// Usamos copyWithin para copiar los elementos del índice 0 al índice 2
// Dentro del mismo arreglo, comenzando a copiar desde el índice 3
arreglo.copyWithin(3, 0, 2);

console.log(arreglo); // Salida: [1, 2, 3, 1, 2]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.entries(): devuelve un nuevo objeto Array Iterator que contiene 
pares clave-valor para cada índice del arreglo. Es útil cuando necesitas recorrer un 
arreglo y también obtener el índice de cada elemento al mismo tiempo.*/

let arregloc = ['a', 'b', 'c'];

// Obtenemos un iterador usando entries()
let iterador = arregloc.entries();

// Usamos un bucle for...of para recorrer el iterador
for (let [indice, valor] of iterador) {
  console.log(`Índice: ${indice}, Valor: ${valor}`);
}

// Salida:
// Índice: 0, Valor: a
// Índice: 1, Valor: b
// Índice: 2, Valor: c

console.log("-------------------------------------------------------------------------");

/* Array.prototype.every(): erifica si todos los elementos de un arreglo cumplen con una 
condición específica proporcionada por una función de prueba. */

let numeros = [12, 15, 20, 25, 30];

// Usamos every para verificar si todos los números son mayores de 10
let todosMayoresDe10 = numeros.every(function(numero) {
  return numero > 10;
});

console.log(todosMayoresDe10); // Salida: true

console.log("-------------------------------------------------------------------------");

/* Array.prototype.fill(): modifica todos los elementos del arreglo desde un índice de 
inicio hasta un índice de fin (no incluido) con un valor estático. Este método altera 
el arreglo original y retorna el arreglo modificado.*/

let arreglod = [1, 2, 3, 4, 5];

// Usamos fill para cambiar todos los elementos del arreglo a 10
arreglod.fill(10);

console.log(arreglod); // Salida: [10, 10, 10, 10, 10]

// Usamos fill para cambiar los elementos desde el índice 1 hasta el índice 4 a 7
let otroArreglo = [1, 2, 3, 4, 5];
otroArreglo.fill(7, 1, 4);

console.log(otroArreglo); // Salida: [1, 7, 7, 7, 5]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.filter(): crea un nuevo arreglo con todos los elementos que cumplan 
con la condición especificada en la función de prueba. No modifica el arreglo original. */

// Definimos un arreglo de números
let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usamos filter para obtener solo los números pares
let numerosPares = numeros1.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // Salida: [2, 4, 6, 8, 10]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.find(): devuelve el primer elemento del arreglo que cumple con la 
condición especificada en la función de prueba. Si ningún elemento cumple con la condición, 
retorna undefined. Este método no modifica el arreglo original.*/

// Definimos un arreglo de personas
let personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 32 },
    { nombre: 'Pedro', edad: 40 },
    { nombre: 'Marta', edad: 29 }
  ];
   
  // Usamos find para encontrar una persona cuyo nombre sea 'Pedro'
  let personaPedro = personas.find(function(persona) {
    return persona.nombre === 'Pedro';
  });
  
  console.log(personaPedro); // Salida: { nombre: 'Pedro', edad: 40 }

console.log("-------------------------------------------------------------------------");

/* Array.prototype.findIndex(): devuelve el índice del primer elemento del arreglo que 
cumple con la condición especificada en la función de prueba. Si ningún elemento cumple 
con la condición, retorna -1. Este método no modifica el arreglo original.*/

// arreglo de productos
let productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalones', precio: 45 },
    { nombre: 'Chaqueta', precio: 75 },
    { nombre: 'Zapatos', precio: 55 }
  ];
  
  // Usamos findIndex para encontrar el índice del primer producto con precio mayor a 50
  let indiceProductoCaros = productos.findIndex(function(producto) {
    return producto.precio > 50;
  });
  
  console.log(indiceProductoCaros); // Salida: 2 (índice del producto 'Chaqueta')
  
  // Encontrar el índice de un producto llamado 'Zapatos'
  let indiceProductoZapatos = productos.findIndex(function(producto) {
    return producto.nombre === 'Zapatos';
  });
  
  console.log(indiceProductoZapatos); // Salida: 3 (índice del producto 'Zapatos')

console.log("-------------------------------------------------------------------------");

/* Array.prototype.findLast(): busca el último elemento en el arreglo que cumple con 
la condición proporcionada por la función de prueba. Si ningún elemento cumple con la 
condición, retorna undefined. Este método no modifica el arreglo original.*/ 

// Definimos un arreglo de personas
let personas2 = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 32 },
    { nombre: 'Pedro', edad: 40 },
    { nombre: 'Marta', edad: 29 }
  ];
  
  // Usamos findLast para encontrar la última persona mayor de 30 años
  let ultimaPersonaMayorDe30 = personas2.findLast(function(persona) {
    return persona.edad > 30;
  });
  
  console.log(ultimaPersonaMayorDe30); // Salida: { nombre: 'Pedro', edad: 40 }
  
console.log("-------------------------------------------------------------------------");

/* Array.prototype.findLastIndex(): funciona de manera similar a findIndex(), pero busca 
desde el final del arreglo hacia el inicio, en lugar de desde el inicio hacia el final.*/

let productos2 = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalones', precio: 45 },
    { nombre: 'Chaqueta', precio: 75 },
    { nombre: 'Zapatos', precio: 55 }
  ];
  
  // Usamos findLastIndex para encontrar el índice del último producto con precio mayor a 50
  let indiceUltimoProductoCaros = productos.findLastIndex(function(producto) {
    return producto.precio > 50;
  });
  
  console.log(indiceUltimoProductoCaros); // Salida: 3 (índice del producto 'Zapatos')

console.log("-------------------------------------------------------------------------");

/* Array.prototype.flat(): crea un nuevo arreglo con todos los elementos de sub-arreglos 
concatenados recursivamente hasta la profundidad especificada.*/

// Definimos un arreglo anidado
let arregloAnidado = [1, [2, 3, [4, 5]], 6];

// Usamos flat con una profundidad de 1
let aplanado1 = arregloAnidado.flat(1);

console.log(aplanado1); // Salida: [1, 2, 3, [4, 5], 6]

// Usamos flat con una profundidad de 2
let aplanado2 = arregloAnidado.flat(2);

console.log(aplanado2); // Salida: [1, 2, 3, 4, 5, 6]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.flatMap():  combina los efectos de map() y flat() en un solo paso. 
Primero, aplica una función a cada elemento del arreglo, y luego aplana el resultado 
en un solo nivel. Es útil cuando necesitas transformar un arreglo y, al mismo tiempo, aplanar el resultado.*/ 

let frases = [
    'manzana, naranja, plátano',
    'fresa, kiwi, mango',
    'uva, pera, durazno'
  ];
  
  // Usamos flatMap para dividir las cadenas en palabras y aplanar el resultado
  let palabras = frases.flatMap(function(frase) {
    return frase.split(', ');
  });
  
  console.log(palabras); // Salida: ['manzana', 'naranja', 'plátano', 'fresa', 'kiwi', 'mango', 'uva', 'pera', 'durazno']

console.log("-------------------------------------------------------------------------");

/* Array.prototype.forEach(): ejecuta una función proporcionada una vez por cada elemento 
del arreglo en orden. Es útil para realizar operaciones sobre cada elemento de un arreglo
sin modificar el arreglo original. */


let numeros3 = [1, 2, 3, 4, 5];

// Usamos forEach para imprimir cada número en la consola
numeros3.forEach(function(numero, indice) {
  console.log('Índice:', indice, 'Número:', numero);
})

console.log("-------------------------------------------------------------------------");

/* Array.prototype.includes(): determina si un arreglo contiene un elemento específico. 
Devuelve true si el arreglo contiene el elemento, y false en caso contrario.*/


let frutas2 = ['manzana', 'naranja', 'plátano', 'fresa'];

// Verificamos si 'naranja' está en el arreglo
let tieneNaranja = frutas2.includes('naranja');

console.log(tieneNaranja); // Salida: true

console.log("-------------------------------------------------------------------------");

/* Array.prototype.indexOf(): devuelve el primer índice en el que se encuentra un elemento
 específico en el arreglo, o -1 si el elemento no se encuentra. */


let frutas4 = ['manzana', 'naranja', 'plátano', 'fresa'];

// Encontramos el índice de 'naranja'
let indiceNaranja = frutas4.indexOf('naranja');

console.log(indiceNaranja); // Salida: 1 (índice de 'naranja')

console.log("-------------------------------------------------------------------------");

/* Array.prototype.join(): une todos los elementos de un arreglo en una cadena de texto, 
utilizando un separador especificado entre los elementos. */

// Ejemplo ejercicio de tarea.

console.log("-------------------------------------------------------------------------");

/* Array.prototype.keys(): devuelve un nuevo objeto iterador de tipo Array Iterator que 
contiene las claves (índices) de los elementos del arreglo. */


let frutas5 = ['manzana', 'naranja', 'plátano', 'fresa'];

// Obtenemos el iterador de índices
let iteradorDeIndices = frutas5.keys();

// Iteramos sobre los índices usando el iterador
for (let indice of iteradorDeIndices) {
  console.log(indice);
}

console.log("-------------------------------------------------------------------------");

/* Array.prototype.lastIndexOf(): se usa para encontrar la última posición (índice) de 
un elemento en un array. Si el elemento no se encuentra, devuelve -1.*/

const numerosa = [1, 2, 3, 2, 1];

// Buscamos la última posición del número 2 en el array
const indice = numerosa.lastIndexOf(2);

// Mostramos el índice en la consola
console.log(indice); // Esto imprimirá 3 porque la última aparición del número 2 está en la posición 3

console.log("-------------------------------------------------------------------------");

/* Array.prototype.map(): crea un nuevo array con los resultados de aplicar una función a 
cada elemento del array original.*/

const numerosm = [1, 2, 3, 4, 5];

// Usamos map para duplicar cada número
const duplicados = numeros.map(numero => numero * 2);

// Mostramos el nuevo array en la consola
console.log(duplicados); // Esto imprimirá [2, 4, 6, 8, 10]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.pop(): elimina el último elemento de un array y lo devuelve. Además, 
modifica el array original, reduciendo su longitud en 1.*/

const numerosd = [1, 2, 3, 4, 5];

// Usamos pop para eliminar el último número
const ultimoNumero = numerosd.pop();

// Mostramos el número eliminado y el array modificado
console.log(ultimoNumero); // Esto imprimirá 5
console.log(numerosd);      // Esto imprimirá [1, 2, 3, 4]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.push(): agrega uno o más elementos al final de un array y devuelve
 la nueva longitud del array. */ 

const numerosps = [1, 2, 3];

// Usamos push para agregar más números
const nuevaLongitud = numerosps.push(4, 5, 6);

// Mostramos la nueva longitud del array y el array modificado
console.log(nuevaLongitud); // Esto imprimirá 6 (la longitud del array después de agregar los nuevos elementos)
console.log(numerosps);      // Esto imprimirá [1, 2, 3, 4, 5, 6]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.reduce(): aplica una función a un acumulador y a cada elemento del array 
(de izquierda a derecha) para reducirlo a un único valor. */

const numerosr = [1, 2, 3, 4, 5];

// Usamos reduce para sumar todos los números
const sumaTotal = numerosr.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

// Mostramos el resultado de la suma
console.log(sumaTotal); // Esto imprimirá 15

console.log("-------------------------------------------------------------------------");

/* Array.prototype.reduceRight(): se usa para reducir un array a un solo valor, comenzando 
desde el final del array y moviéndose hacia el principio.*/

const numerosf = [1, 2, 3, 4];

// Usamos reduceRight para sumar los números empezando desde el final
const resultado = numerosf.reduceRight((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);

console.log(resultado); // Salida: 10

console.log("-------------------------------------------------------------------------");

/* Array.prototype.reverse(): invierte el orden de los elementos en un array. Esto significa
que el primer elemento se convierte en el último, el segundo en el penúltimo, y así sucesivamente.*/

const frutasd = ['manzana', 'banana', 'cereza'];

frutas.reverse();

console.log(frutasd); // Salida: ['cereza', 'banana', 'manzana']

console.log("-------------------------------------------------------------------------");

/* Array.prototype.shift(): s un método que elimina el primer elemento de un array y devuelve 
ese elemento. Después de eliminar el primer elemento, el array se acorta en uno, y todos 
los elementos restantes se desplazan una posición hacia adelante.*/

const numerosq = [10, 20, 30, 40];

const primerNumero = numerosq.shift();

console.log(primerNumero); // Salida: 10
console.log(numerosq); // Salida: [20, 30, 40]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.slice(): crea una copia superficial de una parte de un array en un nuevo 
array, seleccionando los elementos desde el índice inicio hasta, pero sin incluir, el índice 
fin. El array original no se modifica.*/ 

const numeross = [1, 2, 3, 4, 5];

const subArray = numeross.slice(1, 4);

console.log(subArray); // Salida: [2, 3, 4]
console.log(numeross); // Salida: [1, 2, 3, 4, 5]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.some(): verifica si al menos un elemento en un array cumple con una condición 
especificada en una función de prueba. Devuelve true si al menos un elemento cumple con la condición, 
y false si ninguno lo hace.*/

const numerosdd = [4, 9, 16, 25];

const hayMayorQue10 = numerosdd.some(num => num > 10);

console.log(hayMayorQue10); // Salida: true

console.log("-------------------------------------------------------------------------");

/* Array.prototype.sort(): ordena los elementos de un array en su lugar, es decir, modifica 
el array original para que sus elementos queden en el orden deseado.*/

const numerosO = [10, 5, 100, 50];

numeros.sort((a, b) => a - b);

console.log(numerosO); // Salida: [5, 10, 50, 100]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.splice(): se usa para cambiar el contenido de un array eliminando, 
reemplazando o agregando elementos en una posición específica. A diferencia de algunos otros 
métodos, splice() modifica el array original.*/

const frutasV = ['manzana', 'banana', 'cereza', 'durazno'];

const eliminadas = frutasV.splice(1, 2);

console.log(eliminadas); // Salida: ['banana', 'cereza']
console.log(frutasV); // Salida: ['manzana', 'durazno']

console.log("-------------------------------------------------------------------------");

/* Array.prototype[Symbol.iterator](): se usa para definir el método de iteración de un 
objeto en JavaScript. Cualquier objeto que tenga un método con esta clave puede ser iterado 
en un bucle for...of, en operaciones de destructuración, o con otros métodos que trabajan con iteradores.*/

const numerosI = [1, 2, 3, 4, 5];

for (const numero of numerosI) {
  console.log(numero);
}

// Salida:
// 1
// 2
// 3
// 4
// 5

console.log("-------------------------------------------------------------------------");

/* Array.prototype.toLocaleString(): convierte los elementos de un array en una cadena de 
texto, y esa cadena es representada según el formato de la configuración regional especificada.*/

const numerosL = [1, 2, 3, 4, 5];

const cadena = numerosL.toLocaleString();

console.log(cadena); // Salida: '1,2,3,4,5'

console.log("-------------------------------------------------------------------------");

/* Array.prototype.toReversed: crea una nueva copia del array en la que los elementos 
están ordenados en orden inverso, es decir, del último al primero. */

const numerosR = [1, 2, 3, 4, 5];

const numerosInvertidos = numerosR.toReversed();

console.log(numerosInvertidos); // Salida: [5, 4, 3, 2, 1]
console.log(numerosR); // Salida: [1, 2, 3, 4, 5]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.toSorted(): crea una nueva copia de un array, con los elementos ordenados 
según el criterio que determines, sin modificar el array original. */

const numerosC = [5, 3, 9, 1, 4];

const numerosOrdenados = numerosC.toSorted();

console.log(numerosOrdenados); // Salida: [1, 3, 4, 5, 9]
console.log(numerosC); // Salida: [5, 3, 9, 1, 4]

console.log("-------------------------------------------------------------------------");

/* Array.prototype.toSpliced(): crea una nueva copia del array original, en la que se 
han eliminado y/o agregado elementos en una posición específica.*/

const frutasD = ['manzana', 'banana', 'cereza', 'durazno'];

const nuevasFrutas = frutasD.toSpliced(1, 2);

console.log(nuevasFrutas); // Salida: ['manzana', 'durazno']
console.log(frutasD); // Salida: ['manzana', 'banana', 'cereza', 'durazno']

console.log("-------------------------------------------------------------------------");

/* Array.prototype.toString(): convierte un array en una cadena de texto. */

const numerosS = [1, 2, 3, 4, 5];

const cadenaS = numerosS.toString();

console.log(cadenaS); // Salida: '1,2,3,4,5'

console.log("-------------------------------------------------------------------------");

/* Array.prototype.unshift():  es un método que agrega uno o más elementos al inicio de 
un array y ajusta los índices de los elementos existentes para que estos elementos nuevos 
aparezcan al principio del array. El método modifica el array original y devuelve la nueva 
longitud del array.*/

const numerosV = [3, 4, 5];

const longitudNueva = numerosV.unshift(1, 2);

console.log(numerosV); // Salida: [1, 2, 3, 4, 5]
console.log(longitudNueva); // Salida: 5



console.log("-------------------------------------------------------------------------");

/* Array.prototype.values(): permite recorrer todos los elementos de una colección, 
como un array, uno por uno. */

const numerosE = [10, 20, 30];

// Usamos values() para obtener un iterador de los valores del array
const iteradorE = numerosE.values();

// Recorremos el iterador usando un bucle for...of
for (const valor of iteradorE) {
  console.log(valor);
}



console.log("-------------------------------------------------------------------------");

/* Array.prototype.with(): permite crear un nuevo array en el que puedes reemplazar un 
elemento en una posición específica, mientras dejas el resto del array sin cambios.*/

const nuevasFrutas1 = frutas.with(1, 'mango');

console.log(frutas);       // Imprime: ['manzana', 'banana', 'cereza']
console.log(nuevasFrutas); // Imprime: ['manzana', 'mango', 'cereza']

























  



  

  
  
  





