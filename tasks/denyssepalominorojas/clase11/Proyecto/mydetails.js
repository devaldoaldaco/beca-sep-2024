export class MyDetails extends HTMLElement{
    constructor(){
        super();
        this.nombre = 'Denysse';
        this.details = null;
        this.attachShadow({mode: 'open'});
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
                *{  
                    border-radius: 3%;
                    padding: 0;
                    margin: 0;
                }

                section{
                    width: 300px;
                    text-align: center;
                    border: 2px solid #006EC1;
                    padding: 15px;
                    background-color: white; 
                }

                p{
                   padding: 20px;
                   font-size: 20px;
                }

                h1 {
                    padding: 20px;
                    color: #006EC1;
                    font-size: 30px;
                    margin-bottom: 20px;
                }
                
                button {
                    width: 25%;
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
                <h1>Detalles de la Cuenta</h1>
                <h2>Hola ${this.nombre}</h2>
                <div id="">
                    <p class="balance">Saldo Actual: $1,234</p>
                </div>
                <div>
                    <h2>Transacciones Recientes</h2>
                    <p>Transferencia: -$5,569.00 el 12/09/2024</p>
                </div>
                <div>
                    <button id="back">Regresar</button>
                </div>
        </section>
        `;

        this.button = this.shadowRoot.getElementById("back");

        //EVENTO 
        this.button.addEventListener('click', () =>{
            this.hideDetails();
            const dashboard = document.getElementById('dashboard');
            dashboard.style.display ='block';
            
        });
    }

    hideDetails(){
        const details = document.getElementById('details');
        details.style.display = 'none';
    }
}