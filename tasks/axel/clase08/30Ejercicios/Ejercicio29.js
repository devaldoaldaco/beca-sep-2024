function numAsteriscos(array){
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === '*'){
            counter ++;
        }
    }
    return counter;
}
console.log(numAsteriscos(['', '*', '', '*']))