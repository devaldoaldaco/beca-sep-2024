const boton = document.getElementById("boton");
const input = document.getElementById("myInput");
const parrafo = document.getElementById("mostrar");

boton.addEventListener("click", function(){
    const texto = input.value;
    const resultado = texto.matchAll(/Michael ([A-Z][a-zA-Z]+)/g);
    resultado.forEach(coincidencia => {
        console.log(coincidencia[1]);
            
    });




})