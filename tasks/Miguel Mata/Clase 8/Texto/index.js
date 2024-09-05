function ApellidosFilter(str){
    let apellidosfiltrados =str.charAt(0)=== str.charAt(0).toUpperCase() &&  str.slice(1).toLowerCase();
    return apellidosfiltrados;
}
function filterApellido() {
    const frase = document.getElementById("areatext").value;
    const key = document.getElementById("Keyword").value;
    const filterKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const filter = new RegExp(`${filterKey} (\\w+)`, 'g');
    const apellidos = [];
    let coincidencia;
    while ((coincidencia = filter.exec(frase)) !== null) {
        const apellido =coincidencia[1];
        if(ApellidosFilter(apellido)){
            apellidos.push(apellido);
        }
    }
    const resultcontainer=document.getElementById("result")
    resultcontainer.innerHTML="";
    resultcontainer.innerHTML=apellidos.join(`&#8226`);
    console.log(frase);
    console.log(key);
    console.log(apellidos);
}


document.getElementById("FilterButton").addEventListener("click", filterApellido);
