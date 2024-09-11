//Esto es un Array
let cigarros = ["Marlboro", "Pall mall", "Camel", "Montana"];
let explain;
//explicaciones
let arrays = {
  tamaño: function () {
    explain = `Array.length sirve para saber cuantos objetos tiene el arreglo, por ejemplo este arreglo tiene ${cigarros.length} elementos`;
    return explain;
  },
  primeroUltimo: function () {
    let primero = cigarros[0];
    let ultimo = cigarros[cigarros.length - 1];
    explain = `Array[0] sirve para mostrar nuestro primer objeto en este caso es ${primero} y el ultimo de mi array se muestra con Array[Array.length-1] es este caso es ${ultimo}`;
    return explain;
  },
  at: function () {
    explain = `Array.at() lo que hace es recibir un valor numérico entero y muestra el elemento en esa posición, como lo seria: Array.at(2) el elemento seria ${cigarros.at(
      2
    )}. 
        Por otra parte los valores negativos cuentan desde el ultimo elemento del Array en este caso Array.at(-1) lo cual seria: ${cigarros.at(
          -1
        )}`;
    return explain;
  },
  concat: function () {
    let otrosCigarros = ["Lucky Strike", "Winston"];
    let combinado = cigarros.concat(otrosCigarros);
    explain = `Array.concat() sirve para unir dos o más arrays en uno solo. Por ejemplo, al unir ${cigarros} con ${otrosCigarros}, el nuevo array sería: ${combinado}.`;
    return explain;
  },
  copyWithin: function () {
    let copia = cigarros.slice(); // copia para no modificar
    copia.copyWithin(1, 2);
    explain = `Array.copyWithin() copia una parte del array a otra posición dentro del mismo array. 
        En este caso, copiamos desde la posición 2 a la 1, resultando en: ${copia}.`;
    return explain;
  },
  entries: function () {
    let iterado = cigarros.entries();
    let resultado = [];
    for (let [indice, valor] of iterado) {
      resultado.push(`[${indice}, ${valor}]`);
    }
    explain = `Array.entries() crea un iterador que contiene los pares clave-valor de cada posición en el array. 
        Por ejemplo, los pares clave-valor de ${cigarros} serían: ${resultado.join(
      ", "
    )}.`;
    return explain;
  },
  every: function () {
    let sonLargos = cigarros.every((c) => c.length > 5);
    explain = `Array.every() verifica si todos los elementos cumplen una condición. 
        Por ejemplo, si todos los nombres de cigarros tienen más de 5 letras: ${sonLargos}.`;
    return explain;
  },
  fill: function () {
    let llenado = cigarros.slice(); // hacemos una copia para no modificar el array original
    llenado.fill("Cigarrillos", 1, 3);
    explain = `Array.fill() cambia todos los elementos de un array por un valor estático desde una posición inicial hasta una final. 
        En este caso, llenamos con 'Cigarrillos' desde la posición 1 hasta la 3, resultando en: ${llenado}.`;
    return explain;
  },
  filter: function () {
    let filtrados = cigarros.filter((c) => c.includes("a"));
    explain = `Array.filter() crea un nuevo array con todos los elementos que pasan una prueba. 
        En este caso, filtramos los cigarros que contienen la letra 'a', resultando en: ${filtrados}.`;
    return explain;
  },
  find: function () {
    let encontrado = cigarros.find((c) => c.startsWith("C"));
    explain = `Array.find() devuelve el primer elemento que cumple con una condición. 
        En este caso, el primer cigarro que comienza con 'C' es: ${encontrado}.`;
    return explain;
  },
  findIndex: function () {
    let indice = cigarros.findIndex((c) => c === "Camel");
    explain = `Array.findIndex() devuelve el índice del primer elemento que cumple con una condición. 
        En este caso, el índice de 'Camel' es: ${indice}.`;
    return explain;
  },
  findLast: function () {
    let encontrado = cigarros.findLast((c) => c.includes("a"));
    explain = `Array.findLast() devuelve el último elemento que cumple con una condición. 
        En este caso, el último cigarro que contiene la letra 'a' es: ${encontrado}.`;
    return explain;
  },
  findLastIndex: function () {
    let indice = cigarros.findLastIndex((c) => c.includes("a"));
    explain = `Array.findLastIndex() devuelve el índice del último elemento que cumple con una condición. 
        En este caso, el índice del último cigarro que contiene la letra 'a' es: ${indice}.`;
    return explain;
  },
  flat: function () {
    let nestedArray = [
      ["Marlboro", "Pall Mall"],
      ["Camel", "Montana"],
    ];
    let plano = nestedArray.flat();
    explain = `Array.flat() aplana un array de arrays en un solo nivel. 
        Por ejemplo, al aplanar ${JSON.stringify(
          nestedArray
        )}, obtenemos: ${plano}.`;
    return explain;
  },
  flatMap: function () {
    let mapeado = cigarros.flatMap((c) => c.split(" "));
    explain = `Array.flatMap() primero mapea cada elemento y luego aplana el resultado en un nuevo array. 
        Por ejemplo, al separar cada palabra de los nombres en ${cigarros}, obtenemos: ${mapeado}.`;
    return explain;
  },
  forEach: function () {
    let lista = "";
    cigarros.forEach((c, i) => (lista += `Elemento ${i}: ${c}\n`));
    explain = `Array.forEach() ejecuta una función por cada elemento del array. 
        En este caso, la lista de cigarros sería: \n${lista}.`;
    return explain;
  },
  includes: function () {
    let incluye = cigarros.includes("Camel");
    explain = `Array.includes() comprueba si un array contiene un valor específico. 
        En este caso, el array contiene 'Camel': ${incluye}.`;
    return explain;
  },
  indexOf: function () {
    let indice = cigarros.indexOf("Pall Mall");
    explain = `Array.indexOf() devuelve el primer índice en el que se encuentra un elemento. 
        En este caso, el índice de 'Pall Mall' es: ${indice}.`;
    return explain;
  },
  join: function () {
    let unidos = cigarros.join(" - ");
    explain = `Array.join() une todos los elementos de un array en una cadena, separándolos con un delimitador. 
        En este caso, los elementos unidos con ' - ' serían: ${unidos}.`;
    return explain;
  },
  keys: function () {
    let claves = [...cigarros.keys()];
    explain = `Array.keys() devuelve un nuevo iterador con las claves de los índices del array. 
        En este caso, los índices de ${cigarros} son: ${claves}.`;
    return explain;
  },
  lastIndexOf: function () {
    let indice = cigarros.lastIndexOf("Camel");
    explain = `Array.lastIndexOf() devuelve el último índice en el que se encuentra un elemento. 
        En este caso, el último índice de 'Camel' es: ${indice}.`;
    return explain;
  },
  map: function () {
    let mapeado = cigarros.map((c) => c.toUpperCase());
    explain = `Array.map() crea un nuevo array con los resultados de aplicar una función a cada elemento. 
        En este caso, convertimos cada cigarro a mayúsculas: ${mapeado}.`;
    return explain;
  },
  pop: function () {
    let ultimo = cigarros.pop();
    explain = `Array.pop() elimina y devuelve el último elemento del array. 
        En este caso, el último cigarro eliminado es: ${ultimo}. Ahora el array es: ${cigarros}.`;
    return explain;
  },
  push: function () {
    cigarros.push("Lucky Strike");
    explain = `Array.push() añade uno o más elementos al final del array. 
        En este caso, añadimos 'Lucky Strike', resultando en: ${cigarros}.`;
    return explain;
  },
  reduce: function () {
    let reduccion = cigarros.reduce((acc, curr) => acc + ", " + curr);
    explain = `Array.reduce() ejecuta una función reductora sobre cada elemento del array, acumulando un solo resultado. 
        En este caso, combinamos todos los elementos en una cadena: ${reduccion}.`;
    return explain;
  },
  reduceRight: function () {
    let reduccion = cigarros.reduceRight((acc, curr) => acc + ", " + curr);
    explain = `Array.reduceRight() funciona igual que reduce, pero de derecha a izquierda. 
        En este caso, la combinación de los elementos de derecha a izquierda sería: ${reduccion}.`;
    return explain;
  },
  reverse: function () {
    let invertido = [...cigarros].reverse(); // Hacemos una copia para no modificar el original
    explain = `Array.reverse() invierte el orden de los elementos del array. 
        En este caso, el array invertido sería: ${invertido}.`;
    return explain;
  },
  shift: function () {
    let primero = cigarros.shift();
    explain = `Array.shift() elimina y devuelve el primer elemento del array. 
        En este caso, el primer cigarro eliminado es: ${primero}. Ahora el array es: ${cigarros}.`;
    return explain;
  },
  slice: function () {
    let trozo = cigarros.slice(1, 3);
    explain = `Array.slice() devuelve una copia de una parte del array sin modificar el original. 
        En este caso, los elementos del índice 1 al 3 son: ${trozo}.`;
    return explain;
  },
  some: function () {
    let hayCamel = cigarros.some((c) => c === "Camel");
    explain = `Array.some() comprueba si al menos un elemento del array cumple una condición. 
        En este caso, ¿existe 'Camel' en el array?: ${hayCamel}.`;
    return explain;
  },
  sort: function () {
    let ordenado = [...cigarros].sort(); // Hacemos una copia para no modificar el original
    explain = `Array.sort() ordena los elementos del array. 
        En este caso, el array ordenado alfabéticamente sería: ${ordenado}.`;
    return explain;
  },
  splice: function () {
    let removido = cigarros.splice(1, 2); // Removemos 2 elementos desde el índice 1
    explain = `Array.splice() cambia el contenido del array eliminando, reemplazando o añadiendo elementos. 
        En este caso, removimos dos elementos: ${removido}. El array ahora es: ${cigarros}.`;
    return explain;
  },
  iterator: function () {
    let iterador = cigarros[Symbol.iterator]();
    let elementos = [];
    let siguiente = iterador.next();
    while (!siguiente.done) {
      elementos.push(siguiente.value);
      siguiente = iterador.next();
    }
    explain = `Array[@@iterator]() devuelve un iterador que permite recorrer los elementos del array. 
        En este caso, los elementos iterados serían: ${elementos}.`;
    return explain;
  },
  toLocaleString: function () {
    let local = cigarros.toLocaleString();
    explain = `Array.toLocaleString() convierte los elementos del array en una cadena, respetando el formato local. 
        En este caso, el array como cadena sería: ${local}.`;
    return explain;
  },
  toReversed: function () {
    let invertido = cigarros.toReversed();
    explain = `Array.toReversed() devuelve una copia del array con el orden invertido, sin modificar el original. 
        En este caso, el array invertido sería: ${invertido}.`;
    return explain;
  },
  toSorted: function () {
    let ordenado = cigarros.toSorted();
    explain = `Array.toSorted() devuelve una copia del array ordenada, sin modificar el original. 
        En este caso, el array ordenado sería: ${ordenado}.`;
    return explain;
  },
  toSpliced: function () {
    let nuevoArray = cigarros.toSpliced(1, 2); // Eliminamos 2 elementos desde el índice 1
    explain = `Array.toSpliced() devuelve una copia del array, eliminando o reemplazando elementos sin modificar el original. 
        En este caso, el nuevo array tras eliminar dos elementos sería: ${nuevoArray}.`;
    return explain;
  },
  toString: function () {
    let comoCadena = cigarros.toString();
    explain = `Array.toString() convierte el array en una cadena de texto. 
        En este caso, el array como cadena sería: ${comoCadena}.`;
    return explain;
  },
  unshift: function () {
    cigarros.unshift("Lucky Strike");
    explain = `Array.unshift() añade uno o más elementos al inicio del array. 
        En este caso, añadimos 'Lucky Strike', y el array ahora es: ${cigarros}.`;
    return explain;
  },
  values: function () {
    let valores = [...cigarros.values()];
    explain = `Array.values() devuelve un nuevo iterador con los valores del array. 
        En este caso, los valores del array son: ${valores}.`;
    return explain;
  },
  with: function () {
    let nuevoArray = cigarros.with(1, "Winston");
    explain = `Array.with() devuelve una copia del array con un elemento modificado en un índice específico. 
        En este caso, reemplazamos el cigarro en el índice 1 por 'Winston', y el nuevo array sería: ${nuevoArray}.`;
    return explain;
  },
};

//Inyecta el texto de presentación a un parrafo
function agregarArrays() {
  let parrafo = document.getElementById("p-constructor");
  let parrafoMetodoInstancia = document.getElementsByClassName("p-instance");
  let parrafoPropiedadInstancia = document.getElementById("p-constructor");

  //Parrafo Constructor
  parrafo.innerHTML += arrays.tamaño() + "<br><br>";
  parrafo.innerHTML += arrays.primeroUltimo() + "<br><br>";

  parrafoMetodoInstancia[0].innerHTML += arrays.at() + "<br><br>";
  parrafoMetodoInstancia[1].innerHTML += arrays.concat() + "<br><br>";
  parrafoMetodoInstancia[2].innerHTML += arrays.copyWithin() + "<br><br>";
  parrafoMetodoInstancia[3].innerHTML += arrays.entries() + "<br><br>";
  parrafoMetodoInstancia[4].innerHTML += arrays.every() + "<br><br>";
  parrafoMetodoInstancia[5].innerHTML += arrays.fill() + "<br><br>";
  parrafoMetodoInstancia[6].innerHTML += arrays.filter() + "<br><br>";
  parrafoMetodoInstancia[7].innerHTML += arrays.find() + "<br><br>";
  parrafoMetodoInstancia[8].innerHTML += arrays.findIndex() + "<br><br>";
  parrafoMetodoInstancia[9].innerHTML += arrays.findLast() + "<br><br>";
  parrafoMetodoInstancia[10].innerHTML += arrays.findLastIndex() + "<br><br>";
  parrafoMetodoInstancia[11].innerHTML += arrays.flat() + "<br><br>";
  parrafoMetodoInstancia[12].innerHTML += arrays.flatMap() + "<br><br>";
  parrafoMetodoInstancia[13].innerHTML += arrays.forEach() + "<br><br>";
  parrafoMetodoInstancia[14].innerHTML += arrays.includes() + "<br><br>";
  parrafoMetodoInstancia[15].innerHTML += arrays.indexOf() + "<br><br>";
  parrafoMetodoInstancia[16].innerHTML += arrays.join() + "<br><br>";
  parrafoMetodoInstancia[17].innerHTML += arrays.keys() + "<br><br>";
  parrafoMetodoInstancia[18].innerHTML += arrays.lastIndexOf() + "<br><br>";
  parrafoMetodoInstancia[19].innerHTML += arrays.map() + "<br><br>";
  parrafoMetodoInstancia[20].innerHTML += arrays.pop() + "<br><br>";
  parrafoMetodoInstancia[21].innerHTML += arrays.push() + "<br><br>";
  parrafoMetodoInstancia[22].innerHTML += arrays.reduce() + "<br><br>";
  parrafoMetodoInstancia[23].innerHTML += arrays.reduceRight() + "<br><br>";
  parrafoMetodoInstancia[24].innerHTML += arrays.reverse() + "<br><br>";
  parrafoMetodoInstancia[25].innerHTML += arrays.shift() + "<br><br>";
  parrafoMetodoInstancia[26].innerHTML += arrays.slice() + "<br><br>";
  parrafoMetodoInstancia[27].innerHTML += arrays.some() + "<br><br>";
  parrafoMetodoInstancia[28].innerHTML += arrays.sort() + "<br><br>";
  parrafoMetodoInstancia[29].innerHTML += arrays.splice() + "<br><br>";
  parrafoMetodoInstancia[30].innerHTML += arrays.iterator() + "<br><br>";
  parrafoMetodoInstancia[31].innerHTML += arrays.toLocaleString() + "<br><br>";
  parrafoMetodoInstancia[32].innerHTML += arrays.toReversed() + "<br><br>";
  parrafoMetodoInstancia[33].innerHTML += arrays.toSorted() + "<br><br>";
  parrafoMetodoInstancia[34].innerHTML += arrays.toSpliced() + "<br><br>";
  parrafoMetodoInstancia[35].innerHTML += arrays.toString() + "<br><br>";
  parrafoMetodoInstancia[36].innerHTML += arrays.unshift() + "<br><br>";
  parrafoMetodoInstancia[37].innerHTML += arrays.values() + "<br><br>";
  parrafoMetodoInstancia[38].innerHTML += arrays.with() + "<br><br>";
}
agregarArrays();
