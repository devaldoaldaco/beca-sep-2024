//Event target
class Event{
    constructor(){
        this.events={};
    }

    emit(evento, data){
        this.events[evento]=data;
    }

    listen(evento, callback){ 
        callback(this.events[evento]);
    }

}

const evento1= new Event();

evento1.emit('click', 'kevin');

evento1.listen('click', (datos)=>{
    console.log(datos);
})




//Herencia
function Transporte(nombre) {
    this.nombre = nombre;
}

Transporte.prototype.trasladar = function() {
    console.log(`${this.nombre} se traslada.`);
};

function Carro(nombre) {
    Transporte.call(this, nombre); 
}

Carro.prototype = Object.create(Transporte.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.avanzar = function() {
    console.log(`${this.nombre} esta avanzando.`);
};

const carro1 = new Carro('Tesla');
carro1.trasladar();
carro1.avanzar(); 


