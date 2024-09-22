export class Banco{
    constructor(usuario){
        this.usuario = usuario;
        this.movimiento = [];
    }
    agregarMovimiento(movimiento){
        this.movimiento.push(movimiento)
    }
    obtenerMovimientos(){
        return this.movimiento;
    }
}