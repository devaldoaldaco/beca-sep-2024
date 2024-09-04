document.getElementById("button").addEventListener("click", function(){
    //Cambiar el color del botón
    this.style.backgroundColor="green";

    //Añadir un parrafo
    const newParagraph=document.createElement("p");
    newParagraph.textContent="Parrafo agregado";
    const section= this.nextElementSibling;
    //Añadir el parrafo debajo del botón
    section.parentNode.appendChild(newParagraph);
});
