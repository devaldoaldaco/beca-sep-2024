function contrasenaValida(contrasena) {
    // Contraseñas válidas
    const contrasenaValida1 = "2Fj(jjbFsuj";
    const contrasenaValida2 = "eoZiugBf&g9";
    
    // Verificar la contraseña y retornar un mensaje adecuado
    if (contrasena === contrasenaValida1 || contrasena === contrasenaValida2) {
        return true;
    } else {
        console.log("Contraseña incorrecta. Por favor, intenta de nuevo.");
        return false;
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.40;
    } else {
        return 0;
    }
}
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0


function bmi(peso, altura) {
    // Calcula el BMI usando la fórmula
    const bmiValue = peso / (altura * altura);
    // Determina la categoría según el valor del BMI
    if (bmiValue < 18.5) {
        return "Bajo de peso";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
        return "Normal";
    } else if (bmiValue >= 25 && bmiValue < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"


function imprimirArreglo(arr) {
    // Recorre cada elemento del arreglo
    for (let i = 0; i < arr.length; i++) {
        // Imprime el elemento actual en una línea separada
        console.log(arr[i]);
    }
}

console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]))
// 1
// Hola
// 2
// Mundo

function likes(numero) {
    if (numero < 1000) {
        // Si el número es menor a 1000, retorna el número como una cadena de texto
        return numero.toString();
    } else if (numero >= 1000 && numero < 1_000_000) {
        // Si el número está entre 1000 y 999,999, usa 'K' para miles
        return (Math.round(numero / 100) / 10).toFixed(1) + 'K';
    } else {
        // Si el número es 1,000,000 o mayor, usa 'M' para millones
        return (Math.round(numero / 1_000_000 * 10) / 10).toFixed(1) + 'M';
    }
}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"


function fizzBuzz(numero) {
    // Verifica si el número es múltiplo tanto de 3 como de 5
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    }
    // Verifica si el número es múltiplo de 3
    else if (numero % 3 === 0) {
        return "fizz";
    }
    // Verifica si el número es múltiplo de 5
    else if (numero % 5 === 0) {
        return "buzz";
    }
    // Si no cumple ninguna condición, retorna el número
    else {
        return numero.toString();
    }
}


// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8



function contarRango(numero1, numero2) {
    // Inicializa el contador en 0
    let contador = 0;

    // Recorre todos los números entre numero1 y numero2 (excluyéndolos)
    for (let i = numero1 + 1; i < numero2; i++) {
        contador++;
    }

    // Retorna el número de elementos encontrados
    return contador;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

function sumarRango(inicio, fin) {
    // Inicializa la variable suma en 0 para acumular la suma de los números
    let suma = 0;

    // Recorre cada número desde el inicio hasta el fin
    for (let i = inicio; i <= fin; i++) {
        // Suma el número actual a la variable suma
        suma += i;
    }

    // Retorna el total de la suma
    return suma;
}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0


function numeroDeAes(cadena) {
    // Inicializa el contador en 0
    let contador = 0;

    // Recorre cada carácter en la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Si el carácter actual es una 'a', incrementa el contador
        if (cadena[i] === 'a') {
            contador++;
        }
    }

    // Retorna el número total de 'a's encontradas
    return contador;
}

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

function numeroDeCaracteres(cadena, caracter) {
    // Inicializa el contador en 0
    let contador = 0;

    // Recorre cada carácter en la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Si el carácter actual coincide con el caracter buscado, incrementa el contador
        if (cadena[i] === caracter) {
            contador++;
        }
    }

    // Retorna el número total de veces que aparece el caracter
    return contador;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

//revisar..............................................................
function sumarArreglo(arr) {
    // Inicializa la variable suma en 0
    let suma = 0;

    // Recorre cada elemento del arreglo
    for (let i = 0; i < arr.length; i++) {
        // Suma el elemento actual a la variable suma
        suma += arr[i];
    }

    // Retorna la suma total de los elementos del arreglo
    return suma;
}

console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

function multiplicarArreglo(arr) {
    // Inicializa la variable producto en 1 (ya que 1 es el elemento neutro para la multiplicación)
    let producto = 1;

    // Recorre cada elemento del arreglo
    for (let i = 0; i < arr.length; i++) {
        // Multiplica el elemento actual con la variable producto
        producto *= arr[i];
    }

    // Retorna el producto total de los elementos del arreglo
    return producto;
}

console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

function sumarArreglo(arr, inicio, fin) {
    // Inicializa la variable suma en 0
    let suma = 0;

    // Recorre los elementos del arreglo desde la posición inicial hasta la posición final (inclusive)
    for (let i = inicio; i <= fin; i++) {
        // Suma el elemento actual a la variable suma
        suma += arr[i];
    }

    // Retorna la suma total de los elementos en el rango especificado
    return suma;
}
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 7

function transcribir(dna) {
    // Crear un objeto que mapea cada base de ADN a su complemento ARN
    const complemento = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    // Convertir la cadena de ADN a su complemento ARN usando el objeto de mapeo
    let rna = '';

    // Recorrer cada carácter en la cadena de ADN
    for (let i = 0; i < dna.length; i++) {
        // Obtener el complemento ARN del carácter actual y agregarlo a la cadena de ARN
        rna += complemento[dna[i]];
    }

    // Retornar la cadena de ARN resultante
    return rna;
}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

function capitalizar(texto) {
    // Verificar si el texto no está vacío
    if (texto.length === 0) {
        return texto; // Retornar el texto vacío si no hay nada que capitalizar
    }

    // Capitalizar la primera letra y concatenar con el resto del texto
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

function capitalizar(texto) {
    // Dividir el texto en palabras usando un espacio como separador
    return texto.split(' ').map(palabra => {
        // Capitalizar la primera letra de cada palabra y concatenar con el resto
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }).join(' ');
}

console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""

function max(arr) {
    if (arr.length === 0) throw new Error("El arreglo no puede estar vacío");
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

function min(arr) {
    if (arr.length === 0) throw new Error("El arreglo no puede estar vacío");
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

function password(str) {
    // Convertir el string a minúsculas
    str = str.toLowerCase();

    // Eliminar los espacios en blanco
    str = str.replace(/\s+/g, '');

    // Reemplazar los caracteres según las reglas dadas
    str = str.replace(/a/g, '4');
    str = str.replace(/e/g, '3');
    str = str.replace(/i/g, '1');
    str = str.replace(/o/g, '0');

    return str;
}

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

function pares(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []

function posiciones(arr) {
    return arr
        .map((num, index) => num % 2 === 0 ? index : -1) // Mapea a índices de números pares o -1
        .filter(index => index !== -1); // Filtra los índices -1
}

console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []

function duplicar(arr) {
    return arr.map(num => num * 2);
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []

function empiezanConA(arr) {
    return arr.filter(str => str.toLowerCase().startsWith('a'));
}
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []


function imprimirMatriz(matriz) {
    matriz.forEach(fila => {
        fila.forEach(elemento => {
            console.log(elemento);
        });
    });
}

console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

function numerosAPalabras(arr) {
    // Definimos un mapa de números a palabras
    const numeroAMensaje = [
        'cero', 'uno', 'dos', 'tres', 'cuatro',
        'cinco', 'seis', 'siete', 'ocho', 'nueve'
    ];

    // Convertimos cada número a su versión en palabras
    return arr.map(num => numeroAMensaje[num]);
}
// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]


function palabrasANumeros(arr) {
    // Definimos un mapa de palabras a números
    const palabraANumero = {
        'cero': 0, 'uno': 1, 'dos': 2, 'tres': 3, 'cuatro': 4,
        'cinco': 5, 'seis': 6, 'siete': 7, 'ocho': 8, 'nueve': 9
    };

    // Convertimos cada palabra a su versión numérica
    return arr.map(palabra => palabraANumero[palabra] !== undefined ? palabraANumero[palabra] : -1);
}

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]

function numAsteriscos(arr) {
    return arr.filter(element => element === '*').length;
}
// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0

function numAsteriscos(matriz) {
    // Recorre cada fila de la matriz
    return matriz.flat().filter(element => element === '*').length;
}
// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
]))
// 5
function distancia(str1, str2) {
    let diferencia = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            diferencia++;
        }
    }
    return diferencia;
}
// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
