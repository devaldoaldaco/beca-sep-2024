class Conductor{
  constructor(nombre, licencia){
    this.nombre = nombre;
    this.licencia = licencia;
  }
}

class Bus{
  constructor(capacidad,conductor){
    this.capacidad = capacidad;
    this.pasajeros = 0;
    this.conductor = conductor;
  
  }

  subir(pasajeros){
    if(this.pasajeros + pasajeros <= this.capacidad){ 
      this.pasajeros += pasajeros;
      console.log(`${pasajeros} pasajeros subieron.
        Pasajeros actuales: ${this.pasajeros}.`);
    }else { 
      console.log(`No se pueden subir ${pasajeros} pasajeros porque la 
        capacidad maxima es de ${this.capacidad} pasajeros.`);
    }
  }
  bajan(pasajeros){
    if(this.pasajeros - pasajeros >= 0 ){
      this.pasajeros -= pasajeros;
      console.log(`${pasajeros} pasajeros bajaron.
        Pasajeros actuales: ${this.pasajeros}.`);
    }else{
      
      console.log(`No se pueden bajar ${pasajeros} pasajeros porque,
        solo hay ${this.pasajeros} pasajeros.`);
    }
  }

  aasignarConductor(nuevoConductor){
    this.conductor = nuevoConductor;
    console.log(`Nuevo conductor asignado: ${this.conductor.nombre}
      con Licencia ${this.conductor.licencia}`);

  }
}

const conductor1 = new Conductor('Felipe','ServicioMercantil');
const autobus1 = new Bus(40,conductor1);
autobus1.subir(4);
autobus1.subir(16);
autobus1.bajan(10);
autobus1.bajan(11);

const conductor2 = new Conductor('Pedro','XXXXXX');
autobus1.aasignarConductor(conductor2);
autobus1.subir(30);
autobus1.bajan(50);
autobus1.subir(100);