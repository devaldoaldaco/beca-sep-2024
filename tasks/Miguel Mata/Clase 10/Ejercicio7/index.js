class Alumno {
    constructor(nombre, ingles, programacion, html) {
        this.nombre = nombre;
        this.ingles = ingles;
        this.programacion = programacion;
        this.html = html;
    }

    calcularMedia() {
        const suma = this.ingles + this.programacion + this.html;
        return suma / 3;
    }
}

const miguel = new Alumno('Juan Pérez', 8.5, 9.0, 7.5);

console.log("Nombre del alumno:" + miguel.nombre);
console.log("Media de calificaciones:" + miguel.calcularMedia());