// como funcion el all()
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    }).catch((error) => {
        console.log(error)
    });

function all(array){
    return new Promise((resolve, reject) => {
        for(let i = 0; i < array.length; i++){
            array[i].then((result) => {
            resolve(result)
        }).catch((error) => {
            reject(error)
        })
        }
    })
}

// como funcion el race()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two');
});
console.log(promise2)
  
Promise.race([promise1, promise2])
.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error)
});
function race(array){
    return new Promise((resolve, reject) => {
        for(let i = 0; i < array.length; i++){
            array[i].then((result) => {
            resolve(Math.min(array))
        }).catch((error) => {
            reject(error)
        })
        }
    })
}