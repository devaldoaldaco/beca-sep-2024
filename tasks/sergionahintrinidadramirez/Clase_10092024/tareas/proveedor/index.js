class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Articulo {
    constructor(nombre, precio, proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }

    telefono() {
        return {
            nombre: this.proveedor.nombre,
            telefono: this.proveedor.telefono
        };
    }
}

const proveedor1 = new Proveedor('Proveedor ABC', 'abc@correo.com', '123456789');

const articulo1 = new Articulo('Laptop', 15000, proveedor1);

console.log(articulo1.telefono()); 