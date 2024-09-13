
function calcularImpuestos (edad, ingresos){
    if(edad >= 18 && ingresos >= 1000){
        console.log(ingresos*.40);
    } 
    else{
        console.log(0);
    }

}
calcularImpuestos(30, 500);