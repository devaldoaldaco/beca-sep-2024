
fetch('https://randomuser.me/api/?results=16')
    .then(response => response.json())
    .then(data => {
        const usuarios = data.results; 

        usuarios.forEach((user, index) => {

            const userId = index + 1; 
            const userContainer = document.querySelector(`#user-${userId} p`);
            const userImage = document.querySelector(`#user-${userId} img`);
            const userGender = document.getElementById(`gender${userId}`);
            
            
            userContainer.textContent = user.name.first;
            userImage.src = user.picture.large;
            userGender.textContent = user.gender;
        });
    })
    .catch(error => {
        console.log("Hubo un error:", error);
    });