// Boolean - instance methods
/* Boolean.prototype.toString() : Valida el bollean y trae en un string true o false*/
const flag1 = new Boolean(true);
console.log(flag1.toString());// Expected output: "true"

const flag2 = new Boolean(0);
console.log(flag2.toString());// Expected output: "false"

/* Boolean.prototype.valueOf() : Valida si no hay contenido manda un false y si hay contenido un true */
const x = new Boolean();
console.log(x.valueOf());// Expected output: false

const y = new Boolean('Mozilla');
console.log(y.valueOf());// Expected output: true