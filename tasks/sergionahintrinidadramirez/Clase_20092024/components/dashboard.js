import { html, LitElement } from "lit";
import { styleDashboard } from "./styles/styleDashboard";

export class Dashboard extends LitElement {
    static styles = styleDashboard
    constructor() {
        super();
    }

    render() {
        return html`
        <h1 id="title">Dashboard</h1>
            <section class="dashboard-container">
                <h1>Hola, <span id="nombre-usuario"></span></h1>
                <div class="cuenta">
                    <h2>Cuenta en pesos</h2>
                    <div class="info-cuenta">
                        <span id="cuenta">Número de cuenta: xxxx-xxxx</span>
                        <span id="saldo">Saldo: $0.00</span>
                    </div>
                </div>
                <div class="tarjeta">
                    <h2>Tarjeta</h2>
                    <div class="info-tarjeta">
                        <span id="tarjeta">xxxx-xxxx-xxxx-xxxx</span>
                        <button id="detalles-tarjeta">Detalles</button>
                    </div>
                </div>
            </section>`
    }
}