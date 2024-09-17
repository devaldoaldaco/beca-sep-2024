/* En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atrubitos: nombre, email,telefono.

   Se quiere crear una clase Factura para gestionar las facturass emitidas a los clientes. Las propiedades
   de esta clase son:

   - idCliente: número de cliente (su lugar en la lista de clientes)
   - total: número con el importa total de la factura.
   - estado: pagado o pendiente 

   Los métodos serán:
     cobrar(): pone el estado en pagada
     imprimir(): imprime los datos de la factura
    
    Para probar crea tres clientes y al menos una factura
*/

class Cliente{
    constructor(nombre, email, telefono){
        this._nombre = nombre;
        this._email = email;
        this._telefono = telefono;
    }
}

class Factura{
    constructor(id, idCliente, total){
        this.idClientes = idCliente[id];
        this.total = total;
        this.estado = "pendiente";
    }

    cobrar(){
        return this.estado = "Pagada";
    }

    imprimir(){
        return `Datos de factura: Cliente = ${this.idClientes._nombre}, Total = ${this.total}, Estado = ${this.estado}`;
    }
}

clientes[0] = new Cliente('Denysse', 'denypalomino3@gmail.com', 5519644655);
clientes[1] = new Cliente('Omar', 'omar356478@gmail.com', 5519644655);
clientes[2] = new Cliente('Levana', 'lev4@gmail.com', 5519644655);

var factura = new Factura(0, clientes, 200);
var factura = new Factura(1, clientes, 400);
var factura = new Factura(2, clientes, 100);
console.log(factura.imprimir());
(factura.cobrar());
console.log(factura.imprimir());

