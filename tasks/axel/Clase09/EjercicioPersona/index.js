function Persona (nombre, altura, peso, parentezco){
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.parentezco = parentezco;
}

Persona.prototype.saluda = function(){
    console.log(`Hola, mi nombre es ${this.nombre}`);
}
Persona.prototype.getNombre = function(){
    return this.nombre;
}
Persona.prototype.imc= function(){
    return this.peso / (this.altura * this.altura);
}
Persona.prototype.familia = function(){
    return this.parentezco;
}


const Axel = new Persona('Axel', 1.85, 76, 'Hijo');
const Mitzi = new Persona('Mitzi', 1.70, 60, 'Hermana' );
const Rene = new Persona('Rene', 1.78, 80, 'Papa');
const Gema = new Persona('Gema', 1.60, 70, 'Mama' );


Axel.saluda();
console.log(`Y mi IMC es ${Axel.imc()}`);
Mitzi.saluda();
console.log(`Y mi IMC es ${Mitzi.imc()}`);
console.log(`Y yo soy ${Mitzi.familia()} de ${Axel.getNombre()}`);
Rene.saluda();
console.log(`Y mi IMC es ${Rene.imc()}`);
console.log(`Y yo soy ${Rene.familia()} de ${Axel.getNombre()}`);
Gema.saluda();
console.log(`Y mi IMC es ${Gema.imc()}`);
console.log(`Y yo soy ${Gema.familia()} de ${Axel.getNombre()}`);
