class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Articulo {
    constructor(proveedor, nombre, precio) {
        this.proveedor = proveedor; 
        this.nombre = nombre;
        this.precio = precio;
    }

    telefono() {
        return {
            nombre: this.proveedor.nombre,
            telefono: this.proveedor.telefono
        };
    }
}

const proveedor1 = new Proveedor('Proveedor A', 'contacto@proveedora.com', '123456789');
const articulo1 = new Articulo(proveedor1, 'Artículo 1', 100.0);

console.log(articulo1.telefono()); 
console.log(articulo1);