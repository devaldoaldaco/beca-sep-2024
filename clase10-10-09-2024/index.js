const p = document.querySelector('p');
const button = document.querySelector('button');
button.addEventListener('click', (eve) => {
    console.log(eve);
    p.style.display = 'none';
});

class MyOwnEvent {
    constructor() {
        this.events = {};
    }

    emit(typeEvent, data) {
        this.events[typeEvent] = data;
    }

    listen(typeEvent, callback) {
        callback(this.events[typeEvent]);
    }
}

const ev = new MyOwnEvent();
ev.emit('click', 'aldo'); // simulando el click del mouse, emitiendo el evento click 

ev.listen('click', (info) => { // escuchando el click 
    console.log(info);
});


const intlMixin = (superClass) => {
    return class extends superClass {
        t(locale) {
            return this.locales[locale];
        }

    }
};


// const objet0 = {
//     nombre: '',
//     key: 'value'
// };


// class Humano {
//     constructor(piel, altura, sexo, peso) {
//         this.piel = piel;
//         this.altura = altura;
//         this.sexo = sexo;
//         this.peso = peso;
//     }

//     caminar() {
//         console.log('estoy caminando');
//     }
// }
// // sugar syntax
// class Persona extends Humano {
//     constructor(nombre, piel, altura, sexo, peso) {
//         super(piel, altura, sexo, peso);
//         this.nombre = nombre;
//     }
// }
// // procesar datos del servicio
// Object.assign(data, {balanceCuenta: 100000}); 
// const a = {...data};
// const b = [1,2,3,4];
// const nuevoArreglo = [...b];

// const aa = {nombre: 'aldo'};
// const bb = aa;
// bb.nombre = 'Juan';
// console.log(bb.nombre, aa.nombre);// 

// const PERSONA = new Persona('aldo', 'cafe', 1.68, 'M', 75);
// PERSONA.caminar();
// PERSONA.toString();
// console.log(this);

// console.log(PERSONA);
// console.log(typeof PERSONA);
// console.log(PERSONA.__proto__);


// const p = new Car();
// const vehiculo  = new Vehiculo();

// vehiculo.acelerar(); // runrunrun

// const ev = new Event();

// ev.emitir('me-dieron-click', datos);
// ev.escucharEvento('me-dieron-click', (datos) => {
//     console.log(datos);
// });

// class Event {
//     constructor() {

//     }

//     emit() {

//     }

//     escucharEvento() {

//     }
// }