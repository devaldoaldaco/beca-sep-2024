
function fizzBuzz(numero){
    if(numero % 3 === 0 && numero % 5 === 0 ){
        console.log("fizzBuzz");

    } else if(numero % 3 === 0){
        console.log("fizz");

    } else if(numero % 5 === 0){
        console.log("buzz");

    } else{
        console.log(numero);
    }
}

fizzBuzz(8);