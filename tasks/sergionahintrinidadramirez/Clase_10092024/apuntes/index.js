class Eventito{
    constructor(){
        this.ev = {};    
    }

    emitir(typeEvent, data) {
        this.ev[typeEvent] = data
    }
    escuchar(typeEvent, callback) {
        callback(this.ev[typeEvent])
    }
}

const eve = new Eventito();
const p = document.querySelector('p');
eve.emitir('click', 'Sergio simula un click');

eve.escuchar('click', (info) => { 
    console.log(info);
});

eve.emitir('click', 'Este mensaje esta siendo recibido por escuchar');

eve.escuchar('click', (info) => {
    p.innerHTML += info;
})
