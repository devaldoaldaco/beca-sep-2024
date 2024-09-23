const primeraPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("succes"), 3000)
});
const segundaPromesa = new Promise((resolve, reject)=>{
    const check = false
    if (check){
        resolve("succes")
    } else{
        reject("error")
    }

})


function promiseAll(callback){
    let respuesta = ''
    let respuesta2 = '' 
    primeraPromesa
        .then((msj)=>{
            console.log("Primera promesa:" + msj)
            respuesta = msj;
            return segundaPromesa;
        })
        .then((msj2)=>{
            console.log("Segunda promesea: " + msj2)
            respuesta2 = msj2;
            callback(respuesta, respuesta2);
        })
        .catch((error)=>{
            console.log("Segunda promesa: " + error)
            respuesta2 = error;
            callback(respuesta, respuesta2)
        })

    
}

function checkPromise(respuesta, respuesta2){

        if(respuesta, respuesta2 == "succes"){
            console.log("se ejecuta el then")
        }else{
            console.log("se ejecuta el catch")
        }
}

promiseAll(checkPromise)

