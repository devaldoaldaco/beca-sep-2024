// Clase Persona 

class Persona{
    constructor(nombre, apellido, familia, peso, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.familia = familia;
        this.peso = peso;
        this.altura = altura;      
    }
    saludar(){
        return `Hola! Soy ${this.nombre} ${this.apellido}`;
    }
    mostrarFamilia(){
        return `Mi familia está conformada por, mi papá: ${this.familia[1]},
         mi mamá: ${this.familia[0]}, mis hermanos: ${this.familia[2]}, ${this.familia[3]}, ${this.familia[4]}`;
    }
    imc(){
        const cImc = this.peso/(this.altura * this.altura);
        return cImc;
    }  

}

const Denysse = new Persona ('Denysse', 'Palomino', ['Nancy', 'Javier', 'Mayra', 'Lucero', 'Javier' ], 57, 1.65);
console.log(Denysse.saludar());
console.log(Denysse.mostrarFamilia());
console.log(Denysse.imc()); 

const Omar = new Persona ('Omar', 'Nicolás', ['Flor', 'Humberto', 'Eduardo', 'Adrian', 'Zaira'], 58, 1.65);
console.log(Omar.saludar());
console.log(Omar.mostrarFamilia());
console.log(Omar.imc());