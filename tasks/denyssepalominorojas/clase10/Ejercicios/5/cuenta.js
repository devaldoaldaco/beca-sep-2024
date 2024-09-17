/* Construye una clase usando fuction para implementar una cuenta de efectivo.
   Poseerá dos propiedades:
        - nombre del titular 
        - saldo 
    Además debe tener dos métodos:
        - ingresar()
        - retirar()
    El primero incrementa el saldo en la cantidad indicada en el argumento
    y el segundo lo reduce.
    No se puede sacar máss de lo que exista en el saldo.
*/

function Cuenta(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;

        this.ingresar = function(cantidad){
            this.saldo += cantidad;
        }

        this.retirar = function(cantidad){
            this.saldo -= cantidad;
        }
}

var cuenta = new Cuenta("Denysse", 3000);
cuenta.ingresar(200);
console.log("El saldo de tu cuenta es: $"+cuenta.saldo);

cuenta.retirar(1200);
console.log("El saldo de tu cuenta es: $"+cuenta.saldo);