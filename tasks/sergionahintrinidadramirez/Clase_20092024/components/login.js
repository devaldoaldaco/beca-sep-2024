import { html, LitElement } from "lit";
import { styleLogin } from "./styles/styleLogin.js";
export class Login extends LitElement {
    static styles = [styleLogin];
    constructor() {
        super();
    }

    render() {
        return html`
         <div class="form-login">
    <h5>Inicio de Sesión</h5>
    <div class="input-container">
        <span class="input-icon">👤</span>
        <input class="controls with-icon" type="text" name="usuario" placeholder="Usuario">
    </div>
    <div class="input-container">
        <span class="input-icon">🔒</span>
        <input class="controls with-icon" type="password" name="password" placeholder="Contraseña">
    </div>
    <input class="buttons" type="submit" value="Ingresar">
</div>

        `
    }
}