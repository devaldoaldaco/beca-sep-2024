/*
Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.
*/
// escribe tu respuesta acá
function contarRango(numeroA, numeroB) {
    if (numeroA < numeroB) {
        let min = Math.min(numeroA, numeroB);//Devuelve el menor de cero o mas numeros
        let max = Math.max(numeroA, numeroB);//Devuelve el mayor de cero o mas numeros
        return max - min - 1;
    } else {
        return `El numero A es mayor al numero B`;
    }
}

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
