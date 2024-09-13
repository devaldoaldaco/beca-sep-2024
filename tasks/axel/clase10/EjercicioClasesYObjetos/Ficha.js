class Persona {
    constructor(nombre){
        this.nombre = nombre
    }
}

class Ficha extends Persona{
    constructor(joven, sesiones, numSesiones){
        super(joven.nombre)
        this.sesiones = sesiones
        this.numSesiones = numSesiones
    }

    anotar(kilometros){
        this.numSesiones ++;
        this.sesiones += kilometros;
        
    }
    mostrar(){
        console.log(this.numSesiones);
        console.log(this.sesiones)
    }
    media(){
        let mediaKilSes = this.sesiones/this.numSesiones;
        console.log(mediaKilSes);
    }
}

const persona1 = new Persona('Axel')
const ticket1 = new Ficha(persona1, 0, 0)
ticket1.anotar(5);
ticket1.anotar(15);
ticket1.anotar(30);
ticket1.mostrar();
ticket1.media();
