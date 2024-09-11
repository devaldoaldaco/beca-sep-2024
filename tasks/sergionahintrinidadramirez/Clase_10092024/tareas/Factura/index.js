class Factura {
    constructor(idCliente, name, correo, tel, total) {
        this.idCliente = idCliente;
        this.cliente = {
            nombre: name,
            email: correo,
            telefono: tel
        };
        this.total = total;
        this.estado = 'pendiente'
    }
    cobrar() {
        this.estado = 'Pagado'
    }
    imprimir() {
        console.log("------------------------")
        console.log(`ID Cliente: ${this.idCliente}`);
        console.log(`Nombre: ${this.cliente.nombre}`);
        console.log(`Email: ${this.cliente.email}`);
        console.log(`Teléfono: ${this.cliente.telefono}`);
        console.log(`Total: ${this.total}`);
        console.log(`Estado: ${this.estado}`);
    }
}
let facJuan = new Factura(0, 'Juan Perez', 'juan@ids.com', '555-1234', 1500);
let facMaria = new Factura(1, 'María García', 'maria@ids.com', '555-5678', 2300);
let facCarlos = new Factura(2, 'Carlos Sánchez', 'carlos@ids.com', '555-9876', 3200);

facJuan.imprimir();
facJuan.cobrar();
facJuan.imprimir();

facMaria.imprimir();

facCarlos.cobrar();
facCarlos.imprimir();