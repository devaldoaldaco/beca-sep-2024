function Persona(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo

}

Persona.prototype.ingresar = function(nuevoSaldo){
    this.saldo += nuevoSaldo;
    console.log(this.saldo);
}
Persona.prototype.retirar = function(sacarSaldo){
    if(sacarSaldo > this.saldo){
        console.log('Saldo insuficiente')
    }else{
        this.saldo -= sacarSaldo;
        console.log(`El saldo actual es ${this.saldo} pesos.`)
    }
}

const persona1 = new Persona('AXEL RENE HERNANDEZ SANCHEZ', 1000)

persona1.retirar(1001);



