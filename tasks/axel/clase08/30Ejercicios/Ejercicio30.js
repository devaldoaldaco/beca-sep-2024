function numAsteriscos(array){
    return array.flat().filter(arr => arr === '*').length;
}
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))