let encabezados= document.getElementsByTagName('h2');

/* Array.prototype.at()

    recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. 
    Los valores negativos contarán desde el último elemento del array.
*/

    let array1= [5, 12, 8, 130, 44];
    let index1=2;
    let resultado1= `El elemento en la posición ${index1} es : ${array1.at(index1)}`;

    encabezados[0].innerHTML= resultado1;


/* Array.prototype.concat()

    se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
 */

    const array_1 = ['a', 'b', 'c'];
    const array_2 = ['d', 'e', 'f'];
    const array_3 = array_1.concat(array_2);

    let resultado2= `El nuevo array resultante es : ${array_3}`;

    encabezados[1].innerHTML= resultado2;


/* Array.prototype.copyWithin()

    transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), sin modificar su 
    propiedad length y lo devuelve.
*/

    const array3 = ['a', 'b', 'c', 'd', 'e'];

    let resultado3= `El nuevo array resultante es : ${array3.copyWithin(0,2)}`;

    encabezados[2].innerHTML= resultado3;

/* Array.prototype.entries()

    retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz. */

    const array4 = ['a', 'b', 'c'];

    const iterator4 = array4.entries(); 

    let resultado4= `El valor de la 1era iteración resultante es : ${iterator4.next().value}`;

    encabezados[3].innerHTML= resultado4;

/* Array.prototype.every()

    Prueba si todos los elementos del arreglo pasan la prueba implementada por la función proporcionada. 
    Devuelve un valor booleano.
 */

    const isBelowThreshold = (currentValue) => currentValue < 40;

    const array5 = [1, 30, 39, 29, 10, 13];

    let resultado5= `El valor que devuelve every : ${array5.every(isBelowThreshold)}`;

    encabezados[4].innerHTML= resultado5;
    // Expected output: true

/* Array.prototype.fill()

    cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) 
    hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

 */

    const array6 = [1, 2, 3, 4, 5];

    // Fill with 0 from position 2 until position 4
    let resultado6= `Los nuevos valores del arreglo son: ${ array6.fill(0,2,4) }`;

    encabezados[5].innerHTML= resultado6;


/* Array.prototype.filter() 

    crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
*/

    const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

    const result7 = words.filter((word) => word.length > 6);

    const resultado7=`Los nuevos valores del arreglo son: ${result7}`;
    encabezados[6].innerHTML= resultado7;

/* Array.prototype.find()

    devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
*/

    const array8 = [5, 12, 8, 130, 44];

    const found = array1.find((element) => element > 10);

    const resultado8=`El valor devuelto es: ${found}`;
    encabezados[7].innerHTML= resultado8;


/* Array.prototype.findIndex() 

    devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. 
    En caso contrario devuelve -1.
*/

    const array9 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;

    const resultado9=`El valor devuelto es: ${ array9.findIndex(isLargeNumber) }`;

    encabezados[8].innerHTML= resultado9;


/* Array.prototype.findLast()

    Itera el arreglo desde atràs y devuelve el primer elemento que satisfaga la función de prueba.
    Si dicho elemento no existe devuelve undefined
 */

    const array10 = [5, 12, 50, 130, 44];

    const foundit = array1.findLast((element) => element > 45);

    const resultado10=`El valor devuelto es: ${ foundit }`;

    encabezados[9].innerHTML= resultado10;


/* Array.prototype.findLastIndex()

    Itera el arreglo desde atràs y devuelve el primer indice del elemento que satisfaga la función de prueba.
    Si dicho elemento no existe devuelve -1
 */

    const array11 = [5, 12, 50, 130, 44];

    const indexFound = (element) => element > 43;

    const resultado11=`El indice devuelto es: ${ array11.findLastIndex(indexFound) }`;

    encabezados[10].innerHTML= resultado11;



/* Array.prototype.flat( PROFUNDIDAD ) 

    crea un nuevo arreglo con todos los elementos de los subarreglos concatenados en ella de forma recursiva hasta la profundidad especificada.
*/


    const arr12 = [0, 1, [2, [3, [4, 5]]]];

    const resultado12=`El nuevo arreglo es: ${ arr12.flat(2) }`;

    console.log( arr12.flat(2) );
    // expected output: Array [0, 1, 2, 3, Array [4, 5]]

    encabezados[11].innerHTML= resultado12;


/* Array.prototype.flatMap( FUNCTION )

    primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array. 
    Es idéntico a un map seguido de un flattende profundidad 1, pero flatMap es a menudo útil y la fusión de ambos 
    en un método es ligeramente más eficiente.
*/

    const arr13 = [1, 2, 1];

    const result = arr13.flatMap((num) => (num === 2 ? [2, 2] : 1));

    const resultado13=`El nuevo arreglo es: ${ result }`;

    encabezados[12].innerHTML= resultado13;

/* Array.prototype.forEach( FUNCTION ) 

    ejecuta la función indicada una vez por cada elemento del array.
*/

    const array14 = ['a', 'b', 'c'];

    console.log("Resultado de métdo forEach():");
    array1.forEach((element) => console.log(element+' extra'));



/* Array.prototype.includes( ELEMENTO )

    determina si un arreglo incluye un determinado elemento, devuelve true o false según corresponda.
*/

    const pets = ['cat', 'dog', 'bat'];

    const resultado14=`El arreglo tiene el elemento cat?: ${ pets.includes('cat') }`;

    encabezados[13].innerHTML= resultado14;



/* Array.prototype.indexOf(ELEMENTO, POSICION)

    retorna el primer índice en el que se puede encontrar un elemento dado en el array, 
    ó retorna -1 si el elemento no esta presente. 

    Se puede indicar la posición desde donde inicia la búsqueda, incluso en negativo
    */

    let array16 = [2, 9, 9];

    
    const resultado15=`El indice del elemento es: ${ array16.indexOf(9, 2) }`;

    encabezados[14].innerHTML= resultado15;

/* Array.prototype.join( ELEMENTO DE SEPARACION )

    une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.    
*/

    const elements = ['Fire', 'Air', 'Water'];

    const resultado16=`Mostrando la cadena hecha con join: ${ elements.join('_') }`;

    encabezados[15].innerHTML= resultado16;
    // Expected output: "Fire_Air_Water"

/* Array.prototype.keys() 

    devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el arreglo.
*/

    const array18 = ['a', 'b', 'c'];
    const iterator = array18.keys();

    console.log("El resultado del método keys():")

    for (const key of iterator) {
        console.log(key);
    }

/* Array.prototype.lastIndexOf(ELEMENT, FROMINDEX) 

    devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. 
    El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex
*/

    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    const resultado18=`El indice del elemento es: ${ animals.lastIndexOf('Tiger', 0) }`;

    encabezados[16].innerHTML= resultado18;


/* Array.prototype.map( FUNCTION ) 

    crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.    
*/

    let numbers = [1, 5, 10, 15];

    const doubles = numbers.map(function (x) { return x * 2; });

    const resultado19=`Nuevo arreglo con Map: ${ doubles }`;

    encabezados[17].innerHTML= resultado19;

/* Array.prototype.pop()

    elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array. 
    
*/

    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    const resultado20=`El último elemento del array era: ${ plants.pop() }`;

    encabezados[18].innerHTML= resultado20;

/* Array.prototype.push() 

    añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
*/

    const animals22 = ['pigs', 'goats', 'sheep'];

    animals22.push('cows')

    const resultado21=`El nuevo arreglo es: ${ animals22 }`;

    encabezados[19].innerHTML= resultado21;

/* Array.prototype.reduce( FUNCTION ) 

     ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
*/

    const array23 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array23.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    const resultado22=`El valor resultante es: ${ sumWithInitial }`;

    encabezados[20].innerHTML= resultado22;


/* Array.prtotype.reduceRight()

    Aplica una función simultáneamente contra un acumulador y cada elemento de un array (de derecha a izquierda) para 
    reducirlo a un único valor
*/

    const array24 = [1, 2, 3, 4];

    // 4-3-2-1-0
    const initialValue2 = 0;
    const sumWithInitial2 = array24.reduceRight((accumulator, currentValue) => accumulator - currentValue, initialValue);

    const resultado23=`El valor resultante es (reduceRight): ${ sumWithInitial2 }`;

    encabezados[21].innerHTML= resultado23;

/* Array.prototype.reverse()

    invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
 */

    const array25= ['carrots', 'avocado', 'apricots', 'broccoli'];

    const resultado24=`El arreglo invertido (reverse) se muestra a continuación: ${ array25.reverse() }`;

    encabezados[22].innerHTML= resultado24;

/* Array.prototype.shift() 

    elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
*/

    const miPescado = ["ángel", "payaso", "mandarín", "cirujano"];

    let fishDeleted=miPescado.shift();

    const resultado25=`El elemento eliminado con shift fue ( ${fishDeleted} ) y ahora el arreglo esta así: ${ miPescado }`;

    encabezados[23].innerHTML= resultado25;


/* Array.prototype.slice()


    devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
    El array original no se modificará.
*/

    const miAnimal = ["zanate", "puma", "lobo", "gato", "perro"];

    const animalesFavoritos= miAnimal.slice(0,2);

    const resultado26=`El arreglo creado con slice es: ${animalesFavoritos}`;

    encabezados[24].innerHTML= resultado26;

/* Array.prtotype.some()

    comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
*/

    const array27 = [1, 2, 3, 4, 5];

    // Checks whether an element is even
    const even = (element) => element % 2 === 0;

    const resultado27=`El valor retornado por some(): ${array27.some(even) }`;

    encabezados[25].innerHTML= resultado27;

/* Array.prototype.sort()

    ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
    La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor 
    del string de acuerdo a su valor Unicode
*/

    const frutas28 = ["guindas", "manzanas", "bananas"];

    const resultado28=`El arreglo ordenado por sort(): ${frutas28.sort() }`;

    encabezados[26].innerHTML= resultado28;

/* Array.prototype.splice()

    cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
*/

        const months = ['Jan', 'Feb', 'March', 'April', 'June'];
        months.splice(4,1,'May')//Splice regresa un array con los elementos eliminados
        const resultado29=`Splice reemplazó jun por may: ${ months }`;

        encabezados[27].innerHTML= resultado29;

/* Array.prototype.toLocaleString() 

    devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto 
    usando su método toLocaleString y dichos Strings son separados por un caracter específico para la localidad 
    (como una coma para la separación de decimales ",").
*/

        const arrayTLS = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
        const localeString = arrayTLS.toLocaleString('en', { timeZone: 'UTC' });

        const resultado30=`La cadena de texto retornada por toLocaleString(): ${  localeString }`;

        encabezados[28].innerHTML= resultado30;
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary


/* Array.prototype.toReversed()

    Regresa un nuevo arreglo con los elementos en reversa
*/

        let beverages= ["water","soda","beer","tea"];

        const resultado31=`El arreglo con los elementos en reversa por toReversed(): ${  beverages.toReversed() }`;

        encabezados[29].innerHTML= resultado31;



/* Array.prototype.toSorted()

    Es una copia del metodo sort(). Pero este regresa un nuevo arreglo con los valores ordenados en orden ascendente.
*/

    const months32 = ["Mar", "Jan", "Feb", "Dec"];
    const sortedMonths = months32.toSorted();

    const resultado32=`El arreglo con los elementos ordenados por toSorted() : ${  sortedMonths }`;

    encabezados[30].innerHTML= resultado32;


/* Array.prototype.toSpliced() 

    Es una copia del método splice(). Regresa un nuevo arreglo con los nuevos cambios. No regresa los elementos eliminados
    como splice

*/

    const months33 = ["Jan", "Mar", "Apr", "May"];

    // Inserting 3 elements at index 1
    const monthstoS = months33.toSpliced(0, 3, "Aug", "Sep", "Oct");

    const resultado33=`El arreglo con los elementos eliminados reemplazados (toSpliced()): ${  monthstoS }`;

    encabezados[31].innerHTML= resultado33;


/* Array.prototype.toString()

    Regresa una cadena que representa el array 
*/

    const array34 = [1, 2, 'a', '1a'];

    const resultado34=`Cadena que representa el array (toString()): ${  array34.toString() }`;

    encabezados[32].innerHTML= resultado34;

/* Array.prototype.unshift()


    Agrega al inicio del arreglo los valores especificados, y regresa el nuevo tamaño del array.
*/

    const array35=[1,2,3];

    const resultado35=`El nuevo tamanio del arreglo agregando 2 nuevos es: ${  array35.unshift(4,5) }`;

    encabezados[33].innerHTML= resultado35;


/* Array.prototype.values()

    Regresa un objeto iterador que itera sobre cada uno de los valores del array.
*/

    const array36 = ['a', 'b', 'c'];
    const iterator36 = array36.values();

    console.log("Resultado de ejercicios con mètodo values:")
    for (const value of iterator36) {
        console.log(value);
    }


/* Array.prottype.with( INDICE, NUEVOVALOR )

    Es la copia de la notación entre corchetes para reemplazar un valor en un indice dado. Regresa el nuevo array con el 
    elemento cambiado
*/

    const arr37 = [1, 2, 3, 4, 5];

    const resultado36=`El nuevo arreglo con el valor cambiado es: ${ arr37.with(2,6) }`;

    encabezados[34].innerHTML= resultado36;