class Person{
    constructor(name, height, weight, arrayFamily){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.arrayFamily = arrayFamily;
    }
    
    saludar(){
        console.log(`Hola mi nombre es: ${this.name}`)
    }

    imc(){
        let imc = this.weight / ( this.height * this.height);
        return (imc < 18.5) ? "Bajo de peso" :
               (imc <= 24.9) ? "Normal" :
               (imc <= 29.9) ? "Sobrepeso" : "Obeso";
    }

    mostrarFamilia(){
        this.arrayFamily.map(({key, value}) => console.log(`Mi familiar es ${key} se llama: ${value}`))
    }
}
const myFamily = [
    { key: 'papa', value: 'Everardo'},
    { key: 'mama', value: 'Juana'},
    { key: 'Hermana', value: 'Adrina'},
    { key: 'Hermano', value: 'Emilio'},
]
let sergio = new Person('Sergio', 1.70, 75, myFamily)
sergio.saludar();
console.log(sergio.imc());
sergio.mostrarFamilia();