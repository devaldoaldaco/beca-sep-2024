let mibotonAzul = document.getElementById("botonAzul");
let mibotonVerde = document.getElementById("botonVerde");
let micolorFondo = document.getElementById("colorFondo");

mibotonAzul.addEventListener("click",() =>{
    micolorFondo.classList.toggle("fondoAzul");

})

mibotonVerde.addEventListener("click",() =>{
    micolorFondo.classList.toggle("fondoVerde");

})