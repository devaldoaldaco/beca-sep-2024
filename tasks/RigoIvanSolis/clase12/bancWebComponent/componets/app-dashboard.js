export class appDashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
         <style>
            :host {
                display: block;
                height: 100vh; 
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                background-color: #f5f5f5;
            }

            div.container {
                width: 400px;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .card-info {
                border-top: 1px solid #ddd;
                padding-top: 20px;
                margin-top: 20px;
            }

             .button-container {
                margin-top: 20px;
                width: 100%;
            }

            button {
                width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top:10px
            }

            button:hover {
                background-color: #0056b3;
            }


        </style>

            <div class="container">
                <h1>Dashboard</h1>
                <h4>Bienvenido, Rigo Ivan</h4>
                <div id="account" class="account-info">
                <p class="balance">Saldo Disponible: $1,234</p>
                </div>
                <div class="card-info">
                    <p>Tarjetas</p>
                    <p>• **** **** **** 1234</p>
                </div>
                <div class="button-container">
                    <button id="detalles">Datalles</button>
                    <button id="logoutButton">Cerrar Sesión</button>
                </div>
            </div>
        `;
        this.shadowRoot.querySelector('#logoutButton').addEventListener('click', () => this.logOut());

        this.shadowRoot.querySelector('#detalles').addEventListener('click', () => this.detail());


    }

    detail() {
        this.dispatchEvent(new CustomEvent('detall', {
            bubbles: true,
            composed: true
        }));
    }

    logOut() {
        this.dispatchEvent(new CustomEvent('logout', { 
            bubbles: true, 
            composed: true 
        }));
    }

}