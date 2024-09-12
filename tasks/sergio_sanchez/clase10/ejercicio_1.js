//Factura
class Factura{
    constructor(date_client){
        this.date_client = date_client;
    }
    cobrar(){
        for(let i = 0; i < date_client.length; i++){
            if(this.date_client[i].bill){
                this.imprimir(this.date_client[i].count, i)
            } else {
                console.log("Pendiente")
            }
        }
    }
    imprimir(bill, idClient){
        console.log("pagada")
        console.log(`Su numero de cliente es: ${idClient}`)
        console.log(`Total de su factura es: ${bill}`)
    }
}
const date_client = [
    { name: 'sergio', correo: 'sergio@gmial.com', phone: 55253672836, bill: true, count: 150},
    { name: 'juan', correo: 'juan@gmial.com', phone: 55253679536, bill: true, count: 300},
    { name: 'sergio', correo: 'sergio@gmial.com', phone: 55253672836, bill: false, count: 0}
]
const client = new Factura(date_client);
client.cobrar();

//Alumnos
class Calif{
    constructor(students){
        this.students = students;
    }
    cal(){
        for(let i = 0; i < this.students.length; i++){
            this.students[i].cal = Math.random()*10;
            this.students[i].cal = Math.floor(this.students[i].cal)
            console.log(`El alumno ${this.students[i].name} saco ${this.students[i].cal}`)
        }
    }
}

const students = [
    { name: 'sergio', num_m: 123, cal: null},
    { name: 'alberto', num_m: 145, cal: null},
    { name: 'juan', num_m: 842, cal: null},
    { name: 'pedro', num_m: 721, cal: null}
]
const calif = new Calif(students)
calif.cal();

// Bus
class Bus{
    constructor(capacidad, pasajeros, conductor){
        this.capacidad = capacidad;
        this.pasajeros = pasajeros;
        this.conductor = conductor;
    }
    subirBajar(){
        this.pasajeros = 1
        do{
            let subir_bajar = Math.floor(Math.random()*2);
            (subir_bajar === 1) ? this.subir(this.pasajeros) : this.bajar(this.pasajeros)
        }while (this.pasajeros = 0)
    }
    subir(pas){
        console.log('subio algien');
        return (pas === this.capacidad) ? console.log('ya no cabe') : this.pasajeros += 1
    }
    bajar(){
        console.log('bajo algien');
        return this.pasajeros -= 1
    }
}

const conductor = {
    nombre: 'pedro',
    licencia: '123'
}
const bus = new Bus(10, 0, conductor)
bus.subirBajar()

//Ficha
class Ficha{
    constructor(nombre, sesisones){
        this.nombre = nombre;
        this.sesisones = sesisones;
    }
    anotar(){
        let sum = 1;
        let numsesiones = this.sesisones.map(sesion => sesion).length
        console.log(`El numero de sesiones son: ${numsesiones}`)
        let total = this.sesisones.reduce((sesion, sum )=> sesion + sum)
        console.log(`El total de kilometros de sesiones son: ${total}`)
        this.media(numsesiones, total)
    }
    media(numsesiones, total){
        let totalmedia = total / numsesiones;
        console.log(`La media es ${totalmedia}`)
    }
}
const sesisones = [ 3, 5, 1.9, 10]
const ficha = new Ficha('pedro', sesisones)
ficha.anotar()

//Cuenta efectivo
function CuentaEfectivo(name, saldo){
    this.name = name;
    this.saldo = saldo;

    this.ingresar = function(ingresa){
        this.saldo += ingresa;
        console.log(`Se ingreso correctamente total de saldo : ${this.saldo}`)
    }
    this.retira = function(reduce){
        this.saldo -= reduce;
        (this.saldo < 0) ? console.log(`No se puede retirar esa cantidad`) : console.log(`Se retiro correctamente total de saldo : ${this.saldo}`)
    }
}

const usuario = new CuentaEfectivo('juan', 0);
usuario.ingresar(20);
usuario.retira(10);

// Masa volumen
class Piedra{
    constructor(masa, volumen){
        this.masa = masa;
        this.volumen = volumen;
    }
    densidad(){
        let total = this.masa / this.volumen;
        console.log(`La densidad es: ${total}`)
    }
}
const piedra = new Piedra(1500, 300)
piedra.densidad()

// Calificaciones
function Calificaciones(name, materias){
    this.name = name;
    this.materias = materias;

    this.calificacionesMaterias = function(){
        let total = 0;
       console.log(`Calificaciones del alumno ${this.name}`)
        for(let i = 0; i < this.materias.length; i++){
            this.materias[i].cal = Math.floor(Math.random()*10);
            total = this.materias[i].cal;
            console.log(`Materia: ${this.materias[i].name} tu calificacion es: ${this.materias[i].cal}`)
        }
        return total;
    }
    this.mediaCalificaciones = function(total, cantidad) {
        let sum = 1;
        let totalmedia = total / cantidad;
        console.log(`La media es ${totalmedia}`)
    }
}
const materias =[
    {name: 'ingles', cal: null},
    {name: 'programacion', cal: null},
    {name: 'HTML', cal: null}
]
const calificaciones = new Calificaciones('juan', materias);
let total = calificaciones.calificacionesMaterias()
let cantidad = materias.map(materias => materias).length
calificaciones.mediaCalificaciones(total, cantidad)

// Precio Descuento
class PrecioDescuento{
    constructor(precio, descuento){
        this.precio = precio;
        this.descuento = descuento;
    }
    neto(){
        return this.precio - this.descuento;
    }
}
const presio_descuento = new PrecioDescuento(1500, 300)
console.log(presio_descuento.neto())

// Articulo
class Proveedor{
    constructor(nombre, correo, numero){
        this.nombre = nombre;
        this.correo = correo;
        this.numero = numero;
    }
    proveedor(){
        console.log(`El nombre del provedor es : ${this.nombre}`)
        console.log(`El correo del proveedor es : ${this.correo}`)
        console.log(`El telefono del articulo  es : ${this.numero}`)
        return this.nombre;
    }
}
class Articulo extends Proveedor{
    constructor(nombre, nombre_articulo, precio){
        super();
        this.nombre = nombre;
        this.nombre_articulo = nombre_articulo;
        this.precio = precio;
    }
    articulo(){
        console.log(`El nombre del provedor es : ${this.nombre}`)
        console.log(`El nombre del articulo es : ${this.nombre_articulo}`)
        console.log(`El precio del articulo  es : ${this.precio}`)
    }
}
const proveedor = new Proveedor('sergio', 'sergio@gmail.com', 568392763)
let nombre_proveedor = proveedor.proveedor()
const articulo = new Articulo(nombre_proveedor, 'Nuevo articulo', 150)
articulo.articulo()
