/*
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/
// escribe la función bmi acá
function bmi(peso, altura) {
    let BMI = peso / (Math.pow(altura, 2));
    if (BMI < 18.5) {
        return `Bajo peso`;
    } if (BMI >= 18.5 && BMI <= 24.9) {
        return `Normal`;
    } if (BMI >= 25 && BMI <= 29.9) {
        return `Sobrepeso`;
    } if (BMI >= 30) {
        return `Obeso`;
    }
}
// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"