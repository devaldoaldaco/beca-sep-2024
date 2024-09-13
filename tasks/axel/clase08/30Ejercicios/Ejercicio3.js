
function bmi(peso, altura){

    let imc = peso / (altura * altura);

    if(imc < 18.5){
        console.log('Bajo de peso');
    } else if (imc >= 18.5 && imc <= 24.9){
        console.log('Normal');
    } else if(imc >= 25 && imc <= 29.9){
        console.log('Sobrepeso');
    } else if(imc > 30){
        console.log('Obeso');
    }
}
bmi(106,1.83);