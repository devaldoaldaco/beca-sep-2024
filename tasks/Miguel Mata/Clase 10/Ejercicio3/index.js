class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

class Autobus {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = null;
    }

    asignarConductor(conductor) {
        this.conductor = conductor;
    }

    subir(pasajeros) {
        if (this.conductor === null) {
            return console.log("No se puede subir pasajeros sin conductor.");
        }
        if (pasajeros < 0) {
            return console.log("La cantidad no puede ser negativa.");
        }
        if (this.pasajeros + pasajeros > this.capacidad) {
            return console.log("No se pueden subir esa cantidad de pasajeros");
        }
        this.pasajeros += pasajeros;
    }

    bajar(pasajeros) {
        if (pasajeros < 0) {
            return console.log("La cantidad no puede ser negativa.");
        }
        if (pasajeros > this.pasajeros) {
            return console.log("No se pueden bajar más pasajeros de los que hay.");
        }
        this.pasajeros -= pasajeros;
    }
    imprimir(){
        console.log(this.pasajeros)
    }
}
    const conductor = new Conductor("Juan Pérez", "123456");

    // Crear un autobús con capacidad para 50 pasajeros
    const autobus = new Autobus(50);
    //intento subir sin conductor
    autobus.subir(10);
    autobus.imprimir();
    // Asignar el conductor al autobús
    autobus.asignarConductor(conductor);
    //Intento subir con conductor
    autobus.subir(30);  // ahora hay 30 pasajeros
    autobus.imprimir();
    // bajar pasajeros
    autobus.bajar(10);  // Ahora hay 20 pasajeros
    autobus.imprimir();
    //intento bajar mas de los que hay
    autobus.bajar(30)//sigue habiendo 20 pasajeros
    //intento de subir mas de la capacidad
    autobus.subir(100)//
