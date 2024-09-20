import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.0/+esm';

// Objetos con métodos
const cocina = {
    utensilio: "Palillos",
    exis: 40,
    nombre() {
        return this.utensilio;
    }
};

const platillos = {
    nPlati: "Sushi",
    exis: 40,
    nombre() {
        return this.nPlati;
    }
};

const chef = {
    nombreC: "Chef Ramsay",
    sueldo: 40,
    especialidad: "Comida Japonesa",
    nombre() {
        return this.nombreC;
    }
};

const promesaCocina = (conError) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (conError) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error al obtener los datos de cocina',
                });
                reject(new Error("Error en Cocina"));
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Mesa lista',
                    text: `Los ${cocina.nombre()} estan en la mesa`,
                });
                resolve(cocina);
            }
        }, 4000);
    });
};

const promesaPlatillos = (conError) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (conError) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al obtener los datos de los platillos',
                });
                reject(new Error("Error en Platillos"));
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Platillo preparado',
                    text: `El ${platillos.nombre()} esta listo, provecho`,
                });
                resolve(platillos);
            }
        }, 2000);
    });
};

const promesaChef = (conError) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (conError) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al obtener los datos del chef',
                });
                reject(new Error("Error en Chef"));
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Chef disponible',
                    text: `El Chef: ${chef.nombre()} con especialidad en ${chef.especialidad}, realizo el platillo`,
                });
                resolve(chef);
            }
        },6500);
    });
};

Promise.all([promesaCocina(), promesaPlatillos(), promesaChef()])
    .then((results) => {
        const parrafo = document.getElementById('All');
        parrafo.innerHTML = `
            <strong>Cocina:</strong> ${results[0].nombre()}<br>
            <strong>Platillo:</strong> ${results[1].nombre()}<br>
            <strong>Chef:</strong> ${results[2].nombre()}
        `;
        //No jala
        Swal.fire({
            icon: 'success',
            title: 'Orden Completada!',
            text: `Se obtuvo la orden: ${results[1].nombre()}, para el ${results[2].nombre()}`,
        });
        console.log(`Se obtuvo la orden ${results[1].nombre()}, para el ${results[2].nombre()}`);
    })
    .catch((error) => {
        console.error('Error en Promise.all:', error);
    });

Promise.race([promesaCocina(), promesaPlatillos(), promesaChef()])
    .then((result) => {
        if (result === platillos) {
            const parrafo = document.getElementById('Trace');
            parrafo.innerHTML = `
                <strong>El platillo:</strong> ${result.nombre()} llego primero<br>
            `;
            Swal.fire({
                icon: 'info',
                title: '¡Orden entregada!',
                text: `El platillo ${result.nombre()} llegó primero`,
            });
        } else {
            const parrafo = document.getElementById('Trace');
            parrafo.innerHTML = `
                <strong>El primer dato que llego es:</strong> ${result.nombre()}<br>
            `;
            Swal.fire({
                icon: 'info',
                title: 'Resultado',
                text: `El primer dato que llegó es: ${result.nombre()}`,
            });
        }
        const parrafo = document.getElementById('Trace');
        parrafo.innerHTML = `
            <strong>La primera promesa en completarse fue:</strong> ${result.nombre()}<br>
        `;
        console.log('Primera promesa en completarse:', result);
    })
    .catch((error) => {
        console.error('Error en Promise.race:', error);
    });