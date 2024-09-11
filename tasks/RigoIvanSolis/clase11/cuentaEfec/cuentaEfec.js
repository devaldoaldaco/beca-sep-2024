function cuentaEfec(titular, saldoInicial) {
    this.nombre = titular;
    this.saldo = saldoInicial;

    this.ingresar = function(cantidad) {
        if ( cantidad > 0 ) {
            this.saldo += cantidad;
            console.log(`Se han ingresado ${cantidad}. Nuevo saldo: ${this.saldo}`);
             
        }
    }

    this.retirar = function(cantidad) {
        if (cantidad > this.saldo ) {
            console.log(`Saldo insuficiente`);
        } else if ( cantidad <= this.saldo ) {
            this.saldo -= cantidad;
            console.log(`Retiro exitoso, su saldo actual es: ${this.saldo}`);
        }
    }

    
}


let cuenta = new cuentaEfec('Rigo Ivan', 1000);

cuenta.ingresar(500);
cuenta.retirar(300);