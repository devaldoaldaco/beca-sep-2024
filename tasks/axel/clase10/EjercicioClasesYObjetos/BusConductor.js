class Conductor {
    constructor(nombre, licencia){
        this.nombre = nombre
        this.licencia = licencia
    }
}

class Bus extends Conductor{
    constructor(capacidad, pasajeros, chofer){
        super(chofer.nombre)
        this.pasajeros = pasajeros 
        this.capacidad = capacidad
    }

    subir(){
        if(this.pasajeros === this.capacidad ){
            console.log('Ya no caben mas')
        }else{
            this.pasajeros++
            console.log(`Pasajero agregado. Ahora hay ${this.pasajeros} pasajeros.`)
        }
    }
    bajan(){
        if(this.pasajeros === 0){
            console.log('Ya no hay nadie para bajar')
        }else{
            this.pasajeros--;
            console.log(`Se bajo un pasajero. Ahora hay ${this.pasajeros} pasajeros.`)
        }
    }
    mostrarBus(){
        console.log(`el bus tiene una capacidad de ${this.capacidad} ahora mismo tiene ${this.pasajeros} pasajeros y su conductor es ${this.nombre}`)
    }
}

const conductor1 = new Conductor('Axel', 'Tipo A')
const bus1 = new Bus(10, 1, conductor1)
bus1.subir();
bus1.subir();
bus1.subir();
bus1.subir();
bus1.subir();
bus1.subir();
bus1.subir();
bus1.subir();
bus1.subir();
bus1.subir();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.bajan();
bus1.mostrarBus();