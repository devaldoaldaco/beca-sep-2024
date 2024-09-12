function calcularNeto() {
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = parseFloat(document.getElementById("descuento").value);

    const producto = {
        precio: precio,
        descuento: descuento,
        neto: function() {
            return this.precio - (this.precio * (this.descuento / 100));
        }
    };

    const precioNeto = producto.neto();

    alert(`El precio neto es: ${precioNeto}`);
    console.log(`El precio neto es: ${precioNeto}`)
}