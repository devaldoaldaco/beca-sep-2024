export class MyLogin extends HTMLElement {
    constructor(){
        super();
        this.usuario = '';
        this.contraseña = '';
        this.validacion = '';
        this.input1 = '';
        this.input2 = '';
        this.button1 = null;
        this.attachShadow({mode: 'open'});
    }

    //WEB COMPONENT VANILLA JAVASCRIPT
    connectedCallback(){
        this.render();
    }// EL NODO SE AGREGO AL DOM

    render(){
        this.shadowRoot.innerHTML = ` 
        <style>
                :host { // 
                    display: block;
                    height: 100vh; 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0; 
                    
                }
                section{
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
            </style>

        <section>  
            <header>
            <h1 class= "title">LOGIN</h1>
            </header>
        <main>
            <label>
                <p> Usuario</p>
                <input type="text" id="username">
            </label>
            <label>
                <p> Contraseña</p>
                <input type="text" id="password">
            </label>
            <button id="btn">Login</button><br>
            <span> ${this.validacion} </span>
        </main>
        </section>
    `;

        this.input1 = this.shadowRoot.getElementById("username");
        this.input2 = this.shadowRoot.getElementById("password");
        this.button1 = this.shadowRoot.getElementById("btn");
        
        //EVENTOS
        this.input1.addEventListener('input', (ev) => {
            this.usuario += ev.data;
        });

        this.input2.addEventListener('input', (ev) => {
            this.contraseña += ev.data;
        })

        this.button1.addEventListener('click', () => {
            if(this.usuario === 'denysse.palomino' && this.contraseña === '1234'){
                const login = document.getElementById('login');
                login.style.display = 'none';
                const dashboard = document.getElementById('dashboard');
                dashboard.style.display = 'block';

            } else{
                this.validacion = "Usuario o contraseña incorrectos";
                this.usuario = '';
                this.contraseña = '';
                this.render();
                console.log(this.validacion);
            }
        });
    }
}