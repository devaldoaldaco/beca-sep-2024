
export class MyDashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.userdet="";
        this.user="";
    }

    connectedCallback(){
        this.render();
    }

    static setUser(user){
        this.user=user;
    }

    dashboradContent(){
        return `
            <style>
                section:nth-child(2){
                    color: #ECF0F1;
                }
                button{
                    padding: 0.8rem;
                    border-radius: 0.5rem;
                    color: #ECF0F1;
                }
                #transferir{
                    background-color:#34495E;
                }
                #oportunidades{
                    background-color:#D35400;
                }
                #retiro{
                    background-color:#1ABC9C;
                }

                .infoDashboard button{
                    background-color: #85929e;
                }

                section:nth-child(3){
                    padding:0.5rem;
                    background-color:#ECF0F1;
                    color:black;
                    margin-top: 1rem;
                }
            </style>
                <section>
                    <h1>Hola! Buen día <span id="usuario"></span></h1>
                    <button id="transferir">Transferir</button>
                    <button id="oportunidades">Oportunidades</button>
                    <button id="retiro">Retiro con tarjeta</button>
                </section> 
                <section class="infoDashboard">
                    <h2>Cantidad en pesos: <span id="quantity"></span></h2>
                    <h3>Cuenta: <span id="account"></span></h3>
                    <button id="personaldata">Datos personales</button>
                    <button id="cerrarSesion">Cerrar Sesión</button>
                </section>
        `;
    }

    backLogin(){
        const login= document.querySelector('my-proyect');

        const shadowRootLogin= login.shadowRoot;

        if(shadowRootLogin){
            // Mostrar la pagina de login de nuevo
            login.style.display = 'block';
            //Oculta el dashboard
            this.style.display='none';
            document.title='BBVA'
            
        }else{
            console.log("No se encntró el shadow root del elemento");
        }
    }

    showDetails(){

        const details= document.querySelector('my-details');

        const shadowRootDetails= details.shadowRoot;

        if(shadowRootDetails){
            // Mostrar la pagina de detalles
            details.style.display = 'block';
            //Oculta el dashboard
            this.style.display='none';
            document.title='Details BBVA'
            
        }else{
            console.log("No se encntró el shadow root del elemento");
        }


    }

    render(){
        this.shadowRoot.innerHTML= this.dashboradContent();


        const buttonDetails= this.shadowRoot.getElementById("personaldata");
        const buttonCS=this.shadowRoot.getElementById("cerrarSesion");

        buttonDetails.addEventListener("click", ()=>{
            this.showDetails();
        });

        buttonCS.addEventListener("click",()=>{
            this.backLogin();
        });
    }
}