class Alumno {
    constructor(nombre, matricula) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.calificacion = null;  
    }

    calificar(nota) {
        this.calificacion = nota;
    }

    imprimir() {
        console.log("--------------------")
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Calificación: ${this.calificacion !== null ? this.calificacion : 'Sin calificación'}`);
    }
}

const alumno1 = new Alumno('Ana García', '001');
const alumno2 = new Alumno('Carlos Pérez', '002');
const alumno3 = new Alumno('María Sánchez', '003');
const alumno4 = new Alumno('Juan Torres', '004');

alumno1.calificar(9.5);
alumno2.calificar(8.7);
alumno3.calificar(7.2);
alumno4.calificar(9.0);

const grupo = [alumno1, alumno2, alumno3, alumno4];
grupo.forEach(alumno => alumno.imprimir());