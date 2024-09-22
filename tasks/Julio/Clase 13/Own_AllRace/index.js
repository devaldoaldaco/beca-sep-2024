

const promesa1= new Promise((resolve,reject)=>{

    if(resolve){
        resolve("Se resolvió de manera correcta");
    }else{
        reject("Tu peticion fue rechazada");
    }
})


const promesa2= new Promise((resolve,reject)=>{

    if(resolve){
        resolve("Se resolvió de manera correcta, 2");
    }else{
        reject("Tu peticion fue rechazada, 2");
    }
})


var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "uno");
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "dos");
  });

  var p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "tres");
  });
  
  //Race funciona con mas de 2 promesas
  Promise.race([p1, p2]).then((value) => {
    console.log(value); // "dos"
    // Ambas se resuelven, pero la p2 antes.
  });

  //Mi propia version de Race, pero solo para 2 promesas
function myOwnrace(promisesArray){

   return  promisesArray[0] ? promisesArray[0] : promisesArray[1];
}

myOwnrace([p1,p2]);


//mi propia version de All

function myOwnAll(promisesArray){

    let count=0;
    for (const element of promisesArray) {
        
            if(element)
                count++;
    }

    return count===promisesArray.length ? "resolved" : "rejected";
}

console.log(myOwnAll([p1,p2,p3]));
