class piedra{
    constructor(masa,volumen){
        this.masa=masa
        this.volumen=volumen
    }
    densidad(){
        return masa/volumen;
    }
}

const miPiedra = new Piedra(10, 5); 
console.log(miPiedra.densidad()); 
