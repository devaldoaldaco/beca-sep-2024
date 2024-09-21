/* Para comenzar vamos a crear un objeto sencillo que se usa para guardar
   información sobre las calificaciones de un alumno. El curso contiene 
   tres materias:
        - ingles
        - programación
        - HTML 
    y el objeto contendra el nombre del alumno y la calificación en cada una
    de ellas. 
    El script imprimirá el nombre y la media de sus calificaciones.
*/

const alumno = {
        //parseFloat es una función en js que se utiliza para convertir un string en un numero flotante (decimal)
        nombre: prompt("Ingrese el nombre deel alumno:"),
        ingles: parseFloat(prompt("Ingrese la calificación de Inglés:")),
        programacion: parseFloat(prompt("Ingrese la calificación de Programación:")),
        html: parseFloat(prompt("Ingrese la calificación de html:"),

        // Método para calcular la media de las calificaciones
        media: fuction() {
                const total = this.ingles + this.programacion + this.html;
                return total / 3;
        }
};

// Calcular la media y mmostrar el resultado 
const mediaCalificaciones = alumno.media();
// alert sirve para mostrar un cuadro de dialogo simple al usuario
// y aqui la utilicé para mostrar la media de calificaciones, e indicando que quiero dos decimales.
alert(`Alumno: ${alumno.nombre}\n Media de calificaciones: ${mediaCalificaciones.toFixed(2)}`);
