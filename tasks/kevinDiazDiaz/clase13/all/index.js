function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let completedPromises = 0;
    let results=[];


    for(let i=0; i<promises.length; i++){
        Promise.resolve(promises[i])
            .then((result) => {
              results [i]= result;  
              completedPromises++;

                if(completedPromises === promises.length){
                    resolve(results);
                }
            })

            .catch((error) => {
                reject (error);
            });
    }
  });
}



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 1'), 1000)});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 2'), 2000)});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 3'), 1500)});


myPromiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log('Todos los resultados son:', results);

  })
  .catch((error) => {
    console.error('Error en alguna de las promesas:', error);
  });
