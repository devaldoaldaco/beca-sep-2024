const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

function apellidosDeMichael(inputText){
    let regEx = /Michael\s[A-Z][a-z]+/g;
    let arreglo = inputText.match(regEx);
    let segundosNombres = arreglo.map(el => el.replace('Michael ', ''));

    console.log(arreglo.map);
}


//let stringAArray =  string.split("Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I dont know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?");
//console.log(stringAArray); 