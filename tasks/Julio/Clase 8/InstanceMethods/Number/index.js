let encabezados= document.getElementsByTagName('h2');

/* Number.prototype.toExponential() 

    Regresa un string que representa el número proporcinado en notación exponencial
*/

    let toExponentialNumber= 1234567;
    let resultado1= "Número usando la notacion exponencial: "+ toExponentialNumber.toExponential();

    encabezados[0].innerHTML= resultado1;


/* Number.prototype.toFixed()

    Regresa una cadena para representar el número en notación de punto, se puede indicar el número de decimales
*/

    let toFixedNumber= 123.4567;
    let resultado2= "Número usando el método toFixed: "+ toFixedNumber.toFixed(2);

    encabezados[1].innerHTML= resultado2;


/* Number.prototype.toLocaleString()

    Regresa una cadena para representar el número en cierto lenguaje especificado
*/

    let toLocaleStringNumber= 1234;
    let resultado3= "Número usando el método toLocaleString: "+ toLocaleStringNumber.toLocaleString('ar-EG');

    encabezados[2].innerHTML= resultado3;


/* Number.prototype.toPrecision()

    Regresa una cadena para representar el número con el número de digitos especificados
*/

    let toPrecisionNumber= 123.45;
    let resultado4= "Número usando el método toPrecision: "+ toPrecisionNumber.toPrecision(4);

    encabezados[3].innerHTML= resultado4;


/* Number.prototype.toString()

    Regresa una cadena que representa el número dado en formato string
*/

    let toStringNumber= 38;
    let resultado5= "Número usando el método toString: "+ toStringNumber.toString();

    encabezados[4].innerHTML= resultado5;

    console.log( toStringNumber.toString()==="38" )


/* Number.prototype.valueOf()

    Regresa un número representando el valor primitivo del objeto Number especificado
*/

    const numObj = new Number(10);
    console.log(typeof numObj); // object

    const num = numObj.valueOf();
    console.log(num); // 10
    console.log(typeof num); // number

    let resultado6= "Número usando el método valueOf: "+ typeof num;

    encabezados[5].innerHTML= resultado6;