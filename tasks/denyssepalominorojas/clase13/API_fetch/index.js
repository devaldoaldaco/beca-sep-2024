fetch('https://randomuser.me/api/?results=16')
    // Convierte la respuesta en un objeto Js (un objeto JSON).
    .then(response => response.json()) 
    .then(data => { // los usuarios se guardan en data
        console.log(data.results);
        
        // forEach sirve para ejecutar una función en cada elemento de un array.
        // Utilicé forEach para iterar en cada usuario del array 
        data.results.forEach((user, index) => {  
            const div = document.getElementsByTagName('div')[index];
            // Concatenación de cadenas para crear el Nombre completo.
            const fullName = `${user.name.first} ${user.name.last}`;

            // Se crea el elemento imagen 
            const imgElement = document.createElement('img');
            // Se le dan estilos a la misma
            imgElement.src = user.picture.medium;
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";
            imgElement.style.borderRadius = "50%"; // Borde circular de la imagen 
            
            // Se crea el elemento parrafo para el nombre completo 
            const nameElement = document.createElement('p');
            nameElement.innerHTML = fullName;
            nameElement.style.color = "black";

            // Añade la imagen y el nombre al div correspondiente
            div.appendChild(imgElement);
            div.appendChild(nameElement);
        });
    }
)
