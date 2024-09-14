function CuentaEfectivo(nombre) {
    this.nombre = nombre;
    this.saldo = 0;
    this.ingresar = function(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se han ingresado ${cantidad}. Saldo actual: ${this.saldo}.`);
        }
    };
    this.retirar = function(cantidad) {
        if (cantidad > 0) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
                console.log(`Se han retirado ${cantidad}. Saldo actual: ${this.saldo}.`);
            } else {
                console.log("No hay suficiente saldo para retirar esa cantidad.");
            }
        }
    };
}
const cuenta = new CuentaEfectivo("Juan");
cuenta.ingresar(100);   // Ingresar 100
cuenta.retirar(30);     // Retirar 30
cuenta.retirar(150);    // Intentar retirar 150, que es más de lo que hay en la cuenta
