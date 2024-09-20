  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two');
});
console.log(promise2)