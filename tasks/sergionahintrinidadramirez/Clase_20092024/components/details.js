import { html, LitElement } from "lit";
import { styleDetails } from "./styles/styleDetails";

export class Details extends LitElement{
    static styles = styleDetails
    constructor(){
        super();
    }

    render(){
        return  html`
         <div class="details-container">
                <h1 id="title">Detalles de la Tarjeta</h1>
                <div class="card-details">
                    <h2>Información de la Tarjeta</h2>
                    <p>Número de Tarjeta: <span id="det-tarjeta">-</span></p>
                    <p>Número de Cuenta: <span id="det-cuenta">-</span></p>
                    <p>Saldo: <span id="det-saldo">-</span></p>
                </div>
                <div class="movements-container">
                    <h2>Movimientos</h2>
                    <ul class="movimientos-lista" id="lista-movimientos">
                        <!-- Los elementos de la lista se añadirán dinámicamente aquí -->
                    </ul>
                </div>
            </div>      `;
    
    }
}