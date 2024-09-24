Promise.allCustom = function(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;

        // Manejar el caso de un array vacío
        if (promises.length === 0) {
            return resolve(results);
        }

        promises.forEach((promise, index) => {
            // Convertir a promesa si no lo es
            Promise.resolve(promise).then(value => {
                results[index] = value; // Guardar el resultado en el índice correspondiente
                completedPromises++; // Incrementar el conteo de promesas completadas

                // Si todas las promesas están completas, resolver la promesa
                if (completedPromises === promises.length) {
                    resolve(results);
                }
            }).catch(error => {
                // Rechazar si alguna promesa falla
                reject(error);
            });
        });
    });
};

// Uso de la nueva función
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
const promise3 = Promise.resolve(3);

Promise.allCustom([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [1, 2, 3]
    })
    .catch(error => {
        console.error(error);
    });