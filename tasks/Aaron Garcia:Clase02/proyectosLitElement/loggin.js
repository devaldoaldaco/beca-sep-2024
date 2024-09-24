import {LitElement, html, css} from "lit";

export class MyLoggin extends LitElement {
    constructor(){
        super();
        this.email='';
        this.contrasena='';
        this.resultado='';

        this.inputt1='';
        this.inputt2='';
        this.button1=null;
        this.ocultarSpinner=true;

    }

    static get properties(){
        return {
            email:{
                type:String
            },
            contrasena:
            {
                type:String
            },
            resultado:{
                type:String
            },
            button1: {
                type:Boolean
            },
            ocultar:{
                type:Boolean
            },
            ocultarSpinner:{
                type:Boolean
            }
        }

    }
        
    

    static get styles(){
        return css`
            *{
                 margin:0px;
                 padding:0px;
                }

            #logginHeader{
                color: white;
                 display:flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: center;
                gap: 1rem;
                width:320px;
                height:580px;
                background-color: rgb(28, 115, 196);
                justify-content: center;
                }

            #inicioSesion{
                border: none;
                background-color: rgb(171, 213, 227);
                width: 8rem;
                height: 2rem;
                border-radius: 5rem;
                }

            #email,#password{
                padding: 0.1rem 0.3rem 0.1rem 0.5rem;
                height: 2rem;
                border:none;
                border-radius: 5rem;
                }    
                
            .sk-chase {
            width: 40px;
            height: 40px;
            position: relative;
            animation: sk-chase 2.5s infinite linear both;
            }

            .sk-chase-dot {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0; 
            animation: sk-chase-dot 2.0s infinite ease-in-out both; 
            }

            .sk-chase-dot:before {
            content: '';
            display: block;
            width: 25%;
            height: 25%;
            background-color: #fff;
            border-radius: 100%;
            animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
            }

            .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
            .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
            .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
            .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
            .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
            .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
            .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
            .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
            .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
            .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
            .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
            .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

            @keyframes sk-chase {
            100% { transform: rotate(360deg); } 
            }

            @keyframes sk-chase-dot {
            80%, 100% { transform: rotate(360deg); } 
            }

            @keyframes sk-chase-dot-before {
            50% {
                transform: scale(0.4); 
            } 100%, 0% {
                transform: scale(1.0); 
            } 
}
            `;
        }


    render(){ // sirve para definir el template de mi componente web
        return html`
        <header id="logginHeader">
        <h1>Bienvenido a BBVA</h1>
        <p>Usuario</p>
        <input type="text" id ="email" type="text"  @input = "${this.handleInputChange}">
        <p>Contraseña</p>
        <input type="text" id ="password" type="text"  @input = "${this.passwordInputChange}">
        <button id="inicioSesion" @click = "${this.handleInitLoggin}"> Iniciar sesion </button>
        <span>${this.resultado} </span>

        <div class="sk-chase" ?hidden="${this.ocultarSpinner}">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>
        </header>
        `;
    }

    handleInputChange(e){
        const value = e.target.value;
        this.email = value;
        console.log(this.email)
    }

    passwordInputChange(e){
        const value = e.target.value;
        this.contrasena = value;
        console.log(this.contrasena)
    }

    handleInitLoggin(){
        this.ocultarSpinner=false;//opcion para ocultar el spinne, no olvidar declararlo en prodiedades reactivas
        //una vez inicia la funciòn comienza a aparecer.
        this.promiseValidar();//en vez de generar el evento inmediatamente, mandamos llamar la promesa.
        console.log(this.ocultarSpinner);//solo son para prueba
        
    }

    promiseValidar(){
        return new Promise((resolve,rejected)=>{//se crea una nueva promesa
            
            setTimeout(() => {//todo va dentro de este, todo lo que pase dentro de este
                            //se va a ejecutar despuès del tiempo que nosotros le digamos.
            let observer = this.email === "hola@gmail.com" && this.contrasena === "asdfg";
            if(observer){
                this.ocultarSpinner=true;//ocultaos el spinner luego de 3s y generamos evento.
                resolve(this.dispatchEvent(new CustomEvent('ocultar-loggin', {bubbles: true, composed: true})));
            } else {
                this.ocultarSpinner=true;
                rejected(this.resultado = "contraseña incorrecta");
                this.contrasena="";
                this.email="";
            }


            }, 3000);//Aca le decimos a setTimeout cuanto tiempo en ms.
        })
    }
        
}