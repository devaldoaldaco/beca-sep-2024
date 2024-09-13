

function capitalizar(texto){
   let result = '';
   result = texto.charAt(0).toUpperCase() + texto.slice(1).toLocaleLowerCase();
   console.log(result)
}

capitalizar('pedro');