function Cliente(nombre, saldo){
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.ingresar = function(nuevoSaldo){
  this.saldo += nuevoSaldo;
  console.log(`Usted deposito ${nuevoSaldo} pesos, 
    Tu nuevo Saldo es: ${this.saldo}`);
}
Cliente.prototype.retirar = function(sacarSaldo){
    if(sacarSaldo > this.saldo){
      console.log(`Saldo insuficiente, solo tienes disponible: ${this.saldo}pesos. 
        Ingresa otra cantidad.`);
    }else{
      this.saldo -= sacarSaldo;
      console.log(` Usted retiro ${sacarSaldo} pesos,
        El saldo actual es: ${this.saldo} pesos.`)
    }
}
const persona1 = new Cliente('Felipe Bautista','500');
persona1.retirar(100);
persona1.retirar(500);
persona1.ingresar(900);
persona1.retirar(300);