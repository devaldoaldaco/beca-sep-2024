class Piedra {
    constructor(masa, volumen) {
        this.masa = masa;        
        this.volumen = volumen;  
    }

    densidad() {
        return this.masa / this.volumen;
    }
}

const piedra1 = new Piedra(10, 2);  
console.log(`Masa: ${piedra1.masa}, Volumen: ${piedra1.volumen}`)
console.log(`Densidad de la piedra: ${piedra1.densidad()}`);