export class appLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
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
                }

                div {
                    width: 300px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }

                h1 {
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                input {
                    width: calc(100% - 22px);
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }

                button {
                    width: 100%;
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

                #errorMessage {
                    color: red;
                    font-size: 14px;
                }
            </style>
            <div>
                <h1>Login</h1>
                <input type="text" id="username" placeholder="Usuario">
                <input type="password" id="password" placeholder="Contraseña">
                <button id="loginButton">Ingresar</button>
                <p id="errorMessage" style="color: red;"></p>
            </div>
        `;
        this.shadowRoot.querySelector('#loginButton').addEventListener('click', () => this.login());

    }

    login() {
        const username = this.shadowRoot.querySelector('#username').value;
        const password = this.shadowRoot.querySelector('#password').value;
        const errorMessage = this.shadowRoot.querySelector('#errorMessage');

        if ( username ==='admin' && password === '1234') {
            this.dispatchEvent( new CustomEvent('loginSuccess', { 
                bubbles: true, composed: true }));
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
        }


    }

}