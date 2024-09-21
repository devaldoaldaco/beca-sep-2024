export class MyDashboard extends HTMLElement{
    constructor(){
        super();
        this.nombre ='Denysse';
        this.boton = null;
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>

                *{
                    padding: 0;
                    margin: 0;
                    
                }

                section{
                    justify-content: center;
                    width: 300px;
                    text-align: center;
                    border: 2px solid #006EC1;
                    padding: 15px;
                    background-color: #009EE5;
                    border-radius: 3%  
                }

                p{
                   padding: 20px;
                   font-size: 20px;
                }

                h1 {
                    padding: 20px;
                    color: white;
                    font-size: 30px;
                    margin-bottom: 20px;
                }
                
                button {
                    width: 30%;
                    padding: 10px;
                    background-color: #c0eaff;
                    color: black;
                    border: 2px solid #007bff;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 15px;
                }

                button:hover {
                    background-color: white;
                }
        </style>

        <section>
            <h1>Hola ${this.nombre}</h1>
                <div id="apartados">
                <p> Transferir </p>
                <p> Oportunidades </p>
                <p> Retiro sin tarjeta </p>
                </div>
                <br>
                <button id="boton"> Ver más </button>
        </section>
        `;  

        this.boton = this.shadowRoot.getElementById("boton");

        //EVENTO
        this.boton.addEventListener('click', () => {
            const dashboard = document.getElementById('dashboard');
            dashboard.style.display ='none';
            const details = document.getElementById('details');
            details.style.display = 'block';
        });
    }
 }