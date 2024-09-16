let encabezados= document.getElementsByTagName('h2');

/* Date.prototype.getDate()

    devuelve el día del mes para la fecha especificada de acuerdo con la hora local.
*/

    let Xmas95 = new Date("December 25, 1995 23:15:30");
    let day = Xmas95.getDate();

    let resultado1= `El día de navidad en diciembre es el : ${ day }`;

    encabezados[0].innerHTML= resultado1;

/*
    Date.prototype.getDay()

    devuelve el día de la semana de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día.

*/

    let Xmas95day = new Date("December 25, 2024 23:15:30");
    let dayWeek = Xmas95day.getDay();

    let resultado2= `El día de navidad en diciembre cae en : ${ dayWeek }`; 

    encabezados[1].innerHTML= resultado2;


/* Date.prototype.getFullYear() 

    devuelve el año de la fecha indicada acorde a la hora local.
*/

    
    const moonLanding = new Date('July 20, 69 00:20:18');

    let resultado3= `El año completo es : ${ moonLanding.getFullYear() }`; 
    // Expected output: 1969

    encabezados[2].innerHTML= resultado3;


/* Date.prototype.getHour()
    
    retorna la hora de la fecha especificada, de acuerdo a la hora local.
    
*/

    
    let Xmas4 = new Date("December 25, 1995 23:15:30");
    let hours4 = Xmas4.getHours();

    let resultado4= `La hora es : ${ hours4 }`; 

    encabezados[3].innerHTML= resultado4;

/* Date.prototype.getMilliseconds()

    devuelve la cantidad de milisegundos en el objeto fecha especificado de acuerdo a la hora local.
*/

    let ahora = new Date();
    let milisegundos = ahora.getMilliseconds();

    let resultado5= `Los milisegundos son : ${ milisegundos }`; 

    encabezados[4].innerHTML= resultado5;


/* Date.prototype.getMinutes()

    devuelve los minutos de la fecha especificada en función de la hora local.
*/

    let minutos = ahora.getMinutes();

    let resultado6= `Los minutos son : ${ minutos }`; 

    encabezados[5].innerHTML= resultado6;


/* Date.prototype.getMonth() 

    devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
*/

    let mes2 = ahora.getMonth();

    let resultado7= `Los meses : ${ mes2+1 }`; 

    encabezados[6].innerHTML= resultado7;   


/* Array.prototype.getSeconds() 

    devuelve los segundos en la fecha especificada de acuerdo a la hora local.
*/

    let segundos2 = ahora.getSeconds();

    let resultado8= `Los segundos : ${ segundos2 }`; 

    encabezados[7].innerHTML= resultado8; 


/* Date.prototype.getTime()

    devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.

    Puede utilizar este método para ayudar a asignar una fecha y hora a otro objeto Date. Este método es funcionalmente equivalente al metodo valueOf()
*/

    var birthday = new Date(1994, 12, 10);
    var copy = new Date();
    copy.setTime(birthday.getTime());

    let resultado9= `La fecha es : ${ copy }`; 

    encabezados[8].innerHTML= resultado9; 


/* Date.prototype.getTimezoneOffset()

    devuelve la diferencia, en minutos, entre esta fecha evaluada en la zona horaria UTC y la misma fecha evaluada en la zona horaria local.
*/


    const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');

    let resultado10= `La diferencia en minutos es : ${ date1.getTimezoneOffset() }`; 

    encabezados[9].innerHTML= resultado10; 