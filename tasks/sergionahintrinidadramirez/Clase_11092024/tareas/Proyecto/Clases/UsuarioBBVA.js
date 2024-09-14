export class UsuarioBBVA {
    constructor(nombre, cuenta, saldo, tarjeta) {
        this.nombre = nombre;
        this.cuenta = cuenta;
        this.saldo = saldo;
        this.tarjeta = tarjeta;
    }
    ocultardatosSencibles() {
        this.cuenta = this.cuenta.slice(0, -5).replace(/\d/g, '*') + this.cuenta.slice(-5);
        this.tarjeta = this.tarjeta.slice(0, -5).replace(/\d/g, '*') + this.tarjeta.slice(-5);
    }
}