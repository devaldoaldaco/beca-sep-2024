class Alumno{
    constructor(nombre,matriculo,calificacion){
        this.nombre=nombre;
        this.matriculo=matriculo;
        this.calificacion=0;
    }
    calificar(nota){
        this.calificacion=nota
    }
}

let listaAlumnos=[
    new Alumno("Felipe",123),
    new Alumno("Juan",456),
    new Alumno("Pamela",789),
    new Alumno("Jesica",1011),
]
console.log(listaAlumnos)
//solo se ven sin calificar si se comentan los metodos calificar
listaAlumnos[0].calificar(7.5)
listaAlumnos[1].calificar(8.5)
listaAlumnos[2].calificar(9.5)
listaAlumnos[3].calificar(10)

console.log(listaAlumnos)