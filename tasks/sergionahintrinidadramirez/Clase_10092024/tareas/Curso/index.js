class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;                 
        this.calificaciones = calificaciones;
    }

    // Método para calcular la media de las calificaciones
    calcularMedia() {
        const notas = Object.values(this.calificaciones); 
        const suma = notas.reduce((a, b) => a + b, 0);    
        const media = suma / notas.length
        return media.toFixed(2);                       
    }
}

const alumno1 = new Alumno("Armando Mendoza", {
    ingles: 85,
    programacion: 90,
    html: 88
});

console.log(`Nombre del alumno: ${alumno1.nombre}`);
console.log(`Media de calificaciones: ${alumno1.calcularMedia()}`);