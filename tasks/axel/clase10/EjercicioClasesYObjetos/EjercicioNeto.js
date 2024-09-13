class Articulo{
    constructor(precio, descuento){
        this.precio = precio;
        this.descuento = descuento;
    }

    calcPrecioNeto(){
        return this.precio * (1-this.descuento/100)
    }
}

const player = new Articulo(100, 20)
console.log(player.calcPrecioNeto())
const iphone = new Articulo(40000, 15 )
console.log(iphone.calcPrecioNeto())