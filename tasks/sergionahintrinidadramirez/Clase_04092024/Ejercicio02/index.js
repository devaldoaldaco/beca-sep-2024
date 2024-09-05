function getLastNames() {
    const inputText = document.getElementById('inputText').value;

    // Expresión regular para encontrar 'Michael' seguido de un apellido
    const expRegu = /Michael\s([A-Z][a-z]+)/g;
    let match;
    const lastNames = [];

    // Buscar todas las coincidencias en while
    while ((match = expRegu.exec(inputText)) !== null) {
        lastNames.push(match[1]); // El apellido está en el sector 1
    }

    // Mostrar los apellidos
    document.getElementById('lastNames').innerText = lastNames.join(', ');
}