function Animal(nombre) {
  this.nombre = nombre;
}
Animal.prototype.saludar = function() {
  console.log('Hola, soy un ${this.nombre}');
};

function Perro(nombre, raza) {
  Animal.call(this, nombre);
  this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function() {
  console.log('Guau!');
};

const miPerro = new Perro('Max', 'Labrador');
miPerro.saludar();
miPerro.ladrar();