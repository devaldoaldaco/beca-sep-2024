
/*-------------------------------------------------Ejercicio 1:----------------------------------------------------------*/

//Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a 
//"2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false 


function contrasenaValida(contrasenia){
    return (contrasenia==="2Fj(jjbFsuj" || contrasenia==="eoZiugBf&g9") ? true : false;
}

console.log("Resultado del ejercicio 1 (Contrasenia valida):");
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValida("")); //false



/*-------------------------------------------------Ejercicio 2:----------------------------------------------------------*/
//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o 
//mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

function calcularImpuestos(edad,ingresos){
    return (edad>=18 && ingresos>=1000) ? ingresos * 0.4 : 0;
}


console.log("Resultado del ejercicio 2 (calcularImpuestos):");
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0


/*-------------------------------------------------Ejercicio 3:----------------------------------------------------------*/

//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

//El BMI se calcula con la siguiente formula: peso / altura^2

//Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

//"Bajo de peso" si el BMI < 18.5
//"Normal" si está entre 18.5 y 24.9
//"Sobrepeso" si está entre 25 y 29.9
//"Obeso" si es igual o mayor a 30

function bmi(peso, altura){

    let bmi= peso / (altura*altura);

    return (bmi<18.5) ? "Bajo de peso" : 
           (bmi>=18.5 && bmi<=24.9) ? "Normal" : 
           (bmi>=25 && bmi<=29.9) ? "Sobrepeso" : "Obeso";
}

// código de prueba
console.log("Resultado del ejercicio 3 (IMC):");
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"



/*-------------------------------------------------Ejercicio 4:----------------------------------------------------------*/

//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:


function imprimirArreglo(array4){

    for (const element of array4) {
        console.log(element)
    }
}

console.log("Resultado de ejercicio 4 (Imprimir arreglo):")
const frutas= ["kiwi","arádano","durazno","mango"]

imprimirArreglo(frutas)


/*-------------------------------------------------Ejercicio 5:----------------------------------------------------------*/

/*Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string. */

function likes(num){

    let numStr;

    if(num>=1000000){
        num/=1000000;
        num= Number.parseInt(num);
        numStr= num.toString()+"M";
        return numStr;
    }else if(num>=1000 && num<1000000){
        num/=1000;
        num= Number.parseInt(num);
        numStr= num.toString()+"K";
        return numStr;
    }else{
        return num.toString();
    }
}

console.log("Resultado del ejercicio 5 (programa likes):");
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"


/*-------------------------------------------------Ejercicio 6:----------------------------------------------------------*/


/* Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. */

function fizzBuzz(num){

    if(num%3===0){
        if(num%5===0){
            return "fizzbuzz";
        }
        return "fizz"
    }
    else if(num%5===0){
        return "buzz"
    }else{
        return num;
    }
}

console.log("Resultado del ejercicio 6 (fizzbuzz)");
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8


/*-------------------------------------------------Ejercicio 7:----------------------------------------------------------*/

//Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

//Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

function contarRango(numMenor, numMayor){

    let contador=0;
    for(let i=numMenor; i<numMayor; i++){
        contador++;
    }

    return contador-1;
}

console.log("Resultado del ejercicio 7 (ContarRango):");

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0


/*-------------------------------------------------Ejercicio 8:----------------------------------------------------------*/


//Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

//Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

function sumarRango(menorNum, mayorNum){

    let acumulador=0;
    if(menorNum===mayorNum){
        return 0;
    }
    for(let i=menorNum; i<=mayorNum; i++){
        acumulador+=i;
    }

    return acumulador;
}

console.log("Resultado del ejercicio 8 (SumarRango):");
// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0


/*-------------------------------------------------Ejercicio 9:----------------------------------------------------------*/

//Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

function numeroDeAes(str){

    let numAs=0;

    for(let char of str){

        if(char==='a'){
            numAs++;
        }
    }

    return numAs;
}

console.log("Resultado del ejercicio 9 (Numero de Aes):");
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0


/*-------------------------------------------------Ejercicio 10:----------------------------------------------------------*/

//Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). 
//La función debe retornar el número de veces que aparece el caracter en el string.

function numeroDeCaracteres(str, charSel){

    let numOcurr=0;

    for(let char of str){

        if(char===charSel){
            numOcurr++;
        }
    }

    return numOcurr;
}


console.log("Resultado del ejercicio 10 (Numero de Caracteres):");

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4



/*-------------------------------------------------Ejercicio 11:----------------------------------------------------------*/

//Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

function sumarArreglo(arreglo){


    let acum=0;
    for (const element of arreglo) {
        acum+=element;
    }
    return acum;
}

// código de prueba
console.log("Resultado del ejercicio 11:")
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0


/*--------------------------------------Ejercicio 12: Multiplicar Arreglo----------------------------------------------------*/


//Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

function multiplicarArreglo(arreglo){


    let acum=1;
    for (const element of arreglo) {
        acum*=element;
    }
    return acum;
}


// código de prueba
console.log("Resultado del ejercicio 12 (Multiplicar arreglo):")
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1


/*--------------------------------------Ejercicio 13: Remover Ceros---------------------------------------------------------*/


//Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

function removerCeros(arreglo){

    const arregloNvo= arreglo.filter((element)=> element!==0);

    return arregloNvo;
}

// código de prueba
console.log("Resultado del ejercicio 13 (Arreglo sin ceros):")
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []


/*--------------------------------------Ejercicio 14: Sumar arreglo entre el rango-----------------------------------------------*/


//Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

//Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

function sumarArreglo(numeros, posicionInicial, posicionFinal){

    let acum=0;

    if(posicionInicial===posicionFinal){
         return 0;
    }
    while(posicionInicial<=posicionFinal){
        acum+=numeros[posicionInicial];
        posicionInicial++;
    }

    return acum;
}

// código de prueba
console.log("Resultado del ejercicio 14 (SumarArreglo):")
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0


/*--------------------------------------Ejercicio 15: Transcribir ADN a ARN-----------------------------------------------*/


//Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

/*Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U 
*/

function transcribir(adn){

    let arn="";

    for(let i=0; i<adn.length; i++){
        
        if(adn.charAt(i)==="G"){
            arn+="C";
        }else if(adn.charAt(i)==="C"){
            arn+="G";
        }else if(adn.charAt(i)==="T"){
            arn+="A";
        }else{
            arn+="U"
        }
    }

    return arn;

}

// código de prueba
console.log("Resultado del ejercicio 15 (transcribir):")
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"


/*--------------------------------------Ejercicio 16: Función capitalizar-----------------------------------------------*/

//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:


const capitalizar= (cadena)=>{

    let firstLetter= cadena.slice(0,1);
    let restOfString=cadena.slice(1, cadena.length);
    cadena=firstLetter.toUpperCase().concat(restOfString);
    return cadena;
}


// código de prueba
console.log("Resultado del ejercicio 16 (capitalizar 1):")
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""



/*--------------------------------------Ejercicio 17: Capitalizar cada palabra-----------------------------------------------*/

//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

const capCadaPalabra=(cadena)=>{
    
    let regex= /^[A-Za-z]|\ ./gm;
    let newstring="";
    if(cadena.length>0){

        const coincidencias= cadena.match(regex);

        for (const element of coincidencias) {
            newstring=cadena.replace(element, element.toUpperCase());
            cadena=newstring;
        }
    }
    return newstring
}

// código de prueba
console.log("Resultado del ejercicio 17 (capitalizar 2):")
console.log(capCadaPalabra("hola mundo")) // "Hola Mundo"
console.log(capCadaPalabra("make it real")) // "Make It Real"
console.log(capCadaPalabra("sujeto a la idea de que hay otro sujeto que apuesto él si que es apuestooooo")) // "random phrase"
console.log(capCadaPalabra("")) // ""


/*--------------------------------------Ejercicio 18: Número máximo de un arreglo----------------------------------------------*/

//Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

//Nota: Intentarlo hacer sin el método Math.max de JavaScript.

function max(arregloNum){

    let aux=0;
    for (const element of arregloNum) {
        
        if(element>aux){
            aux=element;
        }
    }
    return aux;
}

// código de prueba
console.log("Resultado del ejercicio 18 (Número mayor del arreglo):")
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9


/*--------------------------------------Ejercicio 19: Número mìnimo de un arreglo----------------------------------------------*/


//Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

//Nota: Intentarlo hacer sin el método Math.min de JavaScript.

function min(arregloNum){
    
    let aux=arregloNum[0];
    for (const element of arregloNum) {
        
        if(element<aux){
            aux=element;
        }
        
    }
    return aux;
}

//Codigo de prueba
console.log("Resultado del ejercicio 19 (Número menor del arreglo):")
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2


/*--------------------------------------Ejercicio 20: Generar contrasenia----------------------------------------------*/

//Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

/*Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.*/


const password=(cadena)=>{
    
    let newstring="";
    if(cadena.length>0){

        cadena=this.Uppertolower(cadena);
        
        for(let i=0; i<cadena.length; i++){
            
            if(cadena[i]===" "){
                newstring=cadena.replace(cadena[i], "");
                cadena=newstring;
            }else if(cadena[i]==="a"){
                newstring=cadena.replace(cadena[i], "4");
                cadena=newstring;
            }else if(cadena[i]==="e"){
                newstring=cadena.replace(cadena[i], "3");
                cadena=newstring;
            }else if(cadena[i]==="i"){
                newstring=cadena.replace(cadena[i], "1");
                cadena=newstring;
            }else if(cadena[i]==="o"){
                newstring=cadena.replace(cadena[i], "0");
                cadena=newstring;
            }
            
        }
    }
    return newstring;
}

function Uppertolower(cadena){

    let mayus_patron= /[A-Z]/gm;
    let newstring="";

    const coincidencias_mayus= cadena.match(mayus_patron)!== null ? cadena.match(mayus_patron) : [];

    if(coincidencias_mayus.length>0){

        for(const element of coincidencias_mayus) {
            newstring=cadena.replace(element, element.toLowerCase());
            cadena=newstring;   
        }
    }
    return cadena;
}

console.log("Resultado del ejercicio 20 (Generar Contrasenia):");
// código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")) // ""


/*---------------------------------Ejercicio 21: Encontrar números pares en arreglo------------------------------------------*/


//Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

function pares(numerosArray){

    const paresArray=numerosArray.filter((numero)=>numero%2===0);
    return paresArray;
}


// código de prueba
console.log("Resultado del ejercicio 21 (Número par):");
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []

/*---------------------------------Ejercicio 22: Encontrar posiciones de números pares----------------------------------------*/


//Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones 
//donde se encuentran números pares.

function findEvenPosition(numberArray){

    const positions=[];

    for (let i=0; i<numberArray.length; i++) {
        if(numberArray[i]%2===0)
            positions.push(i)
    }

    return positions;
}

// código de prueba
console.log("Resultado del ejercicio 22 (Posiciones de elementos pares):");
console.log(findEvenPosition([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(findEvenPosition([])) // []


/*---------------------------------Ejercicio 23: Duplicar elementos de un arreglo----------------------------------------*/


//Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2)

function duplicar(arreglo){

    const duplicado= arreglo.map((element)=>element*2);

    return duplicado;
}


// código de prueba
console.log("Resultado del ejercicio 23 (Duplicar elementos del arreglo):");
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []



/*---------------------------------Ejercicio 24: Palabras que empiecen con a----------------------------------------*/


//Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras 
//que empiecen por "a" (mayúscula o minúscula).

function empiezanConA(arreglo){

    const palabrasConA= arreglo.filter((palabra)=>(palabra.charAt(0)==='a' || palabra.charAt(0)==='A' ));

    return palabrasConA;
}



// código de prueba
console.log("Resultado del ejercicio 24 (Palabras que empiezan con a|A):");
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []


/*---------------------------------Ejercicio 25: Palabras que terminan con s----------------------------------------*/

//Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las 
//palabras que terminan con "s" (mayúscula o minúscula).


function terminanConS(arreglo){

    const palabrasConS= arreglo.filter((palabra)=>(palabra.charAt(palabra.length-1)==='s' || palabra.charAt(palabra.length-1)==='S' ));

    return palabrasConS;
}


// código de prueba
console.log("Resultado del ejercicio 25 (Palabras que terminan con s|S):");
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []


/*----------------------------------------------Ejercicio 26: Imprimir matriz-------------------------------------------------*/

//Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

const imprimirMatriz = (matriz) =>{

    let linea="";
    for (const fila of matriz) {
        for (const ind of fila) {
           linea+=ind+",";
        }
        console.log(linea);
        linea="";
    }
}

console.log("Resultado del ejercicio 26 (Imprimir matriz):");
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))


/*---------------------------------Ejercicio 27: Traducir númers a palabras----------------------------------------*/

//Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 9) y 
//retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.


function numerosAPalabras(numArray){

    const arregloPalabras=[];
    for (const numero of numArray) {
        if(numero<=3)
            arregloPalabras.push(zeroTo3(numero));
        else if(numero<=7)
            arregloPalabras.push(cuatroTo7(numero));
        else{
            arregloPalabras.push(ochoTo9(numero));
        }

    }
    return arregloPalabras;
}

const zeroTo3=(number)=>{
      return number===0 ? "cero" : number===1 ? "uno" : number===2 ? "dos" : "tres";
}

const cuatroTo7=(number)=>{
    return number===4 ? "cuatro" : number===5 ? "cinco" : number===6 ? "seis" : "siete";
}

const ochoTo9=(number)=>{
    return number===8 ? "ocho" : "nueve";
}

// código de prueba
console.log("Resultado del ejercicio 27 (Números a palabras):");
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]


/*---------------------------------Ejercicio 28: Traducir palabras a números----------------------------------------*/


//Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo 
//cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.


function palabrasANumeros(wordsArray){

    const arregloNumeros=[];
    for (const word of wordsArray) {
        if(word==="cero" || word==="uno" || word==="dos")
            arregloNumeros.push(_zeroTo3(word));
        else if(word==="tres" || word==="cuatro" || word==="cinco" || word==="seis")
            arregloNumeros.push(_cuatroTo7(word));
        else{
            arregloNumeros.push(_ochoTo9(word));
        }

    }
    return arregloNumeros;
}

const _zeroTo3=(word)=>{
      return word==="cero" ? 0 : word==="uno" ? 1 : 2;
}

const _cuatroTo7=(word)=>{
    return word==="tres" ? 3 : word==="cuatro" ? 4 : word==="cinco" ? 5 : 6;
}

const _ochoTo9=(word)=>{
    return word==="siete" ? 7 : word==="ocho" ? 8 : word==="nueve" ? 9 : -1;
}


// código de prueba
console.log("Resultado del ejercicio 28 (Palabras a Números):");
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]


/*---------------------------------Ejercicio 29: Traducir palabras a números----------------------------------------*/

//Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:

function numAsteriscos(arregloAsteriscos){

    let contador=0;
    for (const mayAsterico of arregloAsteriscos) {
        if(mayAsterico==="*")
            contador++;
    }

    return contador;
}


// código de prueba
console.log("Resultado del ejercicio 29 (Numero de asteriscos):");
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0



/*---------------------------------Ejercicio 30: Número de asteriscos en una matriz----------------------------------------*/

//Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:


function numAsteriscosMat(matriz){

    let contador=0;
    for (const fila of matriz) {
        for (const ind of fila) {
           if(ind==='*')
            contador++;
        }
    }

    return contador;
}

// código de prueba
console.log("Resultado del ejercicio 30 (Numero de asteriscos en matriz):");
console.log(numAsteriscosMat([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ])); //5 

  /*---------------------------------Ejercicio 31: Distancia entre dos strings----------------------------------------*/


//Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

//Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo 
//solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).


function distancia(string1,string2){

    let i=0;
    let contador=0;
    while(i<string1.length && i<string2.length){
        if(string1[i]!==string2[i])
            contador++;
        i++;
    }
    let diferencia= string1.length-string2.length;
    if(diferencia < 0)
        diferencia*=-1;

    return contador+diferencia;
}


// código de prueba
console.log("Resultado del ejercicio 31 (Distancia entre dos strings):");
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3