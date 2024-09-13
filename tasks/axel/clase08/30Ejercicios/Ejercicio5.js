
function likes(number){
    return (number < 1000) ?  number.toString() :
           (number < 1_000_000) ? Math.trunc(number / 1000) + 'K' :
           Math.trunc(number / 1_000_000) + 'M'
}

console.log(983)