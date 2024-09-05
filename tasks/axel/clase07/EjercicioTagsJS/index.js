const boton = document.getElementById("agregar");
const botonDisagree = document.getElementById("disagree");
const contenedor = document.getElementById("main");
const h1 = document.getElementById("title");
const parrafo = document.createElement("p");
boton.addEventListener("click", function(){

    parrafo.textContent = "La mejor serie de comedia es The office. Y PUNTO";
    contenedor.appendChild(parrafo);
    
}
)

botonDisagree.addEventListener("click", function(){
    h1.textContent = "¿QUE NO TE QUEDO CLARO? :)"
    parrafo.style.color = "red";
    parrafo.style.fontSize= "100px";
    h1.style.fontSize = "70px";
})



