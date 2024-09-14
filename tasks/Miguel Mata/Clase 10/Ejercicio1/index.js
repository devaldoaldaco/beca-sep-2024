class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}
class Factura {
    constructor(idcliente, total) {
        this.idcliente = idcliente;
        this.total = total;
        this.estado = 'pendiente';
    }

    // Método para cambiar el estado a 'pagado'
    cobrar() {
        this.estado = 'pagado';
    }

    // Método para imprimir los detalles de la factura
    imprimir(clientes) {
        const cliente = clientes[this.idcliente];
        console.log("Factura para:"+ cliente.nombre);
        console.log("Email:" +cliente.email);
        console.log("Teléfono:"+cliente.telefono);
        console.log("Total:"+this.total);
        console.log("Estado:"+ this.estado);
    }
}

// Crear una lista de clientes
const clientes = [
    new Cliente("Juan Pérez", "juan.perez@example.com", "123456789"),
    new Cliente("María Gómez", "maria.gomez@example.com", "987654321"),
    new Cliente("Pedro Fernández", "pedro.fernandez@example.com", "555666777")
];

// Crear una factura
const factura = new Factura(0, 150.75);

// Imprimir los datos de la factura
factura.imprimir(clientes);

// Cobrar la factura
factura.cobrar();

// Imprimir los datos de la factura después de cobrarla
factura.imprimir(clientes);
