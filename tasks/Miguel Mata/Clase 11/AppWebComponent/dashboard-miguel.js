export class Mydashboard extends HTMLElement {
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
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #0000ff;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
        }
        .navbar {
            display: flex;
            justify-content: left;
            gap: 20px;
        }
        .navbar a {
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .navbar a:hover {
            background-color: #00509e;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .section-title {
            font-size: 24px;
            margin-bottom: 20px;
            border-bottom: 2px solid #003366;
            padding-bottom: 10px;
        }
        .account-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .account-info div {
            flex: 1;
            padding: 10px;
            background-color: #e8f0fe;
            border-radius: 5px;
            margin: 0 10px;
        }
        .account-info div h3 {
            margin: 0;
            font-size: 18px;
        }
    </style>
    <header id="header-miguel-dashboard" style="display:none">
        <div class="navbar">
            <a id="dashboard">Inicio</a>
            <a id="detail">Cuenta</a>
        </div>
    </header>

    <div class="container" id="container-miguel-dashboard" style="display:none">
        <div class="section-title">Bienvenido a Banco</div>

        <div class="account-info">
            <div>
                <h3>Saldo Actual</h3>
                <p>$5,000.00</p>
            </div>
            <div>
                <h3>Cuenta</h3>
                <p>Cuenta de Ahorros</p>
            </div>
            <div>
                <h3>Última Transacción</h3>
                <p>- $200.00</p>
            </div>
        </div>
    </div>
        `;

        const detail=this.shadowRoot.getElementById("detail")
        detail.addEventListener("click",(event) => {
            event.preventDefault(); // Evita que el formulario se envíe
            this.details();
        })
        const cuenta=this.shadowRoot.getElementById("dashboard")
        cuenta.addEventListener("click",(evento)=>{
            evento.preventDefault();
            this.viewdashboard()
        })
    }
    details() {
            const dashboard = document.querySelector('my-dashboard');
            const detail=document.querySelector('my-detail')
            const container= dashboard.shadowRoot.getElementById("container-miguel-dashboard");
            const header = dashboard.shadowRoot.getElementById("header-miguel-dashboard");
            detail.style.display="block"
            header.style.display = 'block';
            container.style.display = 'none';
    }
    viewdashboard(){
        const dashboard = document.querySelector('my-dashboard');
            const detail=document.querySelector('my-detail')
            const container= dashboard.shadowRoot.getElementById("container-miguel-dashboard");
            const header = dashboard.shadowRoot.getElementById("header-miguel-dashboard");
            detail.style.display="none"
            header.style.display = 'block';
            container.style.display = 'block';
    }
    
    
}
