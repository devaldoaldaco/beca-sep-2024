import { LitElement, html, css } from "lit"
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.0/+esm';
import { MyDatos } from "./datos.js";


export class MyLogin extends LitElement{
    constructor(){
        super();
        this.user = "";
        this.password = "";
        this.login_show = false;
        this.loader = true;
        this.my_datos = true;
        this.my_momnet = true;
    }
    static get properties(){
        return {
            user: {
                attribute: 'user',
                type: String
            },
            password: {
                attribute: 'password',
                type: String
            },
            login_show: {
                attribute: 'login_show',
                type: Boolean
            },
            loader: {
                attribute: 'loader',
                type: Boolean
            },
            my_datos: {
                attribute: 'my_datos',
                type: Boolean
            },
            my_momnet: {
                attribute: 'my_momnet',
                type: Boolean
            }
        }
    }
    static get styles(){
        return css`
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

            button {
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
            .section-loader{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: white;
                width: 200px;
                height: 100px;
                z-index: 2;
            }
            .loader {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 120px;
                height: 20px;
                background: 
                    linear-gradient(#000 50%,#0000 0),
                    linear-gradient(#0000 50%,#000 0),
                    linear-gradient(#000 50%,#0000 0),
                    linear-gradient(#0000 50%,#000 0),
                    linear-gradient(#000 50%,#0000 0),
                    linear-gradient(#0000 50%,#000 0)
                    #ddd;
                background-size: calc(100%/6 + 1px) 200%;
                background-repeat: no-repeat;
                animation: l12 2s infinite;
            }
            @keyframes l12 {
                0%     {background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                16.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                33.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                50%    {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                66.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                83.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%}
                100%   {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%}
            }
        `
    }
    handleUser(e){
        this.user = e.target.value;
    }
    handlePassword(e){
        this.password = e.target.value;
    }
    validate(){
        if (this.user === '' || this.password === '') {
            Swal.fire(
                {icon: "warning",
                title: "Campos Vacios",
                text: "LLenar los campos",
            });
        }else if(this.user === 'sergio' && this.password === '123123'){
            this.promiseCalculator();
        }else{
            Swal.fire(
                {icon: "warning",
                title: "No es el usuario o la contraseña correcta",
                text: "Verifica los campos",
            });
        }
    }
    promiseCalculator(){
        const p1 = new Promise((resolve) => {
            setTimeout(() => resolve(this.loader = false, this.login_show = true), 1);
        });
        const p2 = new Promise((resolve) => {
            setTimeout(() => resolve(this.loader = true), 10000);
        });
        const p3 = new Promise((resolve) => {
            setTimeout(() => resolve(Swal.fire(
                {icon: "success",
                title: "Bienvenido",
            }),this.my_datos = false), 10001);
        }); 
        Promise.all([p1, p2, p3]).then();
    }
    showMomnet(){
        this.my_datos = true;
        this.my_momnet = false;
    }
    render(){
        return html`
            <div ?hidden="${this.login_show}" id="my_login">
                <section class="form-login">
                    <h1>Login</h1>
                    <input .value=${this.user} @input=${this.handleUser} id="user" class="controls" type="text" placeholder="Usuario">
                    <input .value=${this.password} @input=${this.handlePassword} id="password" class="controls" type="password" name="contrasena" placeholder="Contraseña">
                    <button @click="${this.validate}">Ingresar</button>
                </section>
            </div>
            <section ?hidden="${this.loader}" class="section-loader">
                <div class="loader"></div>
            </section>
            <my-datos ?hidden="${this.my_datos}" @show-moment="${this.showMomnet}"></my-datos>
            <my-momnet ?hidden="${this.my_momnet}"></my-momnet>
        `
    }
}