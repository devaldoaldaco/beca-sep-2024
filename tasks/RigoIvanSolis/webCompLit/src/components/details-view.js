import { LitElement, html, css } from "lit";

class DetailsView extends LitElement {
    static properties = {
        account: { type: Object }
    }

    constructor() {
        super();
        this.account = {};
    }

    static styles = css `
        :host {
            display: block;
            height: 100vh; 
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            background-color: #f5f5f5;
        }

        .container {
            width: 600px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            margin-bottom: 10px;
            font-size: 24px;
            color: #333;
        }

        h2 {
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 20px;
            color: #555;
        }

        p {
            margin: 5px 0;
            font-size: 16px;
            color: #666;
        }

        ul {
            list-style-type: none;
            padding: 0;
            width: 100%;
        }

        li {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            color: #444;
        }

        li:last-child {
            border-bottom: none;
        }

        button {
            width: 50%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 20px;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }
    `;

    render() {
        return html`
            <div class="container">
                <h1>Detalles de la Cuenta</h1>
                <p><strong>Nombre:</strong> ${this.account.name}</p>
                <p><strong>Email:</strong> ${this.account.email}</p>
                <p><strong>Saldo:</strong> $${this.account.balance || 'No disponible'}</p>
                <p><strong>Núm. de cuenta:</strong> ******** ${this.account.accountNumber.slice(-4)}</p>
                <h2>Transacciones</h2>
                <ul>
                    ${this.account.transactions.map(transaction => html`
                        <li>
                            <strong>${transaction.date}:</strong> $${transaction.amount.toFixed(2)} - ${transaction.description}
                        </li>
                    `)}
                </ul>
                <button @click="${this.back}">Regresar</button>
            </div>
        `;
    }

    back() {
        this.dispatchEvent(new CustomEvent('back-to-dashboard'));
    }
}

customElements.define('details-view', DetailsView);
