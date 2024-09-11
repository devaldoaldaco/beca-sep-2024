class Ficha {
    constructor(nombre) {
        this.nombre = nombre;
        this.sesiones = []; 
        this.numSesiones = 0;  
    }

    anotar(km) {
        this.sesiones.push(km);
        this.numSesiones += 1;
    }

    media() {
        if (this.numSesiones === 0) {
            return 0;
        }
        const totalKm = this.sesiones.reduce((sum, km) => sum + km, 0);
        return totalKm / this.numSesiones;
    }
}


const persona = new Ficha("Juan");
persona.anotar(5);
persona.anotar(10);
persona.anotar(7);

console.log(`Nombre: ${persona.nombre}`);
console.log(`Sesiones: ${persona.numSesiones}`);
console.log(`Kilómetros en cada sesión: ${persona.sesiones}`);
console.log(`Media de kilómetros recorridos: ${persona.media()}`);
