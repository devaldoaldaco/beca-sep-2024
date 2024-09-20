const personaContainer = document.querySelector('.container');

function fetchPersona() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        createPersona(data);
    })
    .catch(error => console.error('Error:', error));
}

function fetchPersonas(number) {
    for (let i = 0; i < number; i++) {
        fetchPersona();
    }
}

fetchPersonas(16);

function createPersona(data) {
    const persona = data.results[0];
    const personaDiv = document.createElement('div');
    personaDiv.classList.add('persona');

    const img = document.createElement('img');
    img.src = persona.picture.large;
    img.alt = `${persona.name.first} ${persona.name.last}`;

    const name = document.createElement('p');
    name.textContent = `${persona.name.first} ${persona.name.last}`;

    personaDiv.appendChild(img);
    personaDiv.appendChild(name);
    
    personaContainer.appendChild(personaDiv);
}
