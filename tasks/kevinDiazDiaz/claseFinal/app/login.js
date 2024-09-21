import { LitElement, html, css} from 'lit';
import {loginStyles} from './loginStyles.js';

export class LoginPage extends LitElement{
    constructor(){
        super();
        this.data={user: 'Kevin', passsword: '1234'}
    }

    static properties = {
        data: {
            type: String,
            attribute: 'm'
        }
    };

    static styles = loginStyles;

    render(){
        return html`
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

}