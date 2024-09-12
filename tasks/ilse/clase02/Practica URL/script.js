function extraerDominio() {
    const url = document.getElementById("url").value;
    let dominio = "";

    if (url.includes("://")) {
        dominio = url.split("://")[1].split("/")[0].split(".")[1];
    } else {
        dominio = url.split(".")[1];
    }

    document.getElementById("resultado-dominio").textContent = dominio;
}

function extraerApellidos() {
    const texto = document.getElementById("texto").value;
    const apellidos = [];
    const regex = /\bMiguel\s([a-zA-Z]+)/g; // Busca nombres "Miguel" seguido de un apellido

    let match;
    while ((match = regex.exec(texto)) !== null) {
        apellidos.push(match[1]); // Guarda los apellidos en la matriz
    }

    // Ordena los apellidos alfabéticamente
    apellidos.sort((a, b) => a.localeCompare(b));

    // Muestra los apellidos ordenados en el HTML
    document.getElementById("resultado-apellidos").textContent = apellidos.join(", ");
}
