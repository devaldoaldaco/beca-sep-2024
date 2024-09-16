let encabezados= document.getElementsByTagName('h2');

/* Object.prototype.hasOwnProperty()

    devuelve un booleano indicando si el objeto tiene la propiedad especificada.
    Propiedades heredadas (desde el prototipo) no cuentan
*/

    let obj_1 = new Object();
    obj_1.prop = "exists";

    let resultado1= `La propiedad del objeto existe? : ${obj_1.hasOwnProperty("prop")}`;

    encabezados[0].innerHTML= resultado1;


/* Object.prototype.isPrototypeOf( Object)

    comprueba si un objeto se encuentra en la cadena de prototipado de otro.
    El prototipado son las características adicionales que podemos ver en la consola del navegador
*/

    let obj1 = {
        name: "julio",
        occupation: "develper"
    };
    
    let obj2 ={
        age: 27
    }

    console.log(obj1.isPrototypeOf(obj2));
    let resultado2= `El objeto 2 es parte del prtotipado de objeto1? : ${ obj2.isPrototypeOf(obj1) }`;

    Object.setPrototypeOf(obj1,obj2);

    let resultado22= `Y ahora? : ${ obj2.isPrototypeOf(obj1) }`;

    encabezados[1].innerHTML= resultado2;
    encabezados[2].innerHTML= resultado22;


/* Object.prototype.propertyIsEnumerable( PROPERTY )

    regresa un Boleano indicando si la propiedad especificada es enumerable (que se puede iterar con un ciclo) y es propia.
    Las prpiedades que especificamos de la manera usual son enumerables.
 */

    let unPrototipo= { unaPropiedad: "valor" };
    let obj3= Object.create(unPrototipo);
    
    obj3.prop = "es enumerable";

    let resultado3= `La propiedad es enumerable? : ${ obj3.propertyIsEnumerable("prop") }, y esta?: ${obj3.propertyIsEnumerable("unaPropiedad")}`;

    encabezados[3].innerHTML= resultado3;
     // regresa true y luego false
    

/* object.prtotype.toLocalString( localFormat ) 

    devuelve un string que representa a un objeto. Este método está pensado para ser redefinido en los objetos derivados, 
    para los propósitos específicos de cada configuración regional.
*/

    const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    let resultado4= `Representación del objeto en string : ${ date1.toLocaleString('ar-EG') }`; //arabic-egyptian
    encabezados[4].innerHTML= resultado4;

/* Object.prototype.toString()

    Devuelve una cadena que representa el objeto
 */

    function Perro(nombre, criadero, color, sexo) {
        this.nombre = nombre;
        this.criadero = criadero;
        this.color = color;
        this.sexo = sexo;
      }
      
    let elPerro = new Perro("Gabby", "Laboratorio", "chocolate", "femenino");

    let resultado5= `Representación del objeto usando toString 1  : ${ elPerro.toString() }`;
    encabezados[5].innerHTML= resultado5;

    //Pero se puede sobreescribir...

    Perro.prototype.toString = function objetoToString() {
        let retorno = `La propiedad nombre es ${this.nombre}`;
        return retorno;
      };

    let resultado6= `Representación del objeto usando toString 2  : ${ elPerro.toString() }`;
    encabezados[6].innerHTML= resultado6;


/* Object.prototype.valueOf()

    Retorna el valor primitivo del objeto especificado.
 */

    function MyNumberType(n) {
        this.number = n;
    }

    const object1 = new MyNumberType(4);

    let resultado7= `Valor primitivo del objeto 1  : ${ object1.valueOf() }`;
    encabezados[7].innerHTML= resultado7;

    //Pero se puede sobreescribir...
      
    MyNumberType.prototype.valueOf = function () {
        return this.number;
    };
      
    let resultado8= `valor primitivo del objeto 2  : ${ object1.valueOf() }`;
    encabezados[8].innerHTML= resultado8;