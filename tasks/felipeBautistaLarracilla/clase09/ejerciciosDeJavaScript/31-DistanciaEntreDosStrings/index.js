/*Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).
*/
// escribe tu función acá

function distancia(str1, str2) {
    let diferencias = 0;
    const longitudMinima = Math.min(str1.length, str2.length);
    //calcular la longitud minima de los strings

    // Comparar los caracteres hasta la longitud del string más corto
    for (let i = 0; i < longitudMinima; i++) {
        if (str1[i] !== str2[i]) {
            diferencias++;
        }
    }

    // Agregar la diferencia de longitud al resultado
    diferencias += Math.abs(str1.length - str2.length);

    return diferencias;
}

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3