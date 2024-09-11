
//---------------------------

const p = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click', (eve) => {
    console.log(eve);
    p.style.display = 'none';
});


class MyOwnEvent {
    constructor(){
        this.events = {};
    }

    emit(typeEnvet, data) {
        this.events[typeEnvet] = data;
    }

    listen(typeEnvet, callback) {
        callback(this[typeEnvet]);

    }

}

const ev = new MyOwnEvent();
ev.emit('click', 'rigo');

ev.listen( 'click', (info) => {
    console.log(info);
    
});

