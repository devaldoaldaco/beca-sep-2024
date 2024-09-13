class Cliente{
    constructor(idC, nombre, email, telefono){
        this.idC = idC
        this.nombre = nombre
        this.email = email
        this.telefono = telefono

    }
    mostrarCliente(){
        console.log(`Hola, soy ${this.nombre}, con el id ${this.idC}, con el email ${this.email}, y mi telefono ${this.telefono}.`)
    }
}

class Factura extends Cliente{
    constructor(cliente, total, estado){
        super(cliente.idC);
        this.total = total
        this.estado = estado

    }
    
    cobrar(){
        return this.estado = 'Pagado'
    }
    imprimir(){
        console.log(`El cliente con el id ${this.idC}, con el totoal de ${this.total} tiene el estado de cuenta en: ${this.estado}.`)
    }
}

const cliente1 = new Cliente(1, 'Axel', 'axel@gmail.com', 5564615509)
const cliente2 = new Cliente(2, 'Evelyn', 'evelyn@gmail', 5561648807)
const cliente3 = new Cliente(3, 'Jesus', 'jesus@gmail', 5561548865)
const factura1 = new Factura(cliente1,1000, 'No pagado')
const factura2 = new Factura(cliente2,8000, 'No pagado')
factura1.cobrar();
factura1.imprimir();
factura2.imprimir();