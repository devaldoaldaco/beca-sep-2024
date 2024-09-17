export class MyDashboard extends HTMLElement{
    constructor(){
        super();
        this.nombre='Aaron';
        this.movimientos=null;
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    

    render(){
        this.shadowRoot.innerHTML = `

        <style>
        *{
            margin:0px;
            padding:0px;
        }

        main{
            padding:10px 0px 0px 0px;
            color: white;
            display:flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 1rem;
            width:320px;
            height:580px;
            background-color: rgb(28, 115, 196);
            align-items: center;
            }
        
        header{
            display: flex;
            justify-content: center;
            width: 320px;
            height: 30px;

            }

        #funcionesPrincipales{
            text-align: center;
            display: flex;
            justify-content: center;
            gap:0.7rem;
            flex-direction:row;
            width: 320px;
            height: 60px;
        }

        #cuentaInfo{
            width: 280px;
            height: 100px;
            background-color: white;
            color: black;
            border-color: black;
            border: 1px solid;
        }

        .restoDatos{
            margin: 5px 10px 10px 20px;
        }
        
        #primerDato{
            margin: 20px 10px 10px 20px;
        }

        </style>

        <main>

            <header>
                <span> Hola ${this.nombre} </span>
            </header>

            <article id="funcionesPrincipales">
                <p>Transferir & <br>Dimo</p>
                <p>Oportunidades</p>
                <p>Retiro sin <br>Tarjeta</p>
                <p>Mas</p>
            </article>

            <article id="cuentaInfo">

                <p id="primerDato">Cuenta: dasfage</p>
                <p class="restoDatos">Saldo</p>
            
            </article>

        </main>

        ` ;

        this.movimientos = this.shadowRoot.getElementById("cuentaInfo");

        this.movimientos.addEventListener('click',()=>{
                this.ocultarDashboard();
                this.mostrarDatos();
        });

 }

 mostrarDatos(){
    
    const datos = document.getElementById('datos');   
    datos.style.display = 'block';

}

ocultarDashboard(){
    const dashboard = document.getElementById('dashboard');
    dashboard.style.display ='none';
}
}