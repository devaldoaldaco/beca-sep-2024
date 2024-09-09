/*
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
*/
// escribe tu respuesta acá
function sumarRango(numeroInicial, numeroFinal) {

    if (numeroFinal != numeroInicial) {
        let suma = 0;
        let min = Math.min(numeroInicial, numeroFinal);//Devuelve el menor de cero o mas numeros
        let max = Math.max(numeroInicial, numeroFinal);//Devuelve el mayor de cero o mas numeros
        for (i = min; i <= max; i++) {
            suma += i;
        }
        return suma;
    } else return 0;

}
// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0