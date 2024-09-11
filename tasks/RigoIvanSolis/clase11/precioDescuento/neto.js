const producto = {
    precio: prompt("Ingrese el precio del producto"),
    descuento: prompt("Ingrese el descuento"),
    neto: function() {
        return this.precio - this.descuento;
    }
}

alert(`Hola, el precio con descuento es ${producto.neto()}`)




