class Persona{
    constructor(nombre, altura, peso, familia){
        this.nombre=nombre;
        this.altura=altura;
        this.peso=peso;
        this.familia=familia;
    }
    
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }

    imc(){
        let imc=this.peso/(this.altura*this.altura);
    
        return  imc <18.5 ? "Bajo de peso":
                imc <=24.9 ? "Normal":
                imc <=29.9 ? "Sobrepeso":
                "Obeso";
    }

    mostrarFamilia(){
        console.log(`Mis padres son ${this.familia[0]} y ${this.familia[1]} y mi hermano es ${this.familia[2]}`);
    }

    get name(){
        return this.nombre;
    }
}




let persona2= new Persona("Juan Manuel", 1.8, 75);
let persona3= new Persona("Dulce Evelin", 1.6, 54);
let persona4= new Persona("Ian Kaleb", 1.4, 38);

let persona1= new Persona("Kevin", 1.7, 68, [persona2.name, persona3.name, persona4.name]);



persona1.saludar();
console.log(persona1.imc());
persona1.mostrarFamilia();