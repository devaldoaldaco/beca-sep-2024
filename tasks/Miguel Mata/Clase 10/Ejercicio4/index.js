class Ficha {
    constructor(nombre) {
        this.nombre = nombre;  
        this.sesiones = [];    
        this.numsesiones = 0;
    }
    anotar(kilometros) {
        this.sesiones.push(kilometros);
        this.numsesiones++;
    }
    media() {
        const totalKilometros = this.sesiones.reduce((sum, km) => sum + km, 0);
        return totalKilometros / this.numsesiones;
    }
}

// Ejemplo de uso
const juan = new Ficha("Juan");
juan.anotar(5.0);
juan.anotar(7.5);
juan.anotar(10.0);

console.log("Nombre: "+juan.nombre);
console.log("Kilómetros recorridos: "+juan.sesiones);
console.log("Media de kilómetros: "+ juan.media()+" km");
