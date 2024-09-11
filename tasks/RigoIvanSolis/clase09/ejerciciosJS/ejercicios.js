/* 1. Contraseña válida
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el
string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/

function contrasenaValida (contrasena) {
   
    if ( contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
        return true;
    } else {
       return false;
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("Hola"));
console.log(contrasenaValida("Rigo"));

console.log("--------------------------------------------------------------------------");

/* 2. Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos.
 Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. 
 De lo contrario retornar 0. */

 function calcularImpuestos ( edad, ingresos) {

    if ( edad >= 18 && ingresos >= 1000 ) {
        return ( ingresos * .40);
    } else {
        return 0;
    }

 }

 // código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

console.log("--------------------------------------------------------------------------");

/* 3. IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula: peso / altura^2
Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */

function bmi(peso, altura) {

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Bajo peso";
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    }
    if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    }
    return "Obeso";

}

// Código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); // "Bajo peso"
console.log(bmi(135, 1.7)); // "Obeso"

console.log("--------------------------------------------------------------------------");

/* 4. Imprimir un arreglo
Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte: */

function imprimirArreglo( array ) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}

// código de prueba
imprimirArreglo([1, "Hola", 2, "Mundo"]);
// 1
// Hola
// 2
// Mundo

console.log("--------------------------------------------------------------------------");

/* 
5. Número de Likes
Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.
Por ejemplo:
1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string. */

function likes(number) {

    if (number < 1000) {
        return number.toString();
    }
    else if (number >= 1000 && number < 1000000) {
        return Math.floor(number / 1000) + 'K';
    }
    else if (number >= 1000000) {
        return Math.floor(number / 1000000) + 'M';
    }

}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"

console.log("--------------------------------------------------------------------------");

/* 6. FizzBuzz
Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. */

function fizzBuzz(number) {

    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return number;
    }

}

console.log(fizzBuzz(6));   // "fizz"
console.log(fizzBuzz(20));  // "buzz"
console.log(fizzBuzz(30));  // "fizzbuzz"
console.log(fizzBuzz(8));   // 8

console.log("--------------------------------------------------------------------------");

/* 7. Contar rango de números
Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo. */

function contarRango(num1, num2) {
    
    let count =0;

    for ( let i = num1 +1; i < num2; i++ ) {
        count ++;
    }

    return count;
    
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0 

console.log("--------------------------------------------------------------------------");

/* 8. Sumar rango de números
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final. */

function sumarRango (num1, num2) {

    let suma = 0 

    for ( let i = num1 ; i <=num2; i++ ) {
        suma = suma + i;
    }

    return suma;
    
}

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 5

console.log("--------------------------------------------------------------------------");

/* 9. Número de aes (letra "a")
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a": */

function numeroDeAes(cadena) {

    let count = 0;
    let caracter = 0;

    for (let i = 0; i < cadena.length; i++) {
         caracter = cadena[i];

         if ( caracter == "a" ) {
            count ++;
         }
    }

    return count;

}

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

console.log("--------------------------------------------------------------------------");

/* 10. Número de caracteres
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). 
La función debe retornar el número de veces que aparece el caracter en el string. */

function numeroDeCaracteres(cadena, caracter) {

    let caracter2;
    let count = 0;

    for ( i = 0; i < cadena.length; i ++ ) {
        caracter2 = cadena[i];
        if (  caracter2 == caracter ) {
            count ++;
        }
    }

    return count;
    
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

console.log("--------------------------------------------------------------------------");

/* 11. Sumar arreglo
Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos. */

function sumarArreglo(array) {

    let suma = 0;

    for ( i = 0; i < array.length; i++ ) {
        suma += array[i];
    }

    return suma;

}

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

console.log("--------------------------------------------------------------------------");


/* 12. Multiplicar arreglo
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos. */

function multiplicarArreglo(array) {

    let multiplicación = 1;

    for ( i = 0; i < array.length; i++ ) {
        multiplicación *=  array[i];
    } 

    return multiplicación;

}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

console.log("--------------------------------------------------------------------------");

/* 13. Remover ceros
Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0). */

function removerCeros(array) {

    let nuevoArreglo = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            nuevoArreglo.push(array[i]);
        }
    }

    return nuevoArreglo;
}


// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []


console.log("--------------------------------------------------------------------------");


/* 14. Sumar arreglo entre el rango
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, 
la posición inicial y la posición final. La función debe retornar la suma de todos los números 
dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que 
están dentro de los límites del arreglo. */

function sumarArreglo( array, start, end ) {

    let suma = 0;

    for ( i = start; i <= end; i++ ) {
        suma += array[i];
            
       
    }
    return suma;

}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

console.log("--------------------------------------------------------------------------");

/* 15. Transcribir ADN a ARN
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U */

function transcribir(cadena) {

    let resultado = ' ';
    
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'A') {
            resultado += 'U';
        } else if (cadena[i] === 'T') {
            resultado += 'A';
        } else if (cadena[i] === 'C') {
            resultado += 'G';
        } else if (cadena[i] === 'G') {
            resultado += 'C';
        }
    }

    return resultado;

}

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

console.log("--------------------------------------------------------------------------");

/* 16. Capitalizar palabra
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra: */

function capitalizar(cadena) {
   
    if (cadena.length === 0) {
        return cadena; 
    }
    
    let primerCaracter = cadena.charAt(0).toUpperCase();
    let restoCadena = cadena.slice(1);

    return primerCaracter + restoCadena;
}

// Código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""

console.log("--------------------------------------------------------------------------");

/* 17. Capitalizar cada palabra
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra: */

function capitalizarF(cadena) {
    
    let palabras = cadena.split(' ');
    let resultado = [];

    for (let index = 0; index < palabras.length; index++) {
       let palabra1 = palabras[index];

        if( palabra1.length > 0 ) {
            var primerLetra = palabra1.charAt(0).toUpperCase();
            var restoPalabra = palabra1.slice(1).toLowerCase();
            resultado.push(primerLetra + restoPalabra);
        } 
    }
    return resultado.join(' ');
}

/* Forma 2 
function capitalizarF(cadena) {
    
    return cadena.split(' ').map(palabra => {
       
        if (palabra.length > 0) {
          return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
        }
        return palabra;
      })
      .join(' '); // Unir las palabras de nuevo con espacios
  } */
  
// Código de prueba
console.log(capitalizarF("hola mundo")); // "Hola Mundo"
console.log(capitalizarF("make it real")); // "Make It Real"
console.log(capitalizarF("")); // ""

console.log("--------------------------------------------------------------------------");

/* 18. Encontrar el número máximo
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript. */
function max(array) {

    let mayor = array[0];

    for ( i = 0; i < array.length; i++ ) {
        if ( array [i] > mayor) {
            mayor = array[i];
        } 
    }
    return mayor;
}

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

console.log("--------------------------------------------------------------------------");
  
/* 19. Encontrar el número mínimo
Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

Nota: Intentarlo hacer sin el método Math.min de JavaScript.*/
function min(array) {

    let menor = array[0];

    for ( i = 0; i < array.length; i++ ) {
        if ( array [i] < menor) {
            menor = array[i];
        } 
    }
    return menor;
}

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

console.log("--------------------------------------------------------------------------");

/* 20. Generar contraseña
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”. */

function password(cadena) {
    return cadena
        .toLowerCase()
        .replace(/a/g, '4')
        .replace(/e/g, '3')
        .replace(/i/g, '1')
        .replace(/o/g, '0')
        .replace(/\s+/g, '');
}

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

console.log("--------------------------------------------------------------------------");


/* 21. Encontrar números pares en un arreglo
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente. */
function pares(array) {

    let par = [];

    for ( i = 0; i < array.length; i++ ) {
        if ( array[i] %2 == 0 ) {
            par.push(array[i]);
        }
    }

    return par;

}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []

console.log("--------------------------------------------------------------------------");

/* 22. Encontrar posiciones de números pares
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde 
se encuentran números pares.*/
function posiciones(array) {

    let posicion = [];

    for ( i = 0; i < array.length; i++ ) {
        if ( array[i] %2 == 0 ) {
            posicion.push(i);
        }
    }

    return posicion;

}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []

console.log("--------------------------------------------------------------------------");

/* 23. Duplicar elementos de un arreglo
Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2). */

function duplicar(array) {

    let nuevo = [];

    for ( i = 0; i < array.length; i++ ) {
        nuevo.push(array[i] * 2)
    }

    return nuevo;

}

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []

console.log("--------------------------------------------------------------------------");

/* 24. Encontrar palabras que empiecen por "a"
Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula). */

function empiezanConA(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().startsWith('a')) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []

console.log("--------------------------------------------------------------------------");


/* 25. Encontrar palabras que terminan en "s"
Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula). */


function terminanConS(array) {

    for ( i = 0; i < array.length; i++ ) {
        
        let resultado = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i].toLowerCase().endsWith('s')) {
                resultado.push(array[i]);
            }
        }
        return resultado;

    }

}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []

console.log("--------------------------------------------------------------------------");

/* 26. Imprimir una matriz
Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo. */

function imprimirMatriz(matriz) {

    for ( i= 0; i < matriz.length; i++ ) {
        for ( j = 0; j < matriz[i].length; j++ ) {
            console.log(matriz[i][j]);
        } 
    }

}

// código de prueba
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))
  
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9

console.log("--------------------------------------------------------------------------");

/* 27. Traducir números a palabras
Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras. */

function numerosAPalabras(numeros) {
    const palabras = [
        'cero', 'uno', 'dos', 'tres', 'cuatro', 
        'cinco', 'seis', 'siete', 'ocho', 'nueve'
    ];

    let resultado = [];
    
    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        if (num >= 0 && num <= 9) {
            resultado.push(palabras[num]);
        } else {
            resultado.push('Número fuera de rango'); // Manejo de errores si el número está fuera del rango
        }
    }

    return resultado;
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]

console.log("--------------------------------------------------------------------------");

/* 28. Traducir palabras a números
Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1. */

function palabrasANumeros(array) {
    const palabras = [ 'cero', 'uno', 'dos', 'tres', 'cuatro', 
                       'cinco', 'seis', 'siete', 'ocho', 'nueve' ];
    const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

    let resultado = [];
    
    for (let i = 0; i < array.length; i++) {
        let palabra = array[i].toLowerCase();
        let index = palabras.indexOf(palabra);
        
        if (index !== -1) {
            resultado.push(numeros[index]);
        } else {
            resultado.push(-1);
        }
    }

    return resultado;
}

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]

console.log("--------------------------------------------------------------------------");

/* 29. Número de asteriscos en un arreglo
Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos: */

function numAsteriscos(array) {

    let count = 0;

    for ( i = 0; i < array.length; i++ ) {

        if ( array [i] === '*' ) {
            count ++;
        }
    }
    return count;
}

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0

console.log("--------------------------------------------------------------------------");

/* 30. Número de asteriscos en una matriz
Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos: */
function numAsteriscos(matriz) {

    let count = 0;

    for ( i= 0; i < matriz.length; i++ ) {
        for ( j = 0; j < matriz[i].length; j++ ) {
            if ( matriz [i][j] === '*' ) {
                count ++;
            }
        } 
    }

    return count;
}

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5

console.log("--------------------------------------------------------------------------");

/* 31. Distancia entre dos strings
Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado). */

function distancia(str1, str2) {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }

    return count;
}


// Código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol"));   // 1
console.log(distancia("carro", "correr")); // 3




