class Persona {
  constructor (nombre, peso, altura, familiares) {
    this.nombre = nombre;
    this.peso = peso; 
    this.altura = altura;
    this.familiares = familiares;
  }
  saludar () {
   return `Hola, mi nombre es ${this.nombre}.`;
  }

  calcularIMC() {
    const imc = this.peso / (this.altura * this.altura);
    return `Tu indice de masa corporal es: ${imc.toFixed(2)}`;
  
  }

  listarFamiliares() {
    const etiquetas = ["Padre", "Madre", "Hermano"];
    let lista = "Tus familiares son: \n";
    this.familiares.forEach((familiar, index) => {
      const etiqueta = etiquetas[index] || `Familiar ${index + 1}`;
      lista += `- ${etiqueta}: ${familiar}\n`;

    });
    return lista;
   

  }

}

const ana = new Persona("Ana", 60, 1.65, ["Juan", "Maria", "luis"]);

console.log("Informacion de Ana:");
console.log(ana.saludar());
console.log(ana.calcularIMC());
console.log(ana.listarFamiliares());

