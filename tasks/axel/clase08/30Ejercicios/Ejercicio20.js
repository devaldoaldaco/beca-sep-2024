
function password(texto){
    texto = texto.toLowerCase().replace(/\s/g, '').replace(/a/g, '4').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0');
    return texto;

}
console.log(password("esta es una prueba"));