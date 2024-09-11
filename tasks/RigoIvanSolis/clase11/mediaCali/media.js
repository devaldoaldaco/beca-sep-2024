const calificaciones = {
    alumno: 'Rigo Ivan',
    Ingles: 10,
    Programacion: 10,
    Html: 10,
    media: function() {
        let suma = this.Ingles + this.Programacion + this.Html;
        let media = suma / 3;

        return media;
    }
}

console.log(`Hola, la media de las calificaciónes del alumno ${calificaciones.alumno} es : ${calificaciones.media()}`);
 