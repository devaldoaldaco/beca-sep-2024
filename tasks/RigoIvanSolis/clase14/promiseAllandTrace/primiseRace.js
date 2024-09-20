const motos1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ nombre: "Motos Italika", modelo: "Italika WS 150", precio: "$25,000" });
        }, 1000);
    });
}

const motos2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ nombre: "Motos Vento", modelo: "Vento 250", precio: "$40,000" });
        }, 2000);
    });
}

const motos3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ nombre: "Motos BMW", modelo: "BMW F 750 GS", precio: "$200,000" });
        }, 3000);
    });
}

Promise.race([motos1(), motos2(), motos3()])
    .then((value) => {
        console.log("El resultado de tu búsqueda es: ");
        console.log(`Marca: ${value.nombre}`);
        console.log(`Modelo: ${value.modelo}`);
        console.log(`Precio: ${value.precio}`);
    })
    .catch((error) => {
        console.error("Ocurrió un error en la búsqueda:", error);
    });
