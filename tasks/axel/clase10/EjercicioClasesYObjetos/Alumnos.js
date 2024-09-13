class Alunmo{
    constructor(nombre, matricula, calificacion ){
        this._nombre = nombre;
        this._matricula = matricula;
        this._calificacion = calificacion;
    }
    get calificacion(){
        return this._calificacion;
    }

    set calificacion(nuevaCalificacion){
        if(nuevaCalificacion < 0 && nuevaCalificacion > 10){
            console.log('Ingresa una calificacion valida');
        }else {
            this._calificacion = nuevaCalificacion;
        }
    }

    mostrarAlumno(){
        console.log(`Hola, mi nombre es ${this._nombre}, mi matricula es ${this._matricula} y mi calificacion es ${this._calificacion}.`)
    }
}

const alumno1 = new Alunmo('Axel', 1928324, 0);
const alumno2 = new Alunmo('Erick', 1928326, 0);
const alumno3 = new Alunmo('Damian', 1928321, 0);
const alumno4 = new Alunmo('Mayra', 1928326, 0);

alumno1.calificacion = 8;
alumno2.calificacion = 9;
alumno3.calificacion = 7;
alumno4.calificacion = 2;
alumno1.mostrarAlumno();
alumno2.mostrarAlumno();
alumno3.mostrarAlumno();
alumno4.mostrarAlumno();