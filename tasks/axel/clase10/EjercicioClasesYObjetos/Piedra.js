class Piedra{
    constructor(masa, volumen, densidad){
        this.masa = masa
        this.volumen = volumen
        this.densidad = volumen
    }

    calcDensidad(){
        this.densidad = this.masa/this.volumen
        console.log(`La densidad de la piedra es ${this.densidad}`)
    }
}

const granito = new Piedra(12, 33)
granito.calcDensidad();