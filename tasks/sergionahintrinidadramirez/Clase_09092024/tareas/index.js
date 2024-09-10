class Persona{
    constructor(name, m, kg, fami=[]){
        this._name = name;
        this._m = m;
        this._kg=kg;
        this._fami = fami;
    }

    //Setter & Getters
    set name(valor){
        this._name = valor;
    }
    get name(){
        return this._name;
    }
    set m(valor){
        this._m = valor;
    }
    get m(){
        return this._name;
    }
    set kg(valor){
        this._kg = valor;
    }
    get kg(){
        return this._name;
    }
    set fami(familiares){
        this._fami = familiares;
    }
    get fami(){
        return this._fami;
    }
    //Funciones
    saludo(){ return `Hola, 👋 mi nombre es ${this._name} 🧑🏽‍💻, mucho gusto en conocerte. `;}
    imc(){
        if(this._m > 0 || this._m<2.15){
            const imcValue = this._kg / (this._m * this._m);
            return `Mido ${this._m}m y peso ${this._kg}Kg, mi IMC es de ${imcValue.toFixed(2)}. `
        } else{
            return "Altura no valida, rectifica tu altura. "
        }
    }
    mostrarfamiliares(){
        if(this._fami.length > 0){
            return `Mis padres son ${this._fami.join(', ')}. `;
        }
        else{
            return `No tengo papas. ` 
        }
    }
}

const sergio = new Persona('Sergio',1.86,108,['Fernando', 'Olga']);
let hi = sergio.saludo();
let peso = sergio.imc();
let familia = sergio.mostrarfamiliares();
let presentacion = hi + peso + familia;
console.log(presentacion);

function agregarParrafo() {
    let parrafo = document.getElementById("presentacion");
  
    parrafo.innerHTML += presentacion + "<br><br>";
 
  }
  agregarParrafo();
  