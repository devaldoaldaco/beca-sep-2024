/* Crea una clase Ficha, con su constructor, que se usará para almacenar el 
   número de kilometros recorridos por una persona en cada sesión de ejercicios. 
   Las propiedades de la clase serán:
        - nombre 
        - sesiones
        - numsesiones
    
    El nombre es el de la persona, en las sesiones se almacenará el número de kilometros
    recorridos en cada sesión y numsesiones contiene el número de sesiones
    anotadas.

    Tiene dos métodos:
        - anotar: anota los kilometros.
        - media: calcula la media de kilometros recorridos
*/

class Ficha{
    constructor(nombre){
        this.nombre = nombre;
        this.sesiones = [];
        this.numsesiones = 0;
    }

    anotar(km){
        this.sesiones[this.numsesiones] = km;
        return this.numsesiones++;
    }

    media(){
        let media = 0;
        for(let i = 0; i < this.sesiones.length; i++){
            media += this.sesiones[i];
        }
        return media/this.numsesiones;
    }
}

var ficha = new Ficha("Denysse");
ficha.anotar(20);
ficha.anotar(5);
console.log(`${ficha.nombre} tiene una media de ${ficha.media()} kilometros`);
