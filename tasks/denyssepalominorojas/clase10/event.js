class Event{
    constructor(){
        this.events = {};
    }

    emit(typeEvent, data){
        this.events[typeEvent] = data;    
    }

    escucharEvento(typeEvent, callback){ 
        callback(this[typeEvent]); // Busca el evento que tu le digas en ese objeto y te va a traer la propiedad       
    }
}

const ev = new Event();
ev.emit('click', 'Denysse');//simula el click del mouse, emitiendo el evento click

ev.escucharEvento('click', (info) => {// Esuchando el click
    console.log(info);
});

