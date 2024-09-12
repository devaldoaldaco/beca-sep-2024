export class Login extends HTMLElement {
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
    <link rel="stylesheet" href="loginStyles.css">
    <main>
        <h1>BANCO</h1>

        <article>
            <section data-name="user_data">
                <p class="data">Username</p>
                <input class="data" type="text" id="username">
            </section>

            <section data-name="user_data">
                <p class="data">Password</p>
                <input class="data" type="text" id="password">
            </section>

            <section data-name="boton">
                <button id="loginButton">Login</button>
            </section>
            
        </article>
    </main>
    `;
    }

    addEventListeners() {
        this.shadowRoot.getElementById('loginButton').addEventListener('click', () => {
            const username = this.shadowRoot.getElementById('username').value;
            const password = this.shadowRoot.getElementById('password').value;

            if (username === 'kevin' && password === '12345') {
                this.switchToDashboard();
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }

    switchToDashboard() {
        const loginPage = document.querySelector('login-page');
        const dashboardPage = document.querySelector('dashboard-page');
    
        
        loginPage.classList.add('hidden'); 
        dashboardPage.classList.remove('hidden'); 
    }
    
}