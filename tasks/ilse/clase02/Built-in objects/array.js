let frutas = ["Manzana", "Banana"];

console.log(frutas.length);

let primero = frutas[0];
let ultimo = frutas[frutas.length - 1];

frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
})
 
let nuevaLongitud = frutas.push("Naranja"); 

ultimo = frutas.pop(); 
nuevaLongitud = frutas.unshift("Fresa"); 
primero = frutas.shift();

frutas.push("Fresa");

let pos = frutas.indexOf("Banana");
let elementoEliminado = frutas.splice(pos, 1);

let vegetales = ["Repollo", "Nabo", "Rabano", "Zanahoria"];
console.log(vegetales);

  pos = 1,
numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
console.log(vegetales); 

let copiaArray = vegetales.slice();


let arr = [
  "este es el primer elemento",
  "este es el segundo elemento",
  "este es el ultimo elemento",
];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(decadas[0]);

console.log(decadas["2"] != decadas["02"]); 

const fruta = [];
frutas.push("banana", "manzana", "pera");
console.log(frutas.length);

frutas[5] ="fresa";
console.log(frutas[5]);
console.log(Object.keys(frutas));
console.log(frutas.length);

frutas.length = 10;
console.log(frutas);
console.log(Object.keys(frutas));
console.log(frutas.length);
console.log(frutas[0]);

frutas.length = 2;
console.log(Object.keys(frutas));
console.log(frutas.length);

const miRe = /d(b+) (d) /i;
const miArray = miRe.exec("cdbBdbsbz");

let mensajes = [];
mensajes[0] = "Hola";
mensajes[99] = "mundo";

if (mensajes.length === 100); {
  console.log("La longitud es de 100.");

}

let tablero = [
  ["T", "C", "A", "D", "R", "A", "C", "T"], 
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["t", "c", "a", "d", "r", "a", "c", "t"],
];

console.log(tablero.join("\n") + "\n\n");

tablero[4] [4] = tablero[6] [4];
tablero[6] [4] = "";
console.log(tablero.join("\n"));

valores = [];
for (let x = 0; x < 10; x++) {
  valores.push([2 ** x, 2 * x ** 2]);
}
console.table(valores);



