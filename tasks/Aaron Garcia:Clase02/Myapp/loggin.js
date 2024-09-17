

export class MyLoggin extends HTMLElement{
    constructor(){
        super();
        this.email='';
        this.contraseña='';
        this.resultado='';

        this.inputt1='';
        this.inputt2='';
        this.button1=null;

        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    static get styles() {
        return [
          styles,
          getComponentSharedStyles('styles.css')
        ];
      }

    render(){
        this.shadowRoot.innerHTML = `
        <style>

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

        </style>

        <header id="logginHeader">
        <h1>Bienvenido a BBVA</h1>
        <p>Usuario</p>
        <input type="text" id ="email"></input>
        <p>Contraseña</p>
        <input type="text" id ="password"></input>
        <button id="inicioSesion"> Iniciar sesion </button>
        <span>${this.resultado} </span>
        </header>
        `;
        this.inputt1 = this.shadowRoot.getElementById("email");
        this.inputt2 = this.shadowRoot.getElementById("password");
        this.button1 = this.shadowRoot.getElementById("inicioSesion");

        this.inputt1.addEventListener('input',(ev)=>{
            console.log('esto es ev', ev);
            this.email += ev.data;
            console.log(this.email);
        });

        this.inputt2.addEventListener('input',(ev)=>{
            this.contraseña += ev.data;
            console.log(this.contraseña);
        });

        this.button1.addEventListener('click',()=>{
            console.log('estoy entrando');
            
            if(this.email === "hola@gmail.com" && this.contraseña === "asdfg"){
                //this.resultado="Iniciando sesiòn";
                console.log('entro al if');
                
                this.ocultarLoggin();
                this.mostrarDashboar();
                this.email ='';
                this.contraseña='';
            } else { 
                console.log('entro al else');
                
                this.resultado="Contraseña o usuario incorrectos";
                this.email='';
                this.contraseña='';
                this.render();
                console.log('esto es resultado', this.resultado);
                
            }
            
        });

    }

    mostrarDashboar(){
        console.log('estoy entrando');
        
        const dashboard = document.getElementById('dashboard');
        console.log(dashboard);
        
        dashboard.style.display = 'block';

    }

    ocultarLoggin(){
        const loggin = document.getElementById('loggin');
        loggin.style.display ='none';
    }
}