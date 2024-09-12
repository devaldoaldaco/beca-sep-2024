function Cuenta(titular, saldo) {
    this.titular = titular; 
    this.saldo = saldo;     

    this.ingresar = function(cantidad) {
        console.log(`Bienvenido ${this.titular}`)
        console.log(`En tu cuenta hay: $${this.saldo}`)
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Ingresaste $${cantidad}. Saldo actual: $${this.saldo}`);
        } else {
            console.log("La cantidad a ingresar debe ser mayor a 0.");
        }
    };

    this.retirar = function(cantidad) {
        if (cantidad > this.saldo) {
            console.log(`No puedes retirar $${cantidad}. No tienes lo suficiente en la cuenta $${this.saldo}`)
        } else if (cantidad > 0) {
            this.saldo -= cantidad;
            console.log(`Retiraste $${cantidad}. Saldo actual: $${this.saldo}`);
        } else {
            console.log("La cantidad a retirar debe ser mayor a 0.");
        }
    };
}

const cuentaDeSergio = new Cuenta("Sergio Trinidad", 1000);


cuentaDeSergio.ingresar(500);  
cuentaDeSergio.retirar(200);   
//Retirar mas de la cuenta
cuentaDeSergio.retirar(1500);  