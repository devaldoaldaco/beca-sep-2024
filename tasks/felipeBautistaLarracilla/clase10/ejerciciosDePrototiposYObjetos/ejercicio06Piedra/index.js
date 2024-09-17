class Piedra{
  constructor(masa,volumen){
    this.masa = masa;
    this.volumen = volumen;
  }

  densidad(densidad){
    densidad = this.masa/this.volumen;
    console.log(`El valor de la densidad de la Piedra es: ${densidad}`);

  }
}

const prueba1 = new Piedra(500, 20);
console.log(prueba1);
prueba1.densidad();