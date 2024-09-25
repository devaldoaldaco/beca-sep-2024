import { LitElement, html, css } from 'lit';

export class MyLogin extends LitElement {
    static get properties() {
        return {
        usuario: { type: String },
        contraseña: { type: String },
        validacion: { type: String },
        spinner: { type: Boolean}
    }
    };

    constructor() {
        super();
        this.usuario = '';
        this.contraseña = '';
        this.validacion = '';
        this.spinner = true;
    }

    static styles = css`
        :host {
            display: block;
            height: 100vh; 
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0; 
        }
        section {
            border: 1px solid #89d1f4;
            padding: 15px;
            background-color: #89d1f4;
            border-radius: 3%; 
        }
        header {
            text-align: center;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        input {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #000;
            border-radius: 4px;
        }
        button {
            width: 50%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 15px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }

        .sk-folding-cube {
        margin: 20px auto;
        width: 40px;
        height: 40px;
        position: relative;
        -webkit-transform: rotateZ(45deg);
                transform: rotateZ(45deg);
        }

        .sk-folding-cube .sk-cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
                transform: scale(1.1); 
        }
        .sk-folding-cube .sk-cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #007bff;
        -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
                animation: sk-foldCubeAngle 2.4s infinite linear both;
        -webkit-transform-origin: 100% 100%;
            -ms-transform-origin: 100% 100%;
                transform-origin: 100% 100%;
        }
        .sk-folding-cube .sk-cube2 {
        -webkit-transform: scale(1.1) rotateZ(90deg);
                transform: scale(1.1) rotateZ(90deg);
        }
        .sk-folding-cube .sk-cube3 {
        -webkit-transform: scale(1.1) rotateZ(180deg);
                transform: scale(1.1) rotateZ(180deg);
        }
        .sk-folding-cube .sk-cube4 {
        -webkit-transform: scale(1.1) rotateZ(270deg);
                transform: scale(1.1) rotateZ(270deg);
        }
        .sk-folding-cube .sk-cube2:before {
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
        }
        .sk-folding-cube .sk-cube3:before {
        -webkit-animation-delay: 0.6s;
                animation-delay: 0.6s; 
        }
        .sk-folding-cube .sk-cube4:before {
        -webkit-animation-delay: 0.9s;
                animation-delay: 0.9s;
        }
        @-webkit-keyframes sk-foldCubeAngle {
        0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
                    transform: perspective(140px) rotateX(-180deg);
            opacity: 0; 
        } 25%, 75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
                    transform: perspective(140px) rotateX(0deg);
            opacity: 1; 
        } 90%, 100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
                    transform: perspective(140px) rotateY(180deg);
            opacity: 0; 
        } 
        }

        @keyframes sk-foldCubeAngle {
        0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
                    transform: perspective(140px) rotateX(-180deg);
            opacity: 0; 
        } 25%, 75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
                    transform: perspective(140px) rotateX(0deg);
            opacity: 1; 
        } 90%, 100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
                    transform: perspective(140px) rotateY(180deg);
            opacity: 0; 
        }
        }
    `;

    render() {
        return html`
        <section>  
            <header>
                <h1 class="title">LOGIN</h1>
            </header>
            <main>
                <label>
                    <p>Usuario</p>
                    <input type="text" @input=${this.updateUsuario} id="username">
                </label>
                <label>
                    <p>Contraseña</p>
                    <input type="password" @input=${this.updateContraseña} id="password">
                </label>
                <button @click=${this.handleClickLogin}>Login</button><br>
                <span>${this.validacion}</span>

                <div class="sk-folding-cube" ?hidden = "${this.spinner}">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
                </div>
            </main>
        </section>
        `;
    }

    updateUsuario(event) {
        this.usuario = event.target.value; 
    }

    updateContraseña(event) {
        this.contraseña = event.target.value;
    }

    handleClickLogin() {
        this.spinner = false;//opcion para ocultar el spinner, no olvidar declararlo en prodiedades reactivas
        //una vez inicia la función comienza a aparecer.
        this.promise();//en vez de generar el evento inmediatamente, mandamos llamar la promesa.
       
    }

    promise(){
        return new Promise((resolve,reject)=>{//se crea una nueva promesa
            setTimeout(() => {
            let observer = this.usuario === "denysse" && this.contraseña === "1234";
            if(observer){
                this.spinner = true;//ocultamos el spinner luego de 3s y generamos evento.
                resolve(this.dispatchEvent(new CustomEvent('login', {bubbles: true, composed: true})));
            } else {
                this.spinner = true;
                reject(this.validacion = "Usuario o contraseña incorrectos");
                this.contraseña = "";
                this.usuario = "";
            }


            }, 3000);//Aca le decimos a setTimeout cuanto tiempo en ms.
        })
    }

 }
