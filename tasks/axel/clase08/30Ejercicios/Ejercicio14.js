function sumarArreglo(arrays, first, second){
    let sum = 0;
    for (let i = first; i <= second; i++) {
        sum += arrays[i];
    }
    return sum;
}
console.log(sumarArreglo([1, 2, 3], 1, 2))