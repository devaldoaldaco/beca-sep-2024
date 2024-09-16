
let encabezados= document.getElementsByTagName('h2');

/* 1. String.prototype.at(index)

    index= valor numérico
    Toma el indice y regresa una nueva cadena que representa el carácter que se encuentre en esa posción en la cadena.
    Regresa undefined si dicho indice no existe
    Permite indice negativo */

    const sentence = 'The quick brown fox jumps over the lazy dog.';

    let index = 5;

    let resultado1= `An index of ${index} returns the character ${sentence.at(index)}`;

    encabezados[0].innerHTML= resultado1;

    // Expected output: "An index of 5 returns the character u"



/* 2. String.prototype.charAt(index)

    index= valor numérico>=0
    Toma el indice y regresa un string que representa al carácter que se encuentre en esa posción en la cadena.
    Regresa un string vacío si dicho indice no existe
    No permite indice negativo */

    const sentence2 = 'The quick brown fox jumps over the lazy dog.';

    const index2 = 4;

    let resultado2= `The character at index ${index2} is ${sentence2.charAt(index2)}`;

    encabezados[1].innerHTML= resultado2;
    // Expected output: "The character at index 4 is q"



/* 3. String.prototype.charCodeAt(index) 

    index= valor numérico>=0
    El método regresa un número que proporciona el valor unicode del indice indicado
    Si no se especifica el indice por defecto será 0
    si el indice especificado no existe, retorna el valor NaN */

    let resultado3= `Uso de método de instancia charCodeAt: ${ "Julio".charCodeAt(0) }`;

    encabezados[2].innerHTML= resultado3;
     // Retorna el valor 74


/* 4. String.prototype.codePointAt(index)
     
    index= valor numérico >=0
    Regresa un número no negativo que representa el codigo Unicode  del caracter ubicado en el index 
    Si no se especifica el indice por defecto será 0
    Si el indice no existe o es negativo, el método retorna undefined
    La diferencia con charCodeAt, es que este método si regresa completo el valor completo de un Unicode mayor a 65535*/
    

    let resultado4= `Uso de método de instancia codePointAt: ${ "Julio".codePointAt(2) }`;

    encabezados[3].innerHTML= resultado4;



/* String.prototype.concat(str1, str2,....strN) 

    Concatena la cadena que usa el método con las cadenas que se pasan como argumento
    Regresa una nueva cadena*/

    const str1 = 'Hello';
    const str2 = 'World';
    const str3 = 'Yes!'

    let resultado5= `Uso del método string.concat(): ${ str1.concat(" ", str2," ",str3) }`;

    encabezados[4].innerHTML= resultado5;
    // Expected output: "Hello World"



/*string.prototype.currentLocale(STRING, LOCALE, OPTIONS) 
    
    Regresa un valor (-1,0,1) dependiendo si el string invocador va ordenada antes, de igual forma, o después 
    que la cadena argumento

    LOCALE: Lenguaje del browser, si no se especifica
    OPTIONS:Formato
    */

    let a= "comuniqué";
    let b="adieu";

    let resultado6= `Uso del método localCompare(): ${ a.localeCompare(b, "fr", { ignorePunctuation: true }) }`;

    encabezados[5].innerHTML= resultado6;
    // expected output: 1   



/* String.prototype.endsWith(cadenaDeTermino, posiciónTermino)

    Determina si el string que invoca la propiedad termina con la cadena argumento */

    const cats = 'Cats are the best!';


    let resultado7= `Uso del método endsWith(): ${ cats.endsWith('best', 17) }`;
    // Expected output: true

    encabezados[6].innerHTML= resultado7;


/* STRING.PROTOTYPE.INCLUDES( STRING, POSITION )

    Determina si una cadena de texto puede ser encontrada dentro de otra, devuelve true o false
    Se puede definir desde que posicion inicia la busqueda  
    Se puede especificar desde donde iniciar la busqueda : POSITION*/


    let stringContainer= "This string contains another";
    let substring= "contains";        

    let resultado8= `Resultado ejercicio de metodo 'includes': ${ stringContainer.includes(substring, 0) }`;
    //Excpected output: true

    encabezados[7].innerHTML= resultado8;



/* string.prototype.indexOf( STRING, POSITION ) 

    Regresa el indice en donde encuentre la primera ocurrencia de la cadena especificada
    Si no encuentra alguna ocurrencia, regresa -1 
    Se puede especificar desde donde iniciar la busqueda : POSITION*/


    let stringIndexOf= "This is a string to prove indexOf method";    

    let resultado9= `Resultado del ejercicio del método string.indexOf(): ${ stringIndexOf.indexOf("string", 9) }`;
    //Expected output: 10

    encabezados[8].innerHTML= resultado9;



/* string.prototype.lastIndexOf(STRING, POSITION) 
    
    Busca en un string la última ocurrencia de un substring que se especifique como argumento
    Se puede usar POSITION para indicar desde donde iniciar la búsqueda hacia atrás*/


    let stringLastIndex= "agua, cafe, agua, té";

    let resultado10= `Uso del método lastIndexOf(): ${ stringLastIndex.lastIndexOf("agua", 20) }`;
    //Expected output: 10
    encabezados[9].innerHTML= resultado10;
    



/* string.prototype.match(REGEX) 
    
    Esta función regresa un arreglo de todas las partes del string que encajen con el patrón (REGEX) especificado*/

    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);

    let resultado11= `Uso del método string.match(): ${ found }`;
    // Expected output: Array ["T", "I"]

    encabezados[10].innerHTML= resultado11;
        

    
/* String.prototype.matchAll(REGEX) 
        
    Regresa un iterador con todas las coincidencias de evaluar la cadena con una expresión regular, y también sus 
    capturing groups. Capturing groups se refiere a cada grupo encerrado entre ()
        */

        console.log("Ejecución del ejemplo para método de instancia string.matchAll():");

        const regexp = /t(e)(st(\d?))/g;
        const str = 'test1test2';

        const array = [...str.matchAll(regexp)];

        for (const element of array) {
            console.log(element)
        }



/* String.prototype.normalize('FORMA NORMALIZADA') 
        
    Regresa el unicode en su forma normalizada para el string 
    Si no se especifica el parámetro se usa NFC por defecto
*/

        console.log("Ejecución del ejemplo para método de instancia string.normalize():");

        const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
        const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

        console.log(`${name1}, ${name2}`);
        // Expected output: "Amélie, Amélie"
        console.log(name1 === name2);
        // Expected output: false
        console.log(name1.length === name2.length);
        // Expected output: false

        //const name1NFC = name1.normalize('NFC');
        const name2NFC = name2.normalize('NFC');

        console.log(`${name1}, ${name2NFC}`);
        // Expected output: "Amélie, Amélie"
        console.log(name1 === name2NFC);
        // Expected output: true
        console.log(name1.length === name2NFC.length);
        // Expected output: true  
        
        
        
/* String.prototype.padEnd(target_Length, padString)
        
    Los valores rellenan esta cadena con una cadena determinada (repetida, si es necesario) 
    para que la cadena resultante alcance una longitud determinada. El relleno se aplica desde 
    el final de esta cadena.
*/

        const str_padEnd = 'Breaded Mushrooms';

        let resultado12= `Uso del método padEnd(): ${ str_padEnd.padEnd(25, '.') }`;
        // Expected output: "Breaded Mushrooms........"

        encabezados[11].innerHTML= resultado12;



/* String.prototype.padStart(target_Length, padString)
        
    Los valores rellenan esta cadena con una cadena determinada (repetida, si es necesario) 
    para que la cadena resultante alcance una longitud determinada. El relleno se aplica en el inicio de la cadena
*/

        let strPadStart= "Breaded Mushrooms";

        let resultado13= `Uso del método padStart(): ${ strPadStart.padStart(25, '.') }`;
        // Expected output: ".........Breaded Mushrooms"

        encabezados[12].innerHTML= resultado13;



/* String.prototype.repeat(COUNT) 

    Regresa una nueva cadena que es el resultado de repetir la cadena original un número de veces especificada (COUNT)*/

    let resultado14= `Uso del método string.repeat(): ${ "Julio ".repeat(3) }`;
    //Expected output: Julio Julio Julio

    encabezados[13].innerHTML= resultado14;



/*String.prototype.replace() 

    Devuelve una nueva cadena con la primer, o algunas coincidencias con un patrón reemplazadas.
     El patrón puede ser una cadena o una expresión regular, y el reemplazo puede ser 
    una cadena o una función llamada para cada coincidencia. La cadena original no se modifica.

*/
    const replaceString = "I think Ruth's dog is cuter than your dog!";

    const replaceRegex = /Dog/i;

    let resultado15= `Uso del método string.replace(): ${ replaceString.replace(replaceRegex, 'ferret') }`;
    // Expected output: "I think Ruth's ferret is cuter than your dog!"

    encabezados[14].innerHTML= resultado15;


/*String.prototype.replaceAll() 

    Devuelve una nueva cadena con todas las coincidencias de un patrón reemplazandolas. 
    El patrón puede ser una cadena o una expresión regular, y el reemplazo puede ser 
    una cadena o una función llamada para cada coincidencia. La cadena original no se modifica.

*/

    const replaceAllString = "I think Ruth's dog is cuter than your dog!";

    const replaceAllRegex = /Dog/gi;

    let resultado16= `Uso del método string.replaceAll(): ${ replaceAllString.replaceAll(replaceAllRegex, 'ferret') }`;
    // Expected output: "I think Ruth's ferret is cuter than your ferret!"

    encabezados[15].innerHTML= resultado16;



/* String.prototype.search()

    El método search() de valores String ejecuta una búsqueda de una coincidencia entre una expresión regular 
    y esta cadena, devolviendo el índice de la primera coincidencia en la cadena.

*/
    const paragraphSearch = "I think Ruth's dog is cuter than your dog!";

    // Anything not a word character, whitespace or apostrophe
    const regexSearch = /[^\w\s']/g;

    let resultado17= `Uso del método string.search(): ${ paragraphSearch.search(regexSearch) }`;
    // Expected output: 41

    encabezados[16].innerHTML= resultado17;



/* String.prototype.slice() 

        Recorta una parte de una cadena y la regresa como una cadena nueva. La cadena original no se modifica
*/
    
    console.log("Ejecución del ejemplo para método de instancia string.slice():");
    const strSlice = 'The quick brown fox jumps over the lazy dog.';

    let resultado18= `Uso del método string.slice(): ${ strSlice.slice(4, 19) }`;
    // Expected output: "quick brown fox"

    encabezados[17].innerHTML= resultado18;




/* String.prototype.split() 

    Toma un patrón y divide esta cadena en una lista ordenada de subcadenas buscando el patrón, 
    coloca estas subcadenas en un array y devuelve el array.*/

    const strSplit = 'The quick brown fox jumps over the lazy dog.';

    const wordsSplit = strSplit.split(' ');

    let resultado19= `Uso del método string.split(): ${ wordsSplit[3] }`;
    // Expected output: "fox"

    encabezados[18].innerHTML= resultado19;




/* String.prototype,startsWith() 

    El método startWith() de valores String determina si esta cadena comienza con los caracteres de una 
    cadena especificada, devolviendo verdadero o falso según corresponda.
    */

    const strSW = 'Saturday night plans';

    let resultado20= `Uso del método string.startsWith(): ${ strSW.startsWith('Sat') }`;

    encabezados[19].innerHTML= resultado20;
    // Expected output: true



/* String.prottype.substring()

    devuelve la parte de esta cadena desde el índice inicial hasta el índice final excluido, o hasta el 
    final de la cadena si no se proporciona ningún índice final.    
*/
    
    const strSS = 'Mozilla';

    let resultado21= `Uso del método string.subsString(): ${ strSS.substring(1, 3) }`;
    // Expected output: "oz"

    encabezados[20].innerHTML= resultado21;

  
/* string.prototype.wellFormed() ------------? */