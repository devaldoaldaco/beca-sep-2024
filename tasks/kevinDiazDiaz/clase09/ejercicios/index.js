//Ejercicio 1 Contraseña válida
function contrasenaValida(contrasena){
    if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9"){
        return true;
    } else{
        return false;
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false



//Ejercicio 2 Calcular impuestos

function calcularImpuestos(edad, ingresos){
    if(edad >=18 && ingresos >=1000){
        return ingresos*0.4;
    } else{
        return 0
    }
}

console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0


//Ejercicio 3 IMC (indice de masa corporal)
function bmi(peso, altura){
    imc=peso/(altura*altura);
    
    return  imc <18.5 ? "Bajo de peso":
            imc <=24.9 ? "Normal":
            imc <=29.9 ? "Sobrepeso":
            "Obeso";

}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"



//Ejercicio 4 Imprimir un arreglo
//Opción 1
function imprimirArreglo(... arreglo){
    for(let elemento of arreglo){
        console.log(elemento);
    }
    return "";
}

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));

//Opción 2
function imprimirArreglo(... arreglo){
    for(let elemento of arreglo){
        console.log(elemento);
    }
}

imprimirArreglo(1, "Hola", 2, "Mundo");


//Ejercicio 5 Número de Likes
function likes(numero_like){
    return  numero_like>=1000000 ? `${Math.floor(numero_like/1000000)}M`:
            numero_like>=1000 ? `${Math.floor(numero_like/1000)}k`:
            numero_like;
}

/*function likes(numeroLikes){
    if(numeroLikes>=1000000){
        return `${Math.floor(numeroLikes/1000000)}M`;
    } else if (numeroLikes>=1000){
        return `${Math.floor(numeroLikes/1000)}k`;
    } else{
        return numeroLikes;
    }
}*/

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"


//Ejercicio 6 FizzBuzz

f/*unction fizzBuzz(number){
    let fizz=number%3;
    let buzz=number%5;
    
    if(fizz===0 && buzz===0){
        return "fizzbuzz";
    } else if(fizz===0){
        return "fizz";
    } else if(buzz===0){
        return "buzz";
    } else{
        return number;
    }
}*/

function fizzBuzz(number){
    let fizz=number%3;
    let buzz=number%5;
    
    return  (buzz===0 && fizz===0) ? "fizzbuzz":
            fizz===0 ? "fizz":
            buzz===0 ? "buzz":
            number;
}



console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8



//Ejercicio 7 Contar rango de números
function contarRango(number1, number2){
    let result=(number2-number1)-1;
    return result;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0


//Ejercicio 8 Sumar rango de números
function sumarRango(numero_inicial, numero_final){
    let result=0

    if(numero_inicial===numero_final){
        return 0;
    } else{
        for(let i=numero_inicial; i<=numero_final; i++){
            result+= i;
        }
    }
    
    return result;
}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0



//Ejercicio 9 Número de aes (letra "a")
function numeroDeAes(texto){
    let numero=0;
    for(let Aes of texto){
        if(Aes==="a"){
            numero++;
        } else{
            numero;
        }
    }
    return numero;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0



//Ejercicio 10 Número de caracteres
function numeroDeCaracteres(texto, caracter){
    let numero=0;
    for(let c of texto){
        if(c===caracter){
            numero++;
        } else{
            numero;
        }
    }
    return numero;
}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4



//Eejrcicio 11 Sumar arreglo
function sumarArreglo(numeros){
    let suma=0;

    for(let n of numeros){
        suma+=n;
    }

    return suma;
}

console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0



//Ejercicio 12 Multiplicar arreglo
function multiplicarArreglo(numeros){
    let multi=1;
    for(let i=0; i<numeros.length; i++){
        multi= multi*numeros[i];
    }
    return multi;
}

console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1



//Ejercicio 13 Remover ceros
function removerCeros(numeros){
    let nuevo_arreglo=[];

    for(let i=0; i<numeros.length; i++){
        if(numeros[i]!==0){
            nuevo_arreglo.push(numeros[i]);
        }
    }

    return nuevo_arreglo;
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []



//Ejercicio 14 Sumar arreglo entre el rango
function sumarArreglo(arreglo, pos_inicial, pos_final){
    let suma=0;
    
    if(pos_final-pos_inicial){
        for(let i=pos_inicial; i<=pos_final; i++){
            suma+=arreglo[i];
        }

        return suma;
    } else{
        return 0;
    }
}

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0



//Ejercicio 15 Transcribir ADN a ARN
function transcribir(adn){
    let arn="";    
    for(let i=0; i<adn.length; i++){
        if(adn[i]==='G'){
            arn+='C';
        } else if(adn[i]==='C'){
            arn+='G';
        } else if(adn[i]==='T'){
            arn+='A';
        } else if(adn[i]==='A'){
            arn+='U';
        } else{}
    }
    return arn;
   
}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"



//Ejercicio 16 Capitalizar palabra
function capitalizar(texto){
    
    if(texto.length===0){
        return texto;
    } else{
        return `${texto[0].toUpperCase()}${texto.slice(1)}`;
    }
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""



//Ejercicio 17 Capitalizar cada palabra
function capitalizar(texto){
    let capitalizado=" ";
    let inicio_palabra=true;

    if(texto.length===0){
        return texto;
    } 
    
    for(let i=0; i<texto.length; i++){
        
        if(texto[i]===" "){
            inicio_palabra=true;
        }

        if(inicio_palabra && texto[i]!==" "){
            capitalizado+=texto[i].toUpperCase();
            inicio_palabra=false;
        } else{
            capitalizado+=texto[i];
        }
    }
    return capitalizado;
}

console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""



//Ejercicio 18 Encontrar el número máximo
function max(numeros){
    let maximum=0;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]>maximum){
            maximum=numeros[i];
        }
    }
    return maximum;
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9



//Ejercicio 19 Encontarr el número mínimo
function min(numeros){
    let minimum=1000;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]<minimum){
            minimum=numeros[i];
        }
    }
    return minimum;
}

console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2



//Ejercicio 20 Generar contraseña
function password(contrasena){
    let resultado="";
    contrasena=contrasena.toLowerCase();

    for(let i=0; i<contrasena.length; i++){
        if(contrasena[i]!==' '){
            if(contrasena[i]==='a'){
                resultado+='4';
            } else if(contrasena[i]==='e'){
                resultado+='3';
            } else if(contrasena[i]==='i'){
                resultado+='1';
            } else if(contrasena[i]==='o'){
                resultado+='0';
            } else{
                resultado+=contrasena[i];
            }
        }
    }
    return resultado;
}

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""



//Ejercicio 21 Encontrar números pares en un arreglo
function pares(numeros){
    let residuo=0;
    let pares=[];
    for(let i=0; i<numeros.length; i++){
        residuo=numeros[i]%2;
        if(residuo===0){
            pares+=numeros[i];
        }
    }

    return `[${pares}]`;
}

console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []



//Ejercicio 22 Encontrar posiciones de números pares
function posiciones(numeros){
    let residuo=0;
    let pares_pos=[];
    for(let i=0; i<numeros.length; i++){
        residuo=numeros[i]%2;
        if(residuo===0){
            pares_pos+=i;
        }
    }
    return `[${pares_pos}]`;
}

console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []



//Ejercicio 23 Duplicar elementos de un arreglo
function duplicar(numeros){
    let duplicado=[];
    let duplicar=0;
    for(let i=0; i<numeros.length; i++){
        duplicar=numeros[i]*2;
        duplicado+=duplicar;
    }

    return `[${duplicado}]`;
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []



//Ejercicio 24 Encontrar palabras que empiecen por "a"
function empiezanConA(palabras){
    let palabras_a=[];
    for(let i=0; i<palabras.length; i++){
        if(palabras[i][0]==='a' || palabras[i][0]==='A'){
            palabras_a+=palabras[i];
        }
    }
    return `[${palabras_a}]`;
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []



//Ejercicio 25 Encontrar palabras que terminan en "s"
function terminanConS(palabras){
    let palabras_s=[];
    let ultima_letra=0;

    for(let i=0; i<palabras.length; i++){
        ultima_letra=palabras[i].length-1;
        
        if(palabras[i][ultima_letra]==='s' || palabras[i][ultima_letra]==='S'){
            palabras_s+=palabras[i];
        }
    }
    return `[${palabras_s}]`;
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []



//Ejercicio 26 Imprimir una matriz

function imprimirMatriz(matriz){
    valor=[];
    for(let i=0; i<matriz.length; i++){
        for(let j=0; j<matriz[i].length; j++){
            console.log(matriz[i][j]);
        }
    }
    return valor;
}

/*function imprimirMatriz(matriz){
    valor=[];
    for(let i=0; i<matriz.length; i++){
        for(let j=0; j<matriz[i].length; j++){
            valor.push(matriz[i][j]);
        }
    }
    return valor;
}*/

console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));



//Ejercicio 28 Traducir números a palabras
function numerosAPalabras(numeros){
    let letras=[];
    for(let i=0; i<numeros.length; i++){
        switch(numeros[i]){
            case 0:
                letras+="cero ";
                break;
            
            case 1:
                letras+="uno ";
                break;
            
            case 2:
                letras+="dos ";
                break;

            case 3:
                letras+="tres ";
                break;

            case 4:
                letras+="cuatro ";
                break;

            case 5:
                letras+="cinco ";
                break;
        
            case 6:
                letras+="seis ";
                break;
                
            case 7:
                letras+="siete ";
                break;
    
            case 8:
                letras+="ocho ";
                break;
    
            case 9:
                letras+="nueve ";
                break;
    
            case 10:
                letras+="diez ";
                break;
            
            default: letras+="Fuera de rango";
        }

    }
    return letras;
}

console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]



//Ejercicio 29 Número de asteriscos en un arreglo
function numAsteriscos(arreglo){
    let asteriscos=0;
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i]==="*"){
            asteriscos++;
        }
    }
    return asteriscos;
}

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0



//Ejercicio 30 Número de asteriscos en una matriz
function numAsteriscos(matriz){
    let asteriscos=0;

    for(let i=0; i<matriz.length; i++){
        for(let j=0; j<matriz[i].length;j++){
            if(matriz[i][j]==="*"){
                asteriscos++;
            }
        }
    }

    return asteriscos;
}

console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))



//Ejercicio 31 Distancia entre dos strings
function distancia(texto1, texto2){
    let diferencias=0;
    let extension=0;

    if(texto1.length>texto2.length){
        extension=texto1.length;
    } else{
        extension=texto2.length;
    }

    for(let i=0; i<extension; i++){
        if(texto1[i]!==texto2[i]){
            diferencias++;
        }
    }
    return diferencias;
}

console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
