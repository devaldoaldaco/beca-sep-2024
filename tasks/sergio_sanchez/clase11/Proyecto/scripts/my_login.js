import IndexServices from './indexServices.js'

export class MyLogin extends HTMLElement {
    constructor(){
        super();
        this.login = null;
        this.input1 = null;
        this.input2 = null;
        this.button_login = null;
        this.index_services = IndexServices;
        this.my_datos = null;
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .form-login {
                width: 400px;
                height: 350px;
                background: #4e4d4d;
                margin: auto;
                margin-top: 180px;
                box-shadow: 7px 13px 37px #000;
                padding: 20px 30px;
                border-top: 4px solid #017bab;
                color: white;
            }

            .form-login h1 {
                margin: 0;
                text-align: center;
                height: 50px;
                margin: 0 0 40px 0;
                border-bottom: 1px solid;
                font-size: 40px;
            }

            .controls {
                width: 100%;
                border: 1px solid #017bab;
                margin-bottom: 15px;
                padding: 11px 10px;
                background: #252323;
                font-size: 14px;
                font-weight: bold;
            }

            .buttons {
                width: 100%;
                height: 40px;
                background: #017bab;
                border: none;
                color: white;
                margin-bottom: 16px;
            }

            .form-login p{
                height: 40px;
                text-align: center;
                border-bottom: 1px solid;
            }

            .form-login a {
                color: white;
                text-decoration: none;
                font-size: 14px;
            }

            .form-login a:hover {
                text-decoration: underline;
            }
        </style>
        <div id="my_login">
            <section class="form-login">
                <h1>Login</h1>
                <input id="user" class="controls" type="text" name="usuario" value="" placeholder="Usuario">
                <input id="password" class="controls" type="password" name="contrasena" value="" placeholder="Contraseña">
                <input id="login_button" class="buttons" type="submit" name="" value="Ingresar">
                <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
            </section>
        </div>
        `
        this.input1 = this.shadowRoot.getElementById("user")
        this.input2 = this.shadowRoot.getElementById("password")
        this.button_login = this.shadowRoot.getElementById("login_button")
        this.my_login = this.shadowRoot.getElementById("my_login")
        this.my_datos = document.getElementById('my_datos')
        console.log(this.my_datos.style.display)

        console.log()
        this.button_login.addEventListener('click', () =>{
            this.login = this.index_services.validation(this.input1.value, this.input2.value);
            if(this.login === 1){
                window.alert(`Bienvenido ${this.input1.value}`)
                this.my_login.style.display = "none";
                this.my_datos.style.display = "block";
            } else {
                window.alert('El usuario o contrasña es incorrecto.')
            }
        })
    }
}