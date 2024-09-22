
async function getRandomUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=16');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}

function displayUsers(users) {
    const userGrid = document.getElementById('userGrid');

    Object.assign(userGrid.style, {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gridGap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif'
    });

    users.forEach(user => {
        const circle = document.createElement('div');
        circle.textContent = `${user.name.first} ${user.name.last}`;

        Object.assign(circle.style, {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#6a5acd',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '14px',
            textAlign: 'center',
            padding: '10px'
        });

        userGrid.appendChild(circle);
    });
}

getRandomUsers().then(users => {
    if (users) {
        displayUsers(users);
    }
});