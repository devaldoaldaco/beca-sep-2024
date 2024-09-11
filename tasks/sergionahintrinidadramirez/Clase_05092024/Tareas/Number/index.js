let explain;
//explicaciones
let number = {
  constructor: function (){
    explain = `Esta función solo devuelve valores primitivos, si se le declara con new Number() llama a un constructor y cuando es Number() esta siendo llamada una función, por defecto inicia con el valor ${new Number()}`
    return explain;

  },
  toExponential:function (){
    function expo(x, f) {
      return Number.parseFloat(x).toExponential(f);
    }
    explain= `Esta función esta encargada de transformar el valor a un String el cual representara en notación cientifica por decir 32 es ${expo(32,1)}`
    return explain;
    
  },
  toFixed:function (){
    function financial(x) {
      return Number.parseFloat(x).toFixed(2);
    }
    explain= `Esta función esta encargada de transformar el valor arreglado, esto quiere decir que nos da un formato por decir a los decimales podriamos estar solitando 15.4959 y lo quisieramos solo en 2 decimales esto nos daria ${financial(15.4959)}`
    return explain;
    
  },
  toLocaleString:function (){
    function eArabic(x) {
      return x.toLocaleString('ar-EG');
    }
    explain= `Esta función esta encargada de transformar el numero a la localidad que se le aplique por decir el 125 en arabico es ${eArabic(125)}`
    return explain;
    
  },
  toPrecision:function (){
    function precise(x) {
      return x.toPrecision(4);
    }
    explain= `Esta función esta encargada de transformar el valor a la exactitud y precision que se haya marcado por decir 0.12 a una exactitud de 4 queda como ${precise(.12)}`
    return explain;
    
  },
  tostring:function (){
    explain=`toString() se encarga de transformar un valor number a string pondremos el ejemplo  45 nos dara como resultado ${(45).toString()} pero indagando en su tipo este sera ${typeof (45).toString()}`
    return explain
  },
  valueof:function (){
    explain=`valueOf se encarga de transformar un valor primitivo a number pondremos el ejemplo numObj = new Number(10);  esto nos dara ${new Number(10).valueOf()} y como su tipo este sera ${typeof new Number(10).valueOf()}`
    return explain
  }
};

//Inyecta el texto de presentación a un parrafo
function agregarnumber() {
  let parrafo = document.getElementById("p-constructor");
  let parrafoMetodoInstancia = document.getElementsByClassName("p-instance");

  parrafo.innerHTML += number.constructor() + "<br><br>";

  parrafoMetodoInstancia[0].innerHTML += number.toExponential() + "<br><br>";
  parrafoMetodoInstancia[1].innerHTML += number.toFixed() + "<br><br>";
  parrafoMetodoInstancia[2].innerHTML += number.toLocaleString() + "<br><br>";
  parrafoMetodoInstancia[3].innerHTML += number.toPrecision() + "<br><br>";
  parrafoMetodoInstancia[4].innerHTML += number.tostring() + "<br><br>";
  parrafoMetodoInstancia[5].innerHTML += number.valueof() + "<br><br>";

}
agregarnumber();
