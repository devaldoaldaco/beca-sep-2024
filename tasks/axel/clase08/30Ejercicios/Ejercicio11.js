let array = [3,1,2];
let resultado = 0;

function sumarArreglo(){
    array.forEach(elemento => resultado += elemento);
    console.log(resultado);
}
sumarArreglo();
