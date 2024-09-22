import { html, LitElement } from "lit";
import { styleDashboard } from "./styles/styleDashboard";

export class Dashboard extends LitElement {
    static properties = {
        banco: { type: Object }
    };

    static styles = styleDashboard

    constructor() {
        super();
        this.banco = {};
    }
    _verDetalles() {
        console.log("Boton clickeado")
        this.dispatchEvent(new CustomEvent("ver-detalles", {
            detail: this.banco,
            bubbles: true,
            composed: true
        }));
    }
    _volverlogin(){
        console.log("Cierrate")
        this.dispatchEvent(new CustomEvent("cierra-sesion",{
            bubbles: true,
            composed: true
        }));
    }
    render() {
        console.log(`Banco en Dashboard: ${JSON.stringify(this.banco)}`);
        if (!this.banco) {
            return html`
            <p>Cargando Información....</p>`
        }
        return html`
        <h1 id="title">Dashboard</h1>
      <section class="dashboard-container">
        <h1>Hola, <span id="nombre-usuario">${this.banco.usuario.nombre || 'Usuario'}</span></h1>
        <div class="cuenta">
          <h2>Cuenta en pesos</h2>
          <div class="info-cuenta">
            <span id="cuenta">Número de cuenta: ${this.banco.usuario.cuenta || 'xxxx-xxxx'}</span>
            <span id="saldo">Saldo: $${this.banco.usuario.saldo || '0.00'}</span>
            <button @click="${this._volverlogin}" class="volver-button">Cierra de sesion</button>
          </div>
        </div>
        <div class="tarjeta">
          <h2>Tarjeta</h2>
          <div class="info-tarjeta">
            <span id="tarjeta">${this.banco.usuario.tarjeta || 'xxxx-xxxx-xxxx-xxxx'}</span>
            <button id="detalles-tarjeta" @click="${this._verDetalles}">Detalles</button>
          </div>
        </div>
      </section>
      
      `
    }
}