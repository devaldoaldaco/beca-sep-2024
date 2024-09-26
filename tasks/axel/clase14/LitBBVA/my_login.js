import {LitElement, html, css} from 'lit'
import { promiseEvent } from './promiseEvent.js';
import { loginStyle } from './loginStyle.js';

export class MyLogin extends LitElement{
    static get properties(){
        return{
            password:{type: String}
        }
    };

    constructor(){
        super();
        this.password = '';
        this.promiseEvent = promiseEvent.bind(this)
    }

    static styles = loginStyle

    render(){
        return html`
        <div id="mainDivLog">
            <img src="logo_completo_bbva.png">
            <p id = "hi">Hola</p>
            <p id ="name" >Axel</p>
            <input id = "valueContraseña" .value="${this.password}" type="password" placeholder="Contraseña" @input="${this.agregarContraseña}"></input>
            <a>Olvide mi contraseña</a>
            <button id="inicioSesion" @click="${this.accesoCuenta}">Entrar</button>
            <span id="loaderr" class="loader"></span>
        <footer>
            <div id ="token">
                <p id = "fP1">Token Movil</p>
            </div>
            <div id = "qr">
                <p id = "fP2">Operaciones con codigo QR</p>
            </div>
        </footer>
        </div>
        `


    }

    agregarContraseña(event){
        this.password = event.target.value;
    }
    accesoCuenta(){
        
        if(this.password === '123'){
            const login = this.shadowRoot.getElementById("loaderr")
            login.style.display="inline-block"
            const inputPass = this.shadowRoot.getElementById("valueContraseña")
            inputPass.style.display="none"
            const forgotPassword = this.shadowRoot.querySelector('a')
            forgotPassword.style.display="none"
            const btn = this.shadowRoot.getElementById("inicioSesion")
            btn.style.display="none"
            this.promiseEvent();
            this.password=''

           
        }else{alert('Contraseña incorrecta')}
    }



}