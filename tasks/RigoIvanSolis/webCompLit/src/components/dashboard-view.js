import { LitElement, html, css } from "lit";

class DashboardView extends LitElement {
    static properties = {
        accounts: { type: Array },
        loading: { type: Boolean }
    }

    constructor() {
        super();
        this.accounts = [];
        this.loading = false;
    }

    static styles = css`
        :host {
            display: block;
            height: 100vh; 
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            background-color: #f5f5f5;
        }

        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border-left-color: #09f;
            animation: spin 1s ease infinite;
            margin: 0 auto; /* Centrar el spinner */
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
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
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
        }

        th {
            background-color: #007bff;
            color: white;
        }

        tr:hover {
            background-color: #f1f1f1;
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
                ${this.loading ? html`
                     <h1>Espere, cargando datos...</h1>
                    <div class="spinner"></div>` : this.renderTable()}
            </div>
        `;
    }

    renderTable() {
        return html`
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.accounts.map(account => html`
                        <tr>
                            <td @click="${() => this.showDetails(account)}">${account.name}</td>
                            <td @click="${() => this.showDetails(account)}">${account.email}</td>
                        </tr>
                    `)}
                </tbody>
            </table>

            <button @click="${this.back}">Salir</button>
        `;
    }

    showDetails(account) {
        this.loading = true;
        setTimeout(() => {
            this.dispatchEvent(new CustomEvent('view-details', { detail: account }));
            this.loading = false; 
        }, 2000);
    }

    back() {
        this.dispatchEvent(new CustomEvent('back-to-login'));
    }
}

customElements.define('dashboard-view', DashboardView);
