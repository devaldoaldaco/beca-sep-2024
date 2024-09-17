export class MyDatos extends HTMLElement{
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
            display: flex;
            flex-direction:column;
            align-items: center;
        }


            </style>

            <main>

                 <header id="cuentaInfo">
                    <p id="primerDato">Cuenta: dasfage</p>
                    <p class="restoDatos">Saldo</p>
                </header>

                <article id="funcionesPrincipales">
                     <p>Transferir & <br>Dimo</p>
                    <p>Oportunidades</p>
                    <p>Retiro sin <br>Tarjeta</p>
                    <p>Mas</p>
                </article>

                <article>
                 <h1>Movimientos</h1>
                 </article>

            </main>
            
        `
    }

}