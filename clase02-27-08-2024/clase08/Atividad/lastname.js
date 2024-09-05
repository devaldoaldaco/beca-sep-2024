function dominio(urlString) {
    
    const url = new URL(urlString);
    const dominioCompleto = url.hostname;
    const words = dominioCompleto.split('.');
    
    let dominioPrincipal;
    if (words.length > 2) {
        dominioPrincipal = words[words.length - 2];
    } else {
        // Si solo hay dos partes, tomar la primera parte
        dominioPrincipal = words[0];
    }
    
    return dominioPrincipal;
}

const url1 = "http://github.com/carbonfive/raygun";
const url2 = "http://www.zombie-bites.com";
const url3 = "https://www.cnet.com";

console.log(dominio(url1)); 
console.log(dominio(url2)); 
console.log(dominio(url3)); 


/*  Dado un texto, por ejemplo:

const inputText = "Michael, ¿cómo estás? - Bien, ¿cómo están John Williams y Michael Jordan? No lo sé, pero Michael Johnson está bien. Michael, ¿todavía sumas puntos con LeBron James, Michael Green, también conocido como Star, y Michael Wood?";

Obtén una matriz de apellidos de personas llamadas Michael. El resultado debería ser:
["Jordan", "Johnson", "Green", "Wood"]

Notas:

El nombre siempre será Michael con "M" mayúscula.
Siempre habrá un espacio entre "Michael" y el apellido.
El apellido siempre será una palabra, comenzando con una letra mayúscula y continuando con letras minúsculas.
Siempre habrá al menos un "Micheal" con un apellido válido en el texto de entrada. */

const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
const words = inputText.split( ' ' );
console.log( words[4]);

const chars = inputText.split('');
console.log(chars[70]);

let array = [];

for (let index = 0; index < words.length; index++) {
    if ( words[index] === "Michael"  && words[index + 1 ] !== "do" ) {
        array.push(words[index + 1]);
    }
    if ( words[index] === "Wood?" ) {
        (words[index].slice(1, index.length -1));
    }
}

console.log(array);

