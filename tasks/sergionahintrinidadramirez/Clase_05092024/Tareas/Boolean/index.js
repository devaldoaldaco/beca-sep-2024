let explain;
//explicaciones
let boolean = {
  constructor: function (){
    explain = `Esta función solo devuelve valores primitivos, si se le declara con new Boolean() llama a un constructor y cuando es Boolean() esta siendo llamada una función, por defecto inicia con el valor ${new Boolean()}`
    return explain;

  },
  tostring:function (){
    let flag = new Boolean()
    explain= `Esta función esta encargada de transdormar el valor booleano a una cadena, cuando ocupamos el typeof nos damos cuenta, esto es un valor sin toString ${typeof flag} y este es con la función ${typeof flag.toString()}`
    return explain;
    
  },
  valueof:function (){
    explain=`valueOf() se encarga de transformar un valor primitivo a boolean pondremos el ejemplo const y = new Boolean('Mozilla') ${y = new Boolean('Mozilla')} esto nos dara ${y.valueOf()}`
    return explain
  }
};

//Inyecta el texto de presentación a un parrafo
function agregarBoolean() {
  let parrafo = document.getElementById("p-constructor");
  let parrafoMetodoInstancia = document.getElementsByClassName("p-instance");

  parrafo.innerHTML += boolean.constructor() + "<br><br>";

  parrafoMetodoInstancia[0].innerHTML += boolean.tostring() + "<br><br>";
  parrafoMetodoInstancia[1].innerHTML += boolean.valueof() + "<br><br>";
}
agregarBoolean();
