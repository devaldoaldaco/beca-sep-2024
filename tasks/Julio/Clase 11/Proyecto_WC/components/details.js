export class MyDetails extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML= `
            <style>
                section{
                    background-color: #ECF0F1;
                    padding: 1rem;
                    border-radius: 5px;
                }
                button{
                    padding: 1rem;
                }
            </style>
            <section>
                <h1>Nombre: <span id="name"></span></h1>
                <h1>Apellido: <span id="lastName"></span></h1>
                <h2>Número de cuenta: <span id="account"></span></h2>
                <h3>E-mail: <span id="email"></span></h3>
                <h3>Teléfono: <span id="telefono"></span></h3>
                <button id="dashboard">Back to Dashboard</button>
            </section>
        `;


        const regresar= this.shadowRoot.getElementById("dashboard");
        const dashboard= document.querySelector('my-dashboard');



        regresar.addEventListener("click", ()=>{
            this.style.display="none";
            dashboard.style.display="block";
            document.title='Dashboard BBVA'
        })
    }
}