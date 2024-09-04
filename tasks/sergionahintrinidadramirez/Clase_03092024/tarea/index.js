document.getElementById("cambiarEstilo").addEventListener("click", function () {

    // Cambiar el fondo del body
    document.body.style.background =
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 47%, rgba(12,111,133,1) 100%)";
    document.body.style.color = "white";

    // Cambiar el estilo del título
    document.getElementById("titulo").style.fontWeight = "600";
    document.getElementById("titulo").style.display = "flex";
    document.getElementById("titulo").style.alignItems = "center";
    document.getElementById("titulo").style.justifyContent = "center";

    // Cambiar el estilo del contenedor externo (div hijo)
    var contenedorExterno = document.querySelector(
        ".seccion > .contenedor-externo"
    );
    contenedorExterno.style.backgroundColor = "transparent";
    contenedorExterno.style.border = "3px solid white";

    //Cambiar el color de los parrafos
    document.querySelectorAll(".seccion p").forEach(function (p) {
        p.style.color = "#f4fb1c";
    });

    // Cambiar el estilo del contenedor interno (div nieto)
    var contenedorInterno = document.querySelector(
        ".seccion > .contenedor-externo > .contenedor-interno"
    );
    contenedorInterno.style.border = "4px solid yellow";
    contenedorInterno.style.textAlign = "center";

    //Desaparece el Cuadrado
    var cuadrado = document.getElementById("cuadrado");
    cuadrado.style.opacity = "0";
    cuadrado.style.transform = "scale(0.1)";

    // Mostrar el círculo
    var circulo = document.getElementById("circulo");
    circulo.style.display = "block";

    console.log("Se han hecho los cambios correctos, haz presionado el boton cambiar estilo")
    alert("Cambios exitosos a un paso, Presiona Aceptar para visualizar los cambios")
});
