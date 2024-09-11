Array.prototype.reduce = () =>{
    let sumador=0;
    for(let elemento of Arreglo){
        sumador += elemento;
    }
    return sumador;
}

let Arreglo = [0,2,3];

let editReduce = Arreglo.reduce()

console.log(editReduce)

Array.prototype.map = function () {
    const cuad = []
    for(let i = 0; i < numbers.length;i++){
        cuad.push(numbers[i]*numbers[i])
    }
    return cuad;
}

let numbers = [0,2,3];
let editMaps = numbers.map();
console.log(editMaps);

////////////////////////////////


class Persona{
    constructor(nombre,peso,altura){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.familia = [];
    }

    get saludar (){
        return this.saludarNombre();
    }

    get IMC(){
        return this.calcImc();
    }


    saludarNombre(){
        return "Hola mi nombre es" + this.nombre;
    }

    calcImc(){
        return (this.peso) / (this.altura * this.altura);
    }

    listaFamilia(nombre,peso,altura){
        this.familia.push(new Persona(nombre,peso,altura))
    }

    obtFamilia(){
        console.log("Mi familia es:");
        for(let elemento of this.familia){
        console.log(elemento.nombre);
        }
    }

}



const Aaron = new Persona("Aaron Garcia" , 92 , 1.92);
Aaron.listaFamilia("Lourdes Margarita",62,1.62);
Aaron.listaFamilia("Jair Rosales",62,1.62);
console.log(Aaron.saludar);
console.log(Aaron.IMC);
Aaron.obtFamilia();


//////////////////////////////////////////////////

class Event{
    constructor(bool){
        this.bool = bool;
    }

    emitir(){
        if(this.bool===1){
        return "Click"
        } return "No Click"
    }

    escucharEvento(callback){
        if(callback === "Click"){
            console.log("Me dieron click")
        }
        
    }
}

const ev = new Event(0);
ev.escucharEvento(ev.emitir());

/////////////////////////////////////////////////

class vehiculo {
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo =modelo;
    }

    get marca(){
        return this.marca
    }

    get modelo(){
        return this.marca
    }
}


class modelo {
    constructor(marca, modelo, color){

    }
}

////////////////////////////////////////////