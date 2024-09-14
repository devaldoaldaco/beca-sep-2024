//Ejercicio 1
class Cliente{
    constructor(nombre, email, telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }
}

class Factura{
    constructor(idCliente, total, estado){
        this.idCliente=idCliente;
        this.total=total;
        this.estado=estado;
    }

    cobrar(){
        this.estado="Pagado";
    }

    imprimir(clientes){ 
        const cliente= clientes[this.idCliente];
        return console.log(`El cliente ${cliente.nombre} con datos de contacto ${cliente.telefono} y ${cliente.email}
            con ID: ${this.idCliente} tiene una factura de ${this.total} en el estado de ${this.estado}`);
    }
}

const clientes = [new Cliente('Juan', 'juan@gmail.com', '5532209875'), new Cliente('Miguel', 'miguel@gmail.com', '5562738271'),
                    new Cliente('Rosa', 'rosa@gmail.com', '5561829364')];

const factura1 = new Factura(0, 12342, 'Pendiente de Pago');


factura1.imprimir(clientes)
factura1.cobrar();
factura1.imprimir(clientes);



//Ejercicio 2

class Alumno{
    constructor(nombre, matricula, calificacion){
        this.nombre=nombre;
        this.matricula=matricula;
        this.calificacion=calificacion;
    }

    calificar(nota,lista, num_alumno){
        const alumno=lista[num_alumno-1];
        alumno.calificacion = nota;
    }

    datos(lista, num_alumno){
        const alumno=lista[num_alumno-1];
        console.log(`El alumno: ${alumno.nombre}, con matricula: ${alumno.matricula}, tiene una calificación ${alumno.calificacion}`);
    }
}



const profesor= new Alumno();
const alumno1= new Alumno('Ian', '2020641526', 'No asignada');
const alumno2= new Alumno('Jose', '202071836', 'No asignada');
const alumno3= new Alumno('Elisa', '202091827', 'No asignada');
const alumno4= new Alumno('Daniel', '202094715', 'No asignada');

const alumnos = [alumno1, alumno2, alumno3, alumno4];

profesor.datos(alumnos, 1);
profesor.calificar(10, alumnos, 1);
profesor.datos(alumnos, 1);



//Ejercicio 3
class Bus{
    constructor(capacidad, pasajeros, conductor){
        this.capacidad=capacidad;
        this.pasajeros=0;
        this.conductor='';
    }

    subir(pas){
        this.pasajeros=this.pasajeros+pas;

        if(this.pasajeros>this.capacidad){
            this.pasajeros=this.pasajeros-pas;
            return console.log("Excede la capacidad");
        }

        return console.log(`El bus tiene ${this.pasajeros} pasajeros`);

    }

    bajar(pas){
        if(pas<=this.pasajeros){
            this.pasajeros=this.pasajeros-pas;
            return console.log(`El bus tiene ${this.pasajeros} pasajeros`);
        }
        return console.log("No pueden bajar mas pasajeros de los que hay");
    }

    asignarConductor(cond){
        this.conductor=cond;
        console.log(`${this.conductor.nombre} con licencia ${this.conductor.licencia} es el nuevo conductor`);
    }
}

class Conductor{
    constructor(nombre, licencia){
        this.nombre=nombre;
        this.licencia=licencia;
    }
}

const bus= new Bus(20)
const conductor1= new Conductor('Juan', 9812873);
bus.asignarConductor(conductor1);
bus.subir(15);
bus.subir(10);
bus.bajar(3);
bus.bajar(14);




//Ejercicio 4
class Ficha{
    constructor(nombre, sesiones, numsesiones){
        this.nombre=nombre;
        this.sesiones=sesiones;
        this.numsesiones=numsesiones;
    }

    anotar(km){
        this.sesiones=this.sesiones+km;
        this.numsesiones++
    }

    media(){
        let media=this.sesiones/this.numsesiones;
        return console.log(`La media de ${this.nombre} es : ${media}`);
    }
}

const ficha= new Ficha('Manuel', 5, 1);

ficha.anotar(20); //km=25 numsesiones=2
ficha.anotar(30) //km=55 numsesiones=3
ficha.media();


//Ejercicio 5
function Cuenta(nombre, saldo){
    this.nombre=nombre;
    this.saldo=saldo;

    this.ingresar= function(efectivo){
        this.saldo+=efectivo;
        return console.log(`Hola ${this.nombre} tu nuevo saldo es ${this.saldo}`);
    }

    this.retirar=function(efectivo){
        if (efectivo<=saldo){
            this.saldo-=efectivo;
            return console.log(`Hola ${this.nombre} tu nuevo saldo es ${this.saldo}`);
        }
        
        return console.log("No puedes retirar más de tu saldo");
    }
}

const cliente1 = new Cuenta('Kevin', 2000);

cliente1.ingresar(200);
cliente1.retirar(2500);
cliente1.retirar(500);


//Ejercicio 6

class Piedra{
    constructor(masa, volumen){
        this.masa=masa;
        this.volumen=volumen;
    }

    densidad(){
        let densidad=this.masa/this.volumen;
        console.log(`La densidad es ${densidad}`);
    }
}

const piedra= new Piedra(2, 5);

piedra.densidad();


//Ejercicio 7
let alumno={
    nombre: 'Juan',
    ingles: 10,
    progra: 9,
    html: 9,

    media(){
        let total= this.ingles+this.progra+this.html;
        let media=total/3;
        return console.log(`La media es ${media}`);
    }
};


console.log(alumno.nombre);
console.log(alumno.media());


//Ejercicio 8
const articulo={
    precio: 100,
    decuento: 20,

    neto(){
        let n_precio=this.precio*(1-this.decuento/100);
        return console.log(`El nuevo precio es $${n_precio}`);
    }
};

articulo.neto();
articulo.precio=200;
articulo.neto();


//Ejercicio 9

class Proveedor{
    constructor(nombre, email, telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }

}

class Articulo{
    constructor(nombre, proveedor, precio){
        this.nombre=nombre;
        this.proveedor=proveedor
        this.precio=precio;
    }

    telefono(){
        return console.log(this.proveedor.telefono);
    }
}

const proveedor= new Proveedor('Mapped', 'mapped@gmail.com', '5526375142');
const articulo1= new Articulo('Lapiz', proveedor, 4);

articulo1.telefono();

