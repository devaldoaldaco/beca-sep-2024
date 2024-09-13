function capitalizar(letters){
    letters = letters.split(' ');
    return letters.map((letters) => { 
        return letters[0].toUpperCase() + letters.substring(1); 
    }).join(" ");
}
console.log(capitalizar("hola mundo"))