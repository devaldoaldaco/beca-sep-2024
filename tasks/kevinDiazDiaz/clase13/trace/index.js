function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {

        for(let i=0; i<promises.length; i++){
            Promise.resolve(promises[i])
                .then(resolve)
                .catch(resolve);
        }
    });
  }



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 1 resuelta'), 1000);
});
  
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 2 resuelta'), 500);
});
  
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promesa 3 rechazada'), 700);
});
  
myPromiseRace([promise1, promise2, promise3])
    .then((result) => {
      console.log('Resultado de la primera promesa resuelta:', result);
    })
    .catch((error) => {
      console.error('Error de la primera promesa rechazada:', error);
    });