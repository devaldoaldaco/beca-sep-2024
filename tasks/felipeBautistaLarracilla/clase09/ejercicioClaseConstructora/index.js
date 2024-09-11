
class persona{
  constructor(nombre,altura,peso,familia = []){
  this.nombre = nombre;
  this.altura = altura;
  this.peso = peso;
  this.familia = familia;
  }
  //funciones 
 
  saludar() {
    return `Hola mi nombre es: ${this.nombre}`;
  }  
  imc(){
    let imc = this.peso/Math.pow(this.altura,2);
    return imc < 18.5 ? `Bajo peso` : 
    imc <= 24.9 ? `Peso Normal`:
    imc <= 29.9 ? `Sobre peso` : 
    `Tienes Obesidad`;
  }

  family(){
    return `En mi familia somos ${this.familia.length + 1} intregrantes, mi mamá es ${this.familia[0]},
    mi papá es ${this.familia[1]} y por ultimo yo, mi nombre es ${this.nombre}`;

  }


}
let felipe = new persona('Felipe',1.77,68,['Olivia','Felipe']);

console.log(felipe.saludar());
console.log(felipe.imc());
console.log(felipe.family());