class Ficha {
    constructor(nombre) {
        this.nombre = nombre;
        this.sesiones = [];  
        this.numSesiones = 0;  
    }

    anotar(kilometros) {
        this.sesiones.push(kilometros);  
        this.numSesiones++;  
    }

    media() {
        const totalKilometros = this.sesiones.reduce((total, km) => total + km, 0);
        return this.numSesiones > 0 ? (totalKilometros / this.numSesiones).toFixed(2) : 0;
    }

    mostrarFicha() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Número de sesiones: ${this.numSesiones}`);
        console.log(`Kilómetros en cada sesión: ${this.sesiones.join(', ')}`);
        console.log(`Media de kilómetros: ${this.media()}`);
    }
}

const fichaPersona = new Ficha('Juan Pérez');

fichaPersona.anotar(5);
fichaPersona.anotar(7);
fichaPersona.anotar(4.5);
fichaPersona.anotar(6.8);

fichaPersona.mostrarFicha();