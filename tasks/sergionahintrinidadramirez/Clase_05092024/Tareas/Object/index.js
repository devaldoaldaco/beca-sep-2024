let explain;
//explicaciones
let objecto = {
  constructor: function () {
    explain = `El método 'constructor' pertenece al prototipo de todos los objetos en JavaScript. Este método devuelve una referencia a la función que creó la instancia de un objeto. Por ejemplo, para un objeto creado con '{}' o 'new Object()', su constructor será 'Object()'.`;
    return explain;
  },
  hasownprope: function () {
    let o = new Object();
    o.prop = "exists";
    explain = `El método 'hasOwnProperty()' comprueba si un objeto tiene una propiedad como propia (es decir, no heredada del prototipo). Por ejemplo, si 'o.prop' está definido en el objeto 'o', 'o.hasOwnProperty("prop")' devolverá ${o.hasOwnProperty("prop")}.`;
    return explain;
  },
  isprototypeof: function () {
    function Parent() {}
    function Child() {}
    Child.prototype = Object.create(Parent.prototype);
    let instance = new Child();
    explain = `El método 'isPrototypeOf()' verifica si un objeto está en la cadena de prototipos de otro objeto. En este ejemplo, 'Parent.prototype.isPrototypeOf(instance)' devolverá ${Parent.prototype.isPrototypeOf(instance)} porque 'instance' hereda de 'Parent'.`;
    return explain;
  },
  propertyIsEnumerable: function () {
    let o = { prop: 42 };
    explain = `El método 'propertyIsEnumerable()' devuelve 'true' si la propiedad especificada es enumerable. Esto significa que se puede iterar sobre la propiedad en un 'for...in'. Por ejemplo, 'o.propertyIsEnumerable("prop")' devuelve ${o.propertyIsEnumerable("prop")}.`;
    return explain;
  },
  toLocaleString: function () {
    let date = new Date();
    explain = `El método 'toLocaleString()' convierte un objeto en una cadena usando la configuración regional. Este método es particularmente útil para formatear fechas y números. Por ejemplo, la fecha actual 'new Date().toLocaleString()' puede devolver '${date.toLocaleString()}' dependiendo de la configuración de idioma.`;
    return explain;
  },
  tostring: function () {
    let o = {};
    explain = `El método 'toString()' devuelve una representación en cadena del objeto. Por defecto, para los objetos, devuelve '[object Object]'. Por ejemplo, '{}.toString()' devolverá '${o.toString()}'.`;
    return explain;
  },
  valueof: function () {
    let o = {};
    explain = `El método 'valueOf()' devuelve el valor primitivo de un objeto. Para objetos como 'Object', el valor devuelto suele ser el propio objeto. Por ejemplo, 'o.valueOf()' devolverá el objeto en sí: ${o.valueOf()}.`;
    return explain;
  }
};


//Inyecta el texto de presentación a un parrafo
function agregarObjecto() {
  let parrafo = document.getElementById("p-constructor");
  let parrafoMetodoInstancia = document.getElementsByClassName("p-instance");

  parrafo.innerHTML += objecto.constructor() + "<br><br>";

  parrafoMetodoInstancia[0].innerHTML += objecto.hasownprope() + "<br><br>";
  parrafoMetodoInstancia[1].innerHTML += objecto.isprototypeof() + "<br><br>";
  parrafoMetodoInstancia[2].innerHTML += objecto.propertyIsEnumerable() + "<br><br>";
  parrafoMetodoInstancia[3].innerHTML += objecto.toLocaleString() + "<br><br>";
  parrafoMetodoInstancia[4].innerHTML += objecto.tostring() + "<br><br>";
  parrafoMetodoInstancia[5].innerHTML += objecto.valueof() + "<br><br>";

}
agregarObjecto();
