/* En esta propuesta debes crear una clase de nombre piedra (con class o con fuction)
   con dos propiedades:
        - masa
        - volumen 
    y un método densidad que calcule este valor (masa/volumen). Luego intancia al 
    menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta
    el método densidad.
*/

class Piedra{
    constructor(masa, volumen){
        this.masa = masa;
        this.volumen = volumen;
    }

    densidad(){
        return this.masa/this.volumen;  
    }
}

const piedra = new Piedra(20, 10);
console.log("La densidad de la piedra es: "+piedra.densidad()+ " kg/m^3");