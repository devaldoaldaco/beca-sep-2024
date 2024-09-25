import { LitElement, html, css } from 'lit';

export  class MyDetails extends LitElement {
    static get properties() {
        return {
        nombre: { type: String }
    }
    };

    constructor() {
        super();
        this.nombre = 'Denysse';
    }
    
    static styles = css`
        * {
            border-radius: 3%;
            padding: 0;
            margin: 0;
        }

        section {
            width: 300px;
            text-align: center;
            border: 2px solid #006EC1;
            padding: 15px;
            background-color: white; 
        }

        p {
            padding: 20px;
            font-size: 20px;
        }

        h1 {
            padding: 20px;
            color: #006EC1;
            font-size: 30px;
            margin-bottom: 20px;
        }

        button {
            width: 25%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 15px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    `;

    render() {
        return html`
            <section>
                <h1>Detalles de la Cuenta</h1>
                <h2>Hola ${this.nombre}</h2>
                <div>
                    <p>Saldo Actual: $1,234</p>
                </div>
                <div>
                    <h2>Transferencias Recientes</h2>
                    <p>Transferencia: -$5,569.00 el 12/09/2024</p>
                </div>
                <div>
                    <button @click="${this.handleButtonDetails}">Regresar</button>
                </div>
            </section>
        `;
    }

    handleButtonDetails() {
            this.dispatchEvent(new CustomEvent('details', {bubbles: true, composed: true}));
    }
}

