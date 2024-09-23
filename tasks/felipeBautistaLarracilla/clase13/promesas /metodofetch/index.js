function getPersons(done){
  const results  = fetch("https://randomuser.me/api/?results=16");

  results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

getPersons(data => {
  console.log(data);
 data.results.forEach(user => {
  const article  = document.createRange().createContextualFragment(`
    <article>
      <div class = "image-container">
        <img src ="${user.picture.large}">
      </div>
      <h2>${user.name.first}</h2>
   `);
   const main = document.querySelector("main");
   main.append(article);
 });
 

})