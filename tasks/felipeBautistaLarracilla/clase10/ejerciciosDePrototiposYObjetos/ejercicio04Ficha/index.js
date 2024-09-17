class Ficha{
  constructor(nombre,sesiones,numsesiones){
    this.nombre = nombre;
    this.sesiones = sesiones;
    this.numsesiones = numsesiones;
    this.media = 0;
  }
  anotar(kilometros){
    this.numsesiones ++;
    this.sesiones += kilometros;

  }
  medida(){
    this.media = this.sesiones/this.numsesiones;
    return
  }

  mostrar(){
    console.log(`Nombre de la persona: ${this.nombre}
    Numero de sesiones: ${this.numsesiones}
    Promedio de kilometros es: ${this.media} `);
  }
}

const persona1 = new Ficha('Felipe',0,0);
console.log(persona1);
persona1.anotar(10);
persona1.anotar(14);
persona1.anotar(3);
persona1.anotar(9);
persona1.anotar(10);
console.log(persona1);
persona1.medida();
persona1.mostrar();