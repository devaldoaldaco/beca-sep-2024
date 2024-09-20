const randomuser = "https://randomuser.me/api/?results=4";
let users;
users = await fetch(randomuser)
   .then(respuesta => {
    return respuesta.json();
  })
  .catch(error => {
    console.log(error) 
})

users = users.results

for(let i = 0; i < users.length; i++){
    createImg(users[i]);
    createName(users[i]);
    createAge(users[i]);
    createEmail(users[i]);
}

function createImg(user){
    let imagen = document.createElement("img");
    imagen.src = user.picture.thumbnail;
    imagen.alt = user.email
    document.getElementById("section1").appendChild(imagen);
}
function createName(user){
    let name = document.createElement("h1");
    name.innerText = user.name.title +" "+ user.name.first +" "+ user.name.last ;
    document.getElementById("section2").appendChild(name);
}
function createAge(user){
    let age = document.createElement("p");
    age.innerText = "Edad: " + user.dob.age;
    document.getElementById("section3").appendChild(age);
}
function createEmail(user){
    let email = document.createElement("a");
    email.innerText = user.email;
    document.getElementById("section4").appendChild(email);
}