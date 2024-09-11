class piedra {
    constructor(masa, volumen){
        this.masa = masa;
        this.volumen = volumen;
    }

    densidad(){
        return `¡Hola! la desidad es: ${this.masa / this.volumen}`
    }

}

let Pierdad = new piedra(10,10);

console.log(Pierdad.densidad());
