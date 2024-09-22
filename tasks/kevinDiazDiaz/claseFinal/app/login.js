import { LitElement, html} from 'lit';
import {loginStyles} from './loginStyles.js';

export class LoginPage extends LitElement{
    constructor(){
        super();
        this.data={user: 'Kevin', password: '1234'};
        this.state=true;
    }

    static properties = {
        data: {
            type: Object,
   
        },

        state: {
            type: Boolean,
       
        }
    };

    static styles = loginStyles;

    render() {
        return html`
          ${this.state ? html`
            <main>
              <h1>BANCO</h1>
              <article>
                <section data-name="user_data">
                  <p class="data">Username</p>
                  <input class="data" type="text" id="username">
                </section>
      
                <section data-name="user_data">
                  <p class="data">Password</p>
                  <input class="data" type="password" id="password">
                </section>
      
                <section data-name="boton">
                  <button id="loginButton" @click="${this._login}">Login</button>
                </section>
              </article>
            </main>
          ` : html``} 
        `;
      }

    _login() {
        const usernameInput = this.shadowRoot.querySelector('#username').value;
        const passwordInput = this.shadowRoot.querySelector('#password').value;

        if (usernameInput === this.data.user && passwordInput === this.data.password) {
            this.dispatchEvent(new CustomEvent('login-success')); 
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }
    
}