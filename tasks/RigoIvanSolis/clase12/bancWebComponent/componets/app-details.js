export class appDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
                width: 650px;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: white;
                display: flex;
                flex-direction: column;
                align-items: left;
            }
            
            .card-info {
                border-top: 1px solid #ddd;
                padding-top: 20px;
                margin-top: 20px;
            }

             .button-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
                width: 100%;
            }

            button {
                    width: 50%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
            }

            button:hover {
                background-color: #0056b3;
            }


        </style>
            <div class="container">
                <h1>Detalles de la Cuenta</h1>
                <h4>Hola, Rigo Ivan</h4>
                <div id="account" class="account-info">
                    <p class="balance">Saldo Actual: $1,234</p>
                </div>
                <div class="transaction-info">
                    <h2>Transacciones Recientes</h2>
                    <ul>
                        <li>Deposito: +$500.00 el 04/03/2024</li>
                        <li>Retiro: -$400.00 el 10/05/2024</li>
                        <li>Transferencia: -$400.00 el 10/09/2024</li>
                    </ul>
                </div>
                <div class="button-container">
                    <button id="back"><----</button>
                </div>
            </div>
            `;
            this.shadowRoot.querySelector('#back').addEventListener('click', () => this.comeBack());
  }
  comeBack() {
    this.dispatchEvent(new CustomEvent('back', { 
        bubbles: true, 
        composed: true 
    }));
}
}
