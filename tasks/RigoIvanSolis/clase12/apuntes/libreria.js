export const suma = ( a, b ) => {
    return a + b;
}

export const resta = ( a, b ) => {
    return a - b;
}

export const multiplicacion = ( a, b ) => {
    return a * b;
}




export default {
    suma, resta, multiplicacion
}

let calculadora = {
    suma, resta, multiplicacion
}





console.log(suma(10 , 10)); // 20
