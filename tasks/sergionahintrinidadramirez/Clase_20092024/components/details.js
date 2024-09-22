import { html, LitElement } from "lit";
import { styleDetails } from "./styles/styleDetails";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.0/+esm';

export class Details extends LitElement{    
    static properties = {
        banco: {type: Object}
    };
    
    static styles = styleDetails
    
    constructor() {
        super();
        this.banco = {};
    }
    _mostrarTicketMovimiento(movimiento){
        Swal.fire({
            title: 'Detalles del Movimiento',
            html: `
                <div style="font-family: Arial, sans-serif; font-size: 16px;">
                    <div style="margin-bottom: 10px;">
                        <strong>Beneficiario:</strong> Mario Arturo Sanchez
                    </div>
                    <div style="margin-bottom: 10px;">
                        <strong>Banco:</strong> ****
                    </div>

                    <div style="margin-bottom: 10px;">
                        <strong>Tipo de Movimiento:</strong> ${movimiento.tipoMovimiento}
                    </div>
                    <div style="margin-bottom: 10px;">
                        <strong>Tipo de Pago:</strong> ${movimiento.tipoPago}
                    </div>
                    <div style="margin-bottom: 10px;">
                        <strong>Importe:</strong> $${movimiento.importe}
                    </div>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Aceptar',
           
        });
    }
    _volveraDashboard(){
        this.dispatchEvent(new CustomEvent("volver-dashboard",{
            bubbles:true,
            composed:true
        }));
    }
    render(){
        if(!this.banco){
            return html `
            <p>Cargando Información....</p>`
        }
        return  html`
         <div class="details-container">
                <h1 id="title">Detalles de la Tarjeta</h1>
                <div class="card-details">
                    <h2>Información de la Tarjeta</h2>
                    <p>Número de Tarjeta: <span id="det-tarjeta">${this.banco.usuario.tarjeta}</span></p>
                    <p>Número de Cuenta: <span id="det-cuenta">${this.banco.usuario.cuenta}</span></p>
                    <p>Saldo: <span id="det-saldo">${this.banco.usuario.saldo}</span></p>
                </div>
                <div class="movements-container">
                    <h2>Movimientos</h2>
                    <ul class="movimientos-lista" id="lista-movimientos">
                        <!-- Los elementos de la lista se añadirán dinámicamente aquí -->
                        ${this.banco.movimiento.length > 0 
                    ? this.banco.movimiento.map((mov, index) => html`
                        <li class="movimiento-item" @click="${() => this._mostrarTicketMovimiento(mov)}">
                            <div class="movimiento-info">
                                <p>Descripción:<span class="tipo-movimiento">${mov.tipoPago}</span></p>
                                <p>Tipo: <span class="tipo-movimiento">${mov.tipoMovimiento} </span></p>
                            </div>
                            <p>Monto: <span class="importe">${mov.importe >= 0 ?` $${mov.importe}` : `-$${Math.abs(mov.importe)}`}</span></p>
                        </li>
                        `)
                        : html`<li>No hay movimientos disponibles.</li>`
                    }
                    </ul>
                </div>
                <button @click="${this._volveraDashboard}" class="volver-button">Volver al Dashboard</button>
            </div>      
            `;
    }
}