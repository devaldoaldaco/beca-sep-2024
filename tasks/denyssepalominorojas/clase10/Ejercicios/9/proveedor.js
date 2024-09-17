/* Un artículo tiene:
        - nombre
        - proveedor
        - precio

    y un proveedor tiene:
        - nombre 
        - email
        - teléfono

    Se pide definir una clase (Proveedor) para implementar el objeto proveedor y otra
    (Artículo) para el objeto artículo.

    Este objeto tiene los siguientes atributos o propiedades:

        - Proveedor: un objeto proveedor, a quien se compra el artículo.
        - nombre: una cadena, combre del artículo
        - precio: un número, precio del artículo

    y métodos:
        - telefono(): devuelve un objeto con el nombre y el teléfono del proveedor
    
    Por su parte el objeto proveedor tiene como propiedades

        - nombre: cadena de texto, nombre del proveedor
        - email: un email, correo del proveedor
        - telefono: una cadena de dígitos, teléfono del proveedor
    
    Puedes implementarlo con create, fuction o con class 
*/

class Proveedor{
    constructor(nombre, email, telefono){
  	  	 	this.nombre = nombre;
  	  	 	this.email = email;
  	  	 	this.telefono = telefono;
  	    }
}
class Articulo{
    constructor(nombre, precio, proveedor){
  	  	 	this.nombre = nombre;
  	  	 	this.precio = precio;
  	  	 	this.proveedor = proveedor;
  	 }
  	 telefono(){
  	  	 	return{
              	nombre: this.proveedor.nombre,
              	telefono: this.proveedor.telefono
           	}
   	}
}

var proveedor = new Proveedor('MSI', 'msi@gmail.com', 55322345)
var articulo = new Articulo('Monitor MSI', '$3000', 'MSI');
var datos;
datos = articulo.telefono()
console.log("Artículo: "+ articulo.nombre+ " Precio: "+ articulo.precio);
console.log("Proveedor: "+articulo.proveedor);
console.log("Teléfono: "+proveedor.telefono);
console.log("Email: "+proveedor.email);