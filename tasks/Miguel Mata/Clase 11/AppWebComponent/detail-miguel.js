export class Mydetail extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .account-details {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .detail {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #555;
        }
        .value {
            color: #333;
        }
        .section-title {
            border-bottom: 2px solid #333;
            padding-bottom: 5px;
            margin-bottom: 20px;
            color: #333;
        }
    </style>
    <div class="account-details">
        <h1>Detalles de la Cuenta</h1>
        <div class="detail">
            <div class="label">Nombre del Titular:</div>
            <div class="value">Juan Pérez</div>
        </div>
        <div class="detail">
            <div class="label">Número de Cuenta:</div>
            <div class="value">1234567890</div>
        </div>
        <div class="detail">
            <div class="label">Tipo de Cuenta:</div>
            <div class="value">Cuenta Corriente</div>
        </div>
        <div class="detail">
            <div class="label">Saldo Actual:</div>
            <div class="value">$5,000.00</div>
        </div>
        <div class="detail">
            <div class="label">Fecha de Apertura:</div>
            <div class="value">1 de Enero de 2020</div>
        </div>
        <div class="detail">
            <div class="label">Sucursal:</div>
            <div class="value">Sucursal Central</div>
        </div>
        <div class="detail">
            <div class="label">Teléfono de Contacto:</div>
            <div class="value">+1 234 567 890</div>
        </div>
    </div>` 

    }
}