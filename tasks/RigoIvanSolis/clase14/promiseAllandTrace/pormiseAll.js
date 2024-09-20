const agua = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {   
            resolve("Hervir agua");
        }, 2000)
    });
}

const sopa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Abrir sopa y verter agua");
        }, 1000)
    })
}

const tiempoEspera = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Esperar 7 minutos para su cocción")
        }, 3000)
    });
}

const listo = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("Destapa, agrega salsa valentina y limon, disfruta");
        }, 4000);
    })
}

Promise.all([agua(),sopa(),tiempoEspera(),listo()]).then((values)=>{
    console.log(values);
    
    console.log("Tu sopa maruchan esta lista, disfruta");
    
    })
    .catch ((error) => {
        console.error("Fakta agregar salsa a tu sopa", error);
    });

