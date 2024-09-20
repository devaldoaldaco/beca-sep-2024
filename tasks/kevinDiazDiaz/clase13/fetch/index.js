fetch('https://randomuser.me/api/?results=16')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error');
    }
    return response.json(); 
  })
  .then(data => {
    const container = document.createElement('main'); 

    data.results.forEach((user) => {
      const name = `${user.name.first}`;
      const photo = `${user.picture.thumbnail}`;

      const users = document.createElement('section');
      const picture = document.createElement('img');
      const names = document.createElement('p');

      picture.src = photo;
      names.textContent = name;

      users.appendChild(picture);
      users.appendChild(names);



      container.appendChild(users);
      
    });

    document.body.appendChild(container); 
  })
  .catch(error => {
    console.error('Error', error);
  });
