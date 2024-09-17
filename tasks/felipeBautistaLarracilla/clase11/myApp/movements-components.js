export class AccountMovements extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .movements {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h2 {
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        table, th, td {
          border: 1px solid black;
        }
        th, td {
          padding: 10px;
          text-align: left;
        }
        .back-btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          margin-top: 20px;
        }
        .back-btn:hover {
          background-color: #0056b3;
        }
      </style>
      <div class="movements">
        <h2>Movimientos de la Cuenta</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/09/2024</td>
              <td>Compra en supermercado</td>
              <td>-$50.00</td>
            </tr>
            <tr>
              <td>02/09/2024</td>
              <td>Depósito</td>
              <td>$500.00</td>
            </tr>
            <tr>
              <td>03/09/2024</td>
              <td>Pago de servicios</td>
              <td>-$100.00</td>
            </tr>
          </tbody>
        </table>
        <button class="back-btn" id="go-back">Volver al Dashboard</button>
      </div>
    `;

    // Escucha el click para volver al dashboard
    this.shadowRoot.getElementById('go-back').addEventListener('click', () => {
      this.goBack();
    });
  }

  // Método para volver al dashboard
  goBack() {
    this.shadowRoot.innerHTML = `<component-dashboard></component-dashboard>`;
  }
}
