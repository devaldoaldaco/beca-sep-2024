let datek = {
  constructor: function () {
    explain = `Podemos decir que la funcion Date() crea objetos con las mismas funciones las cuales pueden ser ocupados como new Date() o simplemente Date() pero no daran el mismo type `;
    return explain;
  },

  getDate: function () {
    const today = new Date();
    explain = `El método getDate() devuelve el día del mes de una fecha específica según la hora local. El valor devuelto es: ${today.getDate()}.`;
    return explain;
  },

  getDay: function () {
    const today = new Date();
    explain = `El método getDay() devuelve el día de la semana de una fecha específica según la hora local. El valor devuelto es: ${today.getDay()} (0 representa domingo y 6 representa sábado).`;
    return explain;
  },

  getFullYear: function () {
    const today = new Date();
    explain = `El método getFullYear() devuelve el año completo de una fecha específica según la hora local. El año es: ${today.getFullYear()}.`;
    return explain;
  },

  getHours: function () {
    const today = new Date();
    explain = `El método getHours() devuelve la hora de una fecha específica según la hora local. La hora es: ${today.getHours()}.`;
    return explain;
  },

  getMilliseconds: function () {
    const today = new Date();
    explain = `El método getMilliseconds() devuelve los milisegundos de una fecha específica según la hora local. Los milisegundos son: ${today.getMilliseconds()}.`;
    return explain;
  },

  getMinutes: function () {
    const today = new Date();
    explain = `El método getMinutes() devuelve los minutos de una fecha específica según la hora local. Los minutos son: ${today.getMinutes()}.`;
    return explain;
  },

  getMonth: function () {
    const today = new Date();
    explain = `El método getMonth() devuelve el mes de una fecha específica según la hora local. El mes es: ${today.getMonth()} (0 representa enero y 11 diciembre).`;
    return explain;
  },

  getSeconds: function () {
    const today = new Date();
    explain = `El método getSeconds() devuelve los segundos de una fecha específica según la hora local. Los segundos son: ${today.getSeconds()}.`;
    return explain;
  },

  getTime: function () {
    const today = new Date();
    explain = `El método getTime() devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970. El valor es: ${today.getTime()}.`;
    return explain;
  },

  getTimezoneOffset: function () {
    const today = new Date();
    explain = `El método getTimezoneOffset() devuelve la diferencia en minutos entre la hora UTC y la hora local. El desfase es: ${today.getTimezoneOffset()} minutos.`;
    return explain;
  },

  getUTCDate: function () {
    const today = new Date();
    explain = `El método getUTCDate() devuelve el día del mes según UTC. El día UTC es: ${today.getUTCDate()}.`;
    return explain;
  },

  getUTCDay: function () {
    const today = new Date();
    explain = `El método getUTCDay() devuelve el día de la semana según UTC. El día UTC es: ${today.getUTCDay()}.`;
    return explain;
  },

  getUTCFullYear: function () {
    const today = new Date();
    explain = `El método getUTCFullYear() devuelve el año completo según UTC. El año UTC es: ${today.getUTCFullYear()}.`;
    return explain;
  },

  getUTCHours: function () {
    const today = new Date();
    explain = `El método getUTCHours() devuelve la hora según UTC. La hora UTC es: ${today.getUTCHours()}.`;
    return explain;
  },

  getUTCMilliseconds: function () {
    const today = new Date();
    explain = `El método getUTCMilliseconds() devuelve los milisegundos según UTC. Los milisegundos UTC son: ${today.getUTCMilliseconds()}.`;
    return explain;
  },

  getUTCMinutes: function () {
    const today = new Date();
    explain = `El método getUTCMinutes() devuelve los minutos según UTC. Los minutos UTC son: ${today.getUTCMinutes()}.`;
    return explain;
  },

  getUTCMonth: function () {
    const today = new Date();
    explain = `El método getUTCMonth() devuelve el mes según UTC. El mes UTC es: ${today.getUTCMonth()}.`;
    return explain;
  },

  getUTCSeconds: function () {
    const today = new Date();
    explain = `El método getUTCSeconds() devuelve los segundos según UTC. Los segundos UTC son: ${today.getUTCSeconds()}.`;
    return explain;
  },
  setDate: function () {
    let currentDate = new Date();
    currentDate.setDate(20);
    explain = `El método setDate() establece el día del mes para una fecha específica según la hora local. Por ejemplo, el día ha sido establecido como ${currentDate.getDate()}.`;
    return explain;
  },

  setFullYear: function () {
    let currentDate = new Date();
    currentDate.setFullYear(2024);
    explain = `El método setFullYear() establece el año completo para una fecha específica según la hora local. Por ejemplo, hoy el año ha sido establecido como ${currentDate.getFullYear()}.`;
    return explain;
  },

  setHours: function () {
    let currentDate = new Date();
    currentDate.setHours(14);
    explain = `El método setHours() establece la hora para una fecha específica según la hora local. Por ejemplo, la hora ha sido establecida como ${currentDate.getHours()}.`;
    return explain;
  },

  setMilliseconds: function () {
    let currentDate = new Date();
    currentDate.setMilliseconds(500);
    explain = `El método setMilliseconds() establece los milisegundos de una fecha específica según la hora local. Por ejemplo, los milisegundos han sido establecidos como ${currentDate.getMilliseconds()}.`;
    return explain;
  },

  setMinutes: function () {
    let currentDate = new Date();
    currentDate.setMinutes(30);
    explain = `El método setMinutes() establece los minutos para una fecha específica según la hora local. Por ejemplo, los minutos han sido establecidos como ${currentDate.getMinutes()}.`;
    return explain;
  },

  setMonth: function () {
    let currentDate = new Date();
    currentDate.setMonth(5); // Junio
    explain = `El método setMonth() establece el mes para una fecha específica según la hora local. Por ejemplo, el mes ha sido establecido como ${currentDate.getMonth() + 1} (donde enero es 0).`;
    return explain;
  },

  setSeconds: function () {
    let currentDate = new Date();
    currentDate.setSeconds(45);
    explain = `El método setSeconds() establece los segundos para una fecha específica según la hora local. Por ejemplo, los segundos han sido establecidos como ${currentDate.getSeconds()}.`;
    return explain;
  },

  setTime: function () {
    let currentDate = new Date();
    currentDate.setTime(Date.now());
    explain = `El método setTime() establece el valor numérico de una fecha como el número de milisegundos transcurridos desde el 1 de enero de 1970. Por ejemplo, el tiempo ha sido establecido como ${currentDate.getTime()} milisegundos.`;
    return explain;
  },

  setUTCDate: function () {
    let currentDate = new Date();
    currentDate.setUTCDate(15);
    explain = `El método setUTCDate() establece el día del mes para una fecha específica según UTC. Por ejemplo, el día UTC ha sido establecido como ${currentDate.getUTCDate()}.`;
    return explain;
  },

  setUTCFullYear: function () {
    let currentDate = new Date();
    currentDate.setUTCFullYear(2025);
    explain = `El método setUTCFullYear() establece el año completo para una fecha específica según UTC. Por ejemplo, el año UTC ha sido establecido como ${currentDate.getUTCFullYear()}.`;
    return explain;
  },

  setUTCHours: function () {
    let currentDate = new Date();
    currentDate.setUTCHours(12);
    explain = `El método setUTCHours() establece la hora para una fecha específica según UTC. Por ejemplo, la hora UTC ha sido establecida como ${currentDate.getUTCHours()}.`;
    return explain;
  },

  setUTCMilliseconds: function () {
    let currentDate = new Date();
    currentDate.setUTCMilliseconds(750);
    explain = `El método setUTCMilliseconds() establece los milisegundos de una fecha específica según UTC. Por ejemplo, los milisegundos UTC han sido establecidos como ${currentDate.getUTCMilliseconds()}.`;
    return explain;
  },

  setUTCMinutes: function () {
    let currentDate = new Date();
    currentDate.setUTCMinutes(20);
    explain = `El método setUTCMinutes() establece los minutos para una fecha específica según UTC. Por ejemplo, los minutos UTC han sido establecidos como ${currentDate.getUTCMinutes()}.`;
    return explain;
  },

  setUTCMonth: function () {
    let currentDate = new Date();
    currentDate.setUTCMonth(10); // Noviembre
    explain = `El método setUTCMonth() establece el mes para una fecha específica según UTC. Por ejemplo, el mes UTC ha sido establecido como ${currentDate.getUTCMonth() + 1} (donde enero es 0).`;
    return explain;
  },

  setUTCSeconds: function () {
    let currentDate = new Date();
    currentDate.setUTCSeconds(55);
    explain = `El método setUTCSeconds() establece los segundos para una fecha específica según UTC. Por ejemplo, los segundos UTC han sido establecidos como ${currentDate.getUTCSeconds()}.`;
    return explain;
  },

  symbol_toPrimitive: function () {
    let currentDate = new Date();
    let primitiveDate = currentDate[Symbol.toPrimitive]('string');
    explain = `El método [Symbol.toPrimitive]() permite convertir el objeto Date a un valor primitivo, como una cadena. Por ejemplo, la fecha convertida es ${primitiveDate}.`;
    return explain;
  },

  toDateString: function () {
    let currentDate = new Date();
    explain = `El método toDateString() devuelve una cadena legible que representa solo la parte de la fecha de un objeto Date. Hoy es ${currentDate.toDateString()}.`;
    return explain;
  },

  toISOString: function () {
    let currentDate = new Date();
    explain = `El método toISOString() devuelve una cadena en formato ISO, representando la fecha y hora en UTC. El formato ISO de la fecha actual es ${currentDate.toISOString()}.`;
    return explain;
  },

  toJSON: function () {
    let currentDate = new Date();
    explain = `El método toJSON() devuelve una cadena en formato ISO que representa la fecha del objeto Date, ideal para JSON. El formato JSON de la fecha es ${currentDate.toJSON()}.`;
    return explain;
  },

  toLocaleDateString: function () {
    let currentDate = new Date();
    explain = `El método toLocaleDateString() devuelve una cadena que representa la parte de la fecha según la configuración local. Por ejemplo, la fecha en formato local es ${currentDate.toLocaleDateString()}.`;
    return explain;
  },

  toLocaleString: function () {
    let currentDate = new Date();
    explain = `El método toLocaleString() devuelve una cadena que representa la fecha y hora según la configuración local. La fecha y hora locales son ${currentDate.toLocaleString()}.`;
    return explain;
  },

  toLocaleTimeString: function () {
    let currentDate = new Date();
    explain = `El método toLocaleTimeString() devuelve una cadena que representa la hora según la configuración local. La hora local es ${currentDate.toLocaleTimeString()}.`;
    return explain;
  },

  toString: function () {
    let currentDate = new Date();
    explain = `El método toString() devuelve una cadena que representa la fecha completa. La fecha actual es ${currentDate.toString()}.`;
    return explain;
  },

  toTimeString: function () {
    let currentDate = new Date();
    explain = `El método toTimeString() devuelve una cadena que representa solo la parte de la hora de un objeto Date. La hora es ${currentDate.toTimeString()}.`;
    return explain;
  },

  toUTCString: function () {
    let currentDate = new Date();
    explain = `El método toUTCString() devuelve una cadena que representa la fecha y la hora en formato UTC. La fecha y hora UTC es ${currentDate.toUTCString()}.`;
    return explain;
  },

  valueOf: function () {
    let currentDate = new Date();
    explain = `El método valueOf() devuelve el valor primitivo de un objeto Date, es decir, el número de milisegundos desde el 1 de enero de 1970 UTC. El valor primitivo es ${currentDate.valueOf()}.`;
    return explain;
  }
};

//Inyecta el texto de presentación a un parrafo
function agregardatek() {
  let parrafo = document.getElementById("p-constructor");
  let parrafoMetodoInstancia = document.getElementsByClassName("p-instance");

  //Parrafo Constructor
  parrafo.innerHTML += datek.constructor() + "<br><br>";

  parrafoMetodoInstancia[0].innerHTML += datek.getDate() + "<br><br>";
  parrafoMetodoInstancia[1].innerHTML += datek.getDay() + "<br><br>";
  parrafoMetodoInstancia[2].innerHTML += datek.getFullYear() + "<br><br>";
  parrafoMetodoInstancia[3].innerHTML += datek.getHours() + "<br><br>";
  parrafoMetodoInstancia[4].innerHTML += datek.getMilliseconds() + "<br><br>";
  parrafoMetodoInstancia[5].innerHTML += datek.getMinutes() + "<br><br>";
  parrafoMetodoInstancia[6].innerHTML += datek.getMonth() + "<br><br>";
  parrafoMetodoInstancia[7].innerHTML += datek.getSeconds() + "<br><br>";
  parrafoMetodoInstancia[8].innerHTML += datek.getTime() + "<br><br>";
  parrafoMetodoInstancia[9].innerHTML += datek.getTimezoneOffset() + "<br><br>";
  parrafoMetodoInstancia[10].innerHTML += datek.getUTCDate() + "<br><br>";
  parrafoMetodoInstancia[11].innerHTML += datek.getUTCDay() + "<br><br>";
  parrafoMetodoInstancia[12].innerHTML += datek.getUTCFullYear() + "<br><br>";
  parrafoMetodoInstancia[13].innerHTML += datek.getUTCHours() + "<br><br>";
  parrafoMetodoInstancia[14].innerHTML += datek.getUTCMilliseconds() + "<br><br>";
  parrafoMetodoInstancia[15].innerHTML += datek.getUTCMinutes() + "<br><br>";
  parrafoMetodoInstancia[16].innerHTML += datek.getUTCMonth() + "<br><br>";
  parrafoMetodoInstancia[17].innerHTML += datek.getUTCSeconds() + "<br><br>";
  parrafoMetodoInstancia[18].innerHTML += datek.setDate() + "<br><br>";
  parrafoMetodoInstancia[19].innerHTML += datek.setFullYear() + "<br><br>";
  parrafoMetodoInstancia[20].innerHTML += datek.setHours() + "<br><br>";
  parrafoMetodoInstancia[21].innerHTML += datek.setMilliseconds() + "<br><br>";
  parrafoMetodoInstancia[22].innerHTML += datek.setMinutes() + "<br><br>";
  parrafoMetodoInstancia[23].innerHTML += datek.setMonth() + "<br><br>";
  parrafoMetodoInstancia[24].innerHTML += datek.setSeconds() + "<br><br>";
  parrafoMetodoInstancia[25].innerHTML += datek.setTime() + "<br><br>";
  parrafoMetodoInstancia[26].innerHTML += datek.setUTCDate() + "<br><br>";
  parrafoMetodoInstancia[27].innerHTML += datek.setUTCFullYear() + "<br><br>";
  parrafoMetodoInstancia[28].innerHTML += datek.setUTCHours() + "<br><br>";
  parrafoMetodoInstancia[29].innerHTML += datek.setUTCMilliseconds() + "<br><br>";
  parrafoMetodoInstancia[30].innerHTML += datek.setUTCMinutes() + "<br><br>";
  parrafoMetodoInstancia[31].innerHTML += datek.setUTCMonth() + "<br><br>";
  parrafoMetodoInstancia[32].innerHTML += datek.setUTCSeconds() + "<br><br>";
  parrafoMetodoInstancia[33].innerHTML += datek.symbol_toPrimitive() + "<br><br>";
  parrafoMetodoInstancia[34].innerHTML += datek.toDateString() + "<br><br>";
  parrafoMetodoInstancia[35].innerHTML += datek.toISOString() + "<br><br>";
  parrafoMetodoInstancia[36].innerHTML += datek.toJSON() + "<br><br>";
  parrafoMetodoInstancia[37].innerHTML += datek.toLocaleDateString() + "<br><br>";
  parrafoMetodoInstancia[38].innerHTML += datek.toLocaleString() + "<br><br>";
  parrafoMetodoInstancia[39].innerHTML += datek.toLocaleTimeString() + "<br><br>";
  parrafoMetodoInstancia[40].innerHTML += datek.toString() + "<br><br>";
  parrafoMetodoInstancia[41].innerHTML += datek.toTimeString() + "<br><br>";
  parrafoMetodoInstancia[42].innerHTML += datek.toUTCString() + "<br><br>";
  parrafoMetodoInstancia[43].innerHTML += datek.valueOf() + "<br><br>";

}
agregardatek();
