/* Para implementar un grupo de alumnos de un curso se crea una lista de objetos alumno.
   Cada objeto alumno se caracteriza por el nombre del alumno, su número de matrícula
   y su calificación.

   El objeto tiene un método para poner la calificación: calificar(nota).
   Crea el sript para implementar un grupo de 4 alumnos.
*/

    class Alumno{
        constructor(nombre, matricula){
            this.nombre = nombre;
            this.matricula = matricula;
            this.calificacion = 0;
        }

        calificar(nota){
            this.nota = nota; 
        }
    }

    var grupo = new Array(4);
    grupo[0] = new Alumno("Denysse", 20241);
    grupo[1] = new Alumno("Omar", 20242);
    grupo[2] = new Alumno("Levana", 20243);
    grupo[3] = new Alumno("Luan", 20244);

    grupo[0].calificar(9);
    grupo[1].calificar(10);
    grupo[2].calificar(8);
    grupo[3].calificar(5);
    
    console.log("Alumno: "+ grupo[0].nombre + " saco un: " + grupo[0].nota);
    console.log("Alumno: "+ grupo[1].nombre + " saco un: " + grupo[1].nota);
    console.log("Alumno: "+ grupo[2].nombre + " saco un: " + grupo[2].nota);
    console.log("Alumno: "+ grupo[3].nombre + " saco un: " + grupo[3].nota);