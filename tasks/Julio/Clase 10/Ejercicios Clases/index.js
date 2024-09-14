
/* --------------------------------------------------Ejercicio 1----------------------------------------------------*/

class Cliente {

    constructor(nombre,email,telefono){
        this._nombre=nombre;
        this._email=email;
        this._telefono=telefono;
    }

}

class Factura{

    constructor(idCliente, total, estado){
        this._idCliente=idCliente;
        this._total= total;
        this._estado=estado;
    }

    cobrar(){
        this._estado="pagada";
    }

    imprimir(arreglo){
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);

        console.log("---------------------------------------------------------------------");
        console.log(`Fecha: ${hoy.toLocaleDateString() }`)
        console.log(`Cliente: ${ this._idCliente} - ${arreglo[ this._idCliente ]._nombre} `);
        console.log(`Total a pagar: ${ this._total} `);
        console.log(`Estado: ${ this._estado} `);
        console.log("---------------------------------------------------------------------");

    }
}

const listaCliente=[];

const julio= new Cliente("Julio Santillan","julio@gmail.com","5522334455");
const aura= new Cliente("Aura Santillan","aura@gmail.com","5522334455");
const sofia= new Cliente("Sofia Albacil","sofi@gmail.com","5500114455");


listaCliente.push(julio);
listaCliente.push(aura);
listaCliente.push(sofia);

const facturaJulio=new Factura(0, 60000,"pendiente");
facturaJulio.imprimir(listaCliente);
facturaJulio.cobrar();
facturaJulio.imprimir(listaCliente);


/* --------------------------------------------------Ejercicio 2----------------------------------------------------*/


class Alumno{
    constructor(nombre, matricula){
        this._nombre=nombre;
        this._matricula=matricula;
    }

    calificar(nota){
        this._calificacion= nota;
    }
}
console.log("Resultados ejercicios 2:")
const alumnos= [new Alumno("Juan", "02937"), new Alumno("Anne", "02938"), new Alumno("Jesus", "02939"), new Alumno("Jion", "02940")];
alumnos[0].calificar(8);
alumnos[1].calificar(10);
alumnos[2].calificar(6);
alumnos[3].calificar(10);
console.log(alumnos);


/* --------------------------------------------------Ejercicio 3----------------------------------------------------*/


class Bus{
    constructor(capacidad,nombre,licencia){
        this._capacidad=capacidad;
        this._pasajeros=0;
        this._conductor=new Conductor(nombre,licencia);
    }


    subir(pasajeros){
        return (this._pasajeros+pasajeros)>this._capacidad ? this._pasajeros : this._pasajeros+=pasajeros; 
    }

    bajar(pasajeros){
        return (this._pasajeros-pasajeros)<0 ? this._pasajeros : this._pasajeros-=pasajeros;
    }

}

class Conductor{
    constructor(nombre, licencia){
        this._nombre=nombre;
        this._licencia=licencia;
    }
}

const ruta69=new Bus(30, "Rodolfo", "12345");

console.log("Resultados ejercicios 3:")
console.log(ruta69);

console.log( ruta69.subir(30) );
console.log( ruta69.bajar(10) );
console.log( ruta69.subir(5) );
console.log( ruta69.bajar(26) );
console.log( ruta69.subir(10) );


/* --------------------------------------------------Ejercicio 4----------------------------------------------------*/


class Ficha{
    constructor(nombre, sesiones, numSesiones){
        this._nombre=nombre;
        this._sesiones=sesiones; //numero de km 
        this._numSesiones=numSesiones; //num de sesiones
    }


    anotar(km){
        this._sesiones+=km;
        this._numSesiones++;
    }

    media(){
        return this._sesiones/this._numSesiones;
    }
}

const julio4=new Ficha("julio",0,0);

julio4.anotar(5); //sesiones=5, numsesiones=1
julio4.anotar(10); //sesiones=15, numsesiones=2
julio4.anotar(2); //sesiones=17, numsesiones=3
console.log("Resultados de ejercicio 4:")
console.log( julio4.media().toFixed(2) ); //5.6


/* --------------------------------------------------Ejercicio 5----------------------------------------------------*/

function Cuenta(titular, saldo){
    this._titular=titular;
    this._saldo=saldo;
}

Cuenta.prototype.ingresar= function(cantidad){
    return this._saldo+=cantidad;
};

Cuenta.prototype.retirar= function(retiro){
    
    if(this._saldo-retiro<0){
        return "No tienes suficientes fondos";
    }
    else{
        this._saldo-=retiro;
        return `Cantidad retirada exitosamente: ${ retiro }`;
    }
}

const cuenta1= new Cuenta("julio", 8000);


console.log("Resultado ejercicio 5:");
cuenta1.ingresar(800);
cuenta1.retirar(1600);
console.log( cuenta1 );


/* --------------------------------------------------Ejercicio 6----------------------------------------------------*/


function Piedra(masa,volumen){
    this._masa=masa;
    this._volumen=volumen;
}

Piedra.prototype.densidad= function(){
    return this._masa/this._volumen;
}

console.log("Resultado ejercicio 6:");

const marmol=new Piedra(500, 30);
console.log( marmol.densidad() );


/* --------------------------------------------------Ejercicio 7----------------------------------------------------*/


const alumno={
    nombre: "julio",
    notaProgramacion: 10,
    notaHtml: 9,
    notaIngles: 9,
    media: function(){
        return (this.notaProgramacion+this.notaHtml+this.notaIngles)/3;
    }
};

console.log("Resultado del ejercicio 7:")
console.log(`El nombre del alumno es ${alumno.nombre} y la media de sus notas es ${alumno.media().toFixed(2)}`);


/* --------------------------------------------------Ejercicio 8----------------------------------------------------*/

const precioDescuento= {
    precio: 0,
    descuento: 0,
    neto: function(){
        return this.precio-=((this.descuento/100) * this.precio);
    }
}

const netoButton=document.querySelector('section>button');
netoButton.addEventListener('click', ()=>{

    valorPrecio=document.querySelectorAll('input')[0].value;
    valorDescuento=document.querySelectorAll('input')[1].value;
    const regex= new RegExp('[a-zA-Z]+');

    if(!regex.test(valorPrecio.toString()) && !regex.test(valorDescuento.toString())){
        precioDescuento.precio= valorPrecio;
        precioDescuento.descuento= valorDescuento;
        document.querySelector('p').innerHTML=` Precio neto: ${ precioDescuento.neto() }`;
    }else{
        document.querySelector('p').innerHTML=` Ingresa valores numéricos `;
    }

})

/* --------------------------------------------------Ejercicio 9----------------------------------------------------*/


const Proveedor= class{
    constructor(nombre, email,telefono){
        this._nombre=nombre;
        this._email=email;
        this._telefono=telefono;
    }

}

const Articulo= class{
    constructor(proveedor,nombreA,precioA){
        this._proveedor={...proveedor};
        this._nombreA=nombreA;
        this._precioA=precioA;
    }


    telefono(){
        const {_nombre,_telefono}=this._proveedor;
        const dataProveedor=new Object();
        dataProveedor.nombre=_nombre;
        dataProveedor.telefono=_telefono;
        return dataProveedor;
    }
}
console.log("Resultados del ejercicio 9:")
const bimbo=new Proveedor("bimbo","annlaport@gmail.com","5566880099")
const donasGlaseadas= new Articulo(bimbo, "donas glaseadas", 23.50);

console.log( donasGlaseadas.telefono() );