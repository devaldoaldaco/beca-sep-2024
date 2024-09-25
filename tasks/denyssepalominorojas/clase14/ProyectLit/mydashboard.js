//Se importa LitElement, html, y css desde la biblioteca lit.
import { LitElement, html, css } from 'lit';

export class MyDashboard extends LitElement {
    static get properties(){ 
        return {// definición de propiedades
        nombre: { type: String }
        }
    };

    constructor() {
        super();
        this.nombre = 'Denysse';
    }

    static styles = css`
        * {
            padding: 0;
            margin: 0;
        }

        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
            text-align: center;
            border: 2px solid #006EC1;
            padding: 15px;
            background-color: #009EE5;
            border-radius: 3%;
        }

        p {
            padding: 20px;
            font-size: 20px;
        }

        h1 {
            padding: 20px;
            color: white;
            font-size: 30px;
            margin-bottom: 20px;
        }

        button {
            width: 30%;
            padding: 10px;
            background-color: #c0eaff;
            color: black;
            border: 2px solid #007bff;
            border-radius: 20px;
            cursor: pointer;
            font-size: 15px;
        }

        button:hover {
            background-color: white;
        }
    `;

    render() {
        return html`
            <section>
                <h1>Hola ${this.nombre}</h1>
                <div id="apartados">
                    <p>Transferir</p>
                    <p>Oportunidades</p>
                    <p>Retiro sin tarjeta</p>
                </div>
                <br>
                <button @click=${this.handleButtonDashboard}>Ver más</button>
            </section>
        `;
    }

    handleButtonDashboard() {
        this.dispatchEvent(new CustomEvent('dashboard', {bubbles: true, composed: true}));
    }
}
