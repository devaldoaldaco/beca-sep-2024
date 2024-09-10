// CLASE PERSONA
class Persona {
    constructor(nombre, familia = {}, altura, peso) {
        this.nombre = nombre;
        this.familia = familia; 
        this.altura = altura;
        this.peso = peso;
    }

    saludar() {
        return `¡Hola! mi nombre es ${this.nombre}`;
    }

    imc() {
        const imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5) return "Bajo peso";
        if (imc < 25) return "Peso normal";
        if (imc < 30) return "Sobrepeso";
        return "Obeso";
    }

    mostrarFami() {
        let detalles = '';

        if (this.familia.padre) {
            detalles += `Padre: ${this.familia.padre}\n`;
        }
        if (this.familia.madre) {
            detalles += `Madre: ${this.familia.madre}\n`;
        }
        if (this.familia.hermanos && this.familia.hermanos.length > 0) {
            detalles += `Hermanos: ${this.familia.hermanos.join(', ')}\n`;
        }
        return detalles.trim();
    }
}

let persona = new Persona('Rigo Ivan', { padre: 'Juan Ivan', madre: 'Ana Maria', hermanos: ['Luis', 'Carlos'] }, 1.58, 58);

console.log(persona.saludar());
console.log(persona.imc());
console.log(persona.mostrarFami());

// CLASE CARRO -----------------------------------------------------------------------------------------------------------------
class Carro {
    constructor(marca, color, cilindraje) {
        this.marca = marca;
        this.color = color;
        this.cilindraje = cilindraje;
    }

    modelo() {
        return `¡Hola! el modelo del auto es ${this.marca}`;
    }

    modColor() {
        return `El modelo color del auto es ${this.color}`;
    }

    cilindros() {
        return `El motor es de ${this.cilindraje} cilindros`;
    }
}

let carro = new Carro('mazda', 'rojo cereza', 6);

console.log(carro.modelo());
console.log(carro.modColor());
console.log(carro.cilindros());
