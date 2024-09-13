function distancia(string1, string2){
    let counter = 0;
    for (let i = 0; i < string2.length; i++) {
        if (string1[i] !== string2[i]) {
            counter++;
        }
    }
    return counter;
    
}
console.log(distancia("hola", "hola"))