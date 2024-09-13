const url = 'https://www.twitch.tv/'
const url1 = 'https://www.cnet.com'

// 1
function nombreDominio(url){
    url = url.replace("http://", "");  //replace sirve para devolrver una cadena con una, algunas, o todas las coincidencias de un patrón.
    url = url.replace("https://", "");
    url = url.replace("www.", "");

    return url.split("."); //Método que divide un objeto de tipo string en un array(vector) de cadenas mediante la separación de la cadena de subcadenas.
    
}
// sintaxis cadena.split(separador)[limite])
console.log(url.split(".")[1])
console.log(url1.split(".")[1])

// 2
function nombreDominio(data){
    return String(data.split('/www.').slice(-1)[0])
}

console.log(nombreDominio(url));

// 3
const urlObject = new URL(url);
console.log(urlObject.hostname)
