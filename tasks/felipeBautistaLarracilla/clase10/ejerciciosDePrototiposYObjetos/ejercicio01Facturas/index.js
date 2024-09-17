//Lista de clientes 
const listClients = [
{
  nombre: 'Fely',
  correo: 'correo@correo.com',
  telefono: 1234567891,
},
{
  nombre:'Olivia',
  correo: 'hola@hola.com',
  telefono: 5436789034,
},
{
  nombre:'James',
  correo:'james@james.com',
  telefono:7865349876,
}
];
class Factura{
  constructor(idCliente,total){
    this.idCliente = idCliente;
    this.total = total;
    this.estado = 'pendiente';
  }
  //Metodo para cambiar el estado de la factura a pagar 
  cobrar(){
    return this.estado = 'pagada';
  }
  //Metodo para imprimir los datos de la factura
  imprimir(){
    const cliente = listClients[this.idCliente];
      console.log(`Factura para ${cliente.nombre}
       Email: ${cliente.correo}
       Telefono: ${cliente.telefono}
       Total: $${this.total}
       Estado: ${this.estado} `);
  }
}

//Creacion de Factura para el cliente 1 (Olivia)
const factura1 = new Factura(1,150.75);

//Imprimir la factura antes de cobrar
factura1.imprimir();
//Cobrar la factura 
factura1.cobrar();
//Imprimir la factura 1 de nuevo para revisar el nuevo estado
factura1.imprimir();
//Creacion de Factura para el cliente 0(Fely)
const factura0 = new Factura(0,250.90);
//Creacion de Factura para el cliente 2(James)
const factura2= new Factura(2,450);
//imprimir factura de Fely
factura0.imprimir();
//imprimir factura de James 
factura2.imprimir();


