function getDomain(url){
    console.log(url)
    const parsedUrl = new URL(url);
    let hostname = parsedUrl.hostname;
    if(hostname.startsWith("www.")){
        hostname=hostname.slice(4);
    }

    const domainSections=hostname.split(".");
    return domainSections[0];
}
function updateTable(){
    const table = document.getElementById("URLTable")
    const rows= table.querySelectorAll("tbody tr")
    rows.forEach(row=>{
        const urlCell=row.cells[0].innerText;
        const domainCell=row.cells[1];
        const domain=getDomain(urlCell);
        domainCell.innerText=domain||"URL Invalida";
    })
}

function extURLInput(){
     // Obtener el valor del campo de texto
     const urlInput = document.getElementById("InputURL").value;        
     // Obtener el dominio de la URL ingresada
     const domain = getDomain(urlInput);
    document.getElementById("DominioButton").innerText=domain||"URL Invalida"
}

document.addEventListener("DOMContentLoaded",updateTable);
document.getElementById("URLbutton").addEventListener("click",extURLInput);