const boton = document.getElementById("button");
const text = document.getElementById("miinput");
const resultado = document.getElementById("resultado");
boton.addEventListener("click", function(){
    const url = text.value;
    const position1 = url.indexOf(".");
    if (position1 > 11){
        const positionRel = url.indexOf("/");
        positionRel2 = positionRel + 2
        const primerResul = url.slice(positionRel2);
        const position3 = primerResul.indexOf(".");
        const ResultFinal = primerResul.slice(0, position3);
        resultado.textContent = ResultFinal;    
    }
    else{
        position2 = position1 +1 ;
        const primerResul = url.slice(position2);
        const position3 = primerResul.indexOf(".");
        const ResultFinal = primerResul.slice(0, position3);
        resultado.textContent = ResultFinal;
    }

})