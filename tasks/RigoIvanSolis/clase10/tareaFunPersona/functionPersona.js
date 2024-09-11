// FUNCION CONSTRUCTORA PERSONA
function Persona(nombre, familia = {}, altura, peso) {
    this.nombre = nombre;
    this.familia = familia; 
    this.altura = altura;
    this.peso = peso;

    this.saludar = function() {
        return `¡Hola! Mi nombre es ${this.nombre}`;
    };

    this.imc = function() {
        if (this.altura === 0) return "Altura no puede ser cero";
        const imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5) return "Bajo peso";
        if (imc < 25) return "Normal";
        if (imc < 30) return "Sobrepeso";
        return "Obeso";
    };

    this.mostrarFami = function() {
        let detalles = '';

        if (this.familia.padre) {
            detalles += `Padre: ${this.familia.padre}\n`;
        }
        if (this.familia.madre) {
            detalles += `Madre: ${this.familia.madre}\n`;
        }
        if (Array.isArray(this.familia.hermanos) && this.familia.hermanos.length > 0) {
            detalles += `Hermanos: ${this.familia.hermanos.join(', ')}\n`;
        }
        return detalles.trim();
    };
}

let persona = new Persona('Rigo Ivan', { padre: 'Juan Ivan', madre: 'Ana Maria', hermanos: ['Luis', 'Carlos'] }, 1.58, 58);

console.log(persona.saludar());
console.log(persona.imc());
console.log(persona.mostrarFami());
