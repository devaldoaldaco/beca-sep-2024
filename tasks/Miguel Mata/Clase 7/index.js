function agregarDiv(){
    var nuevoDiv = document.createElement("div");
    nuevoDiv.textContent="Este div se agrego dinamicamente";
    nuevoDiv.classList.add("divcolor");
    document.body.appendChild(nuevoDiv);
}
function cambiarColorRojo(){
    var divs = document.getElementsByClassName("divcolor");
    for( var i=0;i<divs.length; i++){
        divs[i].style.backgroundColor="red"
        divs[i].style.border="rgb(122, 4, 4)"
    }
}
function cambiarColorAzul(){
    var divs = document.getElementsByClassName("divcolor");
    for( var i=0;i<divs.length; i++){
        divs[i].style.backgroundColor="blue"
        divs[i].style.border="rgb(14, 4, 122)"
    }
}
function cambiarColorVerde(){
    var divs = document.getElementsByClassName("divcolor");
    for( var i=0;i<divs.length; i++){
        divs[i].style.backgroundColor="green"
        divs[i].style.border="rgb(4, 71, 16)"
    }
}