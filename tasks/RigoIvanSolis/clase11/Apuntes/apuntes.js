const obj = {
    nombre: '',
    key: 'value'
};

const persona = new Persona();

function Persona(name) {
    this.name = name;
}

class Humano {
    constructor(piel, altura, sexo, peso) {
        this.piel = piel;
        this.altura = altura;
        this.sexo = sexo;
        this.peso = peso;
    }

    caminar() {
        console.log('estoy caminando');
        
    }

}




class Persona extends Humano {
    constructor(nombre, piel, altura, sexo, peso){
        super(piel, altura, sexo, peso);  // se utiliza para poder instanciar los elementos de esa clase.
        this.nombre = nombre;
    }

}

const PERSONA = new Persona('ALDO', 'cafe',1.68, 'M',75);

console.log(PERSONA);
console.log(typeof PERSONA);
console.log(PERSONA.__proto__);


// construir un obj del tipo que sea y que ese carro este heredando cosas de otra clase
//que vehiculo herede las porpiedades de carro sin extendes nu async
// generar clase que me ayude a emitir eventos y escuchar eventos por ejemplo cuando yo hga un evento diga el vento que hice 


cons ev = new Event();

ev.emit('me-dieron-click');
ev.ecucharEvento('me-dieron-click', (datos) =>{
    console.log(datos);
    
});




class Event {
    constructor() {

    }

    emit() {

    }




}

//generar una clase que emita un evento y me ayude a escuchar ese metodo

// el evento se va a generar 


