
// pending ...

/*const objeto = new ((resolve, reject) =>{
    //se lanza la solicitud
    const response = solicitudHTTP();
    const estadosDeError = ['400','401', '403', '500']
    if(response.status === '200'){
        resolve(response);
    } else if (estadosDeError.includes(response.status)){
        reject(response.error)
    }
});

objeto
    .then((response) =>{
        const p = document.createElement('p');
        p.innerText = response;

    })
    .catch (error => {
        const modal = document.createElement('dialog');
        modal.innerText = error;
        console.log(modal.innerText);
        

    });


//status 200 ok el servidor nos devolvio la información que solicitamos.
// resolve => pending => fulfilled => 200 ok
//reject => pending => reject => */





const promise1 = new Promise ((resolve, reject) => {

    setTimeout(() => resolve({mensaje: 'Se resolvio la promesa', status:200}),
        3000
    );

});

promise1.then((mensaje) => {
    if(mensaje.status === 200) {
        console.log(mensaje);
    } else {
        console.log('error');
        
    }
});


//metodo all en promesas -> crea una promesa que se resulve si el arreglo que le paso como argumento se cumple por completo
//trace -> cualquiera de las dos se reuelve o se rechaza hago algo


