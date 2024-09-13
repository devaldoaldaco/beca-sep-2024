class Alumno {
    constructor(nombre, calIngles, calProg, calHtml){
        this.nombre = nombre;
        this.calIngles = calIngles;
        this.calProg = calProg;
        this.calHtml = calHtml;

    }

    calcMedia(){
        return this.calIngles + this.calProg + this.calHtml / 3;
    }

    mostar(){
        console.log(`El alumno: ${this.nombre}` )
        console.log(`Tiene una media de : ${this.calcMedia()}`)
    }

  

}
const alumno1 = new Alumno('Axel', 8, 5, 10);
const alumno2 = new Alumno('Rene', 9, 2, 6);

alumno1.calcMedia()
alumno1.mostar();
alumno2.calcMedia();
alumno2.mostar();