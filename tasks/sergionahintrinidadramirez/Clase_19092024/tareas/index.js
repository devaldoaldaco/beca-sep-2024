document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayUsers();
  });
  
  function fetchAndDisplayUsers() {
    fetch('https://randomuser.me/api/?results=16') //solicitar 16 registros aleatorios
      .then(response => response.json())
      .then(data => displayUsers(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function displayUsers(users) {
    const circles = document.getElementsByClassName('circle');
    users.forEach((user, index) => {
      if (circles[index]) {
        appendUserToCircle(circles[index], user);
      }
    });
  }
  
  function appendUserToCircle(circle, user) {
    const img = createUserImage(user.picture.large);
    const name = createUserName(`${user.name.first} ${user.name.last}`);
    circle.append(img, name);
  }
  
  function createUserImage(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
  }
  
  function createUserName(fullName) {
    const name = document.createElement('p');
    name.textContent = fullName;
    return name;
  }