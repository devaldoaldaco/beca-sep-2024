/* trace es un método que mejora la visibilidad y el control 
sobre el comportamiento de las promesas en Js
*/

// trace acepta una promesa y una etiqueta (label)
function trace(promise, label) {
    // Imprime un mensaje indicando que el proceso ha comenzado
    console.log(`Iniciando: ${label}`);

    return promise
        .then(result => {
            console.log(`Éxito: ${label}`);
            // Devolvemos el resultado de exito si se resuelve la promesa
            return result; 
        })
        .catch(error => {
            // Si la promesa se rechaza, imprime mensaje de error y lanza el error
            console.log(`Error: ${label} - ${error}`);
            throw error; 
        });
}

// Se crea una promesa que se resulve en 3 segundos
const ejemploPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado exitoso");
    }, 3000);
});

// trace hace el manejo de los resultados del ejemplo
trace(ejemploPromise, "Ejemplo de Promesa")
    .then(result => console.log(result))
    .catch(error => console.error(error));
