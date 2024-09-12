class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

class Bus {
    constructor(capacidad, conductor) {
        this.capacidad = capacidad;
        this.pasajeros = 0; 
        this.conductor = conductor;
    }

    subir(pasajeros) {
        if (this.pasajeros + pasajeros <= this.capacidad) {
            this.pasajeros += pasajeros;
            console.log(`${pasajeros} pasajeros subieron al bus. Total de pasajeros: ${this.pasajeros}`);
        } else {
            console.log(`No pueden subir más pasajeros. Capacidad máxima alcanzada: ${this.capacidad}`);
        }
    }

    bajar(pasajeros) {
        if (this.pasajeros - pasajeros >= 0) {
            this.pasajeros -= pasajeros;
            console.log(`${pasajeros} pasajeros bajaron del bus. Total de pasajeros: ${this.pasajeros}`);
        } else {
            console.log(`No pueden bajar más pasajeros de los que hay en el bus.`);
        }
    }

    asignarConductor(conductor) {
        this.conductor = conductor;
        console.log(`El conductor ${conductor.nombre} con licencia ${conductor.licencia} ha sido asignado al bus.`);
    }
}

const conductor1 = new Conductor('Carlos Pérez', 'ABC123');

const bus1 = new Bus(50, conductor1);
bus1.asignarConductor(conductor1);
bus1.subir(20);  
bus1.subir(35);  
bus1.bajar(10); 
bus1.bajar(15); 