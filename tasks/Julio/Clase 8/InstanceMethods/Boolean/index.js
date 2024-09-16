let encabezados= document.getElementsByTagName('h2');

/* Boolean.prototype.toSource()

    Devuelve una cadena que representa el código fuente del objeto.
    //No displinble en todos los navegadores, en algunas páginas ya se considera deprecado pero en mdn no.
*/

 /*   function book(title, publisher, price) {
        this.title = title;
        this.publisher = publisher;
        this.price = price;
    }         
    let newBook = new book("Perl","Leo Inc",200);

    let resultado1= `La cadena que representa el codigo fuente del objeto es: ${newBook.toSource()}`;

    encabezados[0].innerHTML= resultado1; */

/* Boolean.prototype.valueOf()

    Regresa el valor primitivo de un objeto booleano.
    Por lo general, JavaScript lo llama internamente y no explícitamente en el código.
*/

    const x = new Boolean();

    console.log(x.valueOf());
    // Expected output: false

    const y = new Boolean('Mozilla');

    console.log(y.valueOf());
    // Expected output: true

    let resultado1= `El valor primitivo de X es: ${x.valueOf()}`;
    encabezados[0].innerHTML= resultado1;

    let resultado2= `El valor primitivo de Y es: ${y.valueOf()}`;
    encabezados[1].innerHTML= resultado2;