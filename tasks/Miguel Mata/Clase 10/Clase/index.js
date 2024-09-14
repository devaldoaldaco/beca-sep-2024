class Persona{
    constructor(nombre,apellido,parentesco,altura,peso){
        this.nombre=nombre;
        this.apellido=apellido;
        this.parentesco=parentesco
        this.altura=altura;
        this.peso=peso;
        this.familia=[];
    }
    saludar(){
        console.log("Hola,Mi nombre es "+this.nombre);
    }
    IMC(){
        const bmiValue = this.peso / (this.altura * this.altura);
        return bmiValue;
    }
    AgregarFamiliar(Nombre,apellido,parentesco,altura,peso){
        this.familia.push(new Persona(Nombre,apellido,parentesco,altura,peso))  
    }
    Obtenerfamilia(){
        console.log(this.familia);
        for(let i=0; i<this.familia.length;i++){
            console.log("Soy "+this.familia[i].nombre+" "+this.familia[i].apellido+" y soy "+this.familia[i].parentesco)
        }
    }
}
const Luis = new Persona("Luis","Hernandez","Hijo",1.90,80);
Luis.saludar();
console.log(Luis.IMC());
Luis.AgregarFamiliar("Fernanda","Lopez","Mama",1.80,90);
Luis.AgregarFamiliar("Francisco","Hernandez","Papa",1.90,90);
Luis.Obtenerfamilia();