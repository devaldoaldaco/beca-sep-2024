
class Alumno{
  constructor(nombre,matricula){
    this.nombre = nombre;
    this.matricula = matricula;
    this.calificacion = null;//Inicialmente sin calificacion
  }
//Metodo para poner la calificacion del alumno
calificar(nota){  
  this.calificacion = nota;
}

//Metodo para imprimir los datos de alumno 
imprimirAlummno(){
  console.log(`Nombre: ${this.nombre} 
    Matricula: ${this.matricula}
    Calificacion: ${this.calificacion !== null ? this.calificacion
      : "No calificado"}`);
  }
}

//Crear un grupo de 4 alumnos 
const grupo = [ new Alumno('Alejandro',12345),
  new Alumno('Vanessa',11111),
  new Alumno('Enya',55555),
  new Alumno('Jalil',99999)
];
//imprimir list de alumnos
grupo.forEach(alumno => {//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
  alumno.imprimirAlummno();
});
//calificando alumnos 
grupo[0].calificar(8.5);
grupo[1].calificar(9.0);
grupo[2].calificar(10);
grupo[3].calificar(6);


grupo.forEach(alumno =>{
  alumno.imprimirAlummno();
});