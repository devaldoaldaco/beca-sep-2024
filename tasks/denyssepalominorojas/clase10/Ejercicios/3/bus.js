/* Crea una clase que llamaremos Bus. Sus atributos serán:
        - capacidad: número máximo de pasajeros.
        - pasajeros: número de pasajeros (inicialmente 0).
        - conductor: objeto conductor.

    Sus métodos:
        - subir(pasajeros): aumente el número de pasajeros.
        - bajar(pasajeros): disminuye el número de pasajeros
        - conductor: asigna un objeto conductor.

    El objeto conductor es de una clase (Conductor) cuyos atributos son:
        - nombre: nombre del conductor.
        - licencia: un número que identifica al conductor.

    Al crear el objeto se asigna también el conductor.
    No pueden subir más pasajeros que los máximos admitidos y no pueden bajar
    más de los que hay 
*/

class Bus{
    constructor(capacidad, conductor){
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = conductor;
    }

    subir(numero){
        if(this.pasajeros + numero < this  .capacidad){
                return this.pasajeros += numero;
        } 
        else{
            return this.pasajeros = this.capacidad;
        }
    }

    bajar(numero){
        if(numero <= this.pasajeros){
                return this.pasajeros -= numero;
        } 
        else{
            return this.pasajeros = 0;
        }
    }
}

class Conductor{
    constructor(nombre, licencia){
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

var conductor1 = new Conductor("Humberto", 1209);
var ruta30 = new Bus(50 ,conductor1);
console.log("El conductor es: "+conductor1.nombre+ ". Con número de licencia: "+conductor1.licencia);

ruta30.subir(10);
console.log("Pasajeros en el autobús: "+ruta30.pasajeros);

ruta30.subir(20);
console.log("Pasajeros en el autobús: "+ruta30.pasajeros);

ruta30.bajar(7);
console.log("Pasajeros en el autobús: "+ruta30.pasajeros);

var conductor2 = new Conductor("Javier", 1107);
var ruta2 = new Bus(30 ,conductor2);
console.log("El conductor es: "+conductor2.nombre+ ". Con número de licencia: "+conductor2.licencia);
console.log("Pasajeros en el autobús: "+ruta2.pasajeros+ ` y subieron: ${ruta2.subir(5)}`);
console.log("Pasajeros en el autobús: "+ruta2.pasajeros+ ` y bajaron: ${ruta2.bajar(3)}`);