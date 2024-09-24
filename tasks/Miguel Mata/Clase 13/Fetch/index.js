const circulos = document.getElementsByTagName("div");

const generarUsuarios = async (cantidad) => {
    const url = 'https://randomuser.me/api/';
    
    // Realiza múltiples solicitudes
    for (let i = 0; i < cantidad; i++) {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const datos = resultado.results[0];

        // Asigna la imagen al div correspondiente
        if (circulos[i]) {
            circulos[i].style.backgroundImage = "url("+datos.picture.large+")";
            circulos[i].style.backgroundSize = 'cover'; 
            circulos[i].style.backgroundPosition = 'center';
        }
    }
};

generarUsuarios(16);