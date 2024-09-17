class Producto{
  constructor(precio,descuento){
    this.precio = precio;
    this.descuento = descuento;
  }
  neto(desAplicado){
    desAplicado = this.precio * (this.descuento*.01);
    console.log(`El descuento es de: $${desAplicado}
      EL precio final es de $${this.precio - desAplicado}` );
  }
}

const computadora = new Producto(20000,25);
const tablet = new Producto(23000,43);

computadora.neto();
tablet.neto();