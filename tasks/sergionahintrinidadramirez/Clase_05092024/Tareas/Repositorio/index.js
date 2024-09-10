//EJERCICIO 1
function contrasenaValida(password) {
  return password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9";
}

// código de prueba
console.log("Ejercicio 1")
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false
console.log("--------------------")

console.log("Ejercicio 2")
function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.40;
  }
  return 0;
}// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0
console.log("--------------------")

console.log("Ejercicio 3")
function bmi(peso, altura) {
  const bmiValue = peso / (altura * altura);
  const bmiCategorias = [
    {max: 18.5, category:"Bajo de peso"},
    {max: 25, category:"Normal"},
    {max: 30, category:"Sobrepeso"},
    {max: Infinity, category:"Obeso"}
  ]
 return bmiCategorias.find(catego => bmiValue <= catego.max).category;
}


// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) // "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"


console.log("----------");
console.log("Ejercicio 4.");
function imprimirArreglo(...elementos) {
  elementos.forEach((elemento) => console.log(elemento));
}

// Código de prueba
imprimirArreglo(1, "Hola", 2, "Mundo");

console.log("----------");
console.log("Ejercicio 5");
function likes(numero) {
  if (numero < 1000) return numero.toString();
  if (numero < 1000000) return Math.floor(numero / 1000) + "K";
  return Math.floor(numero / 1000000) + "M";
}

// Código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"

console.log("----------");
console.log("Ejercicio 6.");
function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";
  return numero;
}

// Código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

console.log("----------");
console.log("Ejercicio 7");
function contarRango(inicio, fin) {
  let contador = 0;
  for (let i = inicio + 1; i < fin; i++) {
    contador++;
  }
  return contador;
}

// Código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

console.log("----------");
console.log("Ejercicio 8.");
function sumarRango(inicio, fin) {
  if (inicio === fin) return 0;
  
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  return suma;
}

// Código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0

console.log("----------");
console.log("Ejercicio 9");
function numeroDeAes(cadena) {
  return (cadena.match(/a/gi) || []).length;
}

// Código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0

console.log("----------");
console.log("Ejercicio 10.");
function numeroDeCaracteres(cadena, caracter) {
  return (cadena.match(new RegExp(caracter, "g")) || []).length;
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4

console.log("----------");
console.log("Ejercicio 11");
function sumarArre(arrsum) {
  return arrsum.reduce((sum, num) => sum + num, 0);
}

// Código de prueba
console.log(sumarArre([3, 1, 2])); // 6
console.log(sumarArre([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArre([])); // 0

console.log("----------");
console.log("Ejercicio 12.");
function multiplicarArreglo(arr) {
  return arr.reduce((product, num) => product * num, 1);
}

// Código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1

console.log("----------");
console.log("Ejercicio 13");
function removerCeros(arr) {
  return arr.filter((num) => num !== 0);
}

// Código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []

console.log("----------");
console.log("Ejercicio 14.");
function sumarArreglo(arr, inicio, fin) {
  return arr.slice(inicio, fin + 1).reduce((sum, num) => sum + num, 0);
}

// Código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 0

console.log("----------");
console.log("Ejercicio 15");
function transcribir(dna) {
  const transcripcion = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  return dna
    .split("")
    .map((base) => transcripcion[base] || base)
    .join("");
}

// Código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

console.log("----------");
console.log("Ejercicio 16.");
function capitalizar(palabra) {
  if (palabra.length === 0) return palabra;
  return palabra[0].toUpperCase() + palabra.slice(1);
}

// Código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""

console.log("----------");
console.log("Ejercicio 17");
function capitalizar(frase) {
  return frase
    .split(" ")
    .map((palabra) =>
      palabra.length > 0 ? palabra[0].toUpperCase() + palabra.slice(1) : ""
    )
    .join(" ");
}

// Código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""

console.log("----------");
console.log("Ejercicio 18.");
function max(arr) {
  if (arr.length === 0) return undefined;
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

// Código de prueba
console.log(max([3, 9, 6])); // 9
console.log(max([67, 35, 54, 26])); // 67
console.log(max([5, 9, 2, 4, 5, 7])); // 9

console.log("----------");
console.log("Ejercicio 19");
function min(arr) {
  if (arr.length === 0) return undefined;
  let minNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
}

// Código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2

console.log("----------");
console.log("Ejercicio 20.");
function password(str) {
  return str
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/a/g, "4")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0");
}

// Código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""

console.log("----------");
console.log("Ejercicio 21");
function pares(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []

console.log("----------");
console.log("Ejercicio 22.");
function posiciones(arr) {
  return arr.reduce((acc, num, index) => {
    if (num % 2 === 0) acc.push(index);
    return acc;
  }, []);
}

// Código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []

console.log("----------");
console.log("Ejercicio 23");
function duplicar(arr) {
  return arr.map((num) => num * 2);
}

// Código de prueba
console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []

console.log("----------");
console.log("Ejercicio 24.");
function empiezanConA(arr) {
  return arr.filter((palabra) => palabra.toLowerCase().startsWith("a"));
}

// Código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []

console.log("----------");
console.log("Ejercicio 25");
function terminanConS(arr) {
  return arr.filter((palabra) => palabra.toLowerCase().endsWith("s"));
}

// Código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []

console.log("----------");
console.log("Ejercicio 26.");
function imprimirMatriz(matriz) {
  matriz.forEach((fila) => {
    fila.forEach((elemento) => console.log(elemento));
  });
}

// Código de prueba
console.log(
  imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

console.log("----------");
console.log("Ejercicio 27");
function numerosAPalabras(arr) {
  const numeros = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  return arr.map((num) => numeros[num]);
}

// Código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]

console.log("----------");
console.log("Ejercicio 28.");
function palabrasANumeros(arr) {
  const traduccion = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
  };
  return arr.map((palabra) =>
    traduccion[palabra] !== undefined ? traduccion[palabra] : -1
  );
}

// Código de prueba
console.log(
  palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])
); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]

console.log("----------");
console.log("Ejercicio 29");
function numAsteriscos(arr) {
  return arr.filter((item) => item === "*").length;
}

// Código de prueba
console.log(numAsteriscos(["", "*", "", "*"])); // 2
console.log(numAsteriscos(["*", "*", "*"])); // 3
console.log(numAsteriscos([])); // 0

console.log("----------");
console.log("Ejercicio 30.");
function numAsteriscos(matriz) {
  return matriz.flat().filter((item) => item === "*").length;
}

// Código de prueba
console.log(
  numAsteriscos([
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ])
); // 5

//CAMBIADO 
console.log("----------");
console.log("Ejercicio 31");
function distancia(str1, str2) {
  const minLength = Math.min(str1.length, str2.length);
  const lengthDiff = Math.abs(str1.length - str2.length);
  
  let count = 0;
  for (let i = 0; i < minLength; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  
  return count + lengthDiff;
}

// Código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 3