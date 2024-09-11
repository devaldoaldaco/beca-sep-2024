let explain;
//explicaciones
let string = {
  constructor: function () {
    explain = `String se puede declarar de dos maneras pero no hacen lo mismo, la primera es
    new String("Hola mundo"); la cual al ser una clase se vuelve un objecto a diferencia que si lo declaramos asi
    String("Hola Mundo") este valor si es de tipo cadena.
    Nos daremos cuenta al ocupar typeof: Este es el primer caso
    ${typeof new String("Hola mundo")}, 
    Y este es el segundo caso: ${typeof String("Hola Mundo")}
    `;
    return explain;
  },
  at: function () {
    explain =
      explain = `El método at() permite acceder a un carácter en una cadena con un índice. Esto es útil porque acepta índices negativos para contar desde el final.
    Ejemplo
    const saludo = "Hola Mundo"; ${(saludo = "Hola Mundo")}
    Primer carácter: ${saludo.at(0)} 
    Último carácter: ${saludo.at(-1)}
    `;
    return explain;
  },

  charAt: function () {
    explain = `El método charAt() devuelve el carácter en el índice especificado de una cadena. No admite índices negativos.
    Ejemplo:
    const palabra = "JavaScript"; ${(palabra = "JavaScript")}
    Carácter en la posición 0: ${palabra.charAt(0)} 
    Carácter en la posición 4: ${palabra.charAt(4)} 
    `;
    return explain;
  },

  charCodeAt: function () {
    explain = `El método charCodeAt() devuelve el código Unicode del carácter en el índice especificado.
    Ejemplo:
    const letra = "A"; ${(letra = "A")}
    Código Unicode de la letra A: ${letra.charCodeAt(0)} 
    `;
    return explain;
  },

  codePointAt: function () {
    explain = `El método codePointAt() devuelve el valor Unicode del carácter en el índice dado, incluyendo caracteres especiales o emojis.
    Ejemplo:
    const emoji = "😃"; ${(emoji = "😃")}
    Valor Unicode del emoji: ${emoji.codePointAt(0)}
    `;
    return explain;
  },

  concat: function () {
    explain = `El método concat() une dos o más cadenas y devuelve una nueva cadena.
    Ejemplo:
    const parte1 = "Hola, "; ${(parte1 = "Hola, ")}
    const parte2 = "Mundo!"; ${(parte2 = "Mundo!")}
    Resultado de la concatenación: ${parte1.concat(parte2)} 
    `;
    return explain;
  },

  endsWith: function () {
    explain = `El método endsWith() verifica si una cadena termina con los caracteres especificados.
    Ejemplo:
    const frase = "JavaScript es divertido"; ${(frase =
        "JavaScript es divertido")}
    ¿Termina con "divertido"? ${frase.endsWith("divertido") ? "Si" : "No"} 
    ¿Termina con "aburrido"? ${frase.endsWith("aburrido") ? "Si" : "No"} 
    `;
    return explain;
  },

  includes: function () {
    explain = `El método includes() verifica si una cadena contiene una subcadena especificada.
    Ejemplo:
    const texto = "Programar es genial"; ${(texto = "Programar es genial")}
    ¿Contiene "genial"? ${texto.includes("genial") ? "Si" : "No"} 
    ¿Contiene "difícil"? ${texto.includes("difícil") ? "Si" : "No"}
    `;
    return explain;
  },

  indexOf: function () {
    explain = `El método indexOf() devuelve el índice de la primera aparición de un valor en la cadena. Si no se encuentra, devuelve -1.
    Ejemplo:
    const palabra = "JavaScript"; ${(palabra = "JavaScript")}
    Índice de "S": ${palabra.indexOf("S")} 
    Índice de "X": ${palabra.indexOf("X")} 
    `;
    return explain;
  },

  isWellFormed: function () {
    explain = `El método isWellFormed() verifica si la cadena está bien formada de acuerdo con la codificación Unicode.
    Ejemplo:
    const cadena = "Hola Mundo"; ${(cadena = "Hola Mundo")}
    ¿Está bien formada?: ${cadena.isWellFormed() ? "Si" : "No"}
    `;
    return explain;
  },

  lastIndexOf: function () {
    explain = `El método lastIndexOf() devuelve la última posición de una subcadena en la cadena, o -1 si no se encuentra.
    Ejemplo:
    const frase = "JavaScript es increíble. JavaScript es versátil.";${(frase =
        "JavaScript es increíble. JavaScript es versátil.")}
    Última aparición de 'JavaScript': ${frase.lastIndexOf("JavaScript")} 
    `;
    return explain;
  },

  localeCompare: function () {
    explain = `El método localeCompare() compara dos cadenas según las reglas de la configuración regional.
    Ejemplo:
    const cadena1 = "a"; ${(cadena1 = "a")}
    const cadena2 = "b"; ${(cadena2 = "b")}
    Comparación de 'a' con 'b': ${cadena1.localeCompare(
      cadena2
    )}, la respuesta es -1 porque 'a' viene antes de 'b'
    `;
    return explain;
  },

  match: function () {
    explain = `El método match() busca coincidencias de una expresión regular en la cadena.
    Ejemplo:
    const texto = "Los números son 1, 2 y 3."; ${(texto =
        "Los números son 1, 2 y 3.")}
    Coincidencias de dígitos: ${texto.match(/\d+/g)} 
    `;
    return explain;
  },

  matchAll: function () {
    explain = `El método matchAll() devuelve todas las coincidencias de una expresión regular, incluyendo grupos de captura.
    Ejemplo:
    const  ${(texto = "Códigos: A1, B2, C3")}
    Coincidencias con grupos: ${[...texto.matchAll(/(\w)(\d)/g)]} 
    `;
    return explain;
  },

  normalize: function () {
    explain = `El método normalize() devuelve la forma normalizada Unicode de la cadena.
    Ejemplo:
    const ${(texto = "é")};
    Forma normalizada NFD: ${texto.normalize("NFD")} 
    `;
    return explain;
  },

  padEnd: function () {
    explain = `El método padEnd() rellena la cadena al final hasta la longitud especificada con la cadena dada o espacios.
    Ejemplo:
    const ${(palabra = "Hola")}
    Texto rellenado: '${palabra.padEnd(10, "-")}' 
    `;
    return explain;
  },

  padStart: function () {
    explain = `El método padStart() rellena la cadena al final hasta la longitud especificada con la cadena dada o espacios.
    Ejemplo:
    const ${(palabra = "Hola")}
    Texto rellenado: '${palabra.padStart(10, "-")}' 
    `;
    return explain;
  },

  repeat: function () {
    explain = `El método repeat() repite la cadena un número determinado de veces.
    Ejemplo:
    const ${(saludo = "Hola")};
    Cadena repetida: ${saludo.repeat(3)}
    `;
    return explain;
  },

  replace: function () {
    explain = `El método replace() reemplaza la primera coincidencia de una subcadena por otra en la cadena.
    Ejemplo:
    const ${(frase = "El cielo es azul")};
    Reemplazo de 'azul' por 'rojo': ${frase.replace("azul", "rojo")}
    `;
    return explain;
  },

  replaceAll: function () {
    explain = `El método replaceAll() reemplaza todas las coincidencias de una subcadena por otra en la cadena.
    Ejemplo:
    const ${(frase = "Luz roja, luz roja")};
    Reemplazo de 'roja' por 'verde': ${frase.replaceAll("roja", "verde")}
    `;
    return explain;
  },

  search: function () {
    explain = `El método search() busca una expresión regular en la cadena y devuelve el índice de la primera coincidencia.
    Ejemplo:
    const ${(texto = "Buscando una coincidencia")};
    Índice de la primera coincidencia con 'coincidencia': ${texto.search(
      "coincidencia"
    )}
    `;
    return explain;
  },

  slice: function () {
    explain = `El método slice() extrae una sección de la cadena y devuelve una nueva cadena sin modificar la original.
    Ejemplo:
    const ${(texto = "Hola Mundo")};
    Subcadena extraída: ${texto.slice(0, 4)} 
    `;
    return explain;
  },

  split: function () {
    explain = `El método split() divide una cadena en un array de subcadenas.
    Ejemplo:
    const ${(texto = "Manzana, Pera, Naranja")};
    Array de frutas: ${texto.split(", ")} 
    `;
    return explain;
  },

  startsWith: function () {
    explain = `El método startsWith() verifica si una cadena comienza con una subcadena específica.
    Ejemplo:
    const ${(saludo = "Hola Mundo")};
    ¿Comienza con 'Hola'?: ${saludo.startsWith("Hola") ? "Si" : "No"} 
    `;
    return explain;
  },

  substring: function () {
    explain = `El método substring() devuelve una subcadena entre dos índices especificados.
    Ejemplo:
    const ${(texto = "JavaScript")};
    Subcadena extraída: ${texto.substring(4, 10)} 
    `;
    return explain;
  },

  symbol_iterator: function () {
    explain = `El método [Symbol.iterator]() devuelve un objeto que permite iterar sobre cada carácter de la cadena.
    Ejemplo:
    const ${(texto = "Iteración")};
    Iteración por caracteres: ${[...texto[Symbol.iterator]()]}
    `;
    return explain;
  },

  toLocaleLowerCase: function () {
    explain = `El método toLocaleLowerCase() convierte la cadena en minúsculas, respetando las reglas locales.
    Ejemplo:
    const ${(texto = "HOLA MUNDO")};
    Minúsculas locales: ${texto.toLocaleLowerCase()}
    `;
    return explain;
  },

  toLocaleUpperCase: function () {
    explain = `El método toLocaleUpperCase() convierte la cadena en mayúsculas, respetando las reglas locales.
    Ejemplo:
    const ${(texto = "hola mundo")};
    Mayúsculas locales: ${texto.toLocaleUpperCase()} 
    `;
    return explain;
  },

  toLowerCase: function () {
    explain = `El método toLowerCase() convierte la cadena a minúsculas.
    Ejemplo:
    const ${(texto = "HOLA MUNDO")};
    Minúsculas: ${texto.toLowerCase()}
    `;
    return explain;
  },

  toString: function () {
    explain = `El método toString() devuelve una cadena que representa al objeto de cadena.
    Ejemplo:
    const ${(cadena = new String("Hola Mundo"))};
    Valor de cadena: ${cadena.toString()}
    `;
    return explain;
  },

  toUpperCase: function () {
    explain = `El método toUpperCase() convierte la cadena a mayúsculas.
    Ejemplo:
    const ${(texto = "hola mundo")};
    Mayúsculas: ${texto.toUpperCase()}
    `;
    return explain;
  },

  toWellFormed: function () {
    explain = `El método toWellFormed() convierte la cadena en una forma bien formada Unicode.
    Ejemplo:
    const ${(texto = "\\uD800")};
    Bien formado: ${texto.toWellFormed()} 
    `;
    return explain;
  },

  trim: function () {
    explain = `El método trim() elimina los espacios en blanco de ambos extremos de la cadena.
    Ejemplo:
    const ${(texto = "   Hola Mundo   ")};
    Cadena recortada: '${texto.trim()}'
    `;
    return explain;
  },

  trimEnd: function () {
    explain = `El método trimEnd() elimina los espacios en blanco del final de la cadena.
    Ejemplo:
    const ${(texto = "Hola Mundo   ")};
    Cadena con el final recortado: '${texto.trimEnd()}'
    `;
    return explain;
  },

  trimStart: function () {
    explain = `El método trimStart() elimina los espacios en blanco del principio de la cadena.
    Ejemplo:
    const ${(texto = "   Hola Mundo")};
    Cadena con el principio recortado: '${texto.trimStart()}'
    `;
    return explain;
  },

  valueOf: function () {
    explain = `El método valueOf() devuelve el valor primitivo de un objeto de cadena.
    Ejemplo:
    const ${(cadena = new String("Hola Mundo"))};
    Valor primitivo: ${cadena.valueOf()} 
    `;
    return explain;
  },
};

//Inyecta el texto de presentación a un parrafo
function agregarString() {
  let parrafo = document.getElementById("p-constructor");
  let parrafoMetodoInstancia = document.getElementsByClassName("p-instance");

  //Parrafo Constructor
  parrafo.innerHTML += string.constructor() + "<br><br>";

  parrafoMetodoInstancia[0].innerHTML += string.at() + "<br><br>";
  parrafoMetodoInstancia[1].innerHTML += string.charAt() + "<br><br>";
  parrafoMetodoInstancia[2].innerHTML += string.charCodeAt() + "<br><br>";
  parrafoMetodoInstancia[3].innerHTML += string.codePointAt() + "<br><br>";
  parrafoMetodoInstancia[4].innerHTML += string.concat() + "<br><br>";
  parrafoMetodoInstancia[5].innerHTML += string.endsWith() + "<br><br>";
  parrafoMetodoInstancia[6].innerHTML += string.includes() + "<br><br>";
  parrafoMetodoInstancia[7].innerHTML += string.indexOf() + "<br><br>";
  parrafoMetodoInstancia[8].innerHTML += string.isWellFormed() + "<br><br>";
  parrafoMetodoInstancia[9].innerHTML += string.lastIndexOf() + "<br><br>";
  parrafoMetodoInstancia[10].innerHTML += string.localeCompare() + "<br><br>";
  parrafoMetodoInstancia[11].innerHTML += string.match() + "<br><br>";
  parrafoMetodoInstancia[12].innerHTML += string.matchAll() + "<br><br>";
  parrafoMetodoInstancia[13].innerHTML += string.normalize() + "<br><br>";
  parrafoMetodoInstancia[14].innerHTML += string.padEnd() + "<br><br>";
  parrafoMetodoInstancia[15].innerHTML += string.padStart() + "<br><br>";
  parrafoMetodoInstancia[16].innerHTML += string.repeat() + "<br><br>";
  parrafoMetodoInstancia[17].innerHTML += string.replace() + "<br><br>";
  parrafoMetodoInstancia[18].innerHTML += string.replaceAll() + "<br><br>";
  parrafoMetodoInstancia[19].innerHTML += string.search() + "<br><br>";
  parrafoMetodoInstancia[20].innerHTML += string.slice() + "<br><br>";
  parrafoMetodoInstancia[21].innerHTML += string.split() + "<br><br>";
  parrafoMetodoInstancia[22].innerHTML += string.startsWith() + "<br><br>";
  parrafoMetodoInstancia[23].innerHTML += string.substring() + "<br><br>";
  parrafoMetodoInstancia[24].innerHTML += string.symbol_iterator() + "<br><br>";
  parrafoMetodoInstancia[25].innerHTML += string.toLocaleLowerCase() + "<br><br>";
  parrafoMetodoInstancia[26].innerHTML += string.toLocaleUpperCase() + "<br><br>";
  parrafoMetodoInstancia[27].innerHTML += string.toLowerCase() + "<br><br>";
  parrafoMetodoInstancia[28].innerHTML += string.toString() + "<br><br>";
  parrafoMetodoInstancia[29].innerHTML += string.toUpperCase() + "<br><br>";
  parrafoMetodoInstancia[30].innerHTML += string.toWellFormed() + "<br><br>";
  parrafoMetodoInstancia[31].innerHTML += string.trim() + "<br><br>";
  parrafoMetodoInstancia[32].innerHTML += string.trimEnd() + "<br><br>";
  parrafoMetodoInstancia[33].innerHTML += string.trimStart() + "<br><br>";
  parrafoMetodoInstancia[34].innerHTML += string.valueOf() + "<br><br>";
}
agregarString();
