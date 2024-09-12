export class Dashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="dashboardStyles.css">
        <main>
            <h1>Bienvenido a tu lista de cuentas Kevin</h1>
            <p>Por favor selecciona la cuenta de la que quieres obtener información</p>

            <section>
                <img src="./card.jpg" alt="Card" style="border-radius: 50%;" width="80rem">
                <button id="detailsButton534">Cuenta .534</button>
            </section>

            <section>
                <img src="./card.jpg" alt="Card" style="border-radius: 50%;" width="80rem">
                <button id="detailsButton999">Cuenta .999</button>
            </section>

            <button id="returnButton">Volver al Login</button>
        </main>
        `;
    }

    addEventListeners() {
        // Login
        this.shadowRoot.getElementById('returnButton').addEventListener('click', () => {
            this.switchToLogin();
        });

        // Cuenta534
        this.shadowRoot.getElementById('detailsButton534').addEventListener('click', () => {
            this.switchToCuenta534();
        });

        // Cuenta999
        this.shadowRoot.getElementById('detailsButton999').addEventListener('click', () => {
            this.switchToCuenta999();
        });
    }

    switchToLogin() {
        const dashboardPage = document.querySelector('dashboard-page');
        const loginPage = document.querySelector('login-page');

        dashboardPage.classList.add('hidden'); 
        loginPage.classList.remove('hidden'); 
    }

    switchToCuenta534() {
        const dashboardPage = document.querySelector('dashboard-page');
        const cuenta534Page = document.querySelector('cuenta534-page');

        dashboardPage.classList.add('hidden'); 
        cuenta534Page.classList.remove('hidden'); 
    }

    switchToCuenta999() {
        const dashboardPage = document.querySelector('dashboard-page');
        const cuenta999Page = document.querySelector('cuenta999-page');

        dashboardPage.classList.add('hidden'); 
        cuenta999Page.classList.remove('hidden'); 
    }
}
