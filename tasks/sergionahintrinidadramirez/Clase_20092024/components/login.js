import { html, LitElement } from "lit";
import { styleLogin } from "./styles/styleLogin.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.0/+esm';

export class Login extends LitElement {
    static properties = {
        usuario: {type: String},
        password: {type: String}
    };

    static styles = [styleLogin];
    
    constructor() {
        super();
        this.usuario = "";
        this.password = "";
    }
    handleLoginClick(event){
        event.preventDefault();
        
        //validacion
        if(this.usuario.trim() === "" || this.password.trim() === ""){
            Swal.fire(
                {icon: "warning",
                title: "Campos Vacios",
                text: "Por favor, llene ambos campos",
            });
            return ;
        }
        //Evento login con los datos del formulario
        this.dispatchEvent(new CustomEvent("login",{
            detail: {usuario: this.usuario, password: this.password},
            bubbles:true,
            composed: true,
        }));
    }

    handleInputChange(e){
        const {name,value} = e.target;
        this[name] = value;
    }

    render() {
        return html`
         <div class="form-login">
        <h5>Inicio de Sesión</h5>
            <div class="input-container">
                <span class="input-icon">👤</span>
                <input class="controls with-icon" type="text" name="usuario" placeholder="Usuario" .value="${this.usuario}" @input = "${this.handleInputChange}">
            </div>
            <div class="input-container">
                <span class="input-icon">🔒</span>
                <input class="controls with-icon" type="password" name="password" placeholder="Contraseña" .value="${this.password}" @input = "${this.handleInputChange}">
            </div>
            <input class="buttons" type="submit" value="Ingresar" @click="${this.handleLoginClick}">
        </div>

        `
    }
}