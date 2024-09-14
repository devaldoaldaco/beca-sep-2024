const div = document.querySelector('div');
class MyEvent {
    constructor() {
        this.events = {};//inicializar events
    }

    emit(typeEvent, data) {//pasar los argumentos sobre el tipo de evento y la informacion del evento
        this.events[typeEvent] = data;//relaciona el evento con la data
    }

    listen(typeEvent, callback) {
        callback(this.events[typeEvent]);
    }
}

const ev = new MyEvent();
ev.emit('click', 'miguel'); // simulando el click del mouse, emitiendo el evento click 

ev.listen('click', (info) => { // escuchando el click 
    console.log(info);
});