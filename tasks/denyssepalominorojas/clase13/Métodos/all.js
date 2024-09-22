  
  /* Promesas que se resolveran en 1 segundo, mostrando los mensajes 
      con los nombres de su respectiva promesa
  */ 
  var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({mensaje: 'Omar'}), 1000);
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({mensaje: 'Denysse'}), 1000);
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({mensaje: 'Levana'}), 1000);
  });

  // Esta promesa se rechaza inmediatamente
  var p4 = new Promise((resolve, reject) => { 
    reject("reject");
  });

/* Promise.all se rechaza si uno de los elementos ha sido rechazado.
   Si tienes cuatro promesas que se resuelven después de un timeout y una de ellas 
   falla inmediatamente, entonces Promise.all se rechaza inmediatamente.*/
Promise.all([p1, p2, p3, p4])
    .then((values) => { //values retorna un objeto Promise que es resuelto con el valor dado.
        console.log(values);
    })
    // reason es el motivo del rechazo de la promesa
    .catch((reason) => {
        console.log({reason}); 
    });


