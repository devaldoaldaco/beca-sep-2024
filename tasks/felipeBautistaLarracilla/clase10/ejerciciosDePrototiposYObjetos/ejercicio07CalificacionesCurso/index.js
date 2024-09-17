class Alumno {
  constructor(nombre,calIngles,calProgra,calHTML){
    this.nombre = nombre;
    this.calIngles = calIngles;
    this.calProgra = calProgra;
    this.calHTML = calHTML;
    this.media = 0;
  }
  mostrar(){
    console.log(`El alumno: ${this.nombre}
      Calificacion de Ingles: ${this.calIngles}
      Calificacion de Programacion: ${this.calProgra}
      Calificacion de HTML: ${this.HTML}
      La calificacion promedio es: ${this.media}`);
    }

    calcularMedia(){
      this.media = (this.calIngles + this.calProgra + this.calHTML)/3;
    }
  }


const alumno1 = new Alumno('Felipe',8,9,10);
const alumno2 = new Alumno('Alex',7,9,10);
alumno1.calcularMedia();
alumno1.mostrar();

alumno2.calcularMedia();
alumno2.mostrar();
