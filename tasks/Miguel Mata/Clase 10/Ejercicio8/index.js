function Producto(precio, descuento) {
    this.precio = parseFloat(precio);
    this.descuento = parseFloat(descuento);
    
    this.neto = function() {
      return this.precio - (this.precio * (this.descuento / 100));
    };
  }
  
  let precio = prompt("Ingrese el precio del producto:");
  let descuento = prompt("Ingrese el porcentaje de descuento:");
  
  let producto = new Producto(precio, descuento);
  

  console.log("El precio neto después del descuento es: " + producto.neto().toFixed(2));
  