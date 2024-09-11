//Ejercicio 1

function contraseñaCorrecta(contrasena){
    if(contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9"){
        console.log("Contraseña correcta");
        }   else   {
            console.log("Contraseña incorrecta");
            }   
}

console.log(contraseñaCorrecta("2Fj(jjbFsuj"))


//Ejercicio 2

function calcularImpuestos(edad,ingresos){
        if(edad >= 18 && ingresos > 1000){
            return ingresos * 0.40;
        } else{
            return 0;
        }
}
console.log(calcularImpuestos(19,2000));

//Ejercicio 3

function bmi(peso,altura){
    let indice = peso/(altura*altura);
    if (indice < 18.5){
         return "bajo de peso";
        }if(indice > 18.5 && indice < 24.9){
            return "normal";
        }if(indice > 24.9 && indice < 29.9){
            return "sobrepeso";
        }else{
            return "obeso";
        }
}

//Ejercicio 4

function imprimirArreglo(linea1,linea2,linea3,linea4){
    let Arreglo = [linea1,linea2,linea3,linea4];
    for (let elemento of Arreglo){
        console.log(elemento)
    }
}

   imprimirArreglo(1, "Hola", 2, "Mundo");

   //Ejercicio 5

   function likes (numero){
    if(numero<1000){
        return numero;
    }if(numero>1000 && numero<1000000){
        numero = Math.trunc(numero/1000);
        return numero + "K";
    }else {
        numero = Math.trunc(numero/1000000);
        return numero + "M"
    }
   }

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"

//Ejercicio 6

function fizzBuzz(numero){
    if((numero%3)===0 && (numero%5 === 0 )){
        return "fizzbuzz";
    }if((numero%5 === 0)){
        return "buzz";
    }
    if((numero%3)===0 ){
        return "fizz";
    }else{
        return numero;
    }
}
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

//Ejercicio 7

function contarRango(inferior,superior){
    let rango = superior - inferior - 1;
    return rango;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

//Eejercicio 8

function sumarRango(inferior,superior){
    if(inferior===superior){
        return 0;
    }else{
    let contador = 0;
    for(let i = inferior; i <= superior; i++){
        contador = contador + i;
    }
    return contador;
    } 
}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

//Ejercicio 9


function numeroDeAes(mensaje){
    mensaje = mensaje.split("");
    let contador=0;
    for(let i=0 ; i <= mensaje.length ; i++)
        if(mensaje[i]==="a") {
          contador+=1; 
        }
    return contador
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

//Ejercicio 10

function numeroDeCaracteres(mensaje,caracteri){
    mensaje = mensaje.split("");
    let contador=0;
    for(let i=0 ; i <= mensaje.length ; i++)
        if(mensaje[i]===caracteri) {
          contador+=1; 
        }
    return contador
}
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

//Ejercicio 11

function sumarArreglo(array){
    let sumador=0;
    for(let elemento of array){
        sumador += elemento;
    }
    return sumador;
}
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

//Ejercicio 12

function multiplicarArreglo(producto){
    let res = producto.reduce((p,c)=>p*c);
    return res;
    }

console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

//Ejercicio 14

function removerCeros(array){
    for(let i=0; i <= array.length ; i++){
        if(array[i]===0){
            array.splice(i,1);
        }
    }
    return array;
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []

//Ejercicio 15

function sumarArreglo (array,rango1,rango2){
    otroArray = array.slice(rango1,rango2)
    otroArray.reduce()
    return otroArray
}

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

//Ejercicio 16
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""


//Ejercicio 17
function capitalizar(string){
    if (string.length != 0) {
        let arrString = [];
    for (caracter of string.split(" ")) {
      caracter = arrString.push(caracter[0].toUpperCase() + caracter.substring(1));
    }
    let pMayus = arrString.join(" ");
    console.log(pMayus);
  }
}


console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""


//Ejercicio 18
function max(array){
    let nMax = array[0];
    for (i = 1; i < array.length; i++){
        if (array[i] > nMax){
            nMax = array[i];
        }
    }
    console.log(nMax);
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9


//Ejercicio 29
function min(array){
    let nMin = array[0];
    for (i = 1; i < array.length; i++){
        if (array[i] < nMin){
            nMin = array[i];
        }
    }
    console.log(nMin);
}


console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2


//Ejercicio 20
function password(string) {
    let arr = string.toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "a") {
        arr[i] = "4";
      } else 
      
      if (arr[i] === "e") {
        arr[i] = "3";
      } else 
      
      if (arr[i] === "i") {
        arr[i] = "1";
      } else 
      
      if (arr[i] === "o") {
        arr[i] = "0";
      }
    }
    let newString = arr.join("").replace(/ /g, "");
    console.log(newString);
  }

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""


//Ejercicio 21
function pares(array){
    let nArray  = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      nArray.push(array[i]);
    }
  }
  console.log(nArray);
}


console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []


//Ejercicio 22
function posiciones(array){
    const nArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            nArray.push(i);
        }
    }
    console.log(nArray);
}

console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []


//Ejercicio 23
function duplicar(array){
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]*2);
  }
  console.log(newArray);
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []


//Ejercicio 24
function empiezanConA(array){
  let newArray = [];
  const r = array.filter((valor) => {
    if (valor[0] === "a" || valor[0] === "A") {
      newArray.push(valor);
    }
  });
  console.log(newArray);
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []


//Ejercicio 25
function terminanConS(array){
  let newArray = [];
  const r = array.filter((valor) => {
    if (valor.endsWith("s") || valor.endsWith("S")) {
      newArray.push(valor);
    }
  });
  console.log(newArray);
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []


// Ejercicio 26
function imprimirMatriz(matriz){
    let elemArray = matriz.join(",").split(",");
    elemArray.forEach((valor) => {
      console.log(valor)
    });
}

console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

//Ejercicio 27

function numerosAPalabras(array) {
    let nuevoArray=[];
    let palabras =["cero","uno","dos","tres","cuatro","cinco","seis","site","ocho","nueve"];
        for(let i = 0 ; i <= palabras.length ; i++){
        for(let element of array){
            if (element == i)
                nuevoArray.push(palabras[i]);
        }
        }
        return nuevoArray;

    }   

    console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]


//Ejercicio28
function palabrasANumeros(array){
  let nuevoArray = [];
  const valores = {
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
  for (i = 0; i < array.length; i++){
    if (valores.hasOwnProperty(array[i])){
      nuevoArray.push(valores[array[i]]);
    }else{
      array[i] = -1;
      nuevoArray.push(array[i]);
    }
  }
  console.log(nuevoArray);
}

console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]


//Ejercicio 29
function numAsteriscos(array){
  let nAst = 0;
  array.filter((valor) => {
    valor == "*" ? nAst++ : nAst;
  });
  console.log(nAst);
}


console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0

//Ejercicio30
function numAsteriscos(matriz){
    let array = matriz.join(",").split(",");
    let nAsteriscos = 0;
    array.filter((valor) => {
      valor == "*" ? nAsteriscos++ : nAsteriscos;
    });
    console.log(nAsteriscos);
  }

console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))


//Ejercicio 31
function distancia(string1, string2){
    let arr1 = string1.split("");
    let arr2 = string2.split("");
    let nCaracteres = arr2.length - arr1.length;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            nCaracteres++;
        }
    }
    console.log(nCaracteres);
}

console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3


