export class Dashboard extends HTMLElement {
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = `
    <style>
        .dashboard {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .balance {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .movements-btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        .movements-btn:hover {
          background-color: #0056b3;
        }
      </style>
      <div class="dashboard">
        <h2>Bienvenido al Banco</h2>
        <div class="balance">
          Saldo actual: $10,000.00
        </div>
        <button class="movements-btn" id="view-movements">Ver Movimientos</button>
        <button class="movements-btn" id="log-out">Cerrar Sesion</button>

      </div>
    `;
    this.shadowRoot.getElementById('view-movements').addEventListener('click', () => {
        this.showMovements();
      });

     this.shadowRoot.getElementById('log-out').addEventListener('click', () => {
        this.logOut();
      });
  

    }
  
    // Método para cargar el componente de movimientos
    showMovements() {
      this.shadowRoot.innerHTML = `<component-movements></component-movements>`;
    }
    logOut(){
        this.shadowRoot.innerHTML = `<component-login></component-login>`;
       }  
      
  }
   