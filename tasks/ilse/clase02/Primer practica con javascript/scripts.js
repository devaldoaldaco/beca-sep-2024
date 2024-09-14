const parrafos = document.querySelectorAll('.parrafo');
const miDiv = document.querySelector('.miDiv');

    const CambiarColorBtn = document.getElementById('cambiar-color');
    const CambiarTexto = documente.getElementById('cambiar-texto');

    CambiarColorBtn.addEventListener('click', function() {
        parrafos.forEach(parrafo => {
            parrafo.style.color = parrafo.style.color === 'red' ? 'brown' : 'red';
            
        });

    });

    cambiarTextoBtn.addEventListener('click', function()  {
        miDiv.textContent = miDiv.textContent === 'Div con clase "miDiv"' ? 'Texto cambiado!' : 'Div con clase "Div con clase"'

    });




